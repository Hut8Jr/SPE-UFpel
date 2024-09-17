import Image from 'next/image'
import Link from 'next/link'

export function Premio() {
  return (
    <div className="flex flex-col items-center gap-5 lg:flex-row lg:gap-10">
      <Image
        src="/award1.png"
        height={441}
        width={441}
        alt="Projeto 1"
        className="aspect-square max-h-[200px] max-w-[200px] lg:h-[250px] lg:w-[250px]"
        style={{
          objectFit: 'fill',
        }}
      />

      <div className="flex flex-col gap-4 text-black lg:gap-8">
        <h3 className="text-[24px] leading-[24px] lg:text-[36px] lg:leading-[36px]">
          Presidential Award for Outstanding Student Chapter 2020
        </h3>
        <p className="text-[18px] leading-[18px] lg:text-[22px] lg:leading-[22px]">
          É a maior honra que um capítulo estudantil pode receber. Ele reconhece
          os melhores 10% dos capítulos nas categorias de avaliação.
        </p>
      </div>
    </div>
  )
}
