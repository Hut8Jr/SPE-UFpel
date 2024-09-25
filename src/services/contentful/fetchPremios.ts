import page from '@/app/page'
import { contentfulFetch } from './client'

export const fetchPremiosPage = async (): Promise<FetchPremiosPageResponse> => {
  const response = await contentfulFetch({
    query,
    tags: 'fetchPremiosPage',
  })

  return response.json()
}

const query = `
{
  premiosCollection(limit: 100){
    items{
      nome
      descricao{
        json
      }
      foto{
        title
        url
      }
    }
  }
}
`

export interface FetchPremiosPageResponse {
  data: {
    premiosCollection: {
      items: {
        nome: string
        descricao: {
          json: string
        }
        foto: {
          title: string
          url: string
        }
      }[]
    }
  }
}
