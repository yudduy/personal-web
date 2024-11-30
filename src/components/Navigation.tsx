import Link from 'next/link'

export default function Navigation() {
  return (
    <nav className="flex justify-between items-center px-6 py-8 max-w-6xl mx-auto w-full">
      <Link 
        href="/" 
        className="text-sm font-medium tracking-wider"
      >
        DUY
      </Link>
      <div className="space-x-12">
        <Link 
          href="/portfolio" 
          className="text-sm hover:text-gray-600 transition-colors"
        >
          PORTFOLIO
        </Link>
        <Link 
          href="/resume" 
          className="text-sm hover:text-gray-600 transition-colors"
        >
          RESUME
        </Link>
      </div>
    </nav>
  )
}
