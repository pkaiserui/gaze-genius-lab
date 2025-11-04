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
                Industrial Video Insights is a startup on a mission to unlock the full potential of video data through the power of AI. We help organizations transform vast amounts of unstructured video into actionable intelligence that drives smarter, faster decisions.
                </p>
                <br></br>
                <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Our platform combines scalable video analytics, multimodal search, and automated summarization to make it easy to find, understand, and act on what matters most. By integrating advanced computer vision, natural language processing, and machine learning, we deliver insights that improve operational efficiency, safety, and strategic decision-making across industries.
                </p>
                <br></br>
                <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                  At Industrial Video Insights, we believe that video holds untapped value. Our goal is to help businesses move beyond manual review and static archives—turning video into a dynamic source of knowledge that empowers people, teams, and organizations to see more clearly and act more decisively.
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
