import { Briefcase, GraduationCap, Award } from "lucide-react";

const experiences = [
  {
    icon: Briefcase,
    year: "2024 - Present",
    title: "Junior Web Designer",
    company: "Freelance",
    description: "Taking on web design projects to build my portfolio and skills. Working with clients to create responsive, modern websites."
  },
  {
    icon: GraduationCap,
    year: "2023 - 2024",
    title: "Web Design Student",
    company: "PARSU",
    description: "Studied web design fundamentals, UI/UX principles, and modern development technologies. Completed various projects and assignments."
  },
  {
    icon: Award,
    year: "2023",
    title: "Design Intern",
    company: "Local Business",
    description: "Assisted in creating website mockups and learning industry best practices. Gained hands-on experience with design tools."
  },
  {
    icon: Briefcase,
    year: "2022 - 2023",
    title: "Started Learning",
    company: "Self-Taught",
    description: "Began learning web design through online courses and tutorials. Built my first websites and discovered my passion for design."
  }
];

const achievements = [
  { number: "15+", label: "Projects Completed" },
  { number: "10+", label: "Happy Clients" },
  { number: "2+", label: "Years Learning" },
  { number: "100%", label: "Dedication" }
];

export function Experience() {
  return (
    <section className="py-20 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-slate-900">
            Experience & Achievements
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Building expertise through years of dedicated work
          </p>
        </div>
        
        {/* Achievements Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl text-center"
            >
              <div className="text-4xl mb-2 text-blue-600">
                {achievement.number}
              </div>
              <div className="text-slate-600">
                {achievement.label}
              </div>
            </div>
          ))}
        </div>
        
        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200 hidden md:block" />
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className="relative pl-0 md:pl-20"
              >
                <div className="absolute left-5 top-6 w-6 h-6 bg-blue-600 rounded-full border-4 border-slate-50 hidden md:block" />
                
                <div className="bg-white p-8 rounded-xl hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 md:hidden">
                      <exp.icon className="text-blue-600" size={24} />
                    </div>
                    <div className="flex-1">
                      <div className="text-blue-600 mb-2">
                        {exp.year}
                      </div>
                      <h3 className="text-2xl mb-1 text-slate-900">
                        {exp.title}
                      </h3>
                      <div className="text-slate-700 mb-3">
                        {exp.company}
                      </div>
                      <p className="text-slate-600">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}