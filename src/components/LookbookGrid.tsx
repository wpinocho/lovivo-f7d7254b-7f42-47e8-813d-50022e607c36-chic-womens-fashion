import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { ShoppingBag } from 'lucide-react'

interface LookbookItem {
  id: string
  image: string
  title: string
  price: number
  products: string[]
}

const lookbookItems: LookbookItem[] = [
  {
    id: '1',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&h=800&fit=crop',
    title: 'Modern Minimalist',
    price: 445,
    products: ['Oversized Blazer', 'Wide Leg Trousers']
  },
  {
    id: '2',
    image: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=600&h=800&fit=crop',
    title: 'Evening Elegance',
    price: 245,
    products: ['Silk Slip Dress']
  },
  {
    id: '3',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&h=800&fit=crop',
    title: 'Casual Chic',
    price: 390,
    products: ['Linen Shirt', 'High-Waist Jeans']
  },
  {
    id: '4',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&h=800&fit=crop',
    title: 'Cozy Sophistication',
    price: 470,
    products: ['Cashmere Turtleneck', 'Satin Midi Skirt']
  }
]

export const LookbookGrid = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  return (
    <section className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="editorial-subheading text-muted-foreground mb-3">
            Style Inspiration
          </p>
          <h2 className="editorial-heading text-4xl md:text-5xl mb-4">
            Shoppable Lookbook
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Curated looks to inspire your wardrobe. Click to shop the complete outfit.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {lookbookItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-lg cursor-pointer"
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              
              <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-300 ${
                hoveredId === item.id ? 'opacity-100' : 'opacity-0'
              }`}>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform transition-transform duration-300"
                  style={{ transform: hoveredId === item.id ? 'translateY(0)' : 'translateY(20px)' }}
                >
                  <h3 className="font-serif text-2xl mb-2">{item.title}</h3>
                  <p className="text-sm text-white/80 mb-3">
                    {item.products.join(' + ')}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-medium">From ${item.price}</span>
                    <Button size="sm" className="bg-white text-black hover:bg-white/90">
                      <ShoppingBag className="h-4 w-4 mr-2" />
                      Shop Look
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}