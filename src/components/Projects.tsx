const projects = [
  {
    title: "E-Commerce Platform",
    description: "A modern e-commerce website with intuitive navigation and seamless checkout experience.",
    image: "https://images.unsplash.com/photo-1694599048261-a1de00f0117e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlJTIwZGVzaWdufGVufDF8fHx8MTc2NDkxNTg4MXww&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["UI/UX", "Responsive", "E-Commerce"]
  },
  {
    title: "Mobile App Design",
    description: "Clean and user-friendly mobile application interface with focus on accessibility.",
    image: "https://images.unsplash.com/photo-1605108222700-0d605d9ebafe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzY0OTc4MDA0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Mobile", "UI/UX", "Prototyping"]
  },
  {
    title: "Creative Portfolio",
    description: "Minimalist portfolio website showcasing creative work with elegant animations.",
    image: "https://images.unsplash.com/photo-1760071744047-5542cbfda184?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHBvcnRmb2xpbyUyMGRlc2lnbnxlbnwxfHx8fDE3NjQ5NDEzNDF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Portfolio", "Animation", "Minimal"]
  },
  {
    title: "Corporate Website",
    description: "Professional corporate website with modern design and comprehensive content structure.",
    image: "https://images.unsplash.com/photo-1689067697201-24e5cc75b730?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwd2Vic2l0ZSUyMG1vY2t1cHxlbnwxfHx8fDE3NjUwMDA1NzR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Corporate", "Responsive", "CMS"]
  }
];

export function Projects() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-slate-900">
            Featured Projects
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            A selection of recent work that showcases my design approach and capabilities
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-xl bg-slate-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl mb-2 text-slate-900">
                  {project.title}
                </h3>
                <p className="text-slate-600 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
