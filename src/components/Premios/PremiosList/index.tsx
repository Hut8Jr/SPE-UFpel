import { Premios } from '@/@types'
import { Premio } from './Premio'

interface PremioListProps {
  premios: Premios[]
}

export function PremiosList({ premios }: PremioListProps) {
  return (
    <section className="bg-white pb-10">
      <div className="container items-center">
        <div className="mx-auto flex w-[80%] flex-col gap-[40px] lg:gap-[112px]">
          {premios.map((premio) => {
            return <Premio premio={premio} key={premio.nome} />
          })}
        </div>
      </div>
    </section>
  )
}
