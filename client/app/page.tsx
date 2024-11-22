import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Footer from "@/components/footer";
import Schedule from "@/components/schedule";
export default function Home() {
  return (
		<>
			<Navbar />
			<main>
				<Hero />
				<Schedule />
			</main>
			<Footer />
		</>
	);
}
