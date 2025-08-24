
import { Button } from "@/components/ui/button";
import { ChevronDown, Gamepad2 } from "lucide-react";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center hero-bg">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 gaming-gradient rounded-full opacity-20 animate-float"></div>
        <div className="absolute bottom-32 right-32 w-24 h-24 gaming-gradient rounded-full opacity-30 floating-animation" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-10 w-16 h-16 gaming-gradient rounded-full opacity-25 floating-animation" style={{animationDelay: '4s'}}></div>
      </div>
      
      <div className="container mx-auto px-4 text-center z-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-8">
            <div className="gaming-card p-4 glow-effect">
              <img
                src="https://play-lh.googleusercontent.com/INbkcHF2Om6CWWjVO_eGE2_CA6KepiuYSKPul99xtXfiFQjVosUA3VnRG6Z3ktKi4aM=s188-rw"
                alt="App Icon"
                className="w-20 h-20 rounded-xl shadow-lg mx-auto"
              />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="gaming-text-gradient">Multiplayer Fun,</span>
            <br />
            <span className="text-white font-gaming">Anytime, Anywhere</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Experience innovative offline multiplayer games designed for friends and families. 
            No internet required, just pure gaming joy.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button
              className="gaming-button px-8 py-6 text-lg relative z-10"
              onClick={() => {
                const el = document.getElementById("games");
                if (el) {
                  el.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              <span className="relative z-10">Explore Our Games</span>
            </Button>
            <Button variant="outline" className="px-8 py-6 text-lg border-primary/50 hover:bg-primary/10">
              Download Now
            </Button>
          </div>
          
          <div className="animate-bounce">
            <ChevronDown size={32} className="text-primary mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
