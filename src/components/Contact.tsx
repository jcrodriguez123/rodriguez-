import { Mail, Linkedin, Github, Twitter } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl mb-4 text-white">
            Let's Work Together
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it. Get in touch and let's create something amazing.
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <div className="bg-slate-800 rounded-2xl p-8 md:p-12">
            <div className="flex items-center justify-center gap-3 mb-8">
              <Mail className="text-blue-400" size={24} />
              <a 
                href="mailto:jcrodriguez826.pbox@parsu.edu.ph"
                className="text-xl md:text-2xl text-white hover:text-blue-400 transition-colors break-all"
              >
                jcrodriguez826.pbox@parsu.edu.ph
              </a>
            </div>
            
            <div className="border-t border-slate-700 pt-8">
              <p className="text-center text-slate-400 mb-6">
                Connect with me on social media
              </p>
              <div className="flex justify-center gap-4">
                <a 
                  href="#"
                  className="w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center text-slate-300 hover:bg-blue-600 hover:text-white transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="#"
                  className="w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center text-slate-300 hover:bg-blue-600 hover:text-white transition-all"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="#"
                  className="w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center text-slate-300 hover:bg-blue-600 hover:text-white transition-all"
                  aria-label="Twitter"
                >
                  <Twitter size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center text-slate-400">
          <p>&copy; 2025 JC Rodriguez. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
}
