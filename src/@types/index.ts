export type ContentfulImage = {
  title: string
  description: string
  file: {
    url: string
    details: {
      size: number
      image: {
        width: number
        height: number
      }
    }
    fileName: string
    contentType: string
  }
}

export type IPremio = {
  nome: string
  descricao: {
    json: any
  }
  foto: {
    title: string
    url: string
  }
}

export type IProjeto = {
  nome: string
  tipo: string
  descricao: {
    json: any
  }
  foto: {
    title: string
    url: string
  }
}

export type IMembro = {
  nome: string
  cargo: string
  email: string
  telefone: string
  instagram: string
  linkedin: string
  descricao: {
    json: any
  }
  foto: {
    title: string
    url: string
  }
}
