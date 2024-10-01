import { fetchMembrosPage } from '@/services/contentful/fetchMembros'
import { Hero } from './Hero'
import { MembrosList } from './MembrosList'

export async function MembrosContainer() {
  const membrosPage = await fetchMembrosPage()

  return (
    <main className="h-full">
      <Hero />
      <MembrosList membros={membrosPage.data.membrosCollection.items} />
    </main>
  )
}
