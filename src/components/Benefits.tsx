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
                Continuous monitoring, zero blind spots
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our AI never sleeps. Monitor multiple video feeds simultaneously with intelligent 
                alerting that notifies you only when it matters. Reduce false positives by 95% 
                while ensuring nothing important goes unnoticed.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                  </div>
                  <span className="text-foreground">Automatic threat detection and classification</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                  </div>
                  <span className="text-foreground">Intelligent alert prioritization</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                  </div>
                  <span className="text-foreground">Multi-camera coordination and tracking</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl lg:text-4xl font-bold">
                Transform data into strategic decisions
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Go beyond basic analytics. Our platform provides deep insights into patterns, 
                trends, and anomalies that inform strategic planning. Generate comprehensive 
                reports in seconds, not hours.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                  </div>
                  <span className="text-foreground">Automated report generation and distribution</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                  </div>
                  <span className="text-foreground">Historical trend analysis and forecasting</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                  </div>
                  <span className="text-foreground">Custom KPI tracking and visualization</span>
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
