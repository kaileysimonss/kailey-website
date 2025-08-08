'use client'

import { motion } from 'framer-motion'

const projects = [
  {
    title: '{Insert my app dev project}',
    description: 'A fast and efficient Vim configuration.',
    link: 'https://github.com/yourusername/vim-setup',
  },
  {
    title: '{insert my datasci project}',
    description: 'Research paper on static typing benefits.',
    link: 'https://example.com/static-typing.pdf',
  },
  {
    title: 'Economic Analysis of Online Market Competition: Regressions and Price Dispersion Evidence from Olist',
    description: 'A portfolio with dark mode support and sleek design.',
    link: 'https://github.com/yourusername/dark-mode-portfolio',
  },
  {
    title: 'Policy Brief',
    description: 'An in-depth look at the classic debate.',
    link: 'https://yourblog.com/tabs-vs-spaces',
  },
] 

export function BlogPosts() {
  return (
    <ul className="space-y-8 max-w-6xl mx-auto px-6">
      {projects.map((project, index) => {
        const isEven = index % 2 === 0
        const directionX = isEven ? -50 : 50

        return (
          <motion.li
            key={project.title}
            initial={{ opacity: 0, x: directionX }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.5 }}
            className="border rounded p-8 shadow-sm hover:shadow-md min-h-[200px]"
          >
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-semibold text-blue-600 hover:underline"
            >
              {project.title}
            </a>
            <p className="mt-1 text-gray-700 dark:text-gray-300">
              {project.description}
            </p>
          </motion.li>
        )
      })}
    </ul>
  )
}
