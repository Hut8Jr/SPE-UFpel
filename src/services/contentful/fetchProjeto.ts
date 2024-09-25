import page from '@/app/page'
import { contentfulFetch } from './client'
import { IProjeto } from '@/@types'

export const fetchProjetoPage = async (
  page: string
): Promise<FetchProjetoPageResponse> => {
  try {
    const response = await contentfulFetch({
      query: query(page),
      tags: 'fetchProjetoPage',
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

const query = (nome: string) => `
query{
  projetosCollection(where: {nome: "${nome}"}) {
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

export interface FetchProjetoPageResponse {
  data: {
    projetosCollection: {
      items: IProjeto[]
    }
  }
}
