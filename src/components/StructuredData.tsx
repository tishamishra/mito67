export default function StructuredData() {
  const baseUrl = "https://mtolyn.store";

  // Product Schema
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "mitolyn",
    "description": "mitolyn official website supplement for weight management and fat reduction. Natural dietary supplement that supports mitochondrial wellness, enhances metabolism, and improves fat utilization.",
    "brand": {
      "@type": "Brand",
      "name": "mitolyn"
    },
    "image": [
      "https://ik.imagekit.io/affin/mitolyn-supplement.webp?updatedAt=1765361274900"
    ],
    "offers": {
      "@type": "Offer",
      "url": "https://b9c6ckcm0x6mdy38yird8e5uex.hop.clickbank.net/?&traffic_source=bing",
      "priceCurrency": "USD",
      "price": "39.00",
      "priceValidUntil": "2025-12-31",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "mitolyn Official"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "999"
    },
    "review": [
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Sarah M."
        },
        "reviewBody": "mitolyn has been incredible for my weight management journey. I've dropped 15 pounds in 2 months and have significantly more vitality."
      },
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Michael R."
        },
        "reviewBody": "Top weight management supplement I've tested. The official mitolyn website made purchasing simple and shipping was quick."
      }
    ]
  };

  // Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "mitolyn Official",
    "url": baseUrl,
    "logo": "https://ik.imagekit.io/affin/mitolyn-favicon-logo-485x94.webp?updatedAt=1765361274883",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "url": `${baseUrl}/contact-us`
    },
    "sameAs": []
  };

  // Website Schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "mitolyn Official",
    "url": baseUrl,
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${baseUrl}/?s={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };

  // BreadcrumbList Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": baseUrl
      }
    ]
  };

  // FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is mitolyn?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "mitolyn is a natural dietary supplement created to support mitochondrial wellness, enhance metabolism, and improve fat utilization. It's crafted from botanical ingredients and assists with weight management and vitality levels."
        }
      },
      {
        "@type": "Question",
        "name": "How does mitolyn function?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "mitolyn functions by focusing on your mitochondria - the power plants within every cell. When they operate at maximum efficiency, your system naturally utilizes more fat and delivers vitality enhancement."
        }
      },
      {
        "@type": "Question",
        "name": "Where can I purchase mitolyn?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can purchase mitolyn from the official mitolyn store website. Visit our website to order and receive the best prices with special offers."
        }
      },
      {
        "@type": "Question",
        "name": "Is mitolyn safe?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, mitolyn is crafted from natural botanical ingredients. It's GMP certified, FDA approved facility, and manufactured in the USA. However, speak with a healthcare provider before use."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}

