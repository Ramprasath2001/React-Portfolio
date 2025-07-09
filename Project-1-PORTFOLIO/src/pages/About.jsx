import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase, FaPython, FaGitAlt } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiSalesforce } from 'react-icons/si';

function About() {
  const education = [
    {
      title: "MCA, SASTRA University",
      duration: "2022 – 2024",
      cgpa: "8.3",
      description: "Master of Computer Applications with focus on full stack development.",
    },
    {
      title: "B.Sc Physics & B.Ed, SASTRA University",
      duration: "2018 – 2022",
      cgpa: "7.47",
      description: "Bachelor of Science in Physics with integrated education degree.",
    },
  ];

  const experience = [
    {
      title: "Academic Projects",
      duration: "Jan 2024 – April 2024",
      description: "Crop recommendation system using IoT sensors and ML (Random Forest) with a Flask web app.",
    },
    {
      title: "Salesforce Projects",
      duration: "July 2024 - December 2024",
      description: "Hands-on experience with Salesforce admin tasks.",
    },
  ];

  const skills = [
    { icon: <FaHtml5 size={40} className="text-orange-500" />, name: "HTML5" },
    { icon: <FaCss3Alt size={40} className="text-blue-500" />, name: "CSS3" },
    { icon: <FaJs size={40} className="text-yellow-400" />, name: "JavaScript" },
    { icon: <FaReact size={40} className="text-cyan-400" />, name: "React.js" },
    { icon: <SiTailwindcss size={40} className="text-teal-400" />, name: "Tailwind CSS" },
    { icon: <FaNodeJs size={40} className="text-green-600" />, name: "Node.js" },
    { icon: <SiMongodb size={40} className="text-green-500" />, name: "MongoDB" },
    { icon: <FaPython size={40} className="text-yellow-500" />, name: "Python" },
    { icon: <FaDatabase size={40} className="text-purple-500" />, name: "SQL" },
    { icon: <FaGitAlt size={40} className="text-orange-400" />, name: "Git" },
    { icon: <SiSalesforce size={40} className="text-blue-400" />, name: "Salesforce" },
  ];

  return (
    <section className="bg-gradient-to-br from-gray-800 via-gray-900 to-black p-8 rounded-xl shadow-xl text-white">
      <motion.h2
        className="text-4xl font-bold mb-6 bg-gradient-to-r from-lime-300 via-green-400 to-emerald-500 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h2>
      <motion.p
        className="mb-8 text-lg text-gray-300"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Hello! I'm Ramprasath Sakthivel,  Aspiring Full Stack Developer with a strong foundation in both front-end and back-end development. Proficient in
 programming, problem-solving, and building responsive web applications. Knowledgeable in software development
 practices and emerging technologies. Seeking an opportunity to contribute to a dynamic team, enhance my skills, and grow
 professionally in the tech industry.
      </motion.p>

      <motion.h3
        className="text-3xl font-bold mb-6 bg-gradient-to-r from-emerald-300 via-green-400 to-teal-500 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      >
        Education
      </motion.h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {education.map((edu, idx) => (
          <motion.div
            key={idx}
            className="bg-white bg-opacity-10 backdrop-blur rounded-xl p-6 shadow-md"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-2xl font-semibold mb-2">
              {edu.title.includes("SASTRA University") ? (
                <>
                  {edu.title.split("SASTRA University")[0]}
                  <a href="https://www.sastra.edu/home/" target="_blank" rel="noreferrer" className="text-blue-400 hover:underline">
                    SASTRA University
                  </a>
                </>
              ) : edu.title}
            </h4>
            <p className="text-sm text-gray-400 mb-1">{edu.duration}</p>
            <p className="text-sm text-gray-400 mb-2">CGPA: {edu.cgpa}</p>
            <p className="text-gray-300">{edu.description}</p>
          </motion.div>
        ))}
      </div>

      <motion.h3
        className="text-3xl font-bold mb-6 bg-gradient-to-r from-pink-300 via-red-400 to-orange-400 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      >
        My Skills
      </motion.h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
        {skills.map((skill, idx) => (
          <motion.div
            key={idx}
            className="flex flex-col items-center p-4 bg-white bg-opacity-10 backdrop-blur rounded-xl shadow-md"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: idx * 0.05 }}
            viewport={{ once: true }}
          >
            {skill.icon}
            <p className="mt-2 text-white font-semibold">{skill.name}</p>
          </motion.div>
        ))}
      </div>

      <motion.h3
        className="text-3xl font-bold mb-6 bg-gradient-to-r from-fuchsia-300 via-purple-400 to-indigo-500 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      >
        Experience
      </motion.h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {experience.map((exp, idx) => (
          <motion.div
            key={idx}
            className="bg-white bg-opacity-10 backdrop-blur rounded-xl p-6 shadow-md"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-2xl font-semibold mb-2">{exp.title}</h4>
            <p className="text-sm text-gray-400 mb-2">{exp.duration}</p>
            <p className="text-gray-300">{exp.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default About;
