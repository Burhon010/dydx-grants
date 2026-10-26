import { Cta } from '@/widgets/cta'
import { FaqSection } from './FaqSection'
import { HeroSection } from './HeroSection'
import { NewsSection } from './NewsSection'
import { ProcessSection } from './ProcessSection'
import { ProjectsSection } from './ProjectsSection'

export function HomePage() {
  return (
    <>
      <HeroSection />
      <ProjectsSection />
      <NewsSection />
      <FaqSection />
      <ProcessSection />
      <Cta className="mt-24 md:mt-32" />
    </>
  )
}
