import { IProjeto } from '@/@types'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'

interface AboutProjectProps {
  project: IProjeto
}

export const AboutProject: React.FC<AboutProjectProps> = ({ project }) => {
  return (
    <div className="container py-[40px] lg:py-[117px]">
      <div className="max-w-[1112px]">
        <h1 className="mb-[20px] text-[36px] font-light leading-[36px] text-black lg:mb-[59px] lg:text-[70px] lg:leading-[74px]">
          {project.nome}
        </h1>
        <p
          className="text-lg text-black lg:text-[27px] lg:leading-[43px]"
          dangerouslySetInnerHTML={{
            __html: documentToHtmlString(project.descricao.json),
          }}
        />
      </div>
    </div>
  )
}
