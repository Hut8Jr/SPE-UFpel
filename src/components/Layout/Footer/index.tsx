import Icon from '@/components/Shared/Icon'
import Link from 'next/link'

const Links = [
  {
    label: 'Sobre',
    href: '/sobre',
  },
  {
    label: 'Projetos',
    href: '/projetos',
  },
  {
    label: 'Prêmios',
    href: '/premios',
  },
  {
    label: 'Produtos',
    href: '/produtos',
  },
] as {
  label: string
  href: string
}[]

export function Footer() {
  return (
    <footer className="max-w-screen overflow-hidden border-y-2 border-[#E1E1E1] bg-white">
      <div className="container py-5 lg:py-14">
        <ul className="flex flex-col flex-wrap gap-3 md:flex-row lg:gap-5">
          {Links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="text-[#858585]">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-[#F5F5F5] py-[30px] lg:py-[100px]">
        <div className="container flex flex-col lg:flex-row">
          <div className="flex flex-1 flex-col">
            <span className="text-[18px] font-light text-[#858585] lg:text-[22px]">
              Vamos conversar
            </span>
            <Link
              href="/contato"
              className="group flex flex-row items-center gap-6 text-[32px] text-brand-dark-blue lg:text-[43px]"
            >
              Contato
              <div className="transform transition-transform duration-300 group-hover:translate-x-2">
                <Icon name="arrow" />
              </div>
            </Link>
          </div>

          <div className="flex flex-1 flex-col">
            <span className="text-[18px] font-light text-[#858585] lg:text-[22px]">
              Coenheça nossos
            </span>
            <Link
              href="/premios"
              className="group flex flex-row items-center gap-6 text-[32px] text-brand-dark-blue lg:text-[43px]"
            >
              Prêmios
              <div className="transform transition-transform duration-300 group-hover:translate-x-2">
                <Icon name="arrow" />
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className="container flex flex-row justify-between py-4 lg:py-7">
        <Link
          href="/"
          className="text-[16px] font-light text-[#858585] lg:text-[22px]"
        >
          Linkedin
        </Link>

        <span className="text-[16px] font-light text-[#858585] lg:text-[22px]">
          designed by Hut8
        </span>
      </div>
    </footer>
  )
}
