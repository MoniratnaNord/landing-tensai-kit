import { Card, CardContent } from "@/components/ui/card";
import { Brain, Link, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function Integrations() {
	return (
		<section id="integrations" className="py-20 bg-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					className="text-center mb-16"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
				>
					<h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
						Seamless{" "}
						<span className="text-orange-500">Framework Integration</span>
					</h2>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto">
						Built with native support for leading AI frameworks, enabling rapid
						development and deployment of intelligent financial agents.
					</p>
				</motion.div>

				<div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
					<motion.div
						initial={{ opacity: 0, x: -30 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
					>
						<div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl p-8 border border-gray-700">
							<div className="flex items-center space-x-2 mb-6">
								<div className="w-3 h-3 bg-red-500 rounded-full" />
								<div className="w-3 h-3 bg-yellow-500 rounded-full" />
								<div className="w-3 h-3 bg-green-500 rounded-full" />
								<span className="text-gray-400 ml-4 text-sm">
									Framework Integration
								</span>
							</div>

							<div className="space-y-4 text-sm font-mono">
								<div className="text-blue-400">
									import{" "}
									<span className="text-yellow-400">{"{ TensaiKit }"}</span>{" "}
									from <span className="text-green-400">'@tensai/kit'</span>;
								</div>
								<div className="text-blue-400">
									import{" "}
									<span className="text-yellow-400">{"{ ElizaAgent }"}</span>{" "}
									from <span className="text-green-400">'elizaos'</span>;
								</div>
								<div className="mt-4 text-gray-300">
									<div className="text-blue-400">
										const <span className="text-yellow-400">agent</span> ={" "}
										<span className="text-blue-400">new</span>{" "}
										<span className="text-purple-400">ElizaAgent</span>({"{"}
									</div>
									<div className="ml-4 text-red-400">
										name: <span className="text-green-400">'DefiTrader'</span>,
									</div>
									<div className="ml-4 text-red-400">
										protocols: [<span className="text-green-400">'morpho'</span>
										, <span className="text-green-400">'sushi'</span>],
									</div>
									<div className="ml-4 text-red-400">
										strategy:{" "}
										<span className="text-green-400">'yield-optimization'</span>
									</div>
									<div>{"});"}</div>
								</div>
								<div className="mt-4 text-gray-500">
									// Deploy to Katana Network
								</div>
								<div className="text-blue-400">
									await <span className="text-yellow-400">TensaiKit</span>.
									<span className="text-purple-400">deploy</span>(agent);
								</div>
							</div>
						</div>
					</motion.div>

					<motion.div
						className="space-y-8"
						initial={{ opacity: 0, x: 30 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
					>
						<Card className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl border border-orange-100">
							<CardContent className="p-8">
								<div className="flex items-center space-x-4 mb-4">
									<div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center">
										<Brain className="text-white w-6 h-6" />
									</div>
									<h3 className="text-2xl font-bold text-gray-900">
										ElizaOS Support
									</h3>
								</div>
								<p className="text-gray-700 leading-relaxed mb-4">
									Deep integration with ElizaOS framework for building
									sophisticated AI agents with advanced reasoning capabilities
									and multi-modal interactions.
								</p>
								<div className="flex items-center text-orange-500 font-medium">
									<CheckCircle className="w-5 h-5 mr-2" />
									<span>Production Ready</span>
								</div>
							</CardContent>
						</Card>

						<Card className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-100">
							<CardContent className="p-8">
								<div className="flex items-center space-x-4 mb-4">
									<div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
										<Link className="text-white w-6 h-6" />
									</div>
									<h3 className="text-2xl font-bold text-gray-900">
										Langchain Integration
									</h3>
								</div>
								<p className="text-gray-700 leading-relaxed mb-4">
									Native Langchain support enables complex workflow
									orchestration, memory management, and tool integration for
									autonomous financial operations.
								</p>
								<div className="flex items-center text-blue-600 font-medium">
									<CheckCircle className="w-5 h-5 mr-2" />
									<span>Fully Compatible</span>
								</div>
							</CardContent>
						</Card>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
