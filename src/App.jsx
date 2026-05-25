import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function App() {
  const projects = [
    {
      title: "AI Content Studio",
      description:
        "AI-powered content generation platform with blog generation, prompt optimization, and AI image generation.",
      tech: ["Python", "Streamlit", "Groq API"],
      github: "https://github.com/YOUR_USERNAME/ai-content-studio",
      live: "https://YOUR_STREAMLIT_LINK.streamlit.app",
    },
    {
      title: "IntelliLearn AI",
      description:
        "AI learning assistant with quizzes, progress tracking, dashboards, and intelligent learning paths.",
      tech: ["Python", "Streamlit", "Plotly"],
      github: "https://github.com/YOUR_USERNAME/intellilearn-ai",
      live: "https://YOUR_STREAMLIT_LINK.streamlit.app",
    },
  ];
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <nav className="flex justify-between items-center px-8 py-6 border-b border-slate-800">
        <h1 className="text-2xl font-bold">My Portfolio</h1>

        <div className="flex gap-4 text-2xl">
          <a href="https://github.com/YOUR_USERNAME">
            <FaGithub />
          </a>

          <a href="https://linkedin.com/in/YOUR_PROFILE">
            <FaLinkedin />
          </a>
        </div>
      </nav>

      <section className="px-8 py-24 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl font-bold mb-6"
        >
          AI & Software Developer
        </motion.h1>

        <p className="text-slate-400 text-xl max-w-3xl mx-auto">
          Building AI-powered applications, intelligent dashboards,
          generative AI tools, and learning platforms.
        </p>
      </section>

      <section className="px-8 py-16">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-6"
            >
              <h3 className="text-2xl font-bold mb-4">
                {project.title}
              </h3>

              <p className="text-slate-400 mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-blue-600 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href={project.github}
                  className="bg-white text-black px-4 py-2 rounded-lg"
                >
                  GitHub
                </a>

                <a
                  href={project.live}
                  className="bg-blue-600 px-4 py-2 rounded-lg"
                >
                  Live Demo
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;