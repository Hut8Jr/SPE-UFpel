import { fetchProjetoPage } from '@/services/contentful/fetchProjeto'
import { AboutProject } from './AboutProject'
import { Hero } from './Hero'

interface IProjectContainerProps {
  name: string
}

export const ProjectContainer: React.FC<IProjectContainerProps> = async ({
  name,
}) => {
  const projetoPage = await fetchProjetoPage(name)
  const projeto = projetoPage.data.projetosCollection.items[0]

  return (
    <main className="h-full bg-white">
      <Hero foto={projeto.foto} />
      <AboutProject project={projeto} />
    </main>
  )
}
