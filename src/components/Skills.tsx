import { Palette, Code, Smartphone, Zap, Users, Layers } from "lucide-react";

const skills = [
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Creating intuitive and visually appealing user interfaces that engage and delight users."
  },
  {
    icon: Code,
    title: "Web Development",
    description: "Building responsive websites with modern technologies and best practices."
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description: "Ensuring seamless experiences across all devices and screen sizes."
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Optimizing websites for speed and efficiency to provide the best user experience."
  },
  {
    icon: Users,
    title: "User Research",
    description: "Understanding user needs and behaviors to inform design decisions."
  },
  {
    icon: Layers,
    title: "Prototyping",
    description: "Creating interactive prototypes to test and validate design concepts."
  }
];

export function Skills() {
  return (
    <section className="py-20 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-slate-900">
            What I Do
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Combining creativity with technical expertise to deliver exceptional web solutions
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <skill.icon className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl mb-3 text-slate-900">
                {skill.title}
              </h3>
              <p className="text-slate-600">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
