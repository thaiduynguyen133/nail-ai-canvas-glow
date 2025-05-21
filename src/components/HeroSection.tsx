
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import NailModel3D from '@/components/NailModel3D';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentColor, setCurrentColor] = useState("#ec4899");
  const colors = ["#ec4899", "#a855f7", "#6b21a8", "#831843"];
  
  useEffect(() => {
    setIsVisible(true);
    
    // Color changing animation for the 3D nail
    const colorInterval = setInterval(() => {
      setCurrentColor(colors[Math.floor(Math.random() * colors.length)]);
    }, 3000);
    
    return () => clearInterval(colorInterval);
  }, []);

  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6">
              <span className="gradient-text">AI-Powered</span> Solution for Nail Salons
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Transform your nail salon with cutting-edge AI technology. Offer virtual try-ons, personalized designs, and streamline your operations with our intelligent solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-gradient-to-r from-nail-500 to-purple-500 hover:from-nail-600 hover:to-purple-600 text-white py-6 px-8 text-lg button-glow transform transition-transform hover:scale-105"
              >
                Request Demo
              </Button>
              <Button 
                variant="outline" 
                className="border-2 border-nail-400 text-foreground hover:bg-nail-50 py-6 px-8 text-lg transform transition-transform hover:scale-105"
              >
                Learn More
              </Button>
            </div>
          </div>
          <div className={`relative transition-all duration-1000 delay-300 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-nail-400/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="relative bg-gradient-to-br from-purple-100 to-nail-100 p-4 rounded-2xl shadow-xl">
              <div className="bg-white rounded-xl overflow-hidden">
                <div className="aspect-video relative overflow-hidden">
                  <NailModel3D color={currentColor} className="absolute inset-0" />
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="h-3 w-24 bg-nail-200 rounded-full animate-pulse"></div>
                    <div className="h-3 w-12 bg-purple-200 rounded-full animate-pulse"></div>
                  </div>
                  <div className="grid grid-cols-4 gap-2">
                    {[1, 2, 3, 4].map((item) => (
                      <div key={item} className="aspect-square rounded-lg bg-gradient-to-br from-nail-200 to-purple-200 transition-all hover:scale-105"></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
