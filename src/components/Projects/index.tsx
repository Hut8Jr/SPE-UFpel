import { fetchProjetosPage } from '@/services/contentful/fetchProjetos'
import { Hero } from './Hero'
import { ProjectsList } from './ProjectsList'

export const ProjectsContainer = async () => {
  const projetosPage = await fetchProjetosPage()

  return (
    <main className="h-full bg-white">
      <Hero />
      <ProjectsList projetos={projetosPage?.data?.projetosCollection?.items} />
    </main>
  )
}
