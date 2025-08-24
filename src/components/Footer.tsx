
import { Gamepad2, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gaming-dark border-t border-border/30 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="flex justify-center items-center space-x-2 mb-6">
            <div className="gaming-card p-2">
              <Gamepad2 size={24} className="text-primary" />
            </div>
            <span className="text-2xl font-bold gaming-text-gradient font-gaming">JindoBlu</span>
          </div>
          
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Creating memorable gaming experiences that bring people together. 
            Made with passion for the global gaming community.
          </p>
          
          <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
            <span>© 2024 JindoBlu. Made with</span>
            <Heart size={16} className="text-red-400 fill-current" />
            <span>for gamers worldwide.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
