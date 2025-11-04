import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

export const Navigation = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
			<div className="container mx-auto px-4 lg:px-8">
				<div className="flex items-center justify-between h-16 lg:h-20">
					<div className="flex items-center space-x-2">
						<img
							src="/android-chrome-192x192.png"
							alt="Industrial Video Insights logo"
							className="w-8 h-8 rounded-lg object-cover"
						/>
						<span className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
							Industrial Video Insights
						</span>
					</div>

					<div className="hidden lg:flex items-center space-x-8">
						<a
							href="/#features"
							className="text-sm font-medium text-foreground hover:text-accent transition-colors"
						>
							Product
						</a>
						<a
							href="/#benefits"
							className="text-sm font-medium text-foreground hover:text-accent transition-colors"
						>
							Benefits
						</a>
						<a
							href="/#how-it-works"
							className="text-sm font-medium text-foreground hover:text-accent transition-colors"
						>
							How It Works
						</a>
						<Button
							variant="default"
							size="lg"
							className="bg-gradient-to-r from-primary to-primary/90 shadow-md hover:shadow-lg transition-all"
						>
							Get Started
						</Button>
					</div>

					<button
						className="lg:hidden p-2"
						onClick={() => setIsMenuOpen(!isMenuOpen)}
						aria-label="Toggle menu"
					>
						<Menu className="h-6 w-6" />
					</button>
				</div>

				{isMenuOpen && (
					<div className="lg:hidden py-4 space-y-4 border-t border-border">
						<a
							href="/about"
							className="block text-sm font-medium text-foreground hover:text-accent transition-colors"
						>
							About
						</a>
						<a
							href="/#features"
							className="block text-sm font-medium text-foreground hover:text-accent transition-colors"
						>
							Features
						</a>
						<a
							href="/#benefits"
							className="block text-sm font-medium text-foreground hover:text-accent transition-colors"
						>
							Benefits
						</a>
						<a
							href="/#how-it-works"
							className="block text-sm font-medium text-foreground hover:text-accent transition-colors"
						>
							How It Works
						</a>
						<Button
							variant="default"
							size="lg"
							className="w-full bg-gradient-to-r from-primary to-primary/90"
						>
							Get Started
						</Button>
					</div>
				)}
			</div>
		</nav>
	);
};
