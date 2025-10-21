import { ReactNode } from 'react'
import { PageTemplate } from './PageTemplate'
import { BrandLogoLeft } from '@/components/BrandLogoLeft'
import { SocialLinks } from '@/components/SocialLinks'
import { FloatingCart } from '@/components/FloatingCart'
import { ProfileMenu } from '@/components/ProfileMenu'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { ShoppingCart, Search } from 'lucide-react'
import { useCartUI } from '@/components/CartProvider'
import { useCart } from '@/contexts/CartContext'

interface EcommerceTemplateProps {
  children: ReactNode
  pageTitle?: string
  showCart?: boolean
  className?: string
  headerClassName?: string
  footerClassName?: string
  layout?: 'default' | 'full-width' | 'centered'
}

export const EcommerceTemplate = ({
  children,
  pageTitle,
  showCart = true,
  className,
  headerClassName,
  footerClassName,
  layout = 'default'
}: EcommerceTemplateProps) => {
  const { openCart } = useCartUI()
  const { getTotalItems } = useCart()
  const totalItems = getTotalItems()

  const header = (
    <div className={`py-4 bg-white ${headerClassName}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/">
              <BrandLogoLeft />
            </Link>
          </div>

          {/* Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-6">
              <Link 
                to="/" 
                className="text-sm tracking-wide hover:text-muted-foreground transition-colors"
              >
                NEW IN
              </Link>
              <Link 
                to="/" 
                className="text-sm tracking-wide hover:text-muted-foreground transition-colors"
              >
                COLLECTIONS
              </Link>
              <Link 
                to="/blog" 
                className="text-sm tracking-wide hover:text-muted-foreground transition-colors"
              >
                EDITORIAL
              </Link>
            </nav>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" aria-label="Search">
              <Search className="h-5 w-5" />
            </Button>
            
            <ProfileMenu />
            
            {showCart && (
              <Button
                variant="ghost"
                size="icon"
                onClick={openCart}
                className="relative"
                aria-label="View cart"
              >
                <ShoppingCart className="h-5 w-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-black text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {totalItems > 99 ? '99+' : totalItems}
                  </span>
                )}
              </Button>
            )}
          </div>
        </div>

        {pageTitle && (
          <div className="mt-6">
            <h1 className="editorial-heading text-3xl">
              {pageTitle}
            </h1>
          </div>
        )}
      </div>
    </div>
  )

  const footer = (
    <div className={`bg-black text-white py-16 ${footerClassName}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <BrandLogoLeft />
            </div>
            <p className="text-white/70 mb-6 max-w-md">
              Refined fashion for the modern woman. Discover timeless pieces designed with intention.
            </p>
            <SocialLinks />
          </div>

          {/* Shop */}
          <div>
            <h3 className="editorial-subheading text-white mb-4">Shop</h3>
            <div className="space-y-3">
              <Link to="/" className="block text-white/70 hover:text-white transition-colors text-sm">
                New Arrivals
              </Link>
              <Link to="/" className="block text-white/70 hover:text-white transition-colors text-sm">
                Collections
              </Link>
              <Link to="/" className="block text-white/70 hover:text-white transition-colors text-sm">
                Sale
              </Link>
            </div>
          </div>

          {/* Help */}
          <div>
            <h3 className="editorial-subheading text-white mb-4">Help</h3>
            <div className="space-y-3">
              <Link to="/" className="block text-white/70 hover:text-white transition-colors text-sm">
                Size Guide
              </Link>
              <Link to="/" className="block text-white/70 hover:text-white transition-colors text-sm">
                Shipping & Returns
              </Link>
              <Link to="/blog" className="block text-white/70 hover:text-white transition-colors text-sm">
                Editorial
              </Link>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/20 text-center">
          <p className="text-white/50 text-sm">
            &copy; 2024 Your Store. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  )

  return (
    <>
      <PageTemplate 
        header={header}
        footer={footer}
        className={className}
        layout={layout}
      >
        {children}
      </PageTemplate>
      
      {showCart && <FloatingCart />}
    </>
  )
}