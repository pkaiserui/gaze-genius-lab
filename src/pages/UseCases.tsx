import React from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface UseCase {
  title: string;
  industry: string;
  value: string;
  videoAnalysis: string;
}

const useCases: UseCase[] = [
  {
    title: "Real-time Shoplifting/ORC Detection",
    industry: "Retail (Loss Prevention)",
    value: "Retailers have seen some of the fastest paybacks from video analysis, primarily through theft reduction (with AI surveillance achieving 50% theft loss reductions and 25% ROI within 3 months) and improved store performance (delivering 3–5% sales lifts and 2–3% lower operational costs by optimizing layouts and staffing).",
    videoAnalysis: "Facial recognition for known offenders; object and behavior detection (e.g. grabbing and concealing items)."
  },
  {
    title: "Automated Quality Inspection",
    industry: "Manufacturing (Quality Control)",
    value: "AI-powered quality control is helping manufacturers cut costs by up to 20% by catching defects early and reducing scrap, rework, and warranty issues. One composites company used computer vision to inspect each assembly step and lowered scrap material by 20–30%, saving significantly. These improvements protect both revenue and brand reputation by preventing costly errors. It’s no surprise that most manufacturers using video analytics report a return on investment within a year.",
    videoAnalysis: "Object detection and classification (to spot defects, misassembled parts, surface flaws), often with high-resolution cameras on the line."
  },
  {
    title: "Safety Compliance Monitoring",
    industry: "Manufacturing & Industrial Safety",
    value: "Accidents reduced significantly (facilities report 50%+ fewer safety incidents post-AI deployment). Example: PPE compliance rose from 64% to 91%, correlating with fewer injuries. Financial benefits from avoided injury costs and downtime; some sites saved hundreds of thousands by preventing a single serious accident.",
    videoAnalysis: "Object detection (to see hardhats, vests, harnesses), pose and behavior analysis (to flag slips, falls, or entry into danger zones)."
  },
  {
    title: "Traffic Flow & Anomaly Detection",
    industry: "Transportation (Smart Cities)",
    value: "Faster incident response (minimizing crash severity and congestion). In Chicago, AI-assisted cameras cut certain crashes by ~19%, improving safety. Cities using intelligent signals report 25% fewer accidents and smoother traffic (e.g. Atlanta pilot reduced crashes ~25% while improving travel times). ROI in societal savings: fewer collisions (3% of GDP problem) and reduced congestion costs.",
    videoAnalysis: "Real-time object and event detection in video (accidents, stopped vehicles, illegal crossings), vehicle counting/classification, and anomaly detection (e.g. wrong-way vehicle)."
  },
  {
    title: "Fleet Driver Monitoring (AI Dashcams)",
    industry: "Transportation (Logistics & Fleet)",
    value: "50–80% accident rate reduction, yielding huge savings in crash costs. Example: Denver city fleet saw 60% fewer major crashes in one year; a private fleet cut insurance claims 20% and collisions 30% with AI cams. ROI from lower insurance premiums, less vehicle damage, and reduced liability – often realized within the first year.",
    videoAnalysis: "Dual-facing video analysis (road and driver): computer vision to detect distracted driving, drowsiness (eye closure), tailgating, and other risky behaviors, plus external incident detection."
  },
  {
    title: "Virtual Patient Sitting & Fall Prevention",
    industry: "Healthcare",
    value: "Fewer patient falls (up to 50%+ reduction) and significant labor savings. St. Luke's health system prevents ~529 falls/month and saved $1.5M annually by using one remote video sitter instead of many in-person sitters. Quick ROI (often <18 months) from lower staffing costs and avoidance of expensive fall injuries.",
    videoAnalysis: "Behavior recognition (patient movement, bed exit attempts) and event alerting via camera; often combined with two-way audio for intervention."
  },
  {
    title: "Automated Perimeter Security",
    industry: "Multi-sector (Critical Infrastructure, Campuses, Retail Estates)",
    value: "30–50% reduction in guarding costs by automating surveillance. Fewer false alarms and faster response – incidents addressed in seconds, reducing damage/theft. AI monitoring yields 200–400% ROI in ~2 years via labor savings and incident prevention. For example, a warehouse replaced overnight guards with an AI camera system and avoided two burglary attempts in the first six months, preventing losses (~$100k of equipment) that more than justified the system cost.",
    videoAnalysis: "Motion detection, human/vehicle recognition, and behavior analytics (loitering, breaching zones, etc.), often with real-time alerts to security teams or police."
  }
];

const UseCases = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h1 className="text-4xl lg:text-5xl font-bold mb-6">Use Cases</h1>
                <div className="text-lg text-muted-foreground max-w-3xl mx-auto space-y-4">
                </div>
              </div>

              <div className="grid gap-8 md:gap-6">
                {useCases.map((useCase, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                        <div className="flex-1">
                          <CardTitle className="text-2xl mb-3">{useCase.title}</CardTitle>
                          <Badge variant="secondary" className="text-sm">
                            {useCase.industry}
                          </Badge>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div>
                        <h3 className="font-semibold text-lg mb-2 text-primary">Value Delivered (ROI Impact)</h3>
                        <CardDescription className="text-base leading-relaxed">
                          {useCase.value}
                        </CardDescription>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2 text-primary">Video Analysis Type</h3>
                        <CardDescription className="text-base leading-relaxed">
                          {useCase.videoAnalysis}
                        </CardDescription>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default UseCases;

