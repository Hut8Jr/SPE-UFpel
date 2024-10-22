import { fetchHomePage } from '@/services/contentful/fetchHomePage'
import { HomeAwards } from './Awards'
import { Hero } from './Hero'

export async function HomeContainer() {

  const projetoPage = await fetchHomePage()

  return (
    <main className="h-full">
      <Hero />
      <HomeAwards premios={projetoPage.data.premiosCollection.items}/>
    </main>
  )
}
