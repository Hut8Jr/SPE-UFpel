import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Membro } from './Membro'

export function MembrosList() {
  return (
    <section className="bg-white pb-10">
      <div className="container items-center">
        <div className="mx-auto flex flex-col gap-[40px] lg:gap-[112px]">
          <Accordion type="single" collapsible>
            {[1, 2, 3, 4, 5].map((project) => {
              return <Membro key={project} project={String(project)} />
            })}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
