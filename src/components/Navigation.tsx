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
        <a 
          href="https://drive.google.com/file/d/1rQvDcThI_OT_NEsOCeHxvZA_FU04_5z4/view"
          className="text-sm hover:text-gray-600 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          RESUME
        </a>
      </div>
    </nav>
  )
}
