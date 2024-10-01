import { Accordion } from '@/components/ui/accordion'
import { Membro } from './Membro'
import { IMembro } from '@/@types'

interface MembrosListProps {
  membros: IMembro[]
}

export const MembrosList: React.FC<MembrosListProps> = ({ membros }) => {
  return (
    <section className="bg-white pb-10">
      <div className="container items-center">
        <div className="mx-auto flex flex-col gap-[40px] lg:gap-[112px]">
          <Accordion type="single" collapsible>
            {membros.map((membro) => {
              return <Membro key={membro.nome} membro={membro} />
            })}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
