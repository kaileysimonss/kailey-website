import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-14 text-7xl font-extrabold tracking-tight text-indigo-400">
        Kailey Simons
      </h1>

      <div className="max-w-6xl mx-auto px-6 mb-12">
        <p className="text-lg text-gray-300 leading-relaxed">
          {`I'm a Vim enthusiast and tab advocate, finding unmatched efficiency in
          Vim's keystroke commands and tabs' flexibility for personal viewing
          preferences. This extends to my support for static typing, where its
          early error detection ensures cleaner code, and my preference for dark
          mode, which eases long coding sessions by reducing eye strain.`}
        </p>
      </div>

      {/* Full width horizontal line */}
      <hr className="border-t border-gray-700 w-screen mx-[calc(-50vw+50%)] mb-12" />

      {/* Bigger blog section heading */}
      <h2 className="text-4xl font-semibold text-indigo-400 mb-8 max-w-6xl mx-auto px-6">
        My Portfolio
      </h2>

      <div className="my-8 max-w-6xl mx-auto px-6">
        <BlogPosts />
      </div>
    </section>
  )
}
