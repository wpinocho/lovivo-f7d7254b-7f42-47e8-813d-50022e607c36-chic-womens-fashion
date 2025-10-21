import { HeadlessAbout } from '@/components/headless/HeadlessAbout'
import { AboutUI } from '@/pages/ui/AboutUI'

/**
 * ROUTE COMPONENT - About
 * 
 * Este componente solo conecta HeadlessAbout con AboutUI.
 * Toda la lógica está en HeadlessAbout y la presentación en AboutUI.
 */

const About = () => {
  return (
    <HeadlessAbout>
      {(logic) => <AboutUI logic={logic} />}
    </HeadlessAbout>
  )
}

export default About