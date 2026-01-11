'use client'

import Link from 'next/link'
import { useState } from 'react'

interface BlogPost {
  id: number
  date: string
  author: string
  title: string
  description: string
  category: string
  categoryColor: string
}

const BlogList = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      date: 'January 15, 2024',
      author: 'GMEra Team',
      title: 'The Future of Cloud Computing in Enterprise',
      description: 'Exploring how cloud technologies are reshaping business operations and driving digital transformation.',
      category: 'Cloud Solutions',
      categoryColor: 'bg-blue-500',
    },
    {
      id: 2,
      date: 'January 10, 2024',
      author: 'Security Team',
      title: 'Cybersecurity Best Practices for 2024',
      description: 'Essential security measures every organization should implement to protect their digital assets.',
      category: 'Security',
      categoryColor: 'bg-red-500',
    },
    {
      id: 3,
      date: 'January 5, 2024',
      author: 'Development Team',
      title: 'Modern Software Development Trends',
      description: 'Discover the latest trends in software development and how they can benefit your business.',
      category: 'Development',
      categoryColor: 'bg-green-500',
    },
    {
      id: 4,
      date: 'December 28, 2023',
      author: 'Data Analytics Team',
      title: 'Leveraging AI and Machine Learning for Business Growth',
      description: 'How artificial intelligence and machine learning are revolutionizing business decision-making.',
      category: 'Data Analytics',
      categoryColor: 'bg-purple-500',
    },
    {
      id: 5,
      date: 'December 20, 2023',
      author: 'Mobile Team',
      title: 'The Rise of Mobile-First Development',
      description: 'Understanding why mobile-first approaches are crucial for modern application development.',
      category: 'Mobile Development',
      categoryColor: 'bg-pink-500',
    },
    {
      id: 6,
      date: 'December 15, 2023',
      author: 'Consulting Team',
      title: 'Digital Transformation Strategies for 2024',
      description: 'Key strategies and insights for successful digital transformation initiatives.',
      category: 'IT Consulting',
      categoryColor: 'bg-indigo-500',
    },
  ]

  return (
    <section className="pt-24 pb-20 bg-gradient-to-b from-gray-50 to-white min-h-screen">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gray-900">
            Our Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Insights, updates, and thought leadership from the GMEra Innovations team.
          </p>
        </div>

        {/* Blog Posts */}
        <div className="max-w-4xl mx-auto space-y-6">
          {blogPosts.map((post, index) => (
            <div
              key={post.id}
              className={`bg-gray-50 rounded-lg p-6 md:p-8 transition-all duration-300 hover:shadow-xl hover:scale-[1.02] border border-gray-200 ${
                hoveredId === post.id ? 'shadow-xl scale-[1.02]' : ''
              }`}
              onMouseEnter={() => setHoveredId(post.id)}
              onMouseLeave={() => setHoveredId(null)}
              style={{
                animation: `fade-in-up 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div className="flex items-center space-x-4 mb-3 md:mb-0">
                  <div className="flex items-center text-gray-600 text-sm">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {post.date}
                  </div>
                  <div className="flex items-center text-gray-600 text-sm">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    {post.author}
                  </div>
                </div>
                <span
                  className={`${post.categoryColor} text-white px-4 py-1 rounded-full text-sm font-semibold inline-block w-fit`}
                >
                  {post.category}
                </span>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">
                {post.title}
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {post.description}
              </p>
              <Link
                href={`/blog/${post.id}`}
                className="text-blue-600 hover:text-blue-800 font-semibold inline-flex items-center group transition-colors"
              >
                Read More
                <svg
                  className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BlogList
