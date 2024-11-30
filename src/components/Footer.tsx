import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-6 mt-24">
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <p className="text-sm text-gray-600">© {new Date().getFullYear()} Duy Nguyen</p>
        <div className="space-x-4">
          <Link href="mailto:duynguy@stanford.edu" className="text-sm text-gray-600 hover:text-gray-900">
            Email
          </Link>
          <Link href="www.linkedin.com/in/duynquyen" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 hover:text-gray-900">
            LinkedIn
          </Link>
        </div>
      </div>
    </footer>
  )
}
