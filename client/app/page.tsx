import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Footer from "@/components/footer";
import Schedule from "@/components/schedule";
import Services from "@/components/services";
import About from "@/components/about";
export default function Home() {
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
