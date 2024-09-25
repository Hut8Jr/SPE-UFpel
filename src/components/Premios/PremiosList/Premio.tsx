import Image from 'next/image'

import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import { Premios } from '@/@types'

interface PremioProps {
  premio: Premios
}

export function Premio({ premio }: PremioProps) {
  return (
    <div className="flex flex-col items-center gap-5 lg:flex-row lg:gap-10">
      <Image
        src={`${premio.foto.url}`}
        height={441}
        width={441}
        alt={premio.foto.title}
        className="aspect-square max-h-[200px] max-w-[200px] lg:h-[250px] lg:w-[250px]"
        style={{
          objectFit: 'fill',
        }}
      />

      <div className="flex flex-col gap-4 text-black lg:gap-8">
        <h3 className="text-[24px] leading-[24px] lg:text-[36px] lg:leading-[36px]">
          {premio.nome}
        </h3>
        <p
          className="text-[18px] leading-[18px] lg:text-[22px] lg:leading-[22px]"
          dangerouslySetInnerHTML={{
            __html: documentToHtmlString(premio.descricao.json),
          }}
        />
      </div>
    </div>
  )
}
