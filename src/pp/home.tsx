import Navigation from "@/components/ui/navigation";
import Hero from "@/components/sections/hero";
import Features from "@/components/sections/features";
import Integrations from "@/components/sections/integrations";
import Protocols from "@/components/sections/protocols";
import DeveloperCTA from "@/components/sections/developer-cta";
import Footer from "@/components/sections/footer";

export default function HomePage() {
	return (
		<div className="min-h-screen overflow-x-hidden">
			<Navigation />
			<Hero />
			<Features />
			<Integrations />
			<Protocols />
			<DeveloperCTA />
			<Footer />
		</div>
	);
}
