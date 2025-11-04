import React from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <section className="pt-32 pb-20 lg:pt-40 lg:pb-32">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-4xl lg:text-5xl font-bold">Privacy Policy</h1>
              <p className="mt-4 text-muted-foreground">
                <strong>Effective Date:</strong> January 20, 2025<br />
                <strong>Last Updated:</strong> September 14, 2025
              </p>

              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Industrial Video Insights (“we,” “our,” or “us”) respects your privacy and is committed to
                protecting your personal data. This Privacy Policy explains how we collect, use, disclose,
                and safeguard your information when you use our website, applications, and AI-powered
                video processing and analytics services (“Services”).
              </p>

              <p className="mt-6 text-muted-foreground">
                We comply with applicable data protection laws, including the EU General Data Protection Regulation (GDPR),
                the UK Data Protection Act 2018, and the California Consumer Privacy Act (CCPA) as amended by the California Privacy Rights Act (CPRA).
              </p>

              {/* Section 1 */}
              <h2 className="mt-10 text-2xl font-semibold">1. Information We Collect</h2>
              <p className="mt-4 text-muted-foreground">
                We collect information that identifies, relates to, describes, or could reasonably be linked to you or your organization.
              </p>
              <ul className="list-disc pl-6 mt-3 text-muted-foreground space-y-2">
                <li><strong>Account Data:</strong> Name, email address, password, and company affiliation.</li>
                <li><strong>Billing Data:</strong> Payment details and transaction information (processed securely by third-party payment providers).</li>
                <li><strong>Uploaded Media:</strong> Videos, images, or other visual data you upload for AI analysis.</li>
                <li><strong>Communications:</strong> Messages, feedback, and technical support requests.</li>
                <li><strong>Usage & Device Data:</strong> IP address, browser type, operating system, timestamps, and feature usage statistics.</li>
                <li><strong>Cookies & Analytics:</strong> We use cookies and similar technologies to enhance functionality and measure engagement.</li>
              </ul>

              {/* Section 2 */}
              <h2 className="mt-10 text-2xl font-semibold">2. How We Use Your Information</h2>
              <ul className="list-disc pl-6 mt-3 text-muted-foreground space-y-2">
                <li>Operate, maintain, and improve our AI video processing Services.</li>
                <li>Process and deliver requested analytics and results.</li>
                <li>Communicate updates, technical support, and new features.</li>
                <li>Personalize your user experience.</li>
                <li>Ensure security, detect fraud, and comply with legal obligations.</li>
                <li>Analyze usage patterns and improve AI models (using aggregated or anonymized data).</li>
              </ul>

              {/* Section 3 */}
              <h2 className="mt-10 text-2xl font-semibold">3. How We Handle Video Data</h2>
              <p className="mt-4 text-muted-foreground">
                Uploaded videos are used only to perform the specific analysis or enhancement you request.
                Videos are automatically deleted after processing, or after a set period if stored temporarily.
                You may choose to save results in your account or delete them at any time.
              </p>
              <p className="mt-3 text-muted-foreground">
                We may use anonymized or synthetic samples to train and improve AI models only with your explicit consent.
              </p>

              {/* Section 4 */}
              <h2 className="mt-10 text-2xl font-semibold">4. Legal Bases for Processing (GDPR)</h2>
              <ul className="list-disc pl-6 mt-3 text-muted-foreground space-y-2">
                <li><strong>Performance of a Contract:</strong> To provide and maintain the Services.</li>
                <li><strong>Legitimate Interests:</strong> To improve and secure our platform.</li>
                <li><strong>Consent:</strong> For marketing communications or optional data use.</li>
                <li><strong>Legal Obligation:</strong> To comply with applicable regulations.</li>
              </ul>

              {/* Section 5 */}
              <h2 className="mt-10 text-2xl font-semibold">5. Data Sharing and Disclosure</h2>
              <p className="mt-4 text-muted-foreground">
                We share information only when necessary and lawful:
              </p>
              <ul className="list-disc pl-6 mt-3 text-muted-foreground space-y-2">
                <li><strong>Service Providers:</strong> Cloud hosting, payment, analytics, or support vendors bound by confidentiality.</li>
                <li><strong>Legal Compliance:</strong> When required by law or legal process.</li>
                <li><strong>Business Transfers:</strong> In mergers or acquisitions, under strict data protection conditions.</li>
              </ul>
              <p className="mt-3 text-muted-foreground">We do not sell or rent personal data or videos to advertisers.</p>

              {/* Section 6 */}
              <h2 className="mt-10 text-2xl font-semibold">6. Data Retention</h2>
              <p className="mt-4 text-muted-foreground">
                We retain data only as long as needed to fulfill the purposes described:
              </p>
              <ul className="list-disc pl-6 mt-3 text-muted-foreground space-y-2">
                <li>Account data: While your account remains active.</li>
                <li>Video data: Deleted automatically after processing or when requested.</li>
                <li>Billing/legal data: Retained as required by law.</li>
              </ul>

              {/* Section 7 */}
              <h2 className="mt-10 text-2xl font-semibold">7. Data Security</h2>
              <ul className="list-disc pl-6 mt-3 text-muted-foreground space-y-2">
                <li>Encryption for data in transit and at rest.</li>
                <li>Role-based access controls and authentication.</li>
                <li>Regular audits and infrastructure monitoring.</li>
              </ul>
              <p className="mt-3 text-muted-foreground">
                While we use industry-standard protections, no system is 100% secure.
              </p>

              {/* Section 8 */}
              <h2 className="mt-10 text-2xl font-semibold">8. International Data Transfers</h2>
              <p className="mt-4 text-muted-foreground">
                Your data may be processed in countries outside your own. When transferring data outside the EU, EEA, or UK,
                Industrial Video Insights uses <strong>Standard Contractual Clauses (SCCs)</strong> approved by the European Commission
                and requires all cloud and AI infrastructure partners to sign and comply with these or equivalent safeguards.
              </p>

              {/* Section 9 */}
              <h2 className="mt-10 text-2xl font-semibold">9. Your Privacy Rights</h2>
              <p className="mt-4 text-muted-foreground">
                Depending on your jurisdiction, you may have rights under GDPR or CCPA/CPRA, including:
              </p>
              <ul className="list-disc pl-6 mt-3 text-muted-foreground space-y-2">
                <li>Access, correction, or deletion of your data.</li>
                <li>Objection to or restriction of processing.</li>
                <li>Data portability and withdrawal of consent.</li>
                <li>Opt-out of data “sale” or “sharing” (we do not sell personal data).</li>
              </ul>
              <p className="mt-3 text-muted-foreground">
                To exercise your rights, contact us at <a href="mailto:privacy@industrialvideoinsights.com" className="text-primary underline">privacy@industrialvideoinsights.com</a>.
              </p>

              {/* Section 10 */}
              <h2 className="mt-10 text-2xl font-semibold">10. Cookies and Tracking</h2>
              <p className="mt-4 text-muted-foreground">
                We use cookies and similar tools to maintain sessions, analyze performance, and personalize user experience.
                You can control cookies in your browser settings.
              </p>

              {/* Section 11 */}
              <h2 className="mt-10 text-2xl font-semibold">11. Children’s Privacy</h2>
              <p className="mt-4 text-muted-foreground">
                Our Services are not intended for individuals under 16 years of age. We do not knowingly collect data from minors.
                If you believe a child has provided personal data, please contact us for removal.
              </p>

              {/* Section 12 */}
              <h2 className="mt-10 text-2xl font-semibold">12. Changes to This Privacy Policy</h2>
              <p className="mt-4 text-muted-foreground">
                We may update this Privacy Policy periodically. Significant updates will be communicated via email or in-app notification.
              </p>

              {/* Section 13 */}
              <h2 className="mt-10 text-2xl font-semibold">13. Contact Us</h2>
              <p className="mt-4 text-muted-foreground">
                For questions about this Privacy Policy or our data practices, contact us:
              </p>
              <ul className="list-none pl-0 mt-3 text-muted-foreground">
                <li><strong>Industrial Video Insights</strong></li>
                <li>Email: <a href="mailto:privacy@industrialvideoinsights.com" className="text-primary underline">privacy@industrialvideoinsights.com</a></li>
                <li>Address: [Insert Company Address]</li>
                <li>Data Protection Officer: [Insert Name or “N/A”]</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;

