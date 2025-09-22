import { Link, NavLink } from 'react-router-dom'
import { ThemeToggle } from './ThemeToggle'

export default function Navbar() {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `${isActive ? 'font-semibold underline' : 'opacity-80 hover:opacity-100'}`

  return (
    
    <nav className="border-b">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center gap-6">
        <Link to="/" className="text-lg font-bold">Julia</Link>
        <div className="flex gap-4">
          <NavLink to="/" className={linkClass} end>
            Home
          </NavLink>
          <NavLink to="/projects" className={linkClass}>
            Projects
          </NavLink>
          <NavLink to="/resume" className={linkClass}>
            Resume
          </NavLink>
        </div>
        <div className="ml-auto">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  )
}


