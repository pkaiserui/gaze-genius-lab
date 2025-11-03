import { Button } from "@/components/ui/button";
import { Play, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-video-analytics.jpg";

export const Hero = () => {
  return (
    <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-block">
              <span className="text-xs lg:text-sm font-semibold uppercase tracking-wider text-accent">
                AI-Powered Video Intelligence
              </span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Transform video data into{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                actionable insights
              </span>
            </h1>
            
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
              Our advanced AI analyzes your video content in real-time, detecting patterns, 
              anomalies, and opportunities that drive smarter decisions across your operations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-primary/90 shadow-lg hover:shadow-xl transition-all text-base lg:text-lg px-8 py-6"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="text-base lg:text-lg px-8 py-6 border-2"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div>
                <div className="text-2xl lg:text-3xl font-bold text-foreground">99.8%</div>
                <div className="text-sm text-muted-foreground">Accuracy</div>
              </div>
              <div className="h-12 w-px bg-border"></div>
              <div>
                <div className="text-2xl lg:text-3xl font-bold text-foreground">Real-time</div>
                <div className="text-sm text-muted-foreground">Processing</div>
              </div>
              <div className="h-12 w-px bg-border"></div>
              <div>
                <div className="text-2xl lg:text-3xl font-bold text-foreground">24/7</div>
                <div className="text-sm text-muted-foreground">Monitoring</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-primary/20 rounded-2xl blur-3xl"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-[var(--shadow-strong)]">
              <img 
                src={heroImage} 
                alt="AI Video Analytics Dashboard" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
