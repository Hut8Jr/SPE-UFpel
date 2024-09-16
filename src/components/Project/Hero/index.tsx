import Image from 'next/image'

export function Hero() {
  return (
    <section className="container bg-brand-dark-blue">
      <Image
        src="/projeto1.png"
        height={680}
        width={1350}
        alt="Projeto 1"
        className="aspect-video"
        style={{
          objectFit: 'fill',
        }}
      />
    </section>
  )
}
