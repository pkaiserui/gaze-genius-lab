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
                Multimodal Industrial Video Insights
              </span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Search, summarize, and
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> understand video at scale</span>
            </h1>

            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
              Index and query video with text, image, object and audio search. Get automatic transcripts, concise highlight reels, and temporal summaries—delivered sub-second for real-time use or batched for large archives. Optimized for GPU-accelerated deployments so you can scale affordably.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              {/* <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-primary/90 shadow-lg hover:shadow-xl transition-all text-base lg:text-lg px-8 py-6"
              >
                Try Live Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button> */}
              <Button 
                size="lg" 
                // variant="outline"
                className="text-base lg:text-lg px-8 py-6 border-2"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div>
                <div className="text-2xl lg:text-3xl font-bold text-foreground">Brief seconds</div>
                <div className="text-sm text-muted-foreground">Semantic search</div>
              </div>
              <div className="h-12 w-px bg-border" />
              <div>
                <div className="text-2xl lg:text-3xl font-bold text-foreground">GPU-accelerated</div>
                <div className="text-sm text-muted-foreground">High-throughput inference</div>
              </div>
              <div className="h-12 w-px bg-border" />
              <div>
                <div className="text-2xl lg:text-3xl font-bold text-foreground">Automatic</div>
                <div className="text-sm text-muted-foreground">Transcripts & summaries</div>
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
