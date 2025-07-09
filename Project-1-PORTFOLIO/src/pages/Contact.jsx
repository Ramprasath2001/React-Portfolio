import { useState } from 'react';
import { FaLinkedin, FaGithub, FaSalesforce } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_zofdztd',
      'template_qhhlnpp',
      {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      },
      'mdDQLoektcFZxC_z7'
    )
    .then(() => {
      alert("✅ Message sent successfully!");
      setFormData({ name: '', email: '', message: '' });
    })
    .catch((error) => {
      console.error(error);
      alert("❌ Failed to send message. Please try again later.");
    });
  };

  return (
    <section className="relative bg-gradient-to-br from-gray-800 via-gray-900 to-black p-8 rounded-xl shadow-xl text-white">
      <h2 className="text-4xl font-bold mb-6 text-center bg-gradient-to-r from-pink-300 via-purple-400 to-indigo-500 bg-clip-text text-transparent">
        Contact Me
      </h2>

      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="space-y-4 max-w-lg mx-auto">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full border p-2 rounded text-black"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="w-full border p-2 rounded text-black"
          value={formData.email}
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
          className="w-full border p-2 rounded text-black"
          rows="5"
          value={formData.message}
          onChange={handleChange}
        />

        {/*Send Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 text-white px-6 py-3 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300"
          >
            Send Message
          </button>
        </div>
      </form>

      {/* Resume Button */}
      <div className="flex justify-center mt-8">
        <a
          href="/Ramprasath_Sakthivel_Resume.pdf"
          download
          className="bg-gradient-to-r from-green-400 to-emerald-600 hover:from-emerald-600 hover:to-green-400 text-white px-6 py-3 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300"
        >
          Download Resume
        </a>
      </div>

      {/*Links*/}
      <div className="mt-10 lg:absolute lg:bottom-6 lg:right-6">
        <div className="flex justify-center lg:justify-end space-x-6">
          <a
            href="https://www.linkedin.com/in/ramprasathsakthivel/"
            className="hover:text-blue-400"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin size={30} />
          </a>
          <a
            href="https://github.com/Ramprasath2001"
            className="hover:text-gray-300"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub size={30} />
          </a>
          <a
            href="https://www.salesforce.com/trailblazer/i2qcvw0it6u8m4c2ez"
            className="hover:text-sky-400"
            target="_blank"
            rel="noreferrer"
          >
            <FaSalesforce size={30} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
