import Image from 'next/image';

export default function Ingredients() {
  const ingredients = [
    {
      name: "Maqui Berry",
      description: "Mitolyn includes Maqui Berry, a colorful superfruit packed with anthocyanins and protective compounds that assist in protecting cells from free radical damage, maintain mitochondrial wellness, reduce common inflammation, and encourage natural power and vigor."
    },
    {
      name: "Rhodiola Rosea",
      description: "Mitolyn contains Rhodiola Rosea, a potent adaptogenic plant recognized to improve stress resistance and minimize exhaustion. Mitolyn's Rhodiola component assists cognitive sharpness, steady emotional state, and continuous stamina for everyday efficiency and harmony."
    },
    {
      name: "Haematococcus (Astaxanthin)",
      description: "Mitolyn features Haematococcus, acknowledged as one of nature's most powerful protective compounds. Mitolyn's astaxanthin assists in safeguarding mitochondria from oxidative harm, encourages glowing skin, and enhances productive cellular power generation."
    },
    {
      name: "Amla (Indian Gooseberry)",
      description: "Mitolyn integrates Amla, naturally abundant in vitamin C and polyphenols. Mitolyn's Amla component fortifies immune protection, supports comfortable digestion, and improves nutrient uptake—essential for steady mitochondrial efficiency."
    },
    {
      name: "Theobroma Cacao",
      description: "Mitolyn contains Theobroma Cacao, derived from pure cocoa. Mitolyn's cacao includes natural elements that might elevate emotional state, assist cardiovascular wellness, and deliver mild, continuous power without caffeine drops or excessive stimulation."
    },
    {
      name: "Schisandra",
      description: "Mitolyn incorporates Schisandra, a classic adaptogen utilized for generations to boost endurance, assist liver performance, and improve mental concentration. Mitolyn's Schisandra assists in regulating stress adaptation and preserving tranquil, consistent power all day."
    }
  ];

  return (
    <>
      <section className="header3 cid-uwxPKPzuhp py-10 text-center" id="mitolyn-ingredients" style={{ background: '#ffffff' }}>
        <div className="align-center container mx-auto px-4">
          <div className="row justify-center">
            <div className="col-12 col-lg-12">
              <h3 className="mbr-section-title mbr-fonts-style align-center mb-4 display-2 text-3xl md:text-4xl lg:text-5xl font-bold text-black" style={{ fontFamily: 'Arial, sans-serif' }}>
                <strong>Ingredients of the mitolyn?</strong>
              </h3>
            </div>
          </div>
        </div>
      </section>

      <section className="content9 cid-uwDUNYnBmN py-12 bg-white" id="content9-i">
        <div className="container mx-auto px-4">
          <div className="row justify-center">
            <div className="col-md-12 col-lg-10">
              <h4 className="mbr-section-title mbr-fonts-style mb-4 display-7 text-xl md:text-2xl font-semibold text-black" style={{ fontFamily: 'Arial, sans-serif' }}>
                Mitolyn combines a thoughtfully selected blend of botanicals and nutrients—each selected for its capacity to support mitochondrial performance, power equilibrium, and complete-body vigor. Mitolyn's composition is founded on scientific evidence showing each component's distinctive role in metabolic wellness. Explore the essential ingredients below:
              </h4>
              <div className="mbr-text mbr-fonts-style display-7 text-base md:text-lg leading-relaxed ingredients-content" style={{ color: '#000000', fontFamily: 'Arial, sans-serif' }}>
                <ol className="space-y-4 ingredients-list" style={{ listStyle: 'none', paddingLeft: '0', counterReset: 'none' }}>
                  {ingredients.map((ingredient, index) => (
                    <li 
                      key={index} 
                      className="ingredient-item"
                      style={{ 
                        marginBottom: '1.5rem', 
                        listStyle: 'none', 
                        paddingLeft: '3.5rem', 
                        position: 'relative', 
                        minHeight: '40px'
                      }}
                    >
                      <span style={{
                        position: 'absolute',
                        left: '0',
                        top: '0',
                        color: '#ffffff',
                        background: '#e6502b',
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 'bold',
                        fontSize: '1.1rem',
                        flexShrink: 0,
                        zIndex: 1
                      }}>
                        {index + 1}
                      </span>
                      <strong>{ingredient.name}:</strong> {ingredient.description}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="features17 cid-uwp6M28xWE py-12 bg-white" id="features17-8e">
        <div className="container mx-auto px-4">
          <div className="content-wrapper">
            <div className="row align-items-center flex flex-col lg:flex-row gap-10">
              <div className="col-12 col-lg-5">
                <div className="image-wrapper rounded-lg overflow-hidden shadow-lg border border-gray-200 bg-white p-4">
                  <img 
                    src="https://ik.imagekit.io/affin/mitolyn-buy-480x451.webp?updatedAt=1765361274874" 
                    alt="mitolyn order" 
                    className="w-full h-auto object-contain mx-auto"
                    style={{ 
                      maxWidth: '100%', 
                      width: '100%',
                      height: 'auto',
                      minHeight: '400px',
                      objectFit: 'contain'
                    }}
                  />
                </div>
              </div>
              <div className="col-12 col-lg flex-1">
                <div className="text-wrapper bg-white rounded-lg shadow-lg border border-gray-200 p-8 md:p-10">
                  <h5 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: '#0f172a', fontFamily: 'Arial, sans-serif', textAlign: 'left', lineHeight: '1.35' }}>
                    Mitolyn supplies your system with the resources to function at maximum potential. Mitolyn assists effective fat utilization, improved self-assurance, and maintained power levels. Mitolyn's complete strategy helps you reach peak metabolic wellness and vigor.
                  </h5>
                  <p className="text-xl md:text-2xl font-bold mb-6 text-red-600" style={{ fontFamily: 'Arial, sans-serif', textAlign: 'left' }}>
                    Only for: $39/per bottle
                  </p>
                  <div className="mt-4">
                    <a 
                      className="btn btn-warning bg-yellow-500 text-black px-4 py-4 sm:px-8 sm:py-5 md:px-14 md:py-6 rounded-md font-bold text-sm sm:text-base md:text-lg lg:text-xl hover:bg-yellow-600 transition-colors inline-flex items-center shadow-lg hover:shadow-xl w-full sm:w-auto justify-center" 
                      href="https://b9c6ckcm0x6mdy38yird8e5uex.hop.clickbank.net/?&traffic_source=bing" 
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Start Your Journey to Effortless Weight Loss!
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

