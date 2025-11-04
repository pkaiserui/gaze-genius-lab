import { Brain, TrendingUp, Shield, Zap, Globe, BarChart3 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
	{
		icon: Brain,
		title: "Multimodal Semantic Search",
		description:
			"Search video by text, spoken words, visual examples, detected objects, and scenes using unified embeddings for precise results.",
	},
	{
		icon: BarChart3,
		title: "Automatic Summarization & Highlights",
		description:
			"Generate concise summaries, highlight reels and chapter markers to surface the most important moments in long videos.",
	},
	{
		icon: Zap,
		title: "ASR & Rich Transcripts",
		description:
			"High-quality automatic speech recognition, speaker diarization, and time-aligned captions for search and compliance.",
	},
	{
		icon: TrendingUp,
		title: "Temporal Segmentation & Indexing",
		description:
			"Detect scene boundaries, keyframes and events to create fine-grained indexes for fast retrieval and analytics.",
	},
	{
		icon: Globe,
		title: "Scalable GPU-Accelerated Processing",
		description:
			"Optimized for GPU inference to deliver low-latency search and summaries across live and archived video at scale.",
	},
	{
		icon: Shield,
		title: "Secure APIs & Integrations",
		description:
			"Deploy behind your firewall or integrate with cloud storage, message buses and downstream reporting tools with enterprise security.",
	},
];

export const Features = () => {
	return (
		<section id="features" className="py-20 lg:py-32 bg-background">
			<div className="container mx-auto px-4 lg:px-8">
				<div className="text-center max-w-3xl mx-auto mb-16">
					<span className="text-sm font-semibold uppercase tracking-wider text-accent">
						Powerful Capabilities
					</span>
					<h2 className="mt-4 text-3xl lg:text-5xl font-bold">
						Everything you need for intelligent video analysis
					</h2>
					<p className="mt-6 text-lg text-muted-foreground">
						Comprehensive AI-powered features designed to extract maximum value
						from your video data
					</p>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{features.map((feature, index) => (
						<Card
							key={index}
							className="border-2 hover:border-accent/50 transition-all hover:shadow-[var(--shadow-soft)] group"
						>
							<CardContent className="p-8">
								<div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
									<feature.icon className="h-7 w-7 text-accent" />
								</div>
								<h3 className="text-xl font-semibold mb-3">
									{feature.title}
								</h3>
								<p className="text-muted-foreground leading-relaxed">
									{feature.description}
								</p>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
};
