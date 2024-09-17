import { Hero } from './Hero'
import { PremiosList } from './PremiosList'

export function PremiosContainer() {
  return (
    <main className="h-full bg-white">
      <Hero />
      <PremiosList />
    </main>
  )
}
