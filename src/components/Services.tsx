import { Globe, Layout, Palette, Code, Search, Smartphone } from "lucide-react";

const services = [
  {
    icon: Layout,
    title: "Website Design",
    description: "Creating clean, modern website designs that look professional and work well for your business needs.",
    features: ["Custom layouts", "Brand integration", "Modern aesthetics"]
  },
  {
    icon: Code,
    title: "Front-End Development",
    description: "Building responsive websites with HTML, CSS, and JavaScript that work great on all devices.",
    features: ["Responsive coding", "Clean code", "Fast loading"]
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Designing user-friendly interfaces that are easy to navigate and pleasant to use.",
    features: ["User-focused design", "Wireframing", "Simple prototypes"]
  },
  {
    icon: Globe,
    title: "Website Redesign",
    description: "Refreshing existing websites with modern designs to improve their look and functionality.",
    features: ["Design updates", "Layout improvements", "Better user experience"]
  },
  {
    icon: Smartphone,
    title: "Mobile-Friendly Design",
    description: "Ensuring your website looks and works perfectly on phones and tablets.",
    features: ["Mobile optimization", "Touch-friendly", "Responsive layouts"]
  },
  {
    icon: Search,
    title: "Basic SEO",
    description: "Implementing basic SEO practices to help your website be more discoverable online.",
    features: ["SEO-friendly structure", "Optimized images", "Clean code"]
  }
];

export function Services() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-slate-900">
            Services I Offer
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Comprehensive web design solutions tailored to your needs
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-slate-50 p-8 rounded-xl hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                <service.icon className="text-white" size={28} />
              </div>
              <h3 className="text-2xl mb-3 text-slate-900">
                {service.title}
              </h3>
              <p className="text-slate-600 mb-6">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-slate-700">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}