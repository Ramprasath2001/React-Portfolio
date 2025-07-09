import { motion } from "framer-motion";
import profile from "../assets/profile.png"; // Replace with your actual profile image path
import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[70vh] text-center overflow-hidden rounded-xl p-8 shadow-xl">
      {/*gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-indigo-700 to-blue-800 opacity-50 -z-10 blur-2xl"></div>

      {/*profile */}
      <motion.img
        src={profile}
        alt="Profile"
        className="w-40 h-40 rounded-full mb-6 border-4 border-white shadow-2xl object-cover"
        initial={{ y: -10 }}
        animate={{ y: [-10, 10, -10] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
      />

      {/*intro text */}
      <motion.h1
        className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-500 bg-clip-text text-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Hi, I'm Ramprasath
      </motion.h1>
      <motion.p
        className="text-xl text-gray-200 max-w-xl mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Aspiring Full Stack Developer passionate about building interactive and responsive web applications with modern technologies.
      </motion.p>

      {/*buttons*/}
      <motion.div
        className="flex space-x-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <Link
          to="/projects"
          className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 text-white px-6 py-3 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300"
        >
          View My Projects
        </Link>
        <a
          href="/Ramprasath_Sakthivel_Resume.pdf"
          download
          className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-emerald-600 hover:to-green-500 text-white px-6 py-3 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300"
        >
          Download Resume
        </a>
      </motion.div>
    </section>
  );
}

export default Home;
