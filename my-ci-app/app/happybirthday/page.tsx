// app/happy-birthday/page.tsx

'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function HappyBirthday() {
  const [showConfetti, setShowConfetti] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => setShowConfetti(true), 1000)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-pink-100 via-red-200 to-yellow-100 p-6 text-center">
      <h1 className="text-4xl md:text-6xl font-bold text-pink-700 mb-4">
        🎉 Happy Birthday Harkirat! 🎂
      </h1>
      <p className="text-xl md:text-2xl text-gray-700 max-w-xl">
        Wishing you a day full of joy, laughter, and lots of cake! Your impact on the dev community is truly appreciated.
      </p>

      <Image
        src="https://media.giphy.com/media/3o6ZsYwT8cGDdHJJYA/giphy.gif"
        alt="Birthday Cake"
        width={300}
        height={300}
        className="mt-8 rounded-xl"
      />

      {showConfetti && (
        <iframe
          src="https://giphy.com/embed/l4FGuhL4U2WyjdkaY"
          width="100%"
          height="200"
          frameBorder="0"
          className="giphy-embed mt-8"
          allowFullScreen
        ></iframe>
      )}
    </div>
  )
}
