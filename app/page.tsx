import { BlogPosts } from 'app/components/posts'
import Image from 'next/image'

export default function Page() {
  return (
    <section>
      <h1 className="mb-14 text-7xl font-extrabold tracking-tight text-indigo-400">
        Kailey Simons
      </h1>

      <div className="max-w-6xl mx-auto px-6 mb-12 flex flex-col md:flex-row items-start gap-8">
        {/* Text Section */}
        <div className="md:w-2/3 space-y-6">
          <p className="text-lg md:text-2xl text-gray-300 leading-relaxed">
            Hi! My name is Kailey Simons and I'm a junior at MIT studying Computer Science, Economics, and Data Science (6-14) and Business Analytics (15-2). Alongside my academics, I’m a varsity swimmer for MIT and serve as co-president of the Undergraduate Economics Association as well as on the Undergraduate Student Body Sustainability Committee. Outside of school, I’m the oldest of five siblings, which has made family an important part of my life, and I love spending time with them and my friends. In my free time, I enjoy cooking, traveling, lifting, and being outdoors.
          </p>
          <p className="text-lg md:text-2xl text-gray-300 leading-relaxed">
            I love using data to solve real-world problems and create meaningful change. 
            My interests include data science, machine learning, and web development. 
            I'm passionate about learning new skills and taking on challenges that push 
            me to grow both personally and professionally. Feel free to explore my portfolio 
            below to see some of the projects I've worked on!
          </p>
        </div>

        {/* Image Section */}
        <div className="md:w-1/3 flex justify-center md:justify-end">
          <Image
            src="https://images.sidearmdev.com/resize?url=https%3a%2f%2fdxbhsrqyrr690.cloudfront.net%2fsidearm.nextgen.sites%2fmitathletics.com%2fimages%2f2024%2f11%2f15%2fSimons_Kailey.jpg&width=600&type=webp"
            alt="Kailey Simons"
            width={600}
            height={600}
            className="rounded-lg object-cover w-full h-auto max-w-[300px]"
          />
        </div>
      </div>

      <hr className="border-t border-gray-700 w-screen mx-[calc(-50vw+50%)] mb-12" />

      <div className="my-8 max-w-6xl mx-auto px-6">
        <BlogPosts />
      </div>
    </section>
  )
}
