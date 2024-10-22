import { contentfulFetch } from './client'
import { IProjeto } from '@/@types'

export const fetchHomePage = async (): Promise<FetchHomePageResponse> => {
  try {
    const response = await contentfulFetch({
      query,
      tags: 'fetchHomePage',
    })

    const data = await response.json()
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
  premiosCollection(order: sys_publishedAt_DESC, limit: 3) {
    items {
      nome
      descricao {
        json
      }
      foto {
        url
        title
      }
    }
  }
}
`

export interface FetchHomePageResponse {
  data: {
    premiosCollection: {
      items: IProjeto[]
    }
  }
}
