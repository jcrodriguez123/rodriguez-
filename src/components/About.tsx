import profileImg from "figma:asset/17d393eb1e521fe70c4891f043b51611d0658dfb.png";

export function About() {
  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl mb-6 text-slate-900">
              About Me
            </h2>
            <div className="space-y-4 text-slate-600">
              <p>
                Hello! I'm JC Rodriguez, a junior web designer eager to create beautiful and functional digital experiences. I'm passionate about learning new technologies and applying modern design principles to build websites that users love.
              </p>
              <p>
                As I continue to grow in my career, I focus on combining clean design with practical code to deliver websites that look great and work well. I believe that every project is an opportunity to learn something new and improve my skills.
              </p>
              <p>
                I'm excited to take on new challenges and collaborate on projects that help me grow as a designer. Let's work together to bring your ideas to life!
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 p-1">
              <div className="w-full h-full rounded-2xl overflow-hidden">
                <img 
                  src={profileImg}
                  alt="JC Rodriguez"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}