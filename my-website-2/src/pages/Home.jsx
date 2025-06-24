import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      {/* This container will stack vertically on mobile (the default) and be horizontal on md screens and up */}
      <div className="flex flex-col md:flex-row">
        {/* Image container - full width on mobile, fixed width on larger screens */}
        <div className="content-gap mb-8 w-full shrink-0 md:mb-0 md:w-80">
          <img src="/headshot.jpeg" alt="Profile" className="w-full rounded-lg shadow-md" />
        </div>

        {/* Text container */}
        <div className="flex-1">
          <p className="mb-4 text-xl text-gray-700">
            Hey, I&apos;m Zairah — an Artist, a Wanderer, and a Scientist. I&apos;m into AI, travel,
            and bending my mind around time, space, and meaning.
          </p>
          <div className="w-126 mb-6 h-1 rounded bg-purple-200"></div>
          <p className="mb-4" text-lg>
            <span className="text-yellow-600">2022–2025:</span> Spent 3 years as Founding Data
            Scientist at You.com, an AI startup redefining search and productivity. During this
            time, I led the development of the company&apos;s core analytics infrastructure,
            experimentation frameworks, and AI systems. My work played a pivotal role in shaping
            product and engineering strategy and enabled data-driven growth across marketing and sales. 
            This contributed to 
            a 40× increase in revenue, eight-figure ARR,
            a $50M Series B funding round, and the hiring of a high-performing team of six data
            engineers and data scientists.{' '}
          </p>
          <p className="mb-4" text-lg>
            <span className="text-yellow-600">2017-2022:</span> I was a Data Scientist at IBM AI
            Platform focusing on Natural Language Processing (NLP) and AI Fairness.
            <br />
            <br />
            <span className="inline-block pl-8">
                Conversational AI: Built production-scale question-answering systems and search services using deep learning and NLP, developing semantic matching microservices, query optimization techniques, ML-based ranking algorithms, and comprehensive evaluation pipelines for relevance assessment and performance benchmarking.
            </span>
            <br />
            <br />
            <span className="inline-block pl-8">
              AI Fairness: Co-authored patented research on fair transfer learning techniques for risk assessment scenarios where protected attributes such as race and gender are missing.
               Introducing methods that maintain fairness across different domains without requiring sensitive demographic data in both source and target populations. 
               Contributed to IBM&apos;s popular AI Fairness 360 toolkit with 2,300+ GitHub stars.
            </span>
            <br />
          </p>
          <p className="mb-4" text-lg>
            <span className="text-yellow-600">2015-2017:</span> I earned my M.S. in Computer Science
            from the University of Pennsylvania where I contributed research on scikit-learn model
            performance, helping set new guidelines for machine learning best practices.
          </p>
          <p className="mb-4" text-lg>
            <span className="text-yellow-600">Before 2017:</span> The timeline gets fuzzy here. There were spreadsheets, mistakes, dreams, and probably a wormhole. 
            <strong>{' '}Time is playful, so I stopped measuring it.{' '}</strong>
          </p>
          <p className="mb-4" text-lg>
            My work has been published at top conferences like AAAI and {' '}
            <a
                href="https://scholar.google.com/citations?user=6z2FJZkAAAAJ&hl=en"
                className="text-blue-500 underline hover:text-blue-700"
                target="_blank"
                rel="noopener noreferrer"
              >
                 cited over 500 times.
              </a>
              {' '}I&apos;m a regular speaker at leading Data & AI conferences, including NeurIPS, AI4, AI
            Hardware & Edge AI Summit, and ODSC.
          </p>

          <h1 className="mb-4 mt-12 text-4xl font-bold text-gray-800">Patents and Publications</h1>
          <div className="w-126 mb-6 h-1 rounded bg-purple-200"></div>
          <ul className="mb-4 list-disc pl-6">
          <li className="mb-6">
              <a
                href="https://patents.google.com/patent/US20210158204A1/en"
                className="text-blue-500 underline hover:text-blue-700"
                target="_blank"
                rel="noopener noreferrer"
              >
                Enhancing Fairness in Transfer Learning for Machine Learning Models with Missing Protected Attributes in Source or Target Domains
              </a>
              <br />
              <span className="text-gray-700">
              Karthikeyan Natesan Ramamurthy, Amanda Coston, Dennis Wei, Kush Varshney, Skyler Speakman, <strong>Zairah Mustahsan</strong>, and Supriyo Chakraborty
              </span>
              <br />
              <span className="italic text-gray-600">
                US Patent 11,443,236
              </span>
              , September 13, 2022.
            </li>

            <li className="mb-6">
              <a
                href="https://dl.acm.org/doi/abs/10.1145/3306618.3314236"
                className="text-blue-500 underline hover:text-blue-700"
                target="_blank"
                rel="noopener noreferrer"
              >
                Fair Transfer Learning with Missing Protected Attributes
              </a>
              <br />
              <span className="text-gray-700">
                Amanda Coston, Karthikeyan Natesan Ramamurthy, Dennis Wei, Kush R. Varshney, Skyler Speakman, <strong>Zairah Mustahsan</strong>, and Supriyo Chakraborty.
              </span>
              <br />
              <span className="italic text-gray-600">
                AAAI/ACM Conference on Artificial Intelligence, Ethics, and Society
              </span>
              , Honolulu, HI, pp. 91–98, January 2019.
            </li>

            <li className="mb-6">
              <a
                href="https://pubmed.ncbi.nlm.nih.gov/29218881/"
                className="text-blue-500 underline hover:text-blue-700"
                target="_blank"
                rel="noopener noreferrer"
              >
                Data-driven Advice for Applying Machine Learning to Bioinformatics Problems
              </a>
              <br />
              <span className="text-gray-700">
                R. S. Olson, W. L. Cava, <strong>Z. Mustahsan</strong>, A. Varik, J. H. Moore.
              </span>
              <br />
              <span className="italic text-gray-600">
                Pacific Symposium on Biocomputing
              </span>
              , 2018.
            </li>
          </ul>

          <h1 className="mb-4 mt-12 text-4xl font-bold text-gray-800">Little more about me</h1>
          <div className="w-126 mb-6 h-1 rounded bg-purple-200"></div>
          <p className="mb-4" text-lg>
            I was born and raised in Kashmir. It&apos;s a ~70K sq mile land in the Northern
            Himalayas bordering South and Central Asia. Kashmir has a very long and ongoing history
            of colonialism. Often it&apos;s labeled as &quot;too complicated&quot; for a peaceful
            resolution. But the tragic reality is as simple as it can get for those who understand.
            <br />
            <br />
            Still, the land speaks for itself. Kashmir is home to some of the world&apos;s most
            stunning mountains, the purest saffron, intricate woodwork, carpets, embroidery,
            papier-mâché, centuries-old poetry, and walnuts that could ruin you for all others.
            <br />
            <br />
            I left Kashmir many years back to pursue higher education. I miss it every day.
            <br />
            <br />
            I love to travel and sit in cafes. I often venture into adventure sports. I believe
            travel opens unimaginable new doors and expands one&apos;s horizons by exposure to
            diverse cultures, landscapes, and people that are so inspiring.
            <br />
            <br />
            I enjoy reading history, literature, and philosophy.
            <br />
            <br />
            I mostly rely on independent resources and people&apos;s lived experiences for history.
            The ones that challenge the status quo and help break the institutional narratives that
            we&apos;re conditioned to believe.
            <br />
            <br />
            I often contemplate the nature and meaning of time. Is time an illusion? How is memory
            related to time? Why do some days feel like years and some years feel like seconds? To
            this end, I&apos;ve read {' '}
            <a
                href="https://iep.utm.edu/time/"
                className="text-blue-500 underline hover:text-blue-700"
                target="_blank"
                rel="noopener noreferrer"
              >
                The Philosophy of Time
            </a>{' '} and {' '}

            <a
                href="https://plato.stanford.edu/entries/consciousness-temporal/"
                className="text-blue-500 underline hover:text-blue-700"
                target="_blank"
                rel="noopener noreferrer"
              >
                 Temporal Consciousness
            </a>{' '} 
              word to word several times. I don&apos;t know yet where I&apos;m going with all
            this. I guess &quot;time&quot; will tell.
            <br />
            <br />
            I sometimes write about the meaning of time <Link to="/musings" className="text-blue-500 underline transition hover:scale-105 hover:text-blue-600">here.</Link>
            <br />
            <br />
            Having multiple hobbies and interests can feel overwhelming 🙂
            <br />
            <br />
            Ironically, the wide variety of things that I&apos;ve read and my experiences, stitched
            with my inner monologue, have given me a sense of unification, opening me to the world
            of Sacred Geometry. I find harmony in observing the language of shapes and patterns
            hidden in the world around us. I think it reflects the underlying order of the universe
            — embodying Oneness with all of life.
          </p>
        </div>
      </div>
    </div>
  );
}
