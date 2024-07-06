import { HomeAwards } from './Awards'
import { Hero } from './Hero'

export function HomeContainer() {
  return (
    <main className="h-full">
      <Hero />
      <HomeAwards />
    </main>
  )
}
