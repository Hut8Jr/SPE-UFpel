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

export type Premios = {
  nome: string
  descricao: {
    json: any
  }
  foto: {
    title: string
    url: string
  }
}
