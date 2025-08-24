
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageCircle, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for your message. We'll get back to you soon.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="absolute inset-0 gaming-gradient-subtle opacity-50"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 scroll-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gaming-text-gradient font-gaming">Get in Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions about our games? Want to collaborate? 
            We'd love to hear from you!
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="scroll-fade-in">
            <div className="gaming-card p-8">
              <h3 className="text-2xl font-bold mb-6 text-white">Send us a message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-secondary/50 border-border/50 focus:border-primary"
                  />
                </div>
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-secondary/50 border-border/50 focus:border-primary"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="bg-secondary/50 border-border/50 focus:border-primary resize-none"
                  />
                </div>
                <Button type="submit" className="gaming-button w-full py-6 text-lg relative z-10">
                  <Send size={20} className="mr-2 relative z-10" />
                  <span className="relative z-10">Send Message</span>
                </Button>
              </form>
            </div>
          </div>

          <div className="scroll-fade-in" style={{animationDelay: '0.2s'}}>
            <div className="space-y-8">
              <div className="gaming-card p-6">
                <div className="flex items-center space-x-4">
                  <div className="gaming-card p-3 glow-effect">
                    <Mail size={24} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Email Us</h4>
                    <p className="text-muted-foreground">contact@jindoblu.com</p>
                  </div>
                </div>
              </div>

              <div className="gaming-card p-6">
                <div className="flex items-center space-x-4">
                  <div className="gaming-card p-3 glow-effect">
                    <MessageCircle size={24} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Social Media</h4>
                    <p className="text-muted-foreground">Follow us for updates</p>
                  </div>
                </div>
              </div>

              <div className="gaming-card p-6">
                <h4 className="font-semibold text-white mb-4">Quick Links</h4>
                <div className="space-y-3">
                  <a href="#games" className="block text-muted-foreground hover:text-primary transition-colors">
                    Browse Games
                  </a>
                  <a href="#downloads" className="block text-muted-foreground hover:text-primary transition-colors">
                    Download Apps
                  </a>
                  <a href="https://play.google.com/store/apps/dev?id=6499943181840817817" target="_blank" rel="noopener noreferrer" className="block text-muted-foreground hover:text-primary transition-colors">
                    Developer Page
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
