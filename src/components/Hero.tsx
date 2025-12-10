import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section 
      className="header14 cid-uwxCXuDQMI relative flex items-center py-6 md:py-10" 
      id="header14-8k"
      style={{
        background: 'linear-gradient(135deg, #7c3aed 0%, #a855f7 50%, #c084fc 100%)',
        minHeight: 'auto'
      }}
    >
      <div className="container-fluid mx-auto px-4 md:px-6 lg:px-8 relative z-10 w-full">
        <div className="row justify-content-center align-items-center flex flex-col md:flex-row gap-4 md:gap-6">
          
          {/* Product Image - Left Side */}
          <div className="col-12 col-md-6 lg:col-md-7 image-wrapper flex justify-center md:justify-start items-center">
            <img 
              src="https://ik.imagekit.io/affin/mitolyn-official.webp" 
              alt="mitolyn" 
              title="mitolyn"
              className="object-contain"
              style={{ 
                display: 'block',
                width: '100%',
                maxWidth: '600px',
                height: 'auto',
                minHeight: '500px',
                objectFit: 'contain'
              }}
            />
          </div>
          
          {/* Text Content - Right Side */}
          <div className="col-12 col-md-6 lg:col-md-5 text-wrapper">
            <h1 className="mbr-section-title mbr-fonts-style mb-2 display-1 text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white" style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.2' }}>
              <strong>Mitolyn: Advanced Metabolic Support & Weight Management</strong>
            </h1>
            <p className="mbr-text mbr-fonts-style display-7 text-base md:text-lg leading-relaxed mb-4 text-white" style={{ fontFamily: 'Arial, sans-serif' }}>
              Mitolyn delivers an innovative approach to metabolic enhancement, integrating research-validated plant-based components that maximize cellular power generation and efficient fat utilization. Mitolyn operates at the cellular energy core, where power is created, to amplify your body's inherent capacity to transform accumulated fat into accessible fuel.
              <br /><br />
              Mitolyn promotes lasting weight control via a comprehensive strategy targeting metabolic performance, power output, and cellular wellness. Mitolyn's distinctive blend assists in renewing peak mitochondrial activity, which naturally decreases with aging and lifestyle influences, allowing your system to function at maximum efficiency.
            </p>
            <div className="mbr-section-btn mt-4 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a 
                className="btn btn-danger display-4 bg-red-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-red-700 transition-all duration-300 inline-flex items-center justify-center text-base md:text-lg shadow-lg hover:shadow-xl" 
                href="https://b9c6ckcm0x6mdy38yird8e5uex.hop.clickbank.net/?&traffic_source=bing" 
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                </svg>
                ORDER NOW
              </a>
              <a 
                className="btn btn-danger display-4 bg-red-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-red-700 transition-all duration-300 inline-flex items-center justify-center text-base md:text-lg shadow-lg hover:shadow-xl" 
                href="https://b9c6ckcm0x6mdy38yird8e5uex.hop.clickbank.net/?&traffic_source=bing" 
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                Visit Official Site
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

