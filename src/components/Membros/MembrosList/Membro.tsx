import { IMembro } from '@/@types'
import Icon from '@/components/Shared/Icon'
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import Image from 'next/image'
import Link from 'next/link'

interface MembroProps {
  membro: IMembro
}

export const Membro: React.FC<MembroProps> = ({ membro }) => {
  return (
    <AccordionItem value={membro.nome + membro.descricao}>
      <AccordionTrigger>
        <h3 className="text-[28px] leading-[28px] lg:text-[40px] lg:leading-[40px]">
          {membro.nome}
        </h3>
      </AccordionTrigger>
      <AccordionContent className="flex flex-row flex-wrap items-end gap-3">
        <Image
          src={membro.foto.url}
          width={489}
          height={489}
          alt={`Foto de ${membro.nome}`}
          className="h-full w-full max-w-[250px] lg:max-w-[350px]"
        />
        <div className="flex flex-col text-[16px] leading-[16px] lg:text-[22px] lg:leading-[22px]">
          <h4 className="mb-6">Presidente</h4>
          <span className="mb-2">dhaiaram@gmail.com</span>
          <span>53 9999-0013</span>
          <div className="flex flex-row gap-3">
            {membro.linkedin && (
              <Link href={membro.linkedin} className="block h-[48px] w-[48px]">
                <Icon name="linkedinIcon" className="w-full" />
              </Link>
            )}
            {membro.instagram && (
              <Link href={''} className="block h-[48px] w-[48px]">
                <Icon name="instagramIcon" className="w-full" />
              </Link>
            )}
          </div>
        </div>
      </AccordionContent>
    </AccordionItem>
  )
}
