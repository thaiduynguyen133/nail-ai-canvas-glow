
import React from 'react';
import { Camera, Heart, Search, Settings } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const features = [
  {
    title: 'Thử Móng Ảo',
    description: 'Cho phép khách hàng thử hàng nghìn mẫu móng ảo trước khi lựa chọn phong cách.',
    icon: Camera,
    color: 'from-nail-500 to-nail-300',
  },
  {
    title: 'Gợi Ý Cá Nhân Hóa',
    description: 'AI của chúng tôi phân tích sở thích và xu hướng để đề xuất các mẫu móng phù hợp cho từng khách hàng.',
    icon: Heart,
    color: 'from-purple-500 to-purple-300',
  },
  {
    title: 'Phân Tích Xu Hướng',
    description: 'Luôn dẫn đầu với phân tích thời gian thực về xu hướng thiết kế móng trong khu vực của bạn.',
    icon: Search,
    color: 'from-nail-500 to-purple-400',
  },
  {
    title: 'Quản Lý Tiệm Nail',
    description: 'Tối ưu hóa lịch hẹn, kho hàng và mối quan hệ khách hàng với công cụ quản lý tích hợp của chúng tôi.',
    icon: Settings,
    color: 'from-purple-500 to-nail-400',
  },
];

const FeatureCard = ({ feature, index, inView }) => {
  return (
    <div 
      className={`glass border border-border/5 rounded-3xl p-8 hover:glass-strong transition-all duration-500 transform hover:scale-105 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 transform transition-transform hover:scale-110 shadow-lg`}>
        <feature.icon className="text-white" size={24} />
      </div>
      <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
      <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
    </div>
  );
};

const FeaturesSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <section id="features" className="py-16 md:py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 to-transparent"></div>
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4 animate-fade-in">
            Tính Năng AI Mạnh Mẽ
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Công nghệ của chúng tôi biến tiệm nail của bạn thành điểm đến công nghệ làm đẹp hàng đầu
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
