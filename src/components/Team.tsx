const Team = () => {
  return (
    <section id="team" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Our Team
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Our diverse team of experts brings together decades of combined experience in software development, cloud architecture, cybersecurity, and IT consulting. We&apos;re committed to staying at the forefront of technology trends to deliver the best solutions for our clients.
            </p>
            <p className="text-lg text-gray-600">
              With certifications from leading technology providers and a track record of successful projects across various industries, we have the expertise to tackle your most challenging IT initiatives.
            </p>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-blue-400 to-purple-600 rounded-lg overflow-hidden shadow-xl">
              <div className="aspect-video bg-gray-200 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <svg className="w-24 h-24 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <p className="text-lg">Team Photo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team

