import { IProjeto } from '@/@types'
import Image from 'next/image'

interface HeroProps {
  foto: IProjeto['foto']
}

export const Hero: React.FC<HeroProps> = ({ foto }) => {
  return (
    <section className="flex justify-center bg-brand-dark-blue">
      <Image
        src={foto.url}
        height={680}
        width={1350}
        alt={foto.title}
        className="aspect-video"
        style={{
          objectFit: 'fill',
        }}
      />
    </section>
  )
}
