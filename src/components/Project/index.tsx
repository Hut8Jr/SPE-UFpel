import { AboutProject } from './AboutProject'
import { Hero } from './Hero'

export function ProjectContainer() {
  return (
    <main className="h-full bg-white">
      <Hero />
      <AboutProject />
    </main>
  )
}
