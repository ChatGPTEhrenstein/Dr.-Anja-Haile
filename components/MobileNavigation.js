'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Calendar, Menu } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function MobileNavigation({ currentPage = 'home' }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigationLinks = [
    { href: '/', label: 'Home', active: currentPage === 'home' },
    { href: '/about', label: 'Über mich', active: currentPage === 'about' },
    { href: '/services', label: 'Leistungen', active: currentPage === 'services' },
    { href: '/portfolio', label: 'Portfolio', active: currentPage === 'portfolio' },
    { href: '/testimonials', label: 'Testimonials', active: currentPage === 'testimonials' },
    { href: '/contact', label: 'Kontakt', active: currentPage === 'contact' }
  ]

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-xl border-b border-amber-100/50 shadow-lg shadow-amber-500/5' 
        : 'bg-white/80 backdrop-blur-md border-b border-amber-100/30'
    }`}>
      <div className="container mx-auto px-4 py-3 md:py-4">
        <div className="flex justify-between items-center">
          {/* Enhanced Logo - Mobile Responsive */}
          <Link href="/" className="flex items-center space-x-2 md:space-x-3 group transition-transform hover:scale-105 touch-manipulation">
            <div className="relative">
              <Image 
                src="/images/bdp-logo.png" 
                alt="BDP - Berufsverband deutscher Psychologen" 
                width={50} 
                height={50}
                className="w-10 md:w-14 h-10 md:h-14 drop-shadow-sm"
              />
              <div className="absolute inset-0 bg-amber-500/10 rounded-full blur-xl group-hover:bg-amber-500/20 transition-colors"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-lg md:text-xl font-bold text-slate-800 group-hover:text-amber-600 transition-colors">Dr. Anja Haile</span>
              <span className="text-xs text-amber-600 font-medium hidden sm:block">Psychologische Psychotherapeutin</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-1">
            {navigationLinks.map((link) => (
              <Link 
                key={link.href}
                href={link.href} 
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  link.active 
                    ? 'bg-amber-100 text-amber-700 shadow-sm' 
                    : 'text-slate-600 hover:text-amber-600 hover:bg-amber-50/80'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button & Mobile Menu - Optimized */}
          <div className="flex items-center space-x-2 md:space-x-3">
            <Link href="/booking">
              <Button className="bg-gradient-to-r from-amber-600 to-orange-700 hover:from-amber-700 hover:to-orange-800 text-white shadow-lg shadow-amber-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/30 active:scale-95 touch-manipulation text-sm md:text-base px-3 md:px-4 py-2 md:py-2.5">
                <Calendar className="w-4 h-4 mr-1 md:mr-2" />
                <span className="hidden sm:inline">Termin buchen</span>
                <span className="sm:hidden">Termin</span>
              </Button>
            </Link>
            
            {/* Mobile Menu Button - Larger Touch Target */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden p-3 touch-manipulation active:scale-95"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="w-6 h-6" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu - Enhanced */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 p-4 bg-white/95 backdrop-blur-xl rounded-2xl border border-amber-100/50 shadow-xl animate-in slide-in-from-top-2 duration-300">
            <div className="flex flex-col space-y-2">
              {navigationLinks.map((link) => (
                <Link 
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-4 rounded-xl text-base font-medium transition-all duration-200 touch-manipulation active:scale-95 ${
                    link.active 
                      ? 'bg-amber-100 text-amber-700' 
                      : 'text-slate-600 hover:text-amber-600 hover:bg-amber-50'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              {/* Mobile CTA in Menu */}
              <Link 
                href="/booking"
                className="mt-2 px-4 py-4 rounded-xl bg-gradient-to-r from-amber-600 to-orange-700 text-white font-semibold text-center touch-manipulation active:scale-95 transition-transform"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Calendar className="w-5 h-5 mr-2 inline" />
                Jetzt Termin buchen
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}