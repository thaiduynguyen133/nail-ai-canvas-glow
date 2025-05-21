
import React from 'react';
import { Camera, Heart, Search, Settings } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const features = [
  {
    title: 'Virtual Try-On',
    description: 'Allow clients to virtually try on thousands of nail designs before committing to a style.',
    icon: Camera,
    color: 'from-nail-500 to-nail-300',
  },
  {
    title: 'Personalized Recommendations',
    description: 'Our AI analyzes preferences and trends to suggest personalized nail designs for each client.',
    icon: Heart,
    color: 'from-purple-500 to-purple-300',
  },
  {
    title: 'Trend Analysis',
    description: 'Stay ahead of the competition with real-time analysis of nail design trends in your area.',
    icon: Search,
    color: 'from-nail-500 to-purple-400',
  },
  {
    title: 'Salon Management',
    description: 'Streamline appointments, inventory, and customer relationships with our integrated management tools.',
    icon: Settings,
    color: 'from-purple-500 to-nail-400',
  },
];

const FeatureCard = ({ feature, index, inView }) => {
  return (
    <div 
      className={`bg-background rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-500 transform ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 transform transition-transform hover:scale-110`}>
        <feature.icon className="text-white" size={24} />
      </div>
      <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
      <p className="text-muted-foreground">{feature.description}</p>
    </div>
  );
};

const FeaturesSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <section id="features" className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4 animate-fade-in">
            Powerful AI Features
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our technology transforms your salon into a cutting-edge beauty tech destination
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index} 
              feature={feature} 
              index={index} 
              inView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
