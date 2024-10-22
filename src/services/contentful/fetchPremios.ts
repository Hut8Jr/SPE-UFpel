import page from '@/app/page'
import { contentfulFetch } from './client'
import { IPremio } from '@/@types'

export const fetchPremiosPage = async (): Promise<FetchPremiosPageResponse> => {
  try {
    const response = await contentfulFetch({
      query,
      tags: 'fetchPremiosPage',
    })

    const data: FetchPremiosPageResponse = await response.json()

    return data
  } catch {
    return {
      data: {
        premiosCollection: {
          items: [],
        },
      },
    }
  }
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
  data?: {
    premiosCollection?: {
      items?: IPremio[]
    }
  }
}
