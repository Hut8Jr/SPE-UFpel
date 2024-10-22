import { fetchPremiosPage } from '@/services/contentful/fetchPremios'
import { Hero } from './Hero'
import { PremiosList } from './PremiosList'
import { notFound } from 'next/navigation'

export const revalidate = 60

export async function PremiosContainer() {
  try {
    const premios = await fetchPremiosPage()

    return (
      <main className="h-full bg-white">
        <Hero />
        <PremiosList premios={premios?.data?.premiosCollection?.items} />
      </main>
    )
  } catch (error) {
    notFound()
  }
}
