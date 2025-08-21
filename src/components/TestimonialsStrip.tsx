import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah M.',
    role: 'Startup Founder',
    text: 'BrightCode delivered our MVP in record time. The team is responsive and truly cares about our success.',
    rating: 5
  },
  {
    name: 'Michael R.',
    role: 'Tech Director',
    text: 'Professional, reliable, and technically excellent. They\'ve become our go-to development partner.',
    rating: 5
  },
  {
    name: 'Lisa T.',
    role: 'Product Manager',
    text: 'Cross-border expertise made all the difference. They understand both US and Canadian markets.',
    rating: 5
  }
]

export function TestimonialsStrip() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h3 className="text-2xl font-display font-bold text-gray-900 mb-2">
            Trusted by growing businesses
          </h3>
          <p className="text-gray-600">
            See what our clients say about working with us
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg border">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                "{testimonial.text}"
              </p>
              <div className="text-sm">
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                <p className="text-gray-600">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground">
            TODO: Add real testimonials and client logos
          </p>
        </div>
      </div>
    </section>
  )
} 