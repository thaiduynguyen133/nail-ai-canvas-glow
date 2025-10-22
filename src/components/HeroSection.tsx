
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
              <span className="gradient-text">Giải Pháp AI</span> Cho Tiệm Nail
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Nâng tầm tiệm nail của bạn với công nghệ AI tiên tiến. Cung cấp dịch vụ thử móng ảo, thiết kế cá nhân hóa và tối ưu hóa hoạt động kinh doanh với giải pháp thông minh của chúng tôi.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-primary-foreground py-6 px-8 text-lg button-glow rounded-full"
              >
                Yêu Cầu Demo
              </Button>
              <Button 
                className="glass-subtle py-6 px-8 text-lg rounded-full border-0 hover:glass"
              >
                Tìm Hiểu Thêm
              </Button>
            </div>
          </div>
          <div className={`relative transition-all duration-1000 delay-300 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-gradient-to-br from-secondary/40 to-primary/40 rounded-full blur-3xl animate-pulse-gentle"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-br from-primary/40 to-secondary/40 rounded-full blur-3xl animate-pulse-gentle"></div>
            <div className="relative glass p-8 rounded-3xl">
              <div className="glass-subtle rounded-2xl overflow-hidden shadow-2xl">
                <div className="aspect-video relative overflow-hidden">
                  <NailModel3D color={currentColor} className="absolute inset-0" />
                </div>
                <div className="p-4 glass">
                  <div className="flex items-center justify-between mb-2">
                    <div className="h-3 w-24 bg-gradient-to-r from-primary/40 to-secondary/40 rounded-full animate-pulse-gentle"></div>
                    <div className="h-3 w-12 bg-gradient-to-r from-secondary/40 to-primary/40 rounded-full animate-pulse-gentle"></div>
                  </div>
                  <div className="grid grid-cols-4 gap-2">
                    {[1, 2, 3, 4].map((item) => (
                      <div key={item} className="aspect-square rounded-xl bg-gradient-to-br from-primary/30 to-secondary/30 glass-subtle transition-all hover:scale-105 hover:glass"></div>
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
