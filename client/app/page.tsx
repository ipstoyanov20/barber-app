import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Footer from "@/components/footer";
import Schedule from "@/components/schedule";
import Services from "@/components/services";
import About from "@/components/about";
import storageService from "@/services/storage-service";
import { REFRESH_TOKEN_CHEKING_INTERVAL } from "@/shared/constants";
import authenticationService from "@/services/authentication-service";
import { ResponseData } from "@/services/apiTypes";

export default async function Home() {
	
const tokenCheck = async () => {
	if (!storageService.retrieveAccessToken()) {
	  return;
	}
  
	const expiration = storageService.retrieveTokenExpiresDate();
	const now = new Date(Date.now() + REFRESH_TOKEN_CHEKING_INTERVAL);
  
	if (expiration! < now) {
	  try {
		const refreshToken = storageService.retrieveRefreshToken();
		 
		if(!refreshToken){
		  console.log('Refesh token missing. Redirect to login');
		  storageService.deleteUserData();
		  return;
		}
		
		const response = await authenticationService.refreshToken(
		  refreshToken
		);
		
		const responseData = response.data as unknown as ResponseData;
		const newAccessToken = responseData.accessToken;
		const newRefreshToken = responseData.refreshToken;
		const newExpiration = responseData.expiration;
		storageService.saveAccessToken(newAccessToken);
		storageService.saveRefreshToken(newRefreshToken);
		storageService.saveTokenExpiresDate(newExpiration);
  
	  } catch (error) {
		// Handle errors during token refreshing
		console.error('Error refreshing access token:', error);
		storageService.deleteUserData();
		// You might also want to add code here to redirect to the login page
	  }
	}
  };
  
  // Call the tokenCheck function once immediately
  await tokenCheck();
  
  // Set up an interval to call the tokenCheck function periodically
  setInterval(tokenCheck, REFRESH_TOKEN_CHEKING_INTERVAL);
  
  return (
		<>
			<Navbar />
			<main>
				<Hero />
				<Schedule />
				<About />
				<Services />
			</main>
			<Footer />
		</>
	);
}
