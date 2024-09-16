import Image from 'next/image'
import Link from 'next/link'

export function Project() {
  return (
    <Link className="flex flex-col gap-3" href={'/projetos/projeto1'}>
      <Image
        src="/projeto1.png"
        height={665}
        width={1000}
        alt="Projeto 1"
        className="aspect-video w-full"
        style={{
          objectFit: 'fill',
        }}
      />

      <div className="flex justify-between">
        <span className="text-[27px] font-light text-black">Speaking</span>
        <span className="text-end text-[27px] font-light text-[#7A7A7A]">
          Palestras
        </span>
      </div>
    </Link>
  )
}
