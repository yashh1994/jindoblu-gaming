
import { Button } from "@/components/ui/button";
import { Smartphone, ExternalLink } from "lucide-react";

const DownloadsSection = () => {
  return (
    <section id="downloads" className="py-20 relative">
      <div className="absolute inset-0 gaming-gradient-subtle"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 scroll-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gaming-text-gradient font-gaming">Get Started</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Download our games now and start your multiplayer adventure.
            Available on all major platforms.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="gaming-card p-8 text-center scroll-fade-in">
            <div className="flex justify-center mb-8">
              <div className="gaming-card p-6 glow-effect">
                <Smartphone size={48} className="gaming-text-gradient" />
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-6 text-white">Available on Mobile Platforms</h3>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <Button className="gaming-button px-8 py-6 text-lg flex items-center relative z-10"
                onClick={() => window.open('https://play.google.com/store/apps/dev?id=8369547020914796683', '_blank')}
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Google Play"
                  className="h-8 mr-3 relative z-10"
                />
                <span className="relative z-10">Google Play</span>
              </Button>

              <Button
                className="gaming-button px-8 py-6 text-lg flex items-center relative z-10"
                onClick={() => window.open('https://apps.apple.com/ca/developer/moreno-maio/id1190252979', '_blank')}
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                  alt="App Store"
                  className="h-8 mr-3 relative z-10"
                />
                <span className="relative z-10">App Store</span>
              </Button>
            </div>

            <div className="border-t border-border/50 pt-6">
              <p className="text-muted-foreground mb-4">Visit our official developer page</p>
              <Button
                variant="outline"
                className="border-primary/50 hover:bg-primary/10"
                onClick={() => window.open('https://play.google.com/store/apps/dev?id=8369547020914796683', '_blank')}
              >
                <ExternalLink size={20} className="mr-2" />
                JindoBlu on Google Play
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadsSection;
