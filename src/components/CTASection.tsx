
import React from 'react';
import { Button } from '@/components/ui/button';

const CTASection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="relative rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-90"></div>
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-60 h-60 rounded-full bg-white/10 blur-3xl animate-pulse-gentle"></div>
            <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-white/10 blur-3xl animate-pulse-gentle"></div>
          </div>
          
          <div className="glass-subtle p-8 md:p-12 lg:p-16 relative">            
            <div className="relative z-10 max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-white mb-6">
                Sẵn Sàng Chuyển Đổi Tiệm Nail Của Bạn?
              </h2>
              <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
                Tham gia cùng hàng trăm tiệm nail thành công sử dụng công nghệ AI của chúng tôi để tăng doanh thu, nâng cao sự hài lòng của khách hàng và tối ưu hóa hoạt động.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button className="bg-white text-primary hover:bg-white/90 py-6 px-8 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all">
                  Đặt Lịch Demo
                </Button>
                <Button className="glass-strong border-0 text-white hover:bg-white/20 py-6 px-8 text-lg rounded-full">
                  Xem Bảng Giá
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
