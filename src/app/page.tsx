'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import RotatingTitles from '@/components/RotatingTitles'

// This array would typically come from a database or API
const blogPosts = [
  {
    title: "Vertical AI Agents",
    description: "Analysts from Y-Comb and ventures wager on vertical AI agent as an emerging force within the AI/SaaS industry, challenging incumbent SaaS companies and potentially disrupting current business model. Here is the link to the recent Lightcone episode:",
    link: "https://www.youtube.com/watch?v=ASABxNenD_U&t=1180s"
  },
  {
    title: "The Future of Clean Hydrogen",
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

export default function Home() {
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in')
        }
      })
    }, { threshold: 0.1 })

    const elements = document.querySelectorAll('.animate-on-scroll')
    elements.forEach((el) => observerRef.current?.observe(el))

    return () => observerRef.current?.disconnect()
  }, [])
  const images = [
    { src: '/images/home/scf.jpeg', description: 'Hosted the recent 2024 Stanford Career Fair this past fall!' },
    { src: '/images/home/jkc.jpg', description: 'One out of 60 scholars who received a full-ride scholarship to any college in the US!' },
    { src: '/images/home/skanner.jpg', description: 'I received my first scholarship from the Skanner Foundation!' },
    { src: '/images/home/liondance.png', description: 'Lion dancing has an integral part of my life.' },
    { src: '/images/home/hike.png', description: 'I am an avid hiker!' },
  ]

  const recentPosts = blogPosts.slice(0, 3)

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation />

      <main className="flex-grow px-6 py-24 max-w-6xl mx-auto space-y-24 w-full">
        <section className="space-y-12">
          <div className="animate-on-scroll opacity-0 transition-opacity duration-1000">
            <h1 className="text-5xl font-serif mb-4">
              Hello, I&apos;m Duy Nguyen 😆
            </h1>
            <RotatingTitles />
          </div>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p className="animate-on-scroll opacity-0 transition-opacity duration-1000 delay-300 text-2xl font-bold">
              CS @ Stanford University
            </p>
            <p className="animate-on-scroll opacity-0 transition-opacity duration-1000 delay-400">
              10 years in Ho Chi Minh City, Vietnam
            </p>
            <p className="animate-on-scroll opacity-0 transition-opacity duration-1000 delay-500">
              9 years in Portland, Oregon
            </p>
            <p className="animate-on-scroll opacity-0 transition-opacity duration-1000 delay-700">
              📧 duynguy@stanford.edu
            </p>
          </div>
        </section>

        {/* Horizontal Scrolling Image Gallery */}
        <section className="animate-on-scroll opacity-0 transition-opacity duration-1000">
          <div className="relative overflow-x-auto pb-6">
            <div className="flex space-x-6">
              {images.map((image, index) => (
                <div key={index} className="flex-none w-[300px]">
                  <div className="aspect-square relative rounded-lg overflow-hidden">
                    <Image 
                      src={image.src}
                      alt={`Gallery image ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="mt-3 text-sm text-gray-600">{image.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Things I'm Excited About Section */}
        <section className="animate-on-scroll opacity-0 transition-opacity duration-1000">
          <h2 className="text-3xl font-serif mb-8">Things I&apos;m Excited About</h2>
          <div className="space-y-8">
            {recentPosts.map((post, index) => (
              <article key={index} className="border-b pb-8">
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">
                  {post.description}
                </p>
                <a href={post.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  Read more
                </a>
              </article>
            ))}
          </div>
          <div className="mt-8">
            <Link href="/posts" className="inline-block px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
              All Posts
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}