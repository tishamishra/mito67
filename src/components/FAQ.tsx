'use client';

import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Who should use mitolyn?",
      answer: "mitolyn is created for adults who desire to naturally enhance vitality, assist metabolic function, and preserve general health. mitolyn's botanical composition makes it appropriate for most adults looking for metabolic assistance. mitolyn should not be utilized by people who are expecting, breastfeeding, under medical care, or using medication without initially speaking with a healthcare professional."
    },
    {
      question: "Are there any side effects with mitolyn?",
      answer: "mitolyn is composed with pure, botanical-sourced components and is typically well accepted. mitolyn's natural makeup reduces the possibility of negative responses. Certain users might experience slight digestive changes or short-term power variations as the system adjusts. mitolyn suggests stopping use and speaking with your doctor if any uneasiness happens."
    },
    {
      question: "When will I notice results with mitolyn?",
      answer: "mitolyn's outcomes differ based on the person, but numerous users start experiencing enhanced vitality, emotional state, and mental clarity during the initial weeks. mitolyn functions optimally when taken regularly while following a nutritious diet and active lifestyle. mitolyn's accumulated advantages become more evident with ongoing use over time."
    },
    {
      question: "Is mitolyn safe for extended use?",
      answer: "mitolyn's stimulant-free, plant-based formula is designed for secure, extended daily consumption. mitolyn's natural elements support lasting metabolic wellness without addiction worries. mitolyn suggests consulting with your healthcare provider for customized guidance on prolonged use."
    },
    {
      question: "Are there any mitolyn promotional offers?",
      answer: "mitolyn can be obtained at special reduced prices directly from the official site for a restricted period. mitolyn provides package deals and promotional discounts while stock remains. mitolyn's present pricing offers substantial value for this top-selling metabolic support formula."
    },
    {
      question: "Where can I purchase mitolyn securely?",
      answer: "mitolyn is obtainable directly from the official mitolyn website or approved partners to guarantee authenticity and access special offers. mitolyn's official outlets ensure authentic products, package discounts, and quick, safe delivery. mitolyn suggests buying only from authorized sellers to ensure product quality and customer assistance."
    }
  ];

  return (
    <>
      <section className="header3 cid-uwypPCiL9D py-10 text-center" id="mitolyn-faq" style={{ background: '#ffffff' }}>
        <div className="align-center container mx-auto px-4">
          <div className="row justify-center">
            <div className="col-12 col-lg-12">
              <h3 className="mbr-section-title mb-0 mbr-fonts-style display-2 text-3xl md:text-4xl lg:text-5xl font-bold text-black" style={{ fontFamily: 'Arial, sans-serif' }}>
                <strong>mitolyn Frequently Asked Questions</strong>
              </h3>
            </div>
          </div>
        </div>
      </section>

      <section className="content17 cid-uwypPCiL9D py-12" id="content17-faq" style={{ background: '#ffffff' }}>
        <div className="container mx-auto px-4">
          <div className="row justify-center">
            <div className="col-12 col-md-10">
              <div id="bootstrap-accordion_36" className="panel-group accordionStyles accordion">
                {faqs.map((faq, index) => (
                  <div key={index} className="card mb-3 rounded-lg overflow-hidden shadow-sm border border-gray-200 hover:shadow-md transition-all duration-200">
                    <div className="card-header bg-white">
                      <button
                        type="button"
                        className="panel-title w-full text-left p-5 flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                      >
                        <h6 className="font-bold text-lg md:text-xl" style={{ color: '#000000', fontFamily: 'Arial, sans-serif' }}>
                          <strong>{faq.question}</strong>
                        </h6>
                        <span className="text-gray-600 text-2xl font-normal" style={{ fontFamily: 'Arial, sans-serif' }}>
                          {openIndex === index ? '−' : '+'}
                        </span>
                      </button>
                    </div>
                    {openIndex === index && (
                      <div className="panel-collapse">
                        <div className="panel-body p-5 bg-white border-t border-gray-100">
                          <p className="text-base md:text-lg leading-relaxed" style={{ color: '#000000', fontFamily: 'Arial, sans-serif', textAlign: 'left' }}>
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

