import { Upload, Cpu, Eye, Download } from "lucide-react";

const steps = [
  {
    icon: Upload,
    title: "Connect Your Cameras",
    description: "Seamlessly integrate with existing camera systems or upload video files. Supports all major formats and protocols.",
    step: "01",
  },
  {
    icon: Cpu,
    title: "AI Processing",
    description: "Our advanced neural networks analyze video content in real-time, detecting objects, behaviors, and patterns.",
    step: "02",
  },
  {
    icon: Eye,
    title: "Intelligent Insights",
    description: "Receive actionable alerts and detailed analytics dashboards showing what matters most to your operations.",
    step: "03",
  },
  {
    icon: Download,
    title: "Export & Share",
    description: "Generate comprehensive reports and share findings with stakeholders in formats that suit your workflow.",
    step: "04",
  },
];

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">
            Simple Process
          </span>
          <h2 className="mt-4 text-3xl lg:text-5xl font-bold">
            From video to insights in four steps
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Getting started is easy. Our platform handles the complexity so you can focus on results.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-border to-transparent transform -translate-y-1/2"></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 relative">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-card border-2 border-border rounded-2xl p-8 hover:border-accent/50 transition-all hover:shadow-[var(--shadow-soft)] h-full">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                      <step.icon className="h-7 w-7 text-accent" />
                    </div>
                    <span className="text-5xl font-bold text-muted-foreground/20">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
                
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 -right-2 w-4 h-4 rounded-full bg-accent z-10 shadow-lg"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
