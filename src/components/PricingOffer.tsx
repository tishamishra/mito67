import Image from 'next/image';

export default function PricingOffer() {
  return (
    <>
      <section className="content4 cid-uwzHDEZNYB py-10 text-center" id="content4-v" style={{ background: '#1098b7' }}>
        <div className="container mx-auto px-4">
          <div className="row justify-center">
            <div className="title col-md-12 col-lg-10">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white" style={{ fontFamily: 'Arial, sans-serif' }}>
                <strong>Exclusive Offer – Hurry, Limited Time Pricing!</strong>
              </h3>
              <h4 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4 text-white">
                <strong>Don't Miss Out – Limited Stock Available!</strong>
              </h4>
            </div>
          </div>
        </div>
      </section>

      <section className="team1 cid-tB1z7NONXX py-12 bg-white" id="team1-h">
        <div className="container mx-auto px-4">
          <div className="row justify-center flex flex-col md:flex-row gap-6">
            <div className="col-sm-6 col-lg-4">
              <div className="card-wrap bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-gray-200">
                <div className="image-wrap">
                  <a href="https://b9c6ckcm0x6mdy38yird8e5uex.hop.clickbank.net/?&traffic_source=bing" target="_blank" rel="noopener noreferrer">
                    <Image 
                      src="https://ik.imagekit.io/affin/mitolyn-1-bottle.webp?updatedAt=1765361274882" 
                      alt="mitolyn-30-day-supply" 
                      width={600} 
                      height={600}
                      className="w-full h-auto"
                      style={{ 
                        maxWidth: '100%', 
                        width: '100%',
                        height: 'auto',
                        minHeight: '500px',
                        objectFit: 'contain'
                      }}
                    />
                  </a>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-4">
              <div className="card-wrap bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-gray-200">
                <div className="image-wrap">
                  <a href="https://b9c6ckcm0x6mdy38yird8e5uex.hop.clickbank.net/?&traffic_source=bing" target="_blank" rel="noopener noreferrer">
                    <Image 
                      src="https://ik.imagekit.io/affin/mitolyn-6-bottles.webp?updatedAt=1765361274884" 
                      alt="mitolyn-180-day-supply" 
                      width={600} 
                      height={600}
                      className="w-full h-auto"
                      style={{ 
                        maxWidth: '100%', 
                        width: '100%',
                        height: 'auto',
                        minHeight: '500px',
                        objectFit: 'contain'
                      }}
                    />
                  </a>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-4">
              <div className="card-wrap bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-gray-200">
                <div className="image-wrap">
                  <a href="https://b9c6ckcm0x6mdy38yird8e5uex.hop.clickbank.net/?&traffic_source=bing" target="_blank" rel="noopener noreferrer">
                    <Image 
                      src="https://ik.imagekit.io/affin/mitolyn-3-bottle.webp?updatedAt=1765361274883" 
                      alt="mitolyn-90-day-supply" 
                      width={600} 
                      height={600}
                      className="w-full h-auto"
                      style={{ 
                        maxWidth: '100%', 
                        width: '100%',
                        height: 'auto',
                        minHeight: '500px',
                        objectFit: 'contain'
                      }}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="content5 cid-uwyA6RuJFh py-4 bg-white" id="content5-s">
        <div className="container mx-auto px-4">
          <div className="row justify-center">
            <div className="col-md-12 col-lg-11 JCB" style={{ border: '3px solid #2e2e2e', padding: '15px', borderRadius: '15px', backgroundColor: '#fdb831' }}>
              <p className="mbr-text mbr-fonts-style display-7 text-base md:text-lg text-black text-center" style={{ fontFamily: 'Arial, sans-serif', margin: 0 }}>
                WARNING: Stock levels of mitolyn™ are limited. Accept your reserved bottle above NOW before your discount expires.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

