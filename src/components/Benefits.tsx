import monitoringImage from "@/assets/feature-monitoring.jpg";
import insightsImage from "@/assets/feature-insights.jpg";
import React, { useEffect, useState, useRef } from "react";

export const Benefits = () => {
  return (
    <section id="benefits" className="py-20 lg:py-32 bg-secondary/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">
            Business Impact
          </span>
          <h2 className="mt-4 text-3xl lg:text-5xl font-bold">
            Drive results across your organization
          </h2>
        </div>

        <div className="space-y-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-[var(--shadow-strong)] flex items-center justify-center bg-white/80">
                <AutoplayVideo
                  src="/social_bert_3347_massive_wall_of_video_of_industrial_plants_being_mo_907c0042-5380-4fa8-9115-7fb16d5b2db0_3.mp4"
                  className="w-full h-auto"
                />
              </div>
            </div>

            <div className="space-y-6 order-1 lg:order-2">
              <h3 className="text-3xl lg:text-4xl font-bold">
                Build AI agents for video analytics at scale
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Create intelligent video analytics agents that analyze, interpret, and
                process massive video streams and archives. Compose detection, search,
                summarization and orchestration into reusable agent workflows that
                scale with your operations.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                  </div>
                  <span className="text-foreground">Agent-driven pipelines to orchestrate detection, search and response</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                  </div>
                  <span className="text-foreground">Scale to thousands of cameras and large video archives</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl lg:text-4xl font-bold">
                Summarize hours of video up to 100× faster
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Automatically generate concise summaries, highlight reels and time-aligned
                transcripts so teams spend minutes reviewing what used to take hours.
                Combine semantic search with ASR to find and surface the most relevant
                moments instantly.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                  </div>
                  <span className="text-foreground">Automatic transcripts, chapters and ranked highlights</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                  </div>
                  <span className="text-foreground">Summaries and reels that reduce manual review time by orders of magnitude</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                  </div>
                  <span className="text-foreground">Accelerate development with pre-built generative AI building blocks and agent templates</span>
                </li>
              </ul>
            </div>

            <div>
              <div className="text-xl font-bold text-center mb-6">Time to Process Video</div>
              <div className="relative rounded-2xl overflow-hidden shadow-[var(--shadow-strong)] flex flex-row items-center justify-between gap-8 bg-white/80 py-8 px-8">
                <div className="flex flex-col items-center flex-1">
                  <span className="text-base font-semibold text-muted-foreground mb-2">1 hour of video (real time)</span>
                  <CountdownTimer minutes={60} />
                </div>
                <div className="flex items-center justify-center flex-shrink-0 mx-8">
                  <span className="text-3xl font-bold text-accent">→</span>
                </div>
                <div className="flex flex-col items-center flex-1">
                  <span className="text-base font-semibold text-muted-foreground mb-2">1 hour of video processed at 100x speed with multiple parallel GPUs<br /></span>
                  <CountdownTimer minutes={0.6} />
                  <span className='text-accent font-bold'>(only 36 seconds!)</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl lg:text-4xl font-bold">
                Augment vision pipelines and deploy where you need
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Combine traditional computer vision with Vision-Language Models (VLMs)
                for richer semantic understanding. Choose optimized deployments from
                the enterprise edge to cloud to meet latency, cost and security needs.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                  </div>
                  <span className="text-foreground">Augment detectors with VLMs for object, scene and intent understanding</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                  </div>
                  <span className="text-foreground">Flexible, optimized deployments: edge, on-premise, and cloud</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                  </div>
                  <span className="text-foreground">Secure APIs and integrations for operational workflows and reporting</span>
                </li>
              </ul>
            </div>
            <div>
              <div className="relative rounded-2xl overflow-hidden shadow-[var(--shadow-strong)] flex items-center justify-center bg-white/80">
                <AutoplayVideo
                  src="/social_bert_3347_optimized_deployments_edge_on-premise_and_cloud._ma_c20b67cc-73bc-4910-9c37-cfc17ed504eb_0.mp4"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

function lerpColor(a, b, t) {
  // a, b: hex color strings, t: 0..1
  const ah = a.replace('#', '');
  const bh = b.replace('#', '');
  const ar = parseInt(ah.substring(0, 2), 16);
  const ag = parseInt(ah.substring(2, 4), 16);
  const ab = parseInt(ah.substring(4, 6), 16);
  const br = parseInt(bh.substring(0, 2), 16);
  const bg = parseInt(bh.substring(2, 4), 16);
  const bb = parseInt(bh.substring(4, 6), 16);
  const rr = Math.round(ar + (br - ar) * t);
  const rg = Math.round(ag + (bg - ag) * t);
  const rb = Math.round(ab + (bb - ab) * t);
  return `#${rr.toString(16).padStart(2, '0')}${rg.toString(16).padStart(2, '0')}${rb.toString(16).padStart(2, '0')}`;
}

interface AutoplayVideoProps {
  src: string;
  className?: string;
}

function AutoplayVideo({ src, className }: AutoplayVideoProps) {
  const [ref, isInView] = useInView();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!videoRef.current) return;

    const video = videoRef.current;

    const attemptPlay = async () => {
      try {
        await video.play();
      } catch (error) {
        console.log('Autoplay attempt failed, retrying...');
        // Retry after a short delay
        setTimeout(attemptPlay, 1000);
      }
    };

    const handleLoadedData = () => {
      setIsLoaded(true);
      attemptPlay();
    };

    video.addEventListener('loadeddata', handleLoadedData);

    // Try to play immediately if already loaded
    if (video.readyState >= 3) {
      handleLoadedData();
    }

    return () => {
      video.removeEventListener('loadeddata', handleLoadedData);
    };
  }, []);

  // Separate effect for visibility changes
  useEffect(() => {
    if (!videoRef.current || !isLoaded) return;

    if (isInView) {
      videoRef.current.play().catch(() => {
        console.log('Visibility-based play prevented');
      });
    }
  }, [isInView, isLoaded]);

  return (
    <video
      ref={videoRef}
      className={className}
      muted
      loop
      playsInline
      preload="auto"
      autoPlay
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}

function useInView(): [React.RefObject<HTMLDivElement>, boolean] {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return [ref, isInView];
}

function CountdownTimer({ minutes = 60 }) {
  const [secondsLeft, setSecondsLeft] = useState(minutes * 60);
  const totalSeconds = minutes * 60;
  const [ref, isInView] = useInView();

  useEffect(() => {
    if (!isInView || secondsLeft <= 0) return;
    const interval = setInterval(() => setSecondsLeft(s => s - 1), 1000);
    return () => clearInterval(interval);
  }, [secondsLeft, isInView]);

  const mins = Math.floor(secondsLeft / 60)
    .toString()
    .padStart(2, "0");
  const secs = (secondsLeft % 60).toString().padStart(2, "0");

  // SVG circle progress
  const radius = 80;
  const stroke = 10;
  const normalizedRadius = radius - stroke / 2;
  const circumference = 2 * Math.PI * normalizedRadius;
  const progress = secondsLeft / totalSeconds;
  const strokeDashoffset = circumference * (1 - progress);

  // Color gradient: red (#ff3b30) to green (#34c759), stays green when done
  const color = secondsLeft === 0
    ? '#34c759'
    : lerpColor('#ff3b30', '#34c759', 1 - progress);
  const fillColor = lerpColor('#ff3a306d', '#34c75973', 1 - progress);

  return (
    <div
      style={{
        width: 180,
        height: 180,
        position: "relative",
        margin: "0 auto 1rem auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
      aria-label="Countdown timer"
      ref={ref}
    >
      <svg width={180} height={180}>
        <circle
          cx={90}
          cy={90}
          r={normalizedRadius}
          fill={fillColor}
          stroke="#eee"
          strokeWidth={stroke}
          style={{ opacity: 0.4  }}
        />
        <circle
          cx={90}
          cy={90}
          r={normalizedRadius}
          fill="none"
          stroke={color}
          strokeWidth={stroke}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          style={{ transition: "stroke-dashoffset 1s linear, stroke 1s linear" }}
        />
      </svg>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "2.5rem",
          fontWeight: 700,
          color: "#222",
          fontFamily: "'Montserrat', sans-serif"
        }}
      >
        {mins}:{secs}
        <span
          style={{
            fontSize: "1rem",
            fontWeight: 400,
            color: "#444",
            marginTop: 8
          }}
        >
          time left
        </span>
      </div>
    </div>
  );
}
