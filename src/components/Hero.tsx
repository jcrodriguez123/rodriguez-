import { ArrowDown } from "lucide-react";

export function Hero() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1728598909887-2d983a8889b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXNpZ24lMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzY0OTQxMDY5fDA&ixlib=rb-4.1.0&q=80&w=1080')] bg-cover bg-center opacity-10" />
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-6">
          <span className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 mb-4">
            Junior Web Designer
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl mb-6 text-white">
          JC Rodriguez
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-2xl mx-auto">
          Learning and creating beautiful web experiences with passion and dedication
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={scrollToAbout}
            className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            View My Work
          </button>
          <a 
            href="#contact"
            className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white hover:text-slate-900 transition-all"
          >
            Get In Touch
          </a>
        </div>
      </div>
      
      <button 
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown size={32} />
      </button>
    </section>
  );
}