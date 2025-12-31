'use client'

import { motion } from 'framer-motion'

const projects = [
  // {
  //   title: '{Insert another project}',
  //   description: 'An in-depth look at the classic debate.',
  //   links: [
  //     { label: 'View Blog Post', url: 'https://yourblog.com/tabs-vs-spaces', type: 'repo' },
  //   ],
  // },
  {
    title: 'Exploring the Effectiveness of Using LLM-Based Chatbots for Combatting Misinformation',
    description: 'In this group project, I helped design and analyze an experiment testing how AI chatbots could reduce belief in political conspiracy theories. I led the data cleaning and manipulation, exploratory data analysis, and regression analyses to see what actually drives belief change. Our findings showed that it’s less about the chatbot’s “identity” and more about trust and the quality of the conversation. The project gave me experience with both experimental design and data science techniques to study real-world impacts of AI.',
    links: [
      { label: 'View PDF', url: '/images/Simons_Kailey_17.275_paper.pdf', type: 'pdf' },
    ],
  },
  {
    title: 'Economic Analysis of Online Market Competition: Regressions and Price Dispersion Evidence from Olist',
    description: 'I analyzed over 100,000 Olist marketplace transactions using Python, Pandas, and visualized trends with Matplotlib and Seaborn to study how competition and price transparency affect seller pricing. Through panel data and fixed-effects regressions, I quantified how base pricing and shipping obfuscation drive price dispersion in online markets. This project highlights my ability to work with large datasets, generate insights through data visualization, and implement empirical models to solve complex problems.',
    links: [
      { label: 'View PDF', url: '/images/Simons_Kailey_14.27_paper.pdf', type: 'pdf' },
      { label: 'View Notebook', url: '/images/14.27_final_code.ipynb', type: 'notebook' }
    ],
  },
  {
    title: 'Personal Portfolio Website',
    description: 'I built this website to show off my projects and experiences! It’s made with Next.js, TypeScript, and TailwindCSS, and includes smooth animations and interactive components. The site is fully responsive, so it looks good on any device.',
    links: [
      { label: 'View GitHub Repo', url: 'https://github.com/kaileysimonss/kailey-website', type: 'repo' },
    ],
  },
]

const internships = [
  {
    title: 'Data & AI Analyst Intern at Accenture',
    description: 'Coming soon (Summer 2026)!'
  },
  {
    title: 'Data Science & AI Engineer Intern at Nasdaq',
    description: 'Coming soon (Winter 2026)!'
  },
  {
    title: 'Software Engineer Intern at Vanguard',
    description: 'I pioneered the integration of AI in the Portfolio Review department by creating a real-time analytics platform with AWS Lambda and Bedrock, giving analysts sharper insights into fund manager performance. I collaborated with fellow interns to build a GARCHX model that nowcasted S&P 500 volatility, strengthening investment strategy decisions. Beyond the technical work, I scoped requirements, designed architecture, deployed solutions, and presented findings to senior leadership to influence long-term strategy.'
  },
  {
    title: 'AI Engineer Intern at Daylit',
    description: 'I built a web scraping pipeline powered by Retrieval-Augmented Generation (RAG) to screen loan applicants’ online presence for criminal records or signs of fraud. This system automated the collection and analysis of real-time data, reducing manual review and improving detection efficiency. By integrating RAG with scalable scraping and ETL workflows, the pipeline provided faster, more reliable insights for applicant risk assessment.'
  },
]

const research = [
  {
    title: 'Undergraduate Researcher at MIT Center for Collective Intelligence',
    description: 'I designed a feedback mechanism for Supermind Ideator, a system that uses LLMs and collective intelligence to support organizational design. I engineered prompts for models including GPT-4o to generate creative, pragmatic, and critical feedback modes, and designed surveys and experimental studies to evaluate their effectiveness. I also collaborated with researchers to analyze results using ANOVA and co-authored a research paper on how people respond to AI feedback with different “personalities.”'
  },
  {
    title: 'Undergraduate Research Assistant at MIT Media Lab',
    description: 'I improved the conversational skills of Jibo, the world\'s first social family robot, by cleaning and analyzing over 75,000 Q&A pairs and engineering prompts for GPT-3.5 Turbo and GPT-4. I also applied retrieval-augmented generation techniques to increase response accuracy while preserving Jibo’s distinctive interaction style.'
  },
]

function AnimatedList({
  items,
}: {
  items: {
    title: string
    description: string
    links?: { label: string; url: string; type: string }[]
    link?: string
  }[]
}) {
  return (
    <ul className="space-y-8 max-w-6xl mx-auto px-6">
      {items.map((item, index) => {
        const isEven = index % 2 === 0
        const directionX = isEven ? -50 : 50

        return (
          <motion.li
            key={item.title}
            initial={{ opacity: 0, x: directionX }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.5 }}
            className="border rounded p-8 shadow-sm hover:shadow-md"
          >
            <h3 className="text-lg font-semibold text-blue-600">{item.title}</h3>
            <p className="mt-1 text-gray-700 dark:text-gray-300">{item.description}</p>

            {/* Render links as buttons */}
            {item.links && (
              <div className="mt-4 flex flex-wrap gap-3">
                {item.links.map((link, i) => (
                  <a
                    key={i}
                    href={link.url}
                    target={link.type !== 'repo' ? '_blank' : '_self'}
                    rel={link.type !== 'repo' ? 'noopener noreferrer' : ''}
                    download={link.type === 'pdf' || link.type === 'notebook'}
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            )}

            {/* Fallback for old single-link projects */}
            {!item.links && item.link && (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-blue-500 hover:underline"
              >
                View Project
              </a>
            )}
          </motion.li>
        )
      })}
    </ul>
  )
}

export function BlogPosts() {
  return (
    <div className="space-y-16">
      {/* Portfolio Section */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-center text-indigo-400">
          My Personal Portfolio
        </h2>
        <AnimatedList items={projects} />
      </section>

      {/* Internship Section */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-center text-indigo-400">
          My Internship Experiences
        </h2>
        <AnimatedList items={internships} />
      </section>
      {/* Research Section */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-center text-indigo-400">
          My Research Experiences
        </h2>
        <AnimatedList items={research} />
      </section>
    </div>
  )
}
