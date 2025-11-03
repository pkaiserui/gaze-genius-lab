import { Brain, TrendingUp, Shield, Zap, Globe, BarChart3 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Brain,
    title: "Advanced AI Detection",
    description: "State-of-the-art machine learning models identify objects, behaviors, and patterns with exceptional accuracy.",
  },
  {
    icon: TrendingUp,
    title: "Predictive Analytics",
    description: "Forecast trends and potential issues before they occur using historical data and real-time analysis.",
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description: "Enterprise-grade security with full GDPR compliance and encrypted data transmission.",
  },
  {
    icon: Zap,
    title: "Real-time Processing",
    description: "Instant analysis and alerts with minimal latency for time-critical operations.",
  },
  {
    icon: Globe,
    title: "Multi-location Support",
    description: "Monitor and analyze video feeds from unlimited locations in a single dashboard.",
  },
  {
    icon: BarChart3,
    title: "Custom Reports",
    description: "Generate detailed insights with customizable reports tailored to your business needs.",
  },
];

export const Features = () => {
  return (
    <section id="features" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">
            Powerful Capabilities
          </span>
          <h2 className="mt-4 text-3xl lg:text-5xl font-bold">
            Everything you need for intelligent video analysis
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Comprehensive AI-powered features designed to extract maximum value from your video data
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="border-2 hover:border-accent/50 transition-all hover:shadow-[var(--shadow-soft)] group"
            >
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="h-7 w-7 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
