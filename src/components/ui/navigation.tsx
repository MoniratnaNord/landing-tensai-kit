import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Brain, Menu } from "lucide-react";
import { motion } from "framer-motion";

export default function Navigation() {
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 100);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const scrollToSection = (sectionId: string) => {
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<motion.nav
			className={`fixed top-0 w-full z-50 transition-all duration-300 ${
				isScrolled
					? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200"
					: "bg-white/90 backdrop-blur-md border-b border-gray-200"
			}`}
			initial={{ y: -100 }}
			animate={{ y: 0 }}
			transition={{ duration: 0.5 }}
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center py-4">
					<div className="flex items-center space-x-2">
						{/* <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
              <Brain className="text-white w-5 h-5" />
            </div> */}
						<span className="text-2xl font-bold text-gray-900">TENSAI kit</span>
					</div>

					<div className="hidden md:flex items-center space-x-8">
						<button
							onClick={() => scrollToSection("features")}
							className="text-gray-700 hover:text-orange-500 transition-colors"
						>
							Features
						</button>
						<button
							onClick={() => scrollToSection("integrations")}
							className="text-gray-700 hover:text-orange-500 transition-colors"
						>
							Integrations
						</button>
						<button
							onClick={() => scrollToSection("protocols")}
							className="text-gray-700 hover:text-orange-500 transition-colors"
						>
							Protocols
						</button>
						<button
							onClick={() => scrollToSection("developers")}
							className="text-gray-700 hover:text-orange-500 transition-colors"
						>
							Developers
						</button>
						<Button className="bg-orange-500 text-white hover:bg-orange-600 transition-colors font-medium">
							Get Started
						</Button>
					</div>

					<button className="md:hidden text-gray-700">
						<Menu className="w-6 h-6" />
					</button>
				</div>
			</div>
		</motion.nav>
	);
}
