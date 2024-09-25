import { IProjeto } from '@/@types'
import Image from 'next/image'
import Link from 'next/link'

interface ProjectProps {
  project: IProjeto
}

export function Project({ project }: ProjectProps) {
  console.log({ project })
  return (
    <Link className="flex flex-col gap-3" href={`/projetos/${project.nome}`}>
      <Image
        src={project.foto.url}
        height={665}
        width={1000}
        alt={project.foto.title}
        className="aspect-video w-full"
        style={{
          objectFit: 'fill',
        }}
      />

      <div className="flex justify-between">
        <span className="text-[27px] font-light text-black">
          {project.nome}
        </span>
        <span className="text-end text-[27px] font-light text-[#7A7A7A]">
          {project.tipo}
        </span>
      </div>
    </Link>
  )
}
