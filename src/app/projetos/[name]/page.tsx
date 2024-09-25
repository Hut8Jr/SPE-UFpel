import { ProjectContainer } from '@/components/Project'
import { fetchProjetoPage } from '@/services/contentful/fetchProjeto'

interface IPageProps {
  params: {
    name: string
  }
}

export default async function Page({ params: { name } }: IPageProps) {
  return <ProjectContainer name={name} />
}
