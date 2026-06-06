import { useEffect, useState } from 'react'
import { ArrowRight, Clock3, Menu, X } from 'lucide-react'
import { Outlet, NavLink } from 'react-router-dom'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Products', path: '/products' },
  { name: 'Career', path: '/career' },
  { name: 'Blogs', path: '/blogs' },
]

function RollingText({ text }: { text: string }) {
  return (
    <span className="flex h-[20px] overflow-hidden">
      <span className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-translate-y-1/2">
        <span>{text}</span>
        <span>{text}</span>
      </span>
    </span>
  )
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [slTime, setSlTime] = useState('00:00')

  useEffect(() => {
    const formatter = new Intl.DateTimeFormat('en-GB', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
      timeZone: 'Asia/Colombo',
    })

    const updateTime = () => setSlTime(formatter.format(new Date()))

    updateTime()

    const interval = window.setInterval(updateTime, 1000)
    return () => window.clearInterval(interval)
  }, [])

  return (
    <div className="bg-white text-gray-900">
      <section className="relative flex min-h-screen flex-col overflow-hidden bg-[#EFEFEF]">
        <header className="relative z-20 w-full bg-white shadow-sm">
          <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
            <nav className="relative flex h-20 items-center justify-between">
              <div className="flex items-center">
                <NavLink to="/">
                  <img src="/logo.svg" alt="BeetleCode Logo" className="h-5 w-auto" />
                </NavLink>
              </div>

              <div className="hidden items-center gap-8 md:absolute md:left-1/2 md:flex md:-translate-x-1/2">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    className={({ isActive }) =>
                      `text-[16px] font-normal transition-colors duration-300 ${
                        isActive ? 'text-[#FF6B6B]' : 'text-gray-900 hover:text-gray-500'
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}
              </div>

              <div className="flex items-center gap-4">
                <a
                  href="#"
                  className="hidden group items-center gap-3 rounded-full bg-gray-900 py-2 pl-5 pr-2 text-[13px] font-medium text-white md:inline-flex"
                >
                  <RollingText text="Book a call" />
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-gray-900 transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-rotate-45">
                    <ArrowRight size={14} />
                  </span>
                </a>

                <button
                  type="button"
                  aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                  onClick={() => setIsMenuOpen((open) => !open)}
                  className="flex items-center gap-2 rounded-full bg-gray-900 px-4 py-2 text-[13px] font-medium text-white md:hidden"
                >
                  <span>{isMenuOpen ? 'Close' : 'Menu'}</span>
                  {isMenuOpen ? <X size={16} /> : <Menu size={16} />}
                </button>
              </div>
            </nav>
          </div>
        </header>

        <div
          className={`fixed inset-0 z-50 md:hidden ${
            isMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'
          }`}
        >
          <div
            className={`absolute inset-0 bg-black/60 transition-opacity duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${
              isMenuOpen ? 'opacity-100' : 'opacity-0'
            }`}
            onClick={() => setIsMenuOpen(false)}
          />
          <div className="absolute inset-x-0 bottom-0 mx-3 mb-3">
            <div
              className={`rounded-2xl bg-white p-5 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                isMenuOpen ? 'translate-y-0' : 'translate-y-full'
              }`}
            >
              <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-gray-200 px-3 py-1.5 text-[13px] text-gray-600">
                <Clock3 size={14} />
                <span>{slTime} in Sri Lanka</span>
              </div>

              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={({ isActive }) =>
                      `text-[28px] font-normal leading-[32px] tracking-[-0.02em] ${
                        isActive ? 'text-[#FF6B6B]' : 'text-gray-900'
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}
              </div>

              <a
                href="#"
                onClick={() => setIsMenuOpen(false)}
                className="group mt-8 inline-flex items-center gap-3 rounded-full bg-gray-900 py-2 pl-5 pr-2 text-[14px] font-medium text-white"
              >
                <RollingText text="Book a call" />
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-gray-900 transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-rotate-45">
                  <ArrowRight size={14} />
                </span>
              </a>
            </div>
          </div>
        </div>

        <Outlet />
      </section>
    </div>
  )
}

export default App
