import { contentfulFetch } from './client'
import { IMembro } from '@/@types'

export const fetchMembrosPage = async (): Promise<FetchMembrosPageResponse> => {
  try {
    const response = await contentfulFetch({
      query,
      tags: 'fetchMembrosPage',
    })

    const data = await response.json()
    return data
  } catch {
    return {
      data: {
        membrosCollection: {
          items: [],
        },
      },
    }
  }
}

const query = `
{
  membrosCollection(limit: 100) {
    items {
      nome
      cargo
      email
      telefone
      instagram
      linkedin
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

export interface FetchMembrosPageResponse {
  data: {
    membrosCollection: {
      items: IMembro[]
    }
  }
}
