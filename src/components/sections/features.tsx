import { Card, CardContent } from "@/components/ui/card";
import { Bot, Network, Settings, Puzzle } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Bot,
    title: "AI Agent Framework",
    description: "Native support for ElizaOS and Langchain, enabling seamless deployment and scaling of autonomous AI agents.",
    gradient: "from-orange-500 to-orange-600"
  },
  {
    icon: Network,
    title: "Multi-Protocol Support",
    description: "Seamless interaction with Katana's DeFi ecosystem including Morpho, Sushi, Yearn, and Agora Finance.",
    gradient: "from-blue-500 to-blue-600"
  },
  {
    icon: Settings,
    title: "Automated Operations",
    description: "AI-driven asset management, lending, borrowing, yield optimization, and automated trading strategies.",
    gradient: "from-green-500 to-emerald-600"
  },
  {
    icon: Puzzle,
    title: "Interoperable & Extensible",
    description: "Modular design allowing developers to extend functionality with additional Katana-based DeFi protocols.",
    gradient: "from-purple-500 to-pink-600"
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Powerful Features for
            <span className="text-orange-500"> Autonomous Finance</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            TensaiKit provides everything you need to build, deploy, and scale autonomous AI agents for DeFi operations on Katana Network.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              <Card className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 h-full">
                <CardContent className="p-8">
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6`}>
                    <feature.icon className="text-white w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
