import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'

interface Trend {
  title: string
  description: string
  image: string
  link: string
}

const trends: Trend[] = [
  {
    title: "Evening Edit",
    description: "Sophisticated pieces for after-dark elegance",
    image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&h=1000&fit=crop",
    link: "/collections/evening-edit"
  },
  {
    title: "Essentials",
    description: "Timeless pieces for everyday sophistication",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&h=1000&fit=crop",
    link: "/collections/essentials"
  },
  {
    title: "Knitwear",
    description: "Luxurious knits for cozy elegance",
    image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800&h=1000&fit=crop",
    link: "/collections/knitwear"
  }
]

export const TrendCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % trends.length)
  }

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + trends.length) % trends.length)
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="editorial-subheading text-muted-foreground mb-3">
            Curated Collections
          </p>
          <h2 className="editorial-heading text-4xl md:text-5xl">
            Trending Now
          </h2>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {trends.map((trend, index) => (
                <div key={index} className="min-w-full px-2">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="order-2 md:order-1">
                      <h3 className="editorial-heading text-3xl md:text-4xl mb-4">
                        {trend.title}
                      </h3>
                      <p className="text-muted-foreground text-lg mb-6">
                        {trend.description}
                      </p>
                      <Link to={trend.link}>
                        <Button variant="outline" size="lg" className="group">
                          Explore Collection
                          <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </div>
                    <div className="order-1 md:order-2">
                      <div className="aspect-[3/4] overflow-hidden rounded-lg">
                        <img 
                          src={trend.image}
                          alt={trend.title}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              className="rounded-full"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <div className="flex items-center gap-2">
              {trends.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex ? 'w-8 bg-black' : 'w-2 bg-gray-300'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={next}
              className="rounded-full"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}