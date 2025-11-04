export const Footer = () => {
  return (
    <footer className="bg-secondary/50 border-t border-border py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img src="/gaze-genius-lab/android-chrome-192x192.png" alt="Industrial Video Insights logo" className="w-8 h-8 rounded-lg object-cover" />
              <span className="text-lg font-bold">Industrial Video Insights</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Multimodal video search and automated summarization — index, query and extract highlights from audio and visual content with enterprise-grade security.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="/gaze-genius-lab/#features" className="hover:text-accent transition-colors">Features</a></li>
              <li><a href="/gaze-genius-lab/#benefits" className="hover:text-accent transition-colors">Benefits</a></li>
              <li><a href="/gaze-genius-lab/#how-it-works" className="hover:text-accent transition-colors">How It Works</a></li>
              {/* <li><a href="#" className="hover:text-accent transition-colors">Integrations</a></li> */}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="/gaze-genius-lab/about" className="hover:text-accent transition-colors">About Us</a></li>
              {/* <li><a href="#" className="hover:text-accent transition-colors">Careers</a></li> */}
              {/* <li><a href="#" className="hover:text-accent transition-colors">Contact</a></li> */}
              {/* <li><a href="#" className="hover:text-accent transition-colors">Blog</a></li> */}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="/gaze-genius-lab/privacy" className="hover:text-accent transition-colors">Privacy Policy</a></li>
              <li><a href="/gaze-genius-lab/terms" className="hover:text-accent transition-colors">Terms of Service</a></li>
              {/* <li><a href="#" className="hover:text-accent transition-colors">Security</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">GDPR</a></li> */}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; 2025 Industrial Video Insights. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
