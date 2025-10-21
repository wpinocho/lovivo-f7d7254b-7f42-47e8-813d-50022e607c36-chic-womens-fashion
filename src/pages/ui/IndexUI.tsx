import { ProductCard } from '@/components/ProductCard'
import { FloatingCart } from '@/components/FloatingCart'
import { NewsletterSection } from '@/components/NewsletterSection'
import { EcommerceTemplate } from '@/templates/EcommerceTemplate'
import { HeroSection } from '@/components/HeroSection'
import { TrendCarousel } from '@/components/TrendCarousel'
import { LookbookGrid } from '@/components/LookbookGrid'
import { SizeGuideModal } from '@/components/SizeGuideModal'
import { CategoryFilters } from '@/components/CategoryFilters'
import type { UseIndexLogicReturn } from '@/components/headless/HeadlessIndex'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

interface IndexUIProps {
  logic: UseIndexLogicReturn
}

export const IndexUI = ({ logic }: IndexUIProps) => {
  const {
    loading,
    filteredProducts,
  } = logic

  return (
    <EcommerceTemplate showCart={true}>
      {/* Hero Section */}
      <HeroSection />

      {/* Category Filters */}
      <CategoryFilters />

      {/* Trend Carousel */}
      <TrendCarousel />

      {/* Featured Products */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="editorial-subheading text-muted-foreground mb-3">
                Curated Selection
              </p>
              <h2 className="editorial-heading text-4xl md:text-5xl">
                Featured Pieces
              </h2>
            </div>
            <SizeGuideModal />
          </div>

          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="bg-muted rounded-lg h-96 animate-pulse" />
              ))}
            </div>
          ) : filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredProducts.slice(0, 8).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No products available.</p>
            </div>
          )}

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="group">
              View All Products
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Shoppable Lookbook */}
      <LookbookGrid />

      {/* Editorial Banner */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="editorial-subheading text-white/70 mb-4">
            Exclusive Access
          </p>
          <h2 className="editorial-heading text-4xl md:text-5xl mb-6">
            Join Our Community
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Be the first to discover new arrivals, exclusive offers, and style inspiration.
          </p>
          <Button size="lg" className="bg-white text-black hover:bg-white/90">
            Shop Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Newsletter */}
      <NewsletterSection />

      <FloatingCart />
    </EcommerceTemplate>
  )
}