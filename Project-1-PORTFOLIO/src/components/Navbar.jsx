import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <header className="bg-gradient-to-r from-purple-600 to-blue-600 text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="font-bold text-xl">Ramprasath Portfolio</div>
        <nav className="space-x-4">
          <Link to="/" className="hover:text-gray-300">Home</Link>
          <Link to="/about" className="hover:text-gray-300">About</Link>
          <Link to="/projects" className="hover:text-gray-300">Projects</Link>
          <Link to="/contact" className="hover:text-gray-300">Contact</Link>
          <a href="/Ramprasath_Sakthivel_Resume.pdf" download className="hover:text-gray-300">Resume</a>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
