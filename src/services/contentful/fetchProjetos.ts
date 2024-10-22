import { contentfulFetch } from './client'
import { IProjeto } from '@/@types'

export const fetchProjetosPage =
  async (): Promise<FetchProjetosPageResponse> => {
    try {
      const response = await contentfulFetch({
        query,
        tags: 'fetchProjetosPage',
      })

      const data = await response.json()
      return data
    } catch {
      return {
        data: {
          projetosCollection: {
            items: [],
          },
        },
      }
    }
  }

const query = `
{
  projetosCollection(limit: 100) {
    items {
      nome
      tipo
      descricao {
        json
      }
      foto {
        title
        url
      }
    }
  }
}
`

export interface FetchProjetosPageResponse {
  data?: {
    projetosCollection?: {
      items?: IProjeto[]
    }
  }
}
