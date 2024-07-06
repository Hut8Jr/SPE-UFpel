import { Hero } from './Hero'
import { ProjectsList } from './ProjectsList'

export function ProjectsContainer() {
  return (
    <main className="h-full">
      <Hero />
      <ProjectsList />
    </main>
  )
}
