import { Lightbulb, Pencil, Code2, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Lightbulb,
    title: "Discovery & Planning",
    description: "We start by understanding your goals, target audience, and project requirements. This phase includes research, competitor analysis, and defining the project scope."
  },
  {
    number: "02",
    icon: Pencil,
    title: "Design & Prototyping",
    description: "Creating wireframes and high-fidelity designs that align with your brand. You'll receive mockups and interactive prototypes for review and feedback."
  },
  {
    number: "03",
    icon: Code2,
    title: "Development & Testing",
    description: "Bringing the designs to life with clean, efficient code. Rigorous testing ensures everything works perfectly across all devices and browsers."
  },
  {
    number: "04",
    icon: Rocket,
    title: "Launch & Support",
    description: "Deploying your website and ensuring a smooth launch. Ongoing support and maintenance to keep your site running optimally."
  }
];

export function Process() {
  return (
    <section className="py-20 px-4 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-white">
            My Process
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            A streamlined approach to creating exceptional web experiences
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative bg-slate-800 p-8 rounded-xl hover:bg-slate-750 transition-colors"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
                    <step.icon className="text-white" size={32} />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="text-blue-400 mb-2">
                    {step.number}
                  </div>
                  <h3 className="text-2xl mb-3 text-white">
                    {step.title}
                  </h3>
                  <p className="text-slate-300">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
