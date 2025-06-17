import { Brain } from "lucide-react";
import { FaTwitter, FaGithub, FaDiscord } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

const footerSections = [
	{
		title: "Product",
		links: ["Features", "Integrations", "Protocols"],
		url: ["#features", "#integrations", "#protocols"],
	},
	{
		title: "Developers",
		links: ["Documentation", "API Reference", "Examples"],
		url: [
			"https://tensai-kit-docs.netlify.app/",
			"https://tensai-kit-docs.netlify.app/setup-agent",
			"https://tensai-kit-docs.netlify.app/adding-protocol",
		],
	},
	// {
	//   title: "Company",
	//   links: ["About", "Blog", "Careers", "Contact"]
	// }
];

// const [isScrolled, setIsScrolled] = useState(false);

// useEffect(() => {
// 	const handleScroll = () => {
// 		setIsScrolled(window.scrollY > 100);
// 	};

// 	window.addEventListener("scroll", handleScroll);
// 	return () => window.removeEventListener("scroll", handleScroll);
// }, []);

// const scrollToSection = (sectionId: string) => {
// 	const element = document.getElementById(sectionId);
// 	if (element) {
// 		element.scrollIntoView({ behavior: "smooth" });
// 	}
// };

export default function Footer() {
	return (
		<footer className="bg-gray-900 text-white py-16">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						viewport={{ once: true }}
					>
						<div className="flex items-center space-x-2 mb-6">
							<div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
								<Brain className="text-white w-5 h-5" />
							</div>
							<span className="text-2xl font-bold">TensaiKit</span>
						</div>
						<p className="text-gray-400 leading-relaxed mb-6">
							Autonomous DeFAI Agent Kit enabling intelligent financial
							operations on Katana Network.
						</p>
						<div className="flex space-x-4">
							<button className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
								<FaTwitter className="w-5 h-5" />
							</button>
							{/* <button className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
								<FaGithub className="w-5 h-5" />
							</button>
							<button className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
								<FaDiscord className="w-5 h-5" />
							</button> */}
						</div>
					</motion.div>

					{footerSections.map((section, index) => (
						<motion.div
							key={section.title}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: index * 0.1 }}
							viewport={{ once: true }}
						>
							<h3 className="font-semibold mb-6">{section.title}</h3>
							<ul className="space-y-3 text-gray-400">
								{section.links.map((link) => (
									<li key={link}>
										<button className="hover:text-white transition-colors text-left">
											<Link
												href={section?.url[section.links.indexOf(link)]}
												rel={
													section.title === "Product"
														? ""
														: "noopener noreferrer"
												}
												target={section.title === "Product" ? "" : "_blank"}
											>
												{link}
											</Link>{" "}
										</button>
									</li>
								))}
							</ul>
						</motion.div>
					))}
				</div>

				<motion.div
					className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center"
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
				>
					<p className="text-gray-400 mb-4 md:mb-0">
						© 2024 TensaiKit. All rights reserved.
					</p>
					<div className="flex space-x-6 text-gray-400 text-sm">
						<button className="hover:text-white transition-colors">
							Privacy Policy
						</button>
						<button className="hover:text-white transition-colors">
							Terms of Service
						</button>
						<button className="hover:text-white transition-colors">
							Cookie Policy
						</button>
					</div>
				</motion.div>
			</div>
		</footer>
	);
}
