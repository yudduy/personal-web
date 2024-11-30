import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

// This array would typically come from a database or API
const blogPosts = [
  {
    title: "Vertical AI Agents",
    description: "Analysts from Y-Comb and ventures wager on vertical AI agent as an emerging force within the AI/SaaS industry, challenging incumbent SaaS companies and potentially disrupting current business model. Here is the link to the recent Lightcone episode:",
    link: "https://www.youtube.com/watch?v=ASABxNenD_U&t=1180s"
  },
  {
    title: "Sustainable Urban Farming Technologies",
    description: "With application in transportation, buildings, and power generation, clean hydrogen are widely adopted across international sutainability policies and projects.",
    link: "https://www.iea.org/reports/the-future-of-hydrogen"
  },
  {
    title: "True Merit - Who Owns Your Acceptance Letters?",
    description: "My personal Booth Prize nominee research-based argument (RBA) on the dilemma of elite colleges and non-elite high school students.",
    link: "https://drive.google.com/file/d/1EBg8DY2BNiEmL9pjxNb_dmuNMzhiwxm2/view?usp=sharing"
  },
  // Add more blog posts here...
]

export default function Posts() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation />

      <main className="flex-grow px-6 py-24 max-w-4xl mx-auto w-full">
        <h1 className="text-4xl font-serif mb-12">All Posts</h1>
        <div className="space-y-12">
          {blogPosts.map((post, index) => (
            <article key={index} className="border-b pb-8">
              <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-600 mb-4">{post.description}</p>
              <a href={post.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                Read more
              </a>
            </article>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}
