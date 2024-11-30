'use client'

import { useEffect, useState } from 'react'

const titles = [
  { text: "ML Engineer", color: "text-blue-300" },
  { text: "Fullstack Developer", color: "text-green-300" },
  { text: "Research Assistant", color: "text-yellow-300" },
  { text: "College Admission Consultant", color: "text-pink-300" }
]

export default function RotatingTitles() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % titles.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="h-[1.5em] relative overflow-hidden">
      {titles.map((title, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full transition-opacity duration-500 ease-in-out ${title.color}`}
          style={{
            opacity: currentIndex === index ? 1 : 0,
          }}
        >
          <div className="text-xl">{title.text}</div>
        </div>
      ))}
    </div>
  )
}