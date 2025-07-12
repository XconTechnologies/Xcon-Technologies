export default function ClientLogos() {
  const logos = [
    { name: "PCA", logo: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjQwIiB2aWV3Qm94PSIwIDAgMTIwIDQwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTIwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjZjhmOWZhIi8+Cjx0ZXh0IHg9IjYwIiB5PSIyNCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iIzQ5NTA1NyIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiBmb250LXdlaWdodD0iYm9sZCI+UENBPC90ZXh0Pgo8L3N2Zz4K" },
    { name: "ARTIFIC", logo: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjQwIiB2aWV3Qm94PSIwIDAgMTIwIDQwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTIwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjZjhmOWZhIi8+Cjx0ZXh0IHg9IjYwIiB5PSIyNCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iIzQ5NTA1NyIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjEyIiBmb250LXdlaWdodD0iYm9sZCI+QVJUSUZJQZM8L3RleHQ+Cjwvc3ZnPgo=" },
    { name: "STUDYPASS", logo: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjQwIiB2aWV3Qm94PSIwIDAgMTIwIDQwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTIwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjZjhmOWZhIi8+Cjx0ZXh0IHg9IjYwIiB5PSIyNCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iIzQ5NTA1NyIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjEwIiBmb250LXdlaWdodD0iYm9sZCI+U1RVRFLBQVNTPC90ZXh0Pgo8L3N2Zz4K" },
    { name: "DUNYA", logo: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjQwIiB2aWV3Qm94PSIwIDAgMTIwIDQwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTIwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjZjhmOWZhIi8+Cjx0ZXh0IHg9IjYwIiB5PSIyNCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iIzQ5NTA1NyIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiBmb250LXdlaWdodD0iYm9sZCI+RFVOWTM8L3RleHQ+Cjwvc3ZnPgo=" },
    { name: "COINBASE", logo: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjQwIiB2aWV3Qm94PSIwIDAgMTIwIDQwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTIwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjZjhmOWZhIi8+Cjx0ZXh0IHg9IjYwIiB5PSIyNCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iIzQ5NTA1NyIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjEwIiBmb250LXdlaWdodD0iYm9sZCI+Q09JTkJBU0U8L3RleHQ+Cjwvc3ZnPgo=" },
    { name: "AMAZON", logo: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjQwIiB2aWV3Qm94PSIwIDAgMTIwIDQwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTIwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjZjhmOWZhIi8+Cjx0ZXh0IHg9IjYwIiB5PSIyNCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iIzQ5NTA1NyIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjEyIiBmb250LXdlaWdodD0iYm9sZCI+QU1BWlJOPC90ZXh0Pgo8L3N2Zz4K" },
    { name: "ALPHA", logo: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjQwIiB2aWV3Qm94PSIwIDAgMTIwIDQwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTIwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjZjhmOWZhIi8+Cjx0ZXh0IHg9IjYwIiB5PSIyNCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iIzQ5NTA1NyIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiBmb250LXdlaWdodD0iYm9sZCI+QUxQSBE8L3RleHQ+Cjwvc3ZnPgo=" },
    { name: "RECYCLING", logo: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjQwIiB2aWV3Qm94PSIwIDAgMTIwIDQwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTIwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjZjhmOWZhIi8+Cjx0ZXh0IHg9IjYwIiB5PSIyNCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iIzQ5NTA1NyIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjkiIGZvbnQtd2VpZ2h0PSJib2xkIj5SRUNZXEyJTkc8L3RleHQ+Cjwvc3ZnPgo=" },
    { name: "LAWLESS", logo: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjQwIiB2aWV3Qm94PSIwIDAgMTIwIDQwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTIwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjZjhmOWZhIi8+Cjx0ZXh0IHg9IjYwIiB5PSIyNCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iIzQ5NTA1NyIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjExIiBmb250LXdlaWdodD0iYm9sZCI+TEFXTaVTUzwvdGV4dD4KPC9zdmc+Cg==" },
    { name: "PARTNERS", logo: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjQwIiB2aWV3Qm94PSIwIDAgMTIwIDQwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTIwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjZjhmOWZhIi8+Cjx0ZXh0IHg9IjYwIiB5PSIyNCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iIzQ5NTA1NyIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjEwIiBmb250LXdlaWdodD0iYm9sZCI+UEFSVFNFV1J8L3RleHQ+Cjwvc3ZnPgo=" },
  ];

  // Duplicate the logos array to create seamless scrolling
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Trusted by Leading Companies
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We've had the privilege of working with some of the world's most innovative companies
          </p>
        </div>
        
        <div className="relative">
          {/* Scrolling container */}
          <div className="flex animate-scroll-logos">
            {duplicatedLogos.map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-8 flex items-center justify-center bg-gray-50 rounded-lg p-4"
                style={{ minWidth: '140px', height: '60px' }}
              >
                <img
                  src={logo.logo}
                  alt={logo.name}
                  className="max-w-full max-h-full object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0"
                  style={{ maxWidth: '120px', maxHeight: '40px' }}

                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}