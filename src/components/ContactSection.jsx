import { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/components/hooks/use-toast";

export default function ContactSection() {
	const { toast } = useToast();
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);

  const form = e.target;
  const formData = new FormData(form);

  try {
    const response = await fetch("https://formspree.io/f/xdalyjbv", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      toast({
        title: "Message sent successfully 🚀",
        description: "Thank you! I'll get back to you as soon as possible.",
      });
      form.reset();
    } else {
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      });
    }
  } catch {
    toast({
      title: "Network error",
      description: "Please check your connection and try again.",
      variant: "destructive",
    });
  }

  setIsSubmitting(false);
};

	return (
		<section
			id="contact"
			className="py-24 px-4 relative bg-[hsl(var(--secondary))]/30"
		>
			<div className="container mx-auto max-w-5xl">
				<h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
					Get in <span className="text-[hsl(var(--primary))]">Touch</span>
				</h2>
				<p className="text-center opacity-80 mb-12 max-w-2xl mx-auto">Have a project or collaboration opportunity? Just send a message!</p>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
					{/* Info */}
					<div className="space-y-8">
						<div className="text-left">
							<h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

							<div className="space-y-6">
								<div className="flex items-start gap-4">
									<div className="p-3 rounded-full bg-[hsl(var(--primary))]/10">
										<Mail className="h-6 w-6 text-[hsl(var(--primary))]" />
									</div>
									<div className="text-left">
										<h4 className="font-medium">Email</h4>
										<a
											href="mailto:your.email@gmail.com"
											className="opacity-80 hover:text-[hsl(var(--primary))] transition-colors"
										>
											abdulgani2211@gmail.com
										</a>
									</div>
								</div>

								<div className="flex items-start gap-4">
									<div className="p-3 rounded-full bg-[hsl(var(--primary))]/10">
										<Phone className="h-6 w-6 text-[hsl(var(--primary))]" />
									</div>
									<div className="text-left">
										<h4 className="font-medium">Phone</h4>
										<a
											href="tel:+620000000000"
											className="opacity-80 hover:text-[hsl(var(--primary))] transition-colors"
										>
											+62 881-0260-31419
										</a>
									</div>
								</div>

								<div className="flex items-start gap-4">
									<div className="p-3 rounded-full bg-[hsl(var(--primary))]/10">
										<MapPin className="h-6 w-6 text-[hsl(var(--primary))]" />
									</div>
									<div className="text-left">
										<h4 className="font-medium">Location</h4>
										<div className="opacity-80">Batu, Jawa Timur, Indonesia</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Form */}
					<div className="bg-[hsl(var(--card))] p-8 rounded-lg shadow-xs">
						<h3 className="text-2xl font-semibold mb-6">Send a message</h3>

						<form
							onSubmit={handleSubmit}
							className="space-y-6 text-left"
						>
							<div>
								<label
									className="block text-sm font-medium mb-2"
									htmlFor="name"
								>
									Your name
								</label>
								<input type="hidden" name="_subject" value="New Portfolio Message from Abdul Gany" />
								<input
									id="name"
									name="name"
									required
									type="text"
									placeholder="Your name"
									className="w-full px-4 py-3 rounded-md border bg-[hsl(var(--background))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))]"
								/>
							</div>

							<div>
								<label
									className="block text-sm font-medium mb-2"
									htmlFor="email"
								>
									Your email
								</label>
								<input
									id="email"
									name="email"
									required
									type="email"
									placeholder="name@gmail.com"
									className="w-full px-4 py-3 rounded-md border bg-[hsl(var(--background))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))]"
								/>
							</div>

							<div>
								<label
									className="block text-sm font-medium mb-2"
									htmlFor="message"
								>
									Your message
								</label>
								<textarea
									id="message"
									name="message"
									required
									rows={5}
									placeholder="Hello, I want to discuss..."
									className="w-full px-4 py-3 rounded-md border bg-[hsl(var(--background))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))] resize-none"
								/>
							</div>

							<button
								disabled={isSubmitting}
								type="submit"
								className={cn("cosmic-button w-full flex items-center justify-center gap-2", isSubmitting && "opacity-70 cursor-not-allowed")}
							>
								<Send size={16} />
								{isSubmitting ? "Sending..." : "Send message"}
							</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
}
