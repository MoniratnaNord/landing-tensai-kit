import { Card, CardContent } from "@/components/ui/card";
import { Layers, Fish, Sprout, Coins } from "lucide-react";
import { motion } from "framer-motion";
import morpho from "../../assets/morpho.jpg";
import sushi from "../../assets/sushiswap.jpg";
import vertex from "../../assets/vertex.jpg";
import Image from "next/image";

const protocols = [
	{
		icon: morpho,
		name: "Morpho",
		description: "Optimized lending and borrowing protocols",
		gradient: "from-[#ffc300] to-[#ffa300]",
	},
	{
		icon: sushi,
		name: "Sushi",
		description: "Decentralized exchange and DeFi platform",
		gradient: "from-[#ffc300] to-[#ffa300]",
	},
	// {
	// 	icon: Sprout,
	// 	name: "Yearn",
	// 	description: "Automated yield farming strategies",
	// 	gradient: "from-blue-500 to-indigo-500",
	// },
	{
		icon: vertex,
		name: "Vertex Protocol",
		description: "Vertex for decentralized preps trading",
		gradient: "from-[#ffc300] to-[#ffa300]",
	},
];

const stats = [
	{ label: "Total Value Locked", value: "$47.2M", color: "text-green-400" },
	{ label: "Active Strategies", value: "1,247", color: "text-orange-500" },
	{ label: "Average APY", value: "12.4%", color: "text-blue-500" },
];

export default function Protocols() {
	return (
		<section id="protocols" className="py-20 bg-[#1b012f]">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					className="text-center mb-16"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
				>
					<h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
						Connected to Leading{" "}
						<span className="text-[#ffc300]">DeFi Protocols on Katana</span>
					</h2>
					<p className="text-xl text-gray-300 max-w-3xl mx-auto">
						TensaiKit provides seamless access to Katana's comprehensive DeFi
						ecosystem with expandable protocol support.
					</p>
				</motion.div>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
					{protocols.map((protocol, index) => (
						<motion.div
							key={protocol.name}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: index * 0.1 }}
							viewport={{ once: true }}
							whileHover={{ y: -5 }}
						>
							<Card className="bg-white/10 backdrop-blur-sm rounded-2xl text-center border border-white/20 hover:bg-white/20 transition-all duration-300">
								<CardContent className="p-8">
									<div
										className={`w-16 h-16 bg-gradient-to-br ${protocol.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4`}
									>
										{/* <protocol.icon className="text-white w-8 h-8" /> */}
										<Image
											src={protocol.icon}
											alt={protocol.name}
											width={32}
											height={32}
											className="text-white w-8 h-8"
										/>
									</div>
									<h3 className="text-xl font-bold text-white mb-2">
										{protocol.name}
									</h3>
									<p className="text-gray-300 text-sm">
										{protocol.description}
									</p>
								</CardContent>
							</Card>
						</motion.div>
					))}
				</div>

				{/* <motion.div
					className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
				>
					<div className="grid lg:grid-cols-2 gap-12 items-center">
						<div>
							<h3 className="text-3xl font-bold text-white mb-6">
								Real-Time Protocol Analytics
							</h3>
							<p className="text-gray-300 mb-8 leading-relaxed">
								Monitor and optimize your AI agents' performance across all
								integrated protocols with comprehensive analytics and insights.
							</p>

							<div className="space-y-6">
								{stats.map((stat, index) => (
									<motion.div
										key={stat.label}
										className="flex items-center justify-between py-4 border-b border-white/10"
										initial={{ opacity: 0, x: -20 }}
										whileInView={{ opacity: 1, x: 0 }}
										transition={{ duration: 0.6, delay: index * 0.1 }}
										viewport={{ once: true }}
									>
										<div className="flex items-center space-x-3">
											<div
												className={`w-3 h-3 ${stat.color.replace(
													"text-",
													"bg-"
												)} rounded-full`}
											/>
											<span className="text-white font-medium">{stat.label}</span>
										</div>
										<span className={`${stat.color} font-bold`}>{stat.value}</span>
									</motion.div>
								))}
							</div>
						</div>

						<motion.div
							className="relative"
							initial={{ opacity: 0, scale: 0.9 }}
							whileInView={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.8 }}
							viewport={{ once: true }}
						>
							<div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700">
								<div className="space-y-4">
									<div className="flex items-center justify-between text-sm text-gray-400 mb-4">
										<span>Protocol Performance</span>
										<span>24h Change</span>
									</div>

									<div className="space-y-3">
										{protocols.map((protocol, index) => (
											<div
												key={protocol.name}
												className="flex items-center justify-between p-3 bg-gray-700/30 rounded-lg"
											>
												<div className="flex items-center space-x-3">
													<div
														className={`w-8 h-8 bg-gradient-to-br ${protocol.gradient} rounded-lg flex items-center justify-center`}
													>
														<protocol.icon className="text-white w-4 h-4" />
													</div>
													<span className="text-gray-300">{protocol.name}</span>
												</div>
												<span className="text-green-400">+{(Math.random() * 15 + 5).toFixed(1)}%</span>
											</div>
										))}
									</div>
								</div>
							</div>
						</motion.div>
					</div>
				</motion.div> */}
			</div>
		</section>
	);
}
