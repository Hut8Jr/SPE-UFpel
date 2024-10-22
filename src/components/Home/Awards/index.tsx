import { IPremio } from '@/@types'
import Image from 'next/image'

interface HomeAwardsProps {
  premios: IPremio[]
}

export const HomeAwards: React.FC<HomeAwardsProps> = ({ premios }) => {
  return (
    <section className="max-w-screen overflow-hidden bg-white py-[40px] lg:py-[180px]">
      <div className="container flex flex-col items-center justify-around gap-8 lg:flex-row lg:gap-4">
        {premios.map((premio) => (
          <div className="h-[150px] w-[150px] lg:h-[225px] lg:w-[225px]">
            <Image
              key={premio.nome}
              src={premio?.foto?.url || ''}
              width={225}
              height={225}
              alt={`Prêmio ${premio.nome}`}
            />
          </div>
        ))}
      </div>
    </section>
  )
}
