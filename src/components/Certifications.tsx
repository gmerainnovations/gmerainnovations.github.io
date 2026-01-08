const Certifications = () => {
  return (
    <section id="certifications" className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Certifications & Expertise
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Our team holds industry-leading certifications and maintains the highest standards of excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="animate-slide-in-left">
            <h3 className="text-2xl font-bold mb-6 text-gray-900 flex items-center">
              <span className="w-1 h-8 bg-blue-600 mr-3 rounded-full"></span>
              Team Certifications
            </h3>
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-blue-600 hover-lift group">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 group-hover:scale-150 transition-transform"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">AWS Certified Solutions Architect</h4>
                    <p className="text-gray-600">Expert-level certification in designing distributed systems on AWS</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-blue-600 hover-lift group">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 group-hover:scale-150 transition-transform"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">Microsoft Azure Administrator</h4>
                    <p className="text-gray-600">Proven expertise in managing Azure cloud infrastructure</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="animate-slide-in-right">
            <h3 className="text-2xl font-bold mb-6 text-gray-900 flex items-center">
              <span className="w-1 h-8 bg-green-600 mr-3 rounded-full"></span>
              Key Achievements
            </h3>
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-green-600 hover-lift group">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 group-hover:scale-150 transition-transform"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">ISO 27001 Certified Organization</h4>
                    <p className="text-gray-600">International standard for information security management</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-green-600 hover-lift group">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 group-hover:scale-150 transition-transform"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">SOC 2 Type II Compliant</h4>
                    <p className="text-gray-600">Verified security, availability, and confidentiality controls</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Certifications

