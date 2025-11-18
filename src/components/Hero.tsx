import { Button } from "@/components/ui/button";
import { Play, ArrowRight, X, Maximize } from "lucide-react";
import { useState, useRef } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface AutoplayVideoProps {
  src: string;
  className?: string;
  autoPlayOnView?: boolean;
}

function AutoplayVideo({ src, className, autoPlayOnView = true }: AutoplayVideoProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleClick = async () => {
    if (!videoRef.current) return;
    
    try {
      if (videoRef.current.paused) {
        await videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    } catch (error) {
      console.error('Video playback error:', error);
    }
  };

  const handleFullscreen = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!containerRef.current) return;
    
    try {
      if (!document.fullscreenElement) {
        await containerRef.current.requestFullscreen();
      } else {
        await document.exitFullscreen();
      }
    } catch (error) {
      console.error('Fullscreen error:', error);
    }
  };

  return (
    <div ref={containerRef} className="relative group cursor-pointer" onClick={handleClick}>
      <video 
        ref={videoRef}
        className={className}
        playsInline
        muted
        loop
        preload="auto"
        poster="/placeholder.svg"
        src={src}
      />
      <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 pointer-events-none ${isPlaying ? 'opacity-0' : 'opacity-50 group-hover:opacity-100'}`}>
        <Play className="w-16 h-16 text-white" />
      </div>
      <button
        onClick={handleFullscreen}
        className="absolute top-4 right-4 p-2 bg-black/50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/70 pointer-events-auto"
        aria-label="Toggle fullscreen"
      >
        <Maximize className="w-5 h-5 text-white" />
      </button>
    </div>
  );
}

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
              <Dialog>
                <DialogTrigger asChild>
                  <Button 
                    size="lg" 
                    className="text-base lg:text-lg px-8 py-6 border-2"
                  >
                    <Play className="mr-2 h-5 w-5" />
                    Watch Demo
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[800px]">
                  <DialogHeader>
                    <DialogTitle className="flex justify-between items-center">
                      Demo Video
                      <DialogTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <X className="h-4 w-4" />
                        </Button>
                      </DialogTrigger>
                    </DialogTitle>
                  </DialogHeader>
                  <div className="relative rounded-lg overflow-hidden aspect-video">
                    <video
                      className="w-full h-full"
                      controls
                      autoPlay
                      playsInline
                    >
                      <source src="/drone_demo_crop.mp4" type="video/mp4" />
                    </video>
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8 pt-4">
              <div>
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground">Brief seconds</div>
                <div className="text-sm text-muted-foreground">Semantic search</div>
              </div>
              <div className="hidden sm:block h-12 w-px bg-border" />
              <div>
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground">GPU-accelerated</div>
                <div className="text-sm text-muted-foreground">High-throughput inference</div>
              </div>
              <div className="hidden sm:block h-12 w-px bg-border" />
              <div>
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground">Automatic</div>
                <div className="text-sm text-muted-foreground">Transcripts & summaries</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-primary/20 rounded-2xl blur-3xl"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-[var(--shadow-strong)]">
              <div className="relative group cursor-pointer">
                <AutoplayVideo
                  src="/drone_demo_crop.mp4"
                  className="w-full h-auto"
                  autoPlayOnView={false}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
