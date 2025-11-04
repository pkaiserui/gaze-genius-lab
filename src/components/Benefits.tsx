import monitoringImage from "@/assets/feature-monitoring.jpg";
import insightsImage from "@/assets/feature-insights.jpg";

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
              <div className="relative rounded-2xl overflow-hidden shadow-[var(--shadow-strong)]">
                <img
                  src={monitoringImage}
                  alt="Real-time monitoring interface"
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
              <div className="relative rounded-2xl overflow-hidden shadow-[var(--shadow-strong)]">
                <img
                  src={insightsImage}
                  alt="Analytics dashboard with insights"
                  className="w-full h-auto"
                />
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
              <div className="relative rounded-2xl overflow-hidden shadow-[var(--shadow-strong)]">
                <img
                  src={insightsImage}
                  alt="Analytics dashboard with insights"
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
