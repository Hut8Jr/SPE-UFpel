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
    label: 'Membros',
    href: '/membros',
  },
  {
    label: 'Produtos',
    href: '/produtos',
  },
  {
    label: 'Contato',
    href: '/contato',
  },
] as {
  label: string
  href: string
}[]

export default function Header() {
  return (
    <div className="bg-white">
      <div className="container flex items-center justify-between py-4">
        <Link href="/">
          <Icon name="logo-icon" />
        </Link>

        <nav>
          <ul className="flex flex-row gap-6 text-black">
            {Links.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  )
}
