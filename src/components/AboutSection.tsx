
import { Users, Heart, Gamepad } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: Users,
      title: "Bring People Together",
      description: "Our games are designed to connect friends and families through shared gaming experiences."
    },
    {
      icon: Heart,
      title: "Made with Passion",
      description: "Every game is crafted with love and attention to detail, ensuring quality entertainment."
    },
    {
      icon: Gamepad,
      title: "Offline Multiplayer",
      description: "No internet required! Enjoy seamless multiplayer gaming anytime, anywhere."
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 scroll-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gaming-text-gradient font-gaming">About Us</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            JindoBlu is a passionate gaming company dedicated to creating innovative offline multiplayer games. 
            We believe that the best gaming experiences happen when people come together, share laughs, 
            and create memories through interactive entertainment designed for friends and families.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={feature.title} className="gaming-card p-8 text-center group scroll-fade-in" style={{animationDelay: `${index * 0.2}s`}}>
              <div className="gaming-card p-4 w-16 h-16 mx-auto mb-6 glow-effect group-hover:animate-pulse-glow">
                <feature.icon size={32} className="gaming-text-gradient" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="gaming-card p-8 text-center scroll-fade-in">
          <h3 className="text-2xl font-bold mb-4 gaming-text-gradient">Our Mission</h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            To revolutionize offline gaming by creating experiences that strengthen relationships, 
            spark joy, and prove that the best games are the ones we play together.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
