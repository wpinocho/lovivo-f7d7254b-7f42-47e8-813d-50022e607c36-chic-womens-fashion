import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export const HeroSection = () => {
  return (
    <section className="relative h-[85vh] min-h-[600px] bg-cream overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1920&h=1080&fit=crop&q=80"
          alt="New Drops Collection"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
      </div>
      
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="max-w-xl text-white animate-fade-in">
          <p className="editorial-subheading text-white/90 mb-4">
            Spring Collection 2024
          </p>
          <h1 className="editorial-heading text-6xl md:text-7xl lg:text-8xl mb-6 leading-[0.9]">
            New<br />Drops
          </h1>
          <p className="text-lg md:text-xl mb-8 text-white/90 font-light max-w-md">
            Discover the latest arrivals. Refined pieces designed for the modern woman.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-black hover:bg-white/90 text-base px-8 py-6 h-auto group"
          >
            Shop New Arrivals
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  )
}