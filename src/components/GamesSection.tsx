
import GameCard from "./GameCard";

const GamesSection = () => {
  const games = [
    {
      title: "Squad Battle",
      description: "Epic 4-player team battles with strategic gameplay. Form alliances, plan attacks, and dominate the battlefield with friends.",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=300&fit=crop",
      rating: 4.8,
      downloads: "500K+"
    },
    {
      title: "Party Mayhem",
      description: "Hilarious mini-games collection perfect for groups. Over 50 unique challenges that will keep everyone entertained for hours.",
      image: "https://images.unsplash.com/photo-1556438064-2d7646166914?w=400&h=300&fit=crop",
      rating: 4.9,
      downloads: "1M+"
    },
    {
      title: "Family Quest",
      description: "Adventure puzzle game designed for all ages. Solve mysteries together and strengthen family bonds through cooperative gameplay.",
      image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=400&h=300&fit=crop",
      rating: 4.7,
      downloads: "750K+"
    }
  ];

  return (
    <section id="games" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 scroll-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gaming-text-gradient font-gaming">Our Games</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our collection of innovative offline multiplayer games, 
            crafted to bring people together through the joy of gaming.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {games.map((game, index) => (
            <div key={game.title} className="scroll-fade-in" style={{animationDelay: `${index * 0.2}s`}}>
              <GameCard {...game} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GamesSection;
