import Image from 'next/image';

export default function WhatIsMitolyn() {
  return (
    <>
      <section className="content4 cid-uwxKLxAzbL py-10 text-center" id="mitolyn-about" style={{ background: '#8b5cf6' }}>
        <div className="container mx-auto px-4">
          <div className="row justify-center">
            <div className="title col-md-12 col-lg-10">
              <h3 className="mbr-section-title mbr-fonts-style align-center mb-4 display-2 text-3xl md:text-4xl lg:text-5xl font-bold text-white" style={{ fontFamily: 'Arial, sans-serif' }}>
                <strong>Why Choose mitolyn?</strong>
              </h3>
            </div>
          </div>
        </div>
      </section>

      <section className="image2 cid-uwxLwAOlez py-12 bg-white" id="image2-b">
        <div className="container mx-auto px-4">
          <div className="row align-items-center flex flex-col lg:flex-row gap-8">
            <div className="col-12 col-lg-5">
              <div className="image-wrapper">
                <img 
                  src="https://ik.imagekit.io/affin/mitolyn-supplement.webp?updatedAt=1765361274900" 
                  alt="mitolyn Supplement" 
                  title="mitolyn"
                  className="w-full h-auto rounded-lg shadow-xl"
                  style={{ 
                    maxWidth: '100%', 
                    width: '100%',
                    height: 'auto',
                    minHeight: '500px',
                    objectFit: 'contain'
                  }}
                />
              </div>
            </div>
            <div className="col-12 col-lg">
              <div className="text-wrapper">
                <h3 className="mbr-section-title mbr-fonts-style mb-3 display-2 text-2xl md:text-3xl lg:text-4xl font-bold text-black" style={{ fontFamily: 'Arial, sans-serif' }}>
                  <strong>What is mitolyn?</strong>
                </h3>
                <p className="mbr-text mbr-fonts-style display-7 text-base md:text-lg leading-relaxed" style={{ color: '#000000', fontFamily: 'Arial, sans-serif', textAlign: 'left' }}>
                  Mitolyn is a sophisticated dietary supplement crafted to restore and sustain optimal mitochondrial performance—the critical energy hubs within every cell that convert nutrients into functional power. Mitolyn tackles the fundamental source of metabolic decline by enhancing cellular power generation, metabolic responsiveness, and daily vigor.
                  <br /><br />
                  Mitolyn delivers a pure, nature-driven composition enriched with botanical extracts and protective antioxidants. Mitolyn contains zero synthetic stimulants or aggressive additives. Mitolyn is produced in FDA-registered and GMP-certified facilities that maintain strict safety and quality protocols, guaranteeing every batch is non-GMO, soy-free, and dairy-free.
                  <br /><br />
                  Mitolyn serves as a daily companion for health and vitality restoration. Mitolyn fights everyday exhaustion, encourages effective metabolic function, and aids healthy aging—enabling you to feel energetic, alert, and resilient from dawn to dusk.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

