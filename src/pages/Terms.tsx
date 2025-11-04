import React from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-4xl lg:text-5xl font-bold">Terms of Service</h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                This is a placeholder Terms of Service for Industrial Video Insights. Replace with your legal team's approved terms.
              </p>
              <h2 className="mt-8 text-2xl font-semibold">Acceptance of terms</h2>
              <p className="mt-3 text-muted-foreground">Use of our services constitutes acceptance of these terms.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
