import Icon from '@/components/Shared/Icon'
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import Image from 'next/image'
import Link from 'next/link'

interface MembroProps {
  project: string
}

export const Membro: React.FC<MembroProps> = ({ project }) => {
  return (
    <AccordionItem value={project}>
      <AccordionTrigger>
        <h3 className="text-[28px] leading-[28px] lg:text-[40px] lg:leading-[40px]">
          Dhaiara Machida
        </h3>
      </AccordionTrigger>
      <AccordionContent className="flex flex-row flex-wrap items-end gap-3">
        <Image
          src={`/membro1.png`}
          width={489}
          height={489}
          alt="Membro"
          className="h-full w-full max-w-[250px] lg:max-w-[350px]"
        />
        <div className="flex flex-col text-[16px] leading-[16px] lg:text-[22px] lg:leading-[22px]">
          <h4 className="mb-6">Presidente</h4>
          <span className="mb-2">dhaiaram@gmail.com</span>
          <span>53 9999-0013</span>
          <div className="flex flex-row gap-3">
            <Link href={''} className="block h-[48px] w-[48px]">
              <Icon name="linkedinIcon" className="w-full" />
            </Link>
            <Link href={''} className="block h-[48px] w-[48px]">
              <Icon name="instagramIcon" className="w-full" />
            </Link>
          </div>
        </div>
      </AccordionContent>
    </AccordionItem>
  )
}
