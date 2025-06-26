import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Brain, Menu } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import tensaiYellow from "../../assets/tensaiYellow.svg";
import { Toast, ToastClose, ToastDescription, ToastTitle } from "./toast";
import { FaCross, FaInfoCircle } from "react-icons/fa";

export default function Navigation() {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isToastOpen, setIsToastOpen] = useState(false);

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
					? "bg-[#1B012F] backdrop-blur-md shadow-lg border-b"
					: "bg-[#1B012F] backdrop-blur-md border-b"
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
						{/* <span className="text-2xl font-bold text-[#FFC300]">
							TENSAI kit
						</span> */}
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
					</div>

					<div className="hidden md:flex items-center space-x-8 text-[#FFC300]">
						<button
							onClick={() => scrollToSection("features")}
							className="text-[#FFC300] hover:text-orange-500 transition-colors"
						>
							Features
						</button>
						<button
							onClick={() => scrollToSection("integrations")}
							className="text-[#FFC300] hover:text-orange-500 transition-colors"
						>
							Integrations
						</button>
						<button
							onClick={() => scrollToSection("protocols")}
							className="text-[#FFC300] hover:text-orange-500 transition-colors"
						>
							Protocols
						</button>
						<div className="relative group">
							<Link
								href="https://tensai-kit-docs.netlify.app"
								target="_blank"
								rel="noopener noreferrer"
							>
								<button className="text-[#FFC300] hover:text-orange-500 transition-colors flex items-center gap-1">
									Docs
								</button>
							</Link>
						</div>
						<Button
							className="bg-[#ffc300] text-black hover:bg-orange-600 transition-colors font-medium"
							onClick={() => setIsToastOpen(true)}
						>
							{/* <Link
								href="https://tensai-kit-docs.netlify.app"
								target="_blank"
								rel="noopener noreferrer"
							> */}
							Get Started
							{/* </Link> */}
						</Button>
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
							<ToastClose
								className="text-[#ffc300]"
								onClick={() => setIsToastOpen(false)}
							>
								<FaCross className="w-6 h-6" />
							</ToastClose>
						</Toast>
					</div>

					<button className="md:hidden text-gray-700">
						<Menu className="w-6 h-6" />
					</button>
				</div>
			</div>
		</motion.nav>
	);
}
