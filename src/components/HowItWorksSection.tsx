
import React from 'react';
import { useInView } from 'react-intersection-observer';

const steps = [
  {
    number: '01',
    title: 'Chụp',
    description: "AI của chúng tôi quét và chụp hình dạng móng độc đáo của từng khách hàng bằng máy tính bảng hoặc thiết bị của tiệm nail."
  },
  {
    number: '02',
    title: 'Thiết Kế',
    description: "Khách hàng có thể duyệt hàng nghìn mẫu thiết kế hoặc tạo kiểu dáng tùy chỉnh mà AI sẽ áp dụng ảo lên móng của họ."
  },
  {
    number: '03',
    title: 'Xem Trước',
    description: "Xem kết quả cuối cùng trong 3D thực tế trước khi bắt đầu công việc, đảm bảo sự hài lòng của khách hàng."
  },
  {
    number: '04',
    title: 'Áp Dụng',
    description: "Kỹ thuật viên làm móng của bạn nhận được thông số thiết kế chính xác để biến thiết kế ảo thành hiện thực."
  }
];

const HowItWorksSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <section id="how-it-works" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4 animate-fade-in">
            Cách Thức Hoạt Động
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '100ms' }}>
            Quy trình liền mạch của chúng tôi mang công nghệ AI đến tiệm nail của bạn với sự gián đoạn tối thiểu
          </p>
        </div>

        <div className="relative" ref={ref}>
          {/* Connecting line */}
          <div className={`hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-nail-200 via-purple-300 to-nail-200 transform -translate-y-1/2 z-0 transition-all duration-1000 ${inView ? 'w-full opacity-100' : 'w-0 opacity-0'}`}></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className={`flex flex-col items-center text-center transform transition-all duration-700 ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`} 
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-nail-500 to-purple-500 flex items-center justify-center text-white text-xl font-bold mb-6 shadow-lg transition-transform hover:scale-110">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
