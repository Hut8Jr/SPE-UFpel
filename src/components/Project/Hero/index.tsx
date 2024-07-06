import Image from 'next/image'

export function Hero() {
  return (
    <section className="container bg-white">
      <Image
        src="/projeto1.png"
        height={680}
        width={1350}
        alt="Projeto 1"
        className="max-h-[680px] max-w-[1350px]"
        style={{
          objectFit: 'fill',
        }}
      />
    </section>
  )
}
