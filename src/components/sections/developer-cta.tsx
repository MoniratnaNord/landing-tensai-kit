import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Rocket, Book, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
	{
		title: "Comprehensive Documentation",
		description: "Step-by-step guides, API references, and code examples",
	},
	{
		title: "Developer Support",
		description: "Active community and dedicated technical support",
	},
	{
		title: "Open Source",
		description: "Contribute to the ecosystem and build together",
	},
];

export default function DeveloperCTA() {
	return (
		<section
			id="developers"
			className="py-20 bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50"
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
				>
					<Card className="bg-white rounded-3xl shadow-2xl overflow-hidden">
						<div className="grid lg:grid-cols-2">
							<CardContent className="p-12 lg:p-16">
								<motion.div
									className="mb-8"
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.6, delay: 0.2 }}
									viewport={{ once: true }}
								>
									<span className="inline-block bg-orange-100 text-orange-500 px-4 py-2 rounded-full text-sm font-medium mb-4">
										<Code className="inline w-4 h-4 mr-2" />
										For Developers
									</span>
									<h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
										Start Building
										<span className="text-orange-500"> Today</span>
									</h2>
									<p className="text-xl text-gray-600 leading-relaxed mb-8">
										Join the growing community of developers building the future
										of autonomous finance on Katana Network.
									</p>
								</motion.div>

								<div className="space-y-6 mb-8">
									{benefits.map((benefit, index) => (
										<motion.div
											key={benefit.title}
											className="flex items-start space-x-4"
											initial={{ opacity: 0, x: -20 }}
											whileInView={{ opacity: 1, x: 0 }}
											transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
											viewport={{ once: true }}
										>
											<div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
												<CheckCircle className="text-white w-4 h-4" />
											</div>
											<div>
												<h4 className="font-semibold text-gray-900 mb-1">
													{benefit.title}
												</h4>
												<p className="text-gray-600">{benefit.description}</p>
											</div>
										</motion.div>
									))}
								</div>

								<motion.div
									className="flex flex-col sm:flex-row gap-4"
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.6, delay: 0.7 }}
									viewport={{ once: true }}
								>
									<Button
										size="lg"
										className="bg-orange-500 text-white hover:bg-orange-600 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
									>
										<Rocket className="mr-2 w-5 h-5" />
										Get Started Now
									</Button>
									<Button
										variant="outline"
										size="lg"
										className="border-gray-300 text-gray-700 hover:bg-gray-50 transition-all duration-300 font-semibold"
									>
										<Book className="mr-2 w-5 h-5" />
										View Documentation
									</Button>
								</motion.div>
							</CardContent>

							<div className="bg-gray-900 p-8 lg:p-12 flex items-center">
								<motion.div
									className="w-full"
									initial={{ opacity: 0, scale: 0.9 }}
									whileInView={{ opacity: 1, scale: 1 }}
									transition={{ duration: 0.8 }}
									viewport={{ once: true }}
								>
									<div className="bg-gray-800 rounded-xl p-6 font-mono text-sm">
										<div className="flex items-center space-x-2 mb-4">
											<div className="w-3 h-3 bg-red-500 rounded-full" />
											<div className="w-3 h-3 bg-yellow-500 rounded-full" />
											<div className="w-3 h-3 bg-green-500 rounded-full" />
											<span className="text-gray-400 ml-4">
												tensai-agent.js
											</span>
										</div>
										<div className="space-y-2 text-green-400">
											<div>
												<span className="text-blue-400">import</span>{" "}
												<span className="text-yellow-400">
													{
														"{ TensaiKit, walletActionProvider, sushiSwapActionProvider, erc20ActionProvider}"
													}
												</span>{" "}
												<span className="text-blue-400">from</span>{" "}
												<span className="text-yellow-400">
													'tensai-kit-sdk'
												</span>
												;
											</div>
											{/* <div>
												<span className="text-blue-400">import</span>{" "}
												<span className="text-yellow-400">
													{"{ ElizaAgent }"}
												</span>{" "}
												<span className="text-blue-400">from</span>{" "}
												<span className="text-yellow-400">'elizaos'</span>;
											</div> */}
											<div className="mt-4">
												<span className="text-blue-400">const</span>{" "}
												<span className="text-white">account</span> ={" "}
												<span className="text-blue-400">
													privateKeyToAccount((process.env.WALLET_PRIVATE_KEY as
													`0x{"string"}`) ?? "");
												</span>{" "}
											</div>
											<div className="mt-4">
												<span className="text-blue-400">const</span>{" "}
												<span className="text-white">client</span> ={" "}
												<span className="text-purple-400">
													createWalletClient
												</span>
												({"{"}
											</div>

											<div className="ml-4">
												<span className="text-red-400">account,</span>
												<br />
												<span className="text-red-400">chain</span>:
												<span className="text-yellow-400">polygon,</span>
												<br />
												<span className="text-yellow-400">transport</span>:{" "}
												<span className="text-yellow-400">http()</span>
												<br /> ],
											</div>
											<div className="">
												<span className="text-blue-400">const</span>{" "}
												<span className="text-white">walletProvider</span>=
												<span className="text-yellow-400">
													new ViemWalletProvider(client);
												</span>
											</div>
											<div className="mt-4">
												<span className="text-blue-400">const</span>{" "}
												<span className="text-white">agent</span> ={" "}
												<span className="text-blue-400">await</span>{" "}
												<span className="text-purple-400">TensaiKit.form</span>(
												{"{"}
											</div>
											<div className="ml-4">
												<span className="text-red-400">walletProvider</span>:{" "}
												<span className="text-red-400">walletProvider,</span>{" "}
												{/* <span className="text-yellow-400">'DefiTrader'</span>, */}
											</div>
											<div className="ml-4">
												<span className="text-red-400">actionProviders</span>: [
												<br />{" "}
												<span className="text-yellow-400">
													walletActionProvider()
												</span>
												,<br />{" "}
												<span className="text-yellow-400">
													erc20ActionProvider()
												</span>
												,<br />{" "}
												<span className="text-yellow-400">
													sushiSwapActionProvider()
												</span>
												<br /> ],
											</div>
											{/* <div className="ml-4">
												<span className="text-red-400">strategy</span>:{" "}
												<span className="text-yellow-400">
													'yield-optimization'
												</span>
											</div> */}
											<div>{"});"}</div>
											{/* <div className="mt-4 text-gray-500">
												// Deploy to Katana Network
											</div>
											<div>
												<span className="text-blue-400">await</span>{" "}
												<span className="text-white">TensaiKit</span>.
												<span className="text-purple-400">deploy</span>(agent);
											</div> */}
										</div>
									</div>
								</motion.div>
							</div>
						</div>
					</Card>
				</motion.div>
			</div>
		</section>
	);
}
