// components/Testimonial.tsx
// Define the Testimonial item interface
interface TestimonialItem {
    quote: string;
    name: string;
    role: string;
    company: string;
  }
  
  // Define the props interface
  interface TestimonialProps {
    testimonials: TestimonialItem[];
  }
  
  const Testimonial = ({ testimonials }: TestimonialProps) => {
    return (
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-8">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-md">
                <p className="text-gray-600 mb-4">&quot;{testimonial.quote}&quot;</p>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-gray-500">{testimonial.role}, {testimonial.company}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Testimonial;