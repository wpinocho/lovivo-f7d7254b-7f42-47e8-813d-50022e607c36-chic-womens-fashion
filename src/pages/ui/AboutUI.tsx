import { EcommerceTemplate } from '@/templates/EcommerceTemplate'
import type { UseAboutLogicReturn } from '@/components/headless/HeadlessAbout'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

interface AboutUIProps {
  logic: UseAboutLogicReturn
}

export const AboutUI = ({ logic }: AboutUIProps) => {
  return (
    <EcommerceTemplate showCart={true}>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] bg-black overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1920&h=1080&fit=crop&q=80"
            alt="Our Story"
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="max-w-2xl text-white">
            <p className="editorial-subheading text-white/90 mb-4">
              Our Story
            </p>
            <h1 className="editorial-heading text-5xl md:text-6xl lg:text-7xl mb-6">
              About Us
            </h1>
            <p className="text-lg md:text-xl text-white/90 font-light">
              Redefining modern elegance through timeless design and exceptional craftsmanship.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="editorial-subheading text-muted-foreground mb-4">
              Our Mission
            </p>
            <h2 className="editorial-heading text-4xl md:text-5xl mb-6">
              Crafting Timeless Elegance
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              We believe that true style transcends trends. Our mission is to create pieces that empower women to express their individuality while embracing timeless sophistication. Every garment is thoughtfully designed with attention to detail, quality, and sustainability.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-serif">Q</span>
              </div>
              <h3 className="editorial-heading text-xl mb-3">Quality First</h3>
              <p className="text-muted-foreground text-sm">
                Premium materials and meticulous craftsmanship in every piece we create.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-serif">S</span>
              </div>
              <h3 className="editorial-heading text-xl mb-3">Sustainable</h3>
              <p className="text-muted-foreground text-sm">
                Committed to ethical production and environmental responsibility.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-serif">T</span>
              </div>
              <h3 className="editorial-heading text-xl mb-3">Timeless</h3>
              <p className="text-muted-foreground text-sm">
                Designs that transcend seasons and remain relevant year after year.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1558769132-cb1aea1f5d1e?w=800&h=1000&fit=crop&q=80"
                alt="Our Atelier"
                className="w-full h-[600px] object-cover"
              />
            </div>
            <div>
              <p className="editorial-subheading text-muted-foreground mb-4">
                Since 2024
              </p>
              <h2 className="editorial-heading text-4xl md:text-5xl mb-6">
                Our Journey
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded with a vision to revolutionize women's fashion, we started as a small atelier with a big dream: to create clothing that makes women feel confident, elegant, and empowered.
                </p>
                <p>
                  Today, we've grown into a beloved brand known for our commitment to quality, sustainability, and timeless design. Each collection is carefully curated to offer pieces that seamlessly integrate into your wardrobe and stand the test of time.
                </p>
                <p>
                  Our team of designers and artisans work tirelessly to bring you collections that celebrate femininity, sophistication, and individuality. We believe that fashion should be an expression of who you are, not just what you wear.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="editorial-subheading text-muted-foreground mb-4">
              What We Stand For
            </p>
            <h2 className="editorial-heading text-4xl md:text-5xl">
              Our Values
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-border p-8">
              <h3 className="editorial-heading text-2xl mb-4">Craftsmanship</h3>
              <p className="text-muted-foreground leading-relaxed">
                Every stitch, every seam, every detail is executed with precision and care. We partner with skilled artisans who share our passion for excellence and bring decades of expertise to each garment.
              </p>
            </div>

            <div className="border border-border p-8">
              <h3 className="editorial-heading text-2xl mb-4">Sustainability</h3>
              <p className="text-muted-foreground leading-relaxed">
                We're committed to reducing our environmental impact through responsible sourcing, ethical production practices, and creating pieces designed to last, not to be discarded after one season.
              </p>
            </div>

            <div className="border border-border p-8">
              <h3 className="editorial-heading text-2xl mb-4">Inclusivity</h3>
              <p className="text-muted-foreground leading-relaxed">
                Fashion is for everyone. We celebrate diversity and create designs that flatter all body types, ensuring every woman can find pieces that make her feel beautiful and confident.
              </p>
            </div>

            <div className="border border-border p-8">
              <h3 className="editorial-heading text-2xl mb-4">Innovation</h3>
              <p className="text-muted-foreground leading-relaxed">
                While we honor traditional techniques, we're not afraid to push boundaries. We constantly explore new materials, technologies, and design approaches to create the future of fashion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="editorial-subheading text-white/70 mb-4">
            Join Our Community
          </p>
          <h2 className="editorial-heading text-4xl md:text-5xl mb-6">
            Discover Your Style
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Explore our latest collections and find pieces that speak to your unique sense of style.
          </p>
          <Button size="lg" className="bg-white text-black hover:bg-white/90 group">
            Shop New Arrivals
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </section>
    </EcommerceTemplate>
  )
}