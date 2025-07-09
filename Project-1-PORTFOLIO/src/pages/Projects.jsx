import { motion } from "framer-motion";
import { FaGithub, FaReact, FaNodeJs, FaDatabase, FaPython, FaHtml5, FaCss3Alt, FaJs, FaEnvelope, FaLeaf, FaCloud, FaBootstrap } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiFlask, SiVite } from 'react-icons/si';

function Projects() {
  const projects = [
    {
      title: "Smart IoT Framework for Enhanced Crop Management",
      subtitle: "IoT with ML Project | Jan 2024 – Apr 2024",
      github: "https://github.com/Ramprasath2001/Smart-IoT-with-ML-Project",
      tools: [<SiFlask className="text-white" />, <FaPython className="text-yellow-400" />, <FaCloud className="text-blue-400" />],
      bullets: [
        "Developed a Flask web app integrating IoT sensor data for crop recommendations.",
        "Deployed Random Forest model to analyze and suggest optimal crops.",
        "Used LoRaWAN gateways for real-time environmental monitoring.",
      ],
    },
    {
      title: "BulkMail",
      subtitle: "Full Stack Project | June 2025",
      github: "https://github.com/Ramprasath2001/bulkMail-",
      tools: [<FaReact className="text-cyan-400" />, <FaNodeJs className="text-green-500" />, <SiMongodb className="text-green-400" />, <FaEnvelope className="text-yellow-500" />],
      bullets: [
        "Built a bulk email sender with XLSX upload and preview.",
        "Used Nodemailer with Express backend to send emails from MongoDB credentials.",
        "Enabled real-time sending status and user feedback.",
      ],
    },
    {
      title: "Weather App",
      subtitle: "Frontend Project | June 2025",
      github: "https://github.com/Ramprasath2001/Weather-API",
      tools: [<FaReact className="text-cyan-400" />, <SiTailwindcss className="text-teal-400" />, <FaCloud className="text-blue-400" />],
      bullets: [
        "Built responsive weather app with current data and 5-day forecast.",
        "Added unit toggle, AQI info, sunrise/sunset, and local time display.",
        "Enabled search history, animations, and mobile-first design.",
      ],
    },
    {
      title: "Movie App",
      subtitle: "Frontend UI | May 2025",
      github: "https://github.com/Ramprasath2001/project-1-mve",
      tools: [<SiVite className="text-purple-400" />, <SiTailwindcss className="text-teal-400" />, <FaJs className="text-yellow-400" />],
      bullets: [
        "Built a fast movie browsing web app with clean, responsive UI.",
        "Integrated TMDB API for trending movies, search, and categories.",
        "Implemented dynamic UI with real-time search and interactive cards.",
      ],
    },
    {
      title: "TripAdvisor Homepage Clone",
      subtitle: "Frontend UI | May 2025",
      github: "https://github.com/Ramprasath2001/Trip_Advisor_Clone",
      tools: [<FaHtml5 className="text-orange-500" />, <FaCss3Alt className="text-blue-500" />, <FaJs className="text-yellow-400" />],
      bullets: [
        "Built a responsive TripAdvisor-style homepage with HTML/CSS.",
        "Included sticky navbar, categories, banners, and featured cards.",
        "Enhanced UX with hover animations and mobile-friendly layouts.",
      ],
    },
    {
      title: "Greenden – Plant E-Commerce",
      subtitle: "Frontend Project | May 2025",
      github: "https://github.com/Ramprasath2001/greenden-tailwind-CSS",
      tools: [<FaHtml5 className="text-orange-500" />, <SiTailwindcss className="text-teal-400" />, <FaJs className="text-yellow-400" />, <FaLeaf className="text-green-500" />],
      bullets: [
        "Built responsive multi-page plant shopping site with modern UI.",
        "Added mobile hamburger menu and slide-in side menu.",
        "Included real-time product search and animated hover effects.",
      ],
    },
    {
      title: "Udemy Clone (Frontend UI)",
      subtitle: "Frontend Project | Apr 2025",
      github: "https://github.com/Ramprasath2001/UdemyAnimation",
      tools: [<FaHtml5 className="text-orange-500" />, <FaCss3Alt className="text-blue-500" />, <FaJs className="text-yellow-400" />, <FaBootstrap className="text-purple-600" />],
      bullets: [
        "Developed a responsive Udemy-style course listing platform.",
        "Designed sticky navbar, interactive course cards, and hover popups.",
        "Ensured mobile-first layout with Flexbox and media queries.",
      ],
    },
  ];

  return (
    <section className="bg-gradient-to-br from-gray-800 via-gray-900 to-black p-8 rounded-xl shadow-xl text-white">
      <motion.h2
        className="text-4xl font-bold mb-8 bg-gradient-to-r from-yellow-300 via-orange-400 to-pink-500 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        My Projects
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((proj, idx) => (
          <motion.div
            key={idx}
            className="bg-white bg-opacity-10 backdrop-blur rounded-xl p-6 shadow-md transform hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-extrabold mb-2 bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-500 bg-clip-text text-transparent tracking-wide">
              {proj.title}
            </h3>
            <p className="text-sm text-gray-400 mb-3">{proj.subtitle}</p>
            <div className="flex flex-wrap gap-3 mb-4">
              {proj.tools.map((icon, iconIdx) => (
                <span key={iconIdx} className="text-2xl">{icon}</span>
              ))}
            </div>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              {proj.bullets.map((point, pointIdx) => (
                <li key={pointIdx}>{point}</li>
              ))}
            </ul>
            {proj.github && (
              <a
                href={proj.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center mt-4 px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition"
              >
                <FaGithub className="mr-2" /> View on GitHub
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
