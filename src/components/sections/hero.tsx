import { Button } from "@/components/ui/button";
import { Rocket, Play, Users, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
	return (
		<section
			id="hero"
			className="relative min-h-screen flex items-center bg-hero-gradient overflow-hidden"
		>
			{/* Background Elements */}
			<div className="absolute inset-0 opacity-10">
				<div className="w-full h-full bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-orange-600/20" />
			</div>

			{/* Floating Elements */}
			<motion.div
				className="absolute top-20 right-10 w-20 h-20 bg-orange-500/20 rounded-full"
				animate={{ y: [0, -20, 0] }}
				transition={{ duration: 3, repeat: Infinity }}
			/>
			<motion.div
				className="absolute bottom-32 left-10 w-16 h-16 bg-blue-500/20 rounded-full"
				animate={{ y: [0, 20, 0] }}
				transition={{ duration: 2, repeat: Infinity }}
			/>
			<motion.div
				className="absolute top-1/2 right-1/4 w-12 h-12 bg-orange-600/30 rounded-full"
				animate={{ scale: [1, 1.2, 1] }}
				transition={{ duration: 2.5, repeat: Infinity }}
			/>

			<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
				<div className="grid lg:grid-cols-2 gap-12 items-center">
					<motion.div
						className="text-white"
						initial={{ opacity: 0, x: -50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8 }}
					>
						<motion.div
							className="mb-6"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.2 }}
						>
							<span className="inline-block bg-orange-500/20 text-orange-200 px-4 py-2 rounded-full text-sm font-medium border border-orange-500/30">
								<Rocket className="inline w-4 h-4 mr-2" />
								Now Live on Katana Network
							</span>
						</motion.div>

						<motion.h1
							className="text-5xl lg:text-7xl font-bold mb-6 leading-tight"
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.3 }}
						>
							Autonomous
							<span className="text-gradient-primary block">DeFI</span>
							Agent Kit
						</motion.h1>

						<motion.p
							className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.5 }}
						>
							Enable fully autonomous AI agents to independently plan and
							execute financial operations on the Katana Network. The
							foundational layer for AI-driven financial automation.
						</motion.p>

						<motion.div
							className="flex flex-col sm:flex-row gap-4 mb-8"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.7 }}
						>
							<Button
								size="lg"
								className="bg-orange-500 text-white hover:bg-orange-600 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
							>
								<Rocket className="mr-2 w-5 h-5" />
								Get in touch for Start Building
							</Button>
							{/* <Button 
                variant="outline" 
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 transition-all duration-300 font-semibold text-lg"
              >
                <Play className="mr-2 w-5 h-5" />
                View Demo
              </Button> */}
						</motion.div>

						<motion.div
							className="flex items-center space-x-8 text-sm text-gray-400"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.6, delay: 0.9 }}
						>
							<div className="flex items-center space-x-2">
								<div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
								<span>Live on Katana</span>
							</div>
							<div className="flex items-center space-x-2">
								<Users className="w-4 h-4" />
								<span>1000+ Developers</span>
							</div>
							<div className="flex items-center space-x-2">
								<TrendingUp className="w-4 h-4" />
								<span>$10M+ Managed</span>
							</div>
						</motion.div>
					</motion.div>

					<motion.div
						className="relative"
						initial={{ opacity: 0, x: 50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, delay: 0.4 }}
					>
						<div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl p-8 border border-gray-700">
							<div className="space-y-4">
								<div className="flex items-center space-x-2 mb-6">
									<div className="w-3 h-3 bg-red-500 rounded-full" />
									<div className="w-3 h-3 bg-yellow-500 rounded-full" />
									<div className="w-3 h-3 bg-green-500 rounded-full" />
									<span className="text-gray-400 ml-4 text-sm">
										AI Agent Dashboard
									</span>
								</div>

								<div className="grid grid-cols-2 gap-4">
									<div className="bg-gray-700/50 rounded-lg p-4">
										<div className="text-green-400 text-2xl font-bold">
											2,547
										</div>
										<div className="text-gray-300 text-sm">Active Agents</div>
									</div>
									<div className="bg-gray-700/50 rounded-lg p-4">
										<div className="text-orange-500 text-2xl font-bold">
											$12.4M
										</div>
										<div className="text-gray-300 text-sm">TVL Managed</div>
									</div>
								</div>

								<div className="space-y-3">
									<div className="flex items-center justify-between p-3 bg-gray-700/30 rounded-lg">
										<span className="text-gray-300">Morpho Strategy</span>
										<span className="text-green-400">+12.4%</span>
									</div>
									<div className="flex items-center justify-between p-3 bg-gray-700/30 rounded-lg">
										<span className="text-gray-300">Sushi LP Farm</span>
										<span className="text-green-400">+8.7%</span>
									</div>
									<div className="flex items-center justify-between p-3 bg-gray-700/30 rounded-lg">
										<span className="text-gray-300">Vertex Protocol</span>
										<span className="text-green-400">+15.2%</span>
									</div>
								</div>
							</div>
						</div>

						{/* Floating Stats Cards */}
						<motion.div
							className="absolute -top-6 -left-6 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg"
							animate={{ y: [0, -10, 0] }}
							transition={{ duration: 2, repeat: Infinity }}
						>
							<div className="flex items-center space-x-3">
								<div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
									<TrendingUp className="text-green-600 w-6 h-6" />
								</div>
								<div>
									<p className="text-gray-600 text-sm">Active Agents</p>
									<p className="text-2xl font-bold text-gray-900">2,547</p>
								</div>
							</div>
						</motion.div>

						<motion.div
							className="absolute -bottom-6 -right-6 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg"
							animate={{ y: [0, 10, 0] }}
							transition={{ duration: 2.5, repeat: Infinity }}
						>
							<div className="flex items-center space-x-3">
								<div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
									<TrendingUp className="text-orange-500 w-6 h-6" />
								</div>
								<div>
									<p className="text-gray-600 text-sm">TVL Managed</p>
									<p className="text-2xl font-bold text-gray-900">$12.4M</p>
								</div>
							</div>
						</motion.div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
