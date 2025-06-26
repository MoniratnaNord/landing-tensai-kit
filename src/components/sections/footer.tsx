import { Brain } from "lucide-react";
import {
	FaTwitter,
	FaGithub,
	FaDiscord,
	FaInfoCircle,
	FaCross,
} from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import tensaiYellow from "../../assets/tensaiYellow.svg";
import xlogo from "../../assets/x.jpg";
import { Toast, ToastClose, ToastDescription, ToastTitle } from "../ui/toast";

const footerSections = [
	// {
	// 	title: "Product",
	// 	links: ["Features", "Integrations", "Protocols"],
	// 	url: ["#features", "#integrations", "#protocols"],
	// },
	{
		title: "Developers",
		links: ["Documentation"],
		url: ["https://tensai-kit-docs.netlify.app/"],
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
	const [isToastOpen, setIsToastOpen] = useState(false);
	return (
		<footer className="bg-[#1B012F] text-white py-16">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex md:felx-cols-2 lg:flex-cols-4 justify-between gap-2 mb-12">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						viewport={{ once: true }}
					>
						<div className="flex items-center space-x-2 mb-6">
							{/* <div className="w-24 h-10 bg-gradient-to-brrounded-xl flex items-center justify-center">
								<Image src={tensaiYellow} alt="TensaiKit Logo" />
							</div> */}
							{/* <svg
								width="100"
								height="25"
								viewBox="0 0 281 70"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M95.5637 50.1167H104.896V56H93.6364C88.9196 56 85.7751 52.8555 85.7751 48.1387V24.0476H91.8613V29.6266H104.845V34.952H91.8613V46.82C91.8613 49.0009 93.3828 50.1167 95.5637 50.1167ZM137.673 45.5014H118.4V47.9358C118.4 49.3559 119.06 50.6239 121.646 50.6239H142.846V56H119.871C117.284 56 115.357 55.1885 114.039 53.5655C112.669 51.9426 112.01 50.1167 112.01 48.1387V36.9807C112.01 32.264 114.698 29.6266 119.364 29.6266H137.724C142.441 29.6266 144.824 32.0104 144.824 36.7779V38.8573V38.9587C144.824 43.3205 142.441 45.5014 137.673 45.5014ZM135.999 35.0027H121.19C119.313 35.0027 118.4 35.8649 118.4 37.5894V40.4803H135.999C137.876 40.4803 138.586 39.7702 138.586 38.2994V37.2343C138.586 35.8649 137.977 35.0027 135.999 35.0027ZM151.964 56V37.4879C151.964 32.7711 155.109 29.6266 159.825 29.6266H176.613C178.845 29.6266 180.721 30.3367 182.243 31.8075C183.714 33.2783 184.474 35.2056 184.474 37.4879V56H178.287V39.3645C178.287 37.1329 177.272 35.2056 173.621 35.2056H162.767C159.115 35.2056 158.152 37.1329 158.152 39.3645V56H151.964ZM217.387 56H192.079V50.3196H215.257C217.286 50.3196 217.894 49.3052 217.894 48.0373V47.6822C217.894 46.4143 217.286 45.5521 215.257 45.5521H198.267C193.803 45.5521 191.572 43.0669 191.572 38.1473V36.7272C191.572 32.0104 193.803 29.6266 198.267 29.6266H223.068V35.1549H199.687C197.658 35.1549 197.049 36.22 197.049 37.4879V37.7922C197.049 39.0602 197.658 40.0238 199.687 40.0238H217.387C221.85 40.0238 224.082 42.4583 224.082 47.2765V48.7473C224.082 53.5655 221.85 56 217.387 56ZM238.381 40.0745H257.654V37.6908C257.654 36.2707 256.995 35.1042 254.357 35.1042H233.208V29.6266H256.183C258.77 29.6266 260.697 30.4381 262.067 32.0611C263.385 33.6841 264.045 35.5099 264.045 37.4879V56H238.331C233.614 56 231.23 53.6163 231.23 48.8488V46.7693V46.6679C231.23 42.2554 233.614 40.0745 238.381 40.0745ZM240.055 50.5732L257.654 50.6239V45.1463H240.055C238.077 45.1463 237.468 45.8564 237.468 47.3272V48.3416C237.468 49.7617 238.077 50.5732 240.055 50.5732ZM278.133 19.3309V25.062H271.844V19.3309H278.133ZM278.133 29.6266V56H271.844V29.6266H278.133Z"
									fill="#FFC300"
								/>
								<path
									d="M54.023 29.4448L42.285 17.7069C41.8945 17.3163 41.2613 17.3163 40.8708 17.7069L0.707107 57.8705C0.316582 58.2611 0.316583 58.8942 0.707108 59.2847L12.4451 71.0227C12.8356 71.4132 13.4688 71.4132 13.8593 71.0227L35.4712 49.4108C36.1949 48.6872 37.7701 49.4614 37.9062 50.4758C38.9921 58.5716 49.1927 67.1659 53.5389 70.7936C53.9369 71.1258 54.5169 71.0945 54.8834 70.7279L67.3171 58.2942C67.7076 57.9037 67.7138 57.2789 67.3129 56.8991C62.5239 52.363 47.4198 39.2058 54.0601 30.8989C54.4049 30.4675 54.4135 29.8354 54.023 29.4448Z"
									fill="#FFC300"
								/>
								<rect
									x="44"
									y="13.7046"
									width="19.3812"
									height="18.8025"
									rx="1"
									transform="rotate(-45 44 13.7046)"
									fill="#FFC300"
								/>
							</svg> */}
							<svg
								width="100"
								height="30"
								viewBox="0 0 1296 300"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M242.848 119.658L195.156 68.0913C193.607 66.417 190.984 66.3049 189.296 67.8409L1.34366 238.883C-0.344167 240.419 -0.457165 243.021 1.09126 244.695L48.783 296.262C50.3315 297.936 52.955 298.048 54.6428 296.512L162.629 198.242C165.741 195.41 172.245 198.817 172.732 202.979C177.186 241.12 229.494 292.674 255.322 299.871C256.594 300.225 257.912 299.829 258.885 298.943L307.904 254.335C310.406 252.058 309.358 247.566 306.33 246.04C275.135 230.323 214.86 158.692 242.774 125.668C244.246 123.927 244.396 121.332 242.848 119.658Z"
									fill="#FFC300"
								/>
								<path
									d="M207.127 55.2341C205.579 53.5599 205.692 50.9575 207.38 49.4216L260.498 1.08248C262.186 -0.453484 264.809 -0.341397 266.358 1.33284L314.63 53.5271C316.178 55.2013 316.065 57.8037 314.377 59.3396L261.259 107.679C259.571 109.215 256.948 109.103 255.399 107.428L207.127 55.2341Z"
									fill="#FFC300"
								/>
								<path
									d="M405.051 198.181H450.592V226.661H395.645C372.627 226.661 357.282 211.439 357.282 188.606V71.9866H386.983V98.9932H450.345V124.772H386.983V182.223C386.983 192.78 394.408 198.181 405.051 198.181Z"
									fill="#FFC300"
								/>
								<path
									d="M610.548 175.839H516.495V187.624C516.495 194.499 519.712 200.636 532.335 200.636H635.793V226.661H523.672C511.05 226.661 501.644 222.733 495.209 214.876C488.526 207.02 485.309 198.181 485.309 188.606V134.593C485.309 111.76 498.427 98.9932 521.197 98.9932H610.795C633.813 98.9932 645.446 110.532 645.446 133.611V144.168C645.446 165.282 633.813 175.839 610.548 175.839ZM602.38 125.018H530.108C520.95 125.018 516.495 129.192 516.495 137.539V151.533H602.38C611.538 151.533 615.003 148.096 615.003 140.976V135.82C615.003 129.192 612.033 125.018 602.38 125.018Z"
									fill="#FFC300"
								/>
								<path
									d="M680.289 226.661V137.048C680.289 114.215 695.634 98.9932 718.652 98.9932H800.577C811.468 98.9932 820.625 102.43 828.051 109.55C835.228 116.67 838.941 126 838.941 137.048V226.661H808.745V146.132C808.745 135.329 803.795 126 785.974 126H733.008C715.187 126 710.485 135.329 710.485 146.132V226.661H680.289Z"
									fill="#FFC300"
								/>
								<path
									d="M999.558 226.661H876.052V199.163H989.162C999.063 199.163 1002.03 194.253 1002.03 188.115V186.397C1002.03 180.259 999.063 176.085 989.162 176.085H906.247C884.467 176.085 873.576 164.055 873.576 140.24V133.365C873.576 110.532 884.467 98.9932 906.247 98.9932H1027.28V125.754H913.178C903.277 125.754 900.307 130.91 900.307 137.048V138.521C900.307 144.659 903.277 149.324 913.178 149.324H999.558C1021.34 149.324 1032.23 161.109 1032.23 184.432V191.552C1032.23 214.876 1021.34 226.661 999.558 226.661Z"
									fill="#FFC300"
								/>
								<path
									d="M1102.01 149.569H1196.06V138.03C1196.06 131.156 1192.85 125.509 1179.98 125.509H1076.76V98.9932H1188.89C1201.51 98.9932 1210.91 102.921 1217.6 110.778C1224.03 118.634 1227.25 127.473 1227.25 137.048V226.661H1101.76C1078.74 226.661 1067.11 215.122 1067.11 192.043V181.486C1067.11 160.126 1078.74 149.569 1102.01 149.569ZM1110.18 200.391L1196.06 200.636V174.121H1110.18C1100.53 174.121 1097.56 177.558 1097.56 184.678V189.588C1097.56 196.463 1100.53 200.391 1110.18 200.391Z"
									fill="#FFC300"
								/>
								<path
									d="M1296 49.1537V76.8969H1265.31V49.1537H1296ZM1296 98.9932V226.661H1265.31V98.9932H1296Z"
									fill="#FFC300"
								/>
							</svg>

							{/* <span className="text-2xl font-bold">TensaiKit</span> */}
						</div>
						<p className="text-gray-400 leading-relaxed mb-6">
							Autonomous DeFAI Agent Kit enabling intelligent financial
							operations on Katana Network.
						</p>
						<div className="flex space-x-4">
							<button className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
								<Link
									href="https://x.com/tensaikit"
									target="_blank"
									rel="noopener noreferrer"
								>
									<Image src={xlogo} alt="x logo" className="w-5 h-5" />
								</Link>
							</button>
							{/* <button className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
								<Link
									href="https://github.com/tensaikit/tensaikit"
									target="_blank"
									rel="noopener noreferrer"
								>
									<FaGithub className="w-5 h-5" />
								</Link>
							</button> */}
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
							<h3 className="font-semibold mb-6 text-[#ffc300]">
								{section.title}
							</h3>
							<ul className="space-y-3 text-gray-400">
								{section.links.map((link) => (
									<li key={link}>
										<button
											className="hover:text-white transition-colors text-left"
											onClick={() => setIsToastOpen(true)}
										>
											{/* <Link
												href={section?.url[section.links.indexOf(link)]}
												rel={
													section.title === "Product"
														? ""
														: "noopener noreferrer"
												}
												target={section.title === "Product" ? "" : "_blank"}
											> */}
											{link}
											{/* </Link>{" "} */}
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
						© 2025 TensaiKit. All rights reserved.
					</p>
					{/* <div className="flex space-x-6 text-gray-400 text-sm">
						<button className="hover:text-white transition-colors">
							Privacy Policy
						</button>
						<button className="hover:text-white transition-colors">
							Terms of Service
						</button>
						<button className="hover:text-white transition-colors">
							Cookie Policy
						</button>
					</div> */}
				</motion.div>
				<Toast
					open={isToastOpen}
					onOpenChange={setIsToastOpen}
					variant="destructive"
					className="bg-[#1b012f] border-[#ffc300] border-2"
					duration={3000}
				>
					<ToastTitle className="text-[#ffc300]">
						<FaInfoCircle className="w-6 h-6" />
					</ToastTitle>
					<ToastDescription className="text-[#ffc300]">
						Docs will be deployed soon.
					</ToastDescription>
					<ToastClose className="text-[#ffc300]">
						<FaCross className="w-6 h-6" />
					</ToastClose>
				</Toast>
			</div>
		</footer>
	);
}
