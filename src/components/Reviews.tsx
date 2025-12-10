import Image from 'next/image';

export default function Reviews() {
  const reviews = [
    {
      name: "Patricia M.",
      location: "Springfield, IL",
      image: "https://ik.imagekit.io/affin/mitolyn-review-1.webp",
      rating: "⭐⭐⭐⭐⭐",
      weightLoss: "32 lbs",
      text: "mitolyn has completely changed my life. mitolyn enabled me to drop 32 pounds when other methods failed. mitolyn provided the vitality I required to remain engaged and feel self-assured once more. I previously skipped social events because I wasn't comfortable with my appearance, but now I love looking at my reflection. My self-esteem has soared, and I finally feel like my ideal self."
    },
    {
      name: "Robert K.",
      location: "Tallahassee, FL",
      image: "https://ik.imagekit.io/affin/mitolyn-review-3.webp",
      rating: "⭐⭐⭐⭐⭐",
      weightLoss: "27 lbs",
      text: "mitolyn provided my metabolism the boost it urgently required. mitolyn assisted me in losing 27 pounds of persistent abdominal fat that had been unresponsive to diet and workouts for many years. mitolyn's botanical formula operates uniquely - I feel more agile, my power levels are higher than before, and my clothing fits ideally now. mitolyn really fulfills its commitments."
    },
    {
      name: "Carolyn D.",
      location: "Portland, OR",
      image: "https://ik.imagekit.io/affin/mitolyn-review-2.webp",
      rating: "⭐⭐⭐⭐⭐",
      weightLoss: "38 lbs",
      text: "mitolyn renewed my vitality and assisted me in reconnecting with my loved ones. mitolyn allowed me to lose 38 pounds that I had battled with for a long time. mitolyn's influence extends beyond weight reduction - I can now remain energetic all day and truly appreciate meaningful moments with my children. mitolyn has been an amazing change for my general health and everyday existence."
    }
  ];

  return (
    <>
      <section className="content4 cid-uwxIN8BMra py-6 md:py-8 text-center" id="content4-6e" style={{ background: '#ec4899' }}>
        <div className="container mx-auto px-4">
          <div className="row justify-center">
            <div className="title col-md-12 col-lg-10">
              <h3 className="mbr-section-title mbr-fonts-style align-center mb-2 display-2 text-3xl md:text-4xl lg:text-5xl font-bold text-white" style={{ fontFamily: 'Arial, sans-serif' }}>
                <strong>mitolyn Customer Reviews</strong>
              </h3>
            </div>
          </div>
        </div>
      </section>

      <section className="team2 cid-uwxKdDai1K py-6 md:py-8" id="team2-8" style={{ background: '#fafafa' }}>
        <div className="container mx-auto px-4">
          {reviews.map((review, index) => (
            <div key={index} className="item features-image mb-4 md:mb-6 last:mb-0">
              <div className="item-wrapper">
                <div className="row align-items-center flex flex-col md:flex-row gap-4 md:gap-6">
                  <div className="col-12 col-md-2">
                    <div className="image-wrapper">
                      <img 
                        src={review.image} 
                        alt={`${review.name} - mitolyn review`} 
                        title="mitolyn"
                        className="w-full rounded-full object-cover"
                        style={{ 
                          width: '120px',
                          height: '120px',
                          objectFit: 'cover'
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-12 col-md">
                    <div className="card-box">
                      <h5 className="card-title mbr-fonts-style m-0 mb-3 display-7 text-xl md:text-2xl font-bold" style={{ fontFamily: 'Arial, sans-serif', color: '#000000' }}>
                        <div><span style={{ fontSize: '1.5rem' }}><strong>{review.name} - {review.location}</strong></span><br /></div>
                      </h5>
                      <h6 className="card-subtitle mbr-fonts-style mb-3 display-4 text-lg font-bold" style={{ fontFamily: 'Arial, sans-serif', color: '#393193' }}>
                        <strong>{review.rating} Verified Purchase</strong>
                      </h6>
                      <p className="mbr-text mbr-fonts-style display-7 text-base md:text-lg leading-relaxed" style={{ fontFamily: 'Arial, sans-serif', color: '#000000' }}>
                        <strong>{review.name.split(' ')[0]} lost {review.weightLoss}...</strong><br />
                        {review.text}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

