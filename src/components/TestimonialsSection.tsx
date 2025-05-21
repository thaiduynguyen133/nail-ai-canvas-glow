
import React from 'react';

const testimonials = [
  {
    quote: "Khách hàng của chúng tôi hoàn toàn yêu thích tính năng thử móng ảo. Nó đã tăng doanh số bán hàng thêm của chúng tôi lên 40% chỉ trong ba tháng!",
    author: "Jessica Chen",
    role: "Chủ Sở Hữu, Gloss Nail Studio",
    image: "https://i.pravatar.cc/150?img=32"
  },
  {
    quote: "Các đề xuất AI đã hoàn toàn thay đổi cách chúng tôi tiếp cận tư vấn thiết kế. Khách hàng cảm thấy tự tin hơn với lựa chọn của họ.",
    author: "Michael Rodriguez",
    role: "Quản Lý, Elite Nails",
    image: "https://i.pravatar.cc/150?img=11"
  },
  {
    quote: "Chúng tôi đã thấy số lượng khách hàng mới tăng 30% kể từ khi triển khai NailAI. Việc tiếp thị truyền miệng đã thực sự đáng kinh ngạc.",
    author: "Sarah Johnson",
    role: "Chủ Sở Hữu, Polished Perfection",
    image: "https://i.pravatar.cc/150?img=5"
  }
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-gradient-to-br from-purple-50 to-nail-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">Chủ Tiệm Nail Nói Gì</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Đừng chỉ tin vào lời chúng tôi - hãy nghe từ các chủ tiệm nail đã chuyển đổi doanh nghiệp của họ
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-background rounded-xl p-8 shadow-lg">
              <div className="flex flex-col h-full">
                <div className="mb-6 flex-grow">
                  <svg className="h-10 w-10 text-nail-400" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p className="mt-4 text-lg">{testimonial.quote}</p>
                </div>
                <div className="flex items-center mt-4">
                  <img
                    className="w-12 h-12 rounded-full object-cover mr-4"
                    src={testimonial.image}
                    alt={testimonial.author}
                  />
                  <div>
                    <p className="font-medium">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
