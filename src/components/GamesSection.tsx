
import { on } from "events";
import GameCard from "./GameCard";

const GamesSection = () => {
  const games = [
    {
      title: "1 2 3 4 Player Games - Offline",
      description: "A collection of fun and competitive games for up to 4 players on one device. Enjoy classic and new challenges with friends and family, all playable offline.",
      image: "https://play-lh.googleusercontent.com/T1ekib6mm06SnURnCaL0UOJGlzyLgwsda7CxM977oGdmzw1DjoJbcfJhQLGh2TQ1x18C=w480-h960-rw",
      rating: 4.5,
      downloads: "50M+",
      onClick: "https://play.google.com/store/apps/details?id=com.JindoBlu.FourPlayers"
    },
    {
      title: "Offline Games - No Wifi Games",
      description: "A huge collection of offline games that require no internet connection. Perfect for travel or anywhere you want to play without WiFi.",
      image: "https://play-lh.googleusercontent.com/UoBeMWwIeHSxGAx1EhmvWrG1lkzlG78UByGwEkEhRlp40udqC0hHJeRTl266g9aG-A=w480-h960-rw",
      rating: 4.4,
      downloads: "100M+",
      onClick: "https://play.google.com/store/apps/details?id=com.JindoBlu.OfflineGames"
    },
    {
      title: "2 Player games : the Challenge",
      description: "Face off against a friend in a variety of exciting two-player challenges. Test your skills and reflexes in this ultimate head-to-head game collection.",
      image: "https://play-lh.googleusercontent.com/RdZNKDuKFKe-QOf4M6_dCZWfc1owXJQ3HI5QuGpV8fsHWwtt9LBn2VwvWJdfGr-FfWc=w480-h960-rw",
      rating: 4.5,
      downloads: "100M+",
      onClick: "https://play.google.com/store/apps/details?id=com.JindoBlu.TwoPlayerGamesChallenge"
    },
    {
      title: "Antistress - relaxation toys",
      description: "A relaxing collection of interactive toys and activities designed to help you unwind and relieve stress.",
      image: "https://play-lh.googleusercontent.com/7Q4BJMSZZ4e0hSIw_yOlXzg6ACUIwOTJ3ePdIsFdWO2KkIputOaxY-CAb0AodacMQaQ=w480-h960-rw",
      rating: 4.3,
      downloads: "100M+",
      onClick: "https://play.google.com/store/apps/details?id=com.JindoBlu.Antistress"
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
