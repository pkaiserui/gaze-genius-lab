import React from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl lg:text-5xl font-bold">About Industrial Video Insights</h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Industrial Video Insights is a startup focused on delivering value by providing actionable
                insights using AI. We build scalable video analytics, multimodal search and automated
                summarization to help organizations extract intelligence from their video data and
                accelerate decision making.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
