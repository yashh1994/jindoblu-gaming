
import { Button } from "@/components/ui/button";
import { Download, Star } from "lucide-react";

interface GameCardProps {
  title: string;
  description: string;
  image: string;
  rating: number;
  downloads: string;
  onClick: string;
}

const GameCard = ({ title, description, image, rating, downloads, onClick }: GameCardProps) => {
  return (
    <div className="gaming-card p-6 group cursor-pointer">
      <div className="relative overflow-hidden rounded-lg mb-4">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 gaming-gradient-subtle opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold text-white group-hover:text-primary transition-colors">
            {title}
          </h3>
          <div className="flex items-center space-x-1">
            <Star size={16} className="text-yellow-400 fill-current" />
            <span className="text-sm text-muted-foreground">{rating}</span>
          </div>
        </div>
        
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>
        
        <div className="flex items-center justify-between pt-2">
          <span className="text-sm text-muted-foreground">{downloads} downloads</span>
          <Button size="sm" className="gaming-button relative z-10" onClick={() => window.open(onClick, '_blank')}>
            <Download size={16} className="mr-2 relative z-10" />
            <span className="relative z-10">Play</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
