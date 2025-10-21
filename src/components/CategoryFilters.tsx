import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { ChevronDown } from 'lucide-react'

interface CategoryFiltersProps {
  onFilterChange?: (category: string) => void
}

const categories = [
  { id: 'all', label: 'All' },
  { id: 'new', label: 'New Arrivals' },
  { id: 'dresses', label: 'Dresses' },
  { id: 'tops', label: 'Tops & Blouses' },
  { id: 'bottoms', label: 'Bottoms' },
  { id: 'outerwear', label: 'Outerwear' },
  { id: 'knitwear', label: 'Knitwear' },
]

export const CategoryFilters = ({ onFilterChange }: CategoryFiltersProps) => {
  const [activeCategory, setActiveCategory] = useState('all')

  const handleCategoryClick = (categoryId: string) => {
    setActiveCategory(categoryId)
    onFilterChange?.(categoryId)
  }

  return (
    <div className="border-y border-border bg-white sticky top-0 z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? 'default' : 'ghost'}
                size="sm"
                onClick={() => handleCategoryClick(category.id)}
                className={`whitespace-nowrap ${
                  activeCategory === category.id 
                    ? 'bg-black text-white hover:bg-black/90' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {category.label}
              </Button>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" size="sm" className="gap-2">
              Sort By
              <ChevronDown className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}