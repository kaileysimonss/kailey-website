'use client'

import { BlogPosts } from 'app/components/posts'
import Image from 'next/image'
import Link from 'next/link'

export default function Page() {
  return (
    <section>
      <h1 className="mb-14 text-7xl font-extrabold tracking-tight text-indigo-400">
        Swimming
      </h1>

      <div className="max-w-6xl mx-auto px-6 mb-12 flex flex-col items-start gap-6">
        {/* Paragraphs */}
        <p className="text-2xl text-gray-300 leading-relaxed md:w-2/3 md:-ml-5">
          {`I swim for MIT Swim and Dive, and I specialize in 50s and 100s of every stroke! I love being in the water and competing, and swimming has taught me so much about discipline, perseverance, and teamwork. I'm grateful for the opportunities swimming has given me, including traveling for meets and forming lifelong friendships with my teammates.`}
        </p>
        <p className="text-2xl text-gray-300 leading-relaxed md:w-2/3 md:-ml-5">
          {'Here is a link to multiple SwimSwam articles written about me and my teammates at MIT! '}
          <Link
            href="https://swimswam.com/tag/kailey-simons/"
            target="_blank"
            className="text-blue-500 hover:underline"
          >
            Read them here
          </Link>
        </p>
        <p className="text-2xl text-gray-300 leading-relaxed md:w-2/3 md:-ml-5">
          {`Here are some photos of me swimming!`}
        </p>

        {/* First Image - centered, full-width */}
        <div className="w-full flex justify-center mb-6">
          <Image
            src="/images/kaileyswim2.jpg"
            alt="First Image"
            width={1920}
            height={500}
            className="w-full max-w-full h-auto object-cover rounded-lg"
          />
        </div>

        {/* Second Image - true dimensions, centered */}
        <div className="w-full flex justify-center mb-6">
          <Image
            src="/images/kaileyswim1.jpg"
            alt="Second Image"
            width={800} // actual image width
            height={600} // actual image height
            className="h-auto rounded-lg"
          />
        </div>
      </div>

      <hr className="border-t border-gray-700 w-screen mx-[calc(-50vw+50%)] mb-12" />

      
    </section>
  )
}
