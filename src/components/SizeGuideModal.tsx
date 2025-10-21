import { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Ruler } from 'lucide-react'

const sizeData = [
  { size: 'XS', bust: '32-33', waist: '24-25', hips: '34-35' },
  { size: 'S', bust: '34-35', waist: '26-27', hips: '36-37' },
  { size: 'M', bust: '36-37', waist: '28-29', hips: '38-39' },
  { size: 'L', bust: '38-40', waist: '30-32', hips: '40-42' },
  { size: 'XL', bust: '41-43', waist: '33-35', hips: '43-45' },
]

export const SizeGuideModal = () => {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2">
          <Ruler className="h-4 w-4" />
          Size Guide
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="editorial-heading text-3xl">Size Guide</DialogTitle>
          <DialogDescription>
            Find your perfect fit with our comprehensive size chart. All measurements are in inches.
          </DialogDescription>
        </DialogHeader>
        
        <div className="mt-6">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 font-medium">Size</th>
                  <th className="text-left py-3 px-4 font-medium">Bust</th>
                  <th className="text-left py-3 px-4 font-medium">Waist</th>
                  <th className="text-left py-3 px-4 font-medium">Hips</th>
                </tr>
              </thead>
              <tbody>
                {sizeData.map((row) => (
                  <tr key={row.size} className="border-b hover:bg-muted/50 transition-colors">
                    <td className="py-3 px-4 font-medium">{row.size}</td>
                    <td className="py-3 px-4 text-muted-foreground">{row.bust}"</td>
                    <td className="py-3 px-4 text-muted-foreground">{row.waist}"</td>
                    <td className="py-3 px-4 text-muted-foreground">{row.hips}"</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 p-4 bg-muted/50 rounded-lg">
            <h4 className="font-medium mb-2">How to Measure</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><strong>Bust:</strong> Measure around the fullest part of your bust</li>
              <li><strong>Waist:</strong> Measure around the narrowest part of your waist</li>
              <li><strong>Hips:</strong> Measure around the fullest part of your hips</li>
            </ul>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}