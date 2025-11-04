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
                Effective Date: January 20, 2025<br />
                Last Updated: September 14, 2025
              </p>

              <p className="mt-6 text-muted-foreground leading-relaxed">
                Welcome to Industrial Video Insights (“Company,” “we,” “our,” or “us”). These Terms of Service (“Terms”) govern your use of our website, applications, and AI-powered video processing and analytics services (collectively, the “Services”). 
                By accessing or using our Services, you agree to be bound by these Terms and our Privacy Policy. If you do not agree, you must not use the Services.
              </p>

              <h2 className="mt-8 text-2xl font-semibold">1. Eligibility</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                You must be at least 18 years old (or the age of majority in your jurisdiction) to use our Services. By using the Services, you represent that you meet this requirement and have the authority to enter into these Terms.
              </p>

              <h2 className="mt-8 text-2xl font-semibold">2. Account Registration</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                To access certain features, you may need to create an account. You agree to provide accurate, complete, and current information, maintain the security of your credentials, and accept responsibility for all activities that occur under your account. 
                We may suspend or terminate your account if you violate these Terms.
              </p>

              <h2 className="mt-8 text-2xl font-semibold">3. Use of Services</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                You may use the Services only for lawful purposes and in accordance with these Terms. You agree not to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground mt-3 leading-relaxed">
                <li>Upload or transmit unlawful, harmful, or infringing content;</li>
                <li>Use the Services to analyze or process videos you do not have rights to;</li>
                <li>Reverse-engineer, copy, or modify our software or AI models;</li>
                <li>Interfere with, disrupt, or overload our systems; or</li>
                <li>Circumvent security or access controls.</li>
              </ul>

              <h2 className="mt-8 text-2xl font-semibold">4. Video and Content Processing</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                By uploading or submitting videos, images, or other content (“User Content”), you grant us a limited, non-exclusive, and revocable license to process that content solely to perform the Services you request.
                We do not claim ownership of your content. Uploaded videos are deleted automatically after processing or within the retention period described in our Privacy Policy. 
                We may use anonymized or synthetic data to improve our AI models only with your explicit consent.
              </p>

              <h2 className="mt-8 text-2xl font-semibold">5. Intellectual Property</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                All intellectual property rights in the Services—including software, algorithms, design, and documentation—are owned by or licensed to Industrial Video Insights. 
                You retain ownership of your uploaded content and generated results, subject to these Terms.
              </p>

              <h2 className="mt-8 text-2xl font-semibold">6. Payment and Billing</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                Certain Services may require payment. By providing payment information, you authorize our third-party payment processor to charge applicable fees. 
                All fees are non-refundable except as required by law. We may update pricing with reasonable notice.
              </p>

              <h2 className="mt-8 text-2xl font-semibold">7. Service Availability and Modifications</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                We strive to maintain continuous availability but do not guarantee uninterrupted service. 
                We may modify, suspend, or discontinue parts of the Services at any time. 
                We will make reasonable efforts to notify users of material changes or downtime.
              </p>

              <h2 className="mt-8 text-2xl font-semibold">8. Data Protection and Privacy</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                Your privacy is important to us. Please review our Privacy Policy for details on how we collect, use, and protect your personal data. 
                By using our Services, you acknowledge and agree that your data may be processed and transferred internationally as described in the Privacy Policy.
              </p>

              <h2 className="mt-8 text-2xl font-semibold">9. Warranties and Disclaimers</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                The Services are provided “as is” and “as available” without warranties of any kind, express or implied. 
                We do not guarantee that the Services will be error-free, uninterrupted, or meet your specific requirements. 
                To the fullest extent permitted by law, we disclaim all warranties, including implied warranties of merchantability, fitness for a particular purpose, and non-infringement.
              </p>

              <h2 className="mt-8 text-2xl font-semibold">10. Limitation of Liability</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                To the maximum extent permitted by law, Industrial Video Insights and its affiliates shall not be liable for indirect, incidental, consequential, or punitive damages, 
                or for loss of profits, data, goodwill, or business interruption. 
                In no event shall our total liability exceed the amount you paid for the Services in the twelve months preceding the claim.
              </p>

              <h2 className="mt-8 text-2xl font-semibold">11. Indemnification</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                You agree to indemnify and hold harmless Industrial Video Insights and its affiliates from any claims, damages, or expenses arising from your misuse of the Services, 
                your violation of these Terms, or infringement of third-party rights.
              </p>

              <h2 className="mt-8 text-2xl font-semibold">12. Termination</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                We may suspend or terminate your access to the Services at any time, with or without notice, if we believe you have violated these Terms. 
                You may terminate your account at any time by contacting support@industrialvideoinsights.com. 
                Upon termination, your right to use the Services ceases, and your account data may be deleted as described in the Privacy Policy.
              </p>

              <h2 className="mt-8 text-2xl font-semibold">13. Governing Law and Dispute Resolution</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                These Terms are governed by and construed in accordance with the laws of [Insert Jurisdiction, e.g., Delaware, USA]. 
                Any disputes will be resolved exclusively in the courts or arbitration forums located in [Insert City or Jurisdiction], unless otherwise required by law.
              </p>

              <h2 className="mt-8 text-2xl font-semibold">14. Changes to These Terms</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                We may update these Terms periodically. Updates will be effective upon posting or as otherwise communicated. 
                Continued use of the Services after updates constitutes acceptance of the revised Terms.
              </p>

              <h2 className="mt-8 text-2xl font-semibold">15. Contact Information</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                Industrial Video Insights<br />
                Email: support@industrialvideoinsights.com<br />
                {/* Address: [Insert Company Address]<br />
                Data Protection Officer: [Insert Name or “N/A”] */}
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;

