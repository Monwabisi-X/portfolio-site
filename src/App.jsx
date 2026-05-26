import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaExternalLinkAlt,
} from "react-icons/fa";

function App() {
  const projects = [
    {
      title: "Health Buddy",
      description:
        "AI-powered content generation platform with blog generation, social media tools, prompt optimization, and image generation.",
      tech: ["Python", "Groq API"],
      github: "https://github.com/Serero-Codes/AI-Chatbot.git",
      live: "https://ai-chatbot-859t.onrender.com",
      Doc: "https://capeitinitiative-my.sharepoint.com/:b:/g/personal/monwabisi_xinwa_capaciti_org_za/IQBdTbotvEe1SL5g1zk-afs5AZ-TXTXcRQG8eos60BHazf4?e=DlSpaS"
    },
    {
      title: "AI Content Studio",
      description:
        "AI-powered content generation platform with blog generation, social media tools, prompt optimization, and image generation.",
      tech: ["Python", "Streamlit", "Groq API"],
      github: "https://github.com/Monwabisi-X/ai-content-studio",
      live: "https://intellilearn-ai-c8kkanaj9cywuh8dtvkcmb.streamlit.app",
      Doc: "https://capeitinitiative-my.sharepoint.com/:b:/g/personal/monwabisi_xinwa_capaciti_org_za/IQC6PabGTFKmS52YxUqtZlTwAXOwdZ3xpFvg-9aB3oScqj4?e=TpIURv"
    },
    {
      title: "AI Sentiment Dashboard",
      description:
        "Real-time sentiment analysis dashboard for monitoring public opinion on social media platforms.",
      tech: ["Python", "Streamlit", "Groq API"],
      github: "https://github.com/Monwabisi-X/ai-sentiment-dashboard",
      live: "https://ai-sentiment-dashboard-3vucp9y3udaz3ive5f4j24.streamlit.app",
      Doc: "https://capeitinitiative-my.sharepoint.com/:w:/g/personal/monwabisi_xinwa_capaciti_org_za/IQCMRZHRv9MMT7YV4bYHs968AWRh_lamBAf1yRs0mHwJDKk?e=QsXUgz"
    },
    {
      title: "IntelliLearn AI",
      description:
        "AI learning assistant with quizzes, dashboards, progress tracking, intelligent study plans, and analytics.",
      tech: ["Python", "Streamlit", "Plotly"],
      github: "https://github.com/Monwabisi-X/intellilearn-ai",
      live: "https://intellilearn-ai-c8kkanaj9cywuh8dtvkcmb.streamlit.app",
      Doc: "https://capeitinitiative-my.sharepoint.com/:b:/g/personal/monwabisi_xinwa_capaciti_org_za/IQB7tIIVSrLwRaybbJN1-mDbAVtdfqPfGvkOeaC378CCWU4?e=yBkiPa"
    },
  ];

  return (
    <div className="bg-[#020617] text-white min-h-screen overflow-x-hidden">
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full backdrop-blur-lg bg-black/20 border-b border-white/10 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-wide">
            Monwabisi.dev
          </h1>

          <div className="flex gap-6 text-lg">
            <a href="#about" className="hover:text-blue-400 transition">
              About
            </a>

            <a href="#projects" className="hover:text-blue-400 transition">
              Projects
            </a>

            <a href="#skills" className="hover:text-blue-400 transition">
              Skills
            </a>

            <a href="#contact" className="hover:text-blue-400 transition">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative flex flex-col justify-center items-center text-center min-h-screen px-6">
        {/* Background Glow */}
        <div className="absolute w-[500px] h-[500px] bg-blue-500 rounded-full blur-[150px] opacity-20 top-20"></div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl md:text-8xl font-extrabold leading-tight z-10"
        >
          AI & Software
          <br />
          Developer
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 max-w-3xl text-slate-300 text-xl z-10"
        >
          Building intelligent applications, AI-powered learning systems,
          dashboards, generative AI tools, and modern software solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex gap-6 mt-10 z-10"
        >
          <a
            href="#projects"
            className="bg-blue-600 hover:bg-blue-700 transition px-8 py-4 rounded-xl font-semibold shadow-lg"
          >
            View Projects
          </a>

          <a
            href="https://github.com/Monwabisi-X"
            className="border border-white/20 hover:border-blue-400 transition px-8 py-4 rounded-xl"
          >
            GitHub
          </a>
        </motion.div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="max-w-6xl mx-auto px-6 py-32"
      >
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl font-bold mb-8">
              About Me
            </h2>

            <p className="text-slate-400 text-lg leading-relaxed">
              I am an aspiring AI and software developer currently
              building practical projects focused on artificial
              intelligence, intelligent systems, dashboards,
              generative AI, and modern web applications.
            </p>

            <p className="text-slate-400 text-lg leading-relaxed mt-6">
              My projects combine backend development,
              frontend engineering, prompt engineering,
              APIs, and interactive user experiences.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/10 rounded-3xl p-10 backdrop-blur-xl">
            <h3 className="text-3xl font-bold mb-6">
              Current Focus
            </h3>

            <ul className="space-y-4 text-slate-300">
              <li>• AI Applications</li>
              <li>• Generative AI</li>
              <li>• Streamlit Dashboards</li>
              <li>• React Development</li>
              <li>• Prompt Engineering</li>
              <li>• Intelligent Learning Systems</li>
            </ul>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="max-w-7xl mx-auto px-6 py-32"
      >
        <h2 className="text-5xl font-bold text-center mb-20">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl shadow-2xl"
            >
              <div className="h-52 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 mb-8"></div>

              <h3 className="text-3xl font-bold mb-4">
                {project.title}
              </h3>

              <p className="text-slate-400 mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-blue-500/20 border border-blue-400/20 text-blue-300 px-4 py-2 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href={project.github}
                  className="flex items-center gap-2 bg-white text-black px-5 py-3 rounded-xl font-semibold"
                >
                  <FaGithub />
                  GitHub
                </a>

                <a
                  href={project.live}
                  className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 transition px-5 py-3 rounded-xl"
                >
                  <FaExternalLinkAlt />
                  Live Demo
                </a>
                <a
                  href={project.Doc}
                  className="flex items-center gap-2 bg-green-600 hover:bg-green-700 transition px-5 py-3 rounded-xl"
                >
                  <FaExternalLinkAlt />
                  Documentation
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section
        id="skills"
        className="max-w-6xl mx-auto px-6 py-32"
      >
        <h2 className="text-5xl font-bold text-center mb-20">
          Skills & Technologies
        </h2>

        <div className="flex flex-wrap justify-center gap-5">
          {[
            "Python",
            "Java",
            "React",
            "Tailwind",
            "Streamlit",
            "Groq API",
            "LLMs",
            "Prompt Engineering",
            "Git",
            "GitHub",
            "SQL",
            "JavaScript",
          ].map((skill, index) => (
            <motion.div
              whileHover={{ scale: 1.1 }}
              key={index}
              className="px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-lg"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="max-w-4xl mx-auto px-6 py-32 text-center"
      >
        <h2 className="text-5xl font-bold mb-8">
          Contact
        </h2>

        <p className="text-slate-400 text-xl mb-10">
          Interested in collaborating or discussing opportunities?
        </p>

        <div className="flex justify-center gap-6 text-4xl">
          <a
            href="https://github.com/Monwabisi-X"
            className="hover:text-blue-400 transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/YOUR_PROFILE"
            className="hover:text-blue-400 transition"
          >
            <FaLinkedin />
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-8 text-center text-slate-500">
        © 2026 Monwabisi • AI Portfolio
      </footer>
    </div>
  );
}

export default App;