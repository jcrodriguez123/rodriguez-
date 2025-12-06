import { ArrowRight, Mail } from "lucide-react";

export function CTA() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-600 to-purple-600">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl mb-6 text-white">
          Let's Work Together!
        </h2>
        <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
          I'm eager to take on new projects and help bring your ideas to life. Let's discuss how we can work together to create something great.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
          >
            <Mail size={20} />
            Get In Touch
            <ArrowRight size={20} />
          </a>
          <a 
            href="#projects"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all"
          >
            View My Work
          </a>
        </div>
        
        <div className="mt-12 pt-12 border-t border-blue-400/30">
          <p className="text-blue-100 mb-4">
            Affordable rates • Quick communication • Eager to learn and grow
          </p>
        </div>
      </div>
    </section>
  );
}