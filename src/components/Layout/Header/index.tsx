'use client'

import Icon from '@/components/Shared/Icon'
import {
  DrawerTrigger,
  DrawerContent,
  Drawer,
  DrawerHeader,
  DrawerClose,
} from '@/components/ui/drawer'
import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

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
  // {
  //   label: 'Produtos',
  //   href: '/produtos',
  // },
  {
    label: 'Contato',
    href: '/contato',
  },
] as {
  label: string
  href: string
}[]

export default function Header() {
  const pathName = usePathname()

  const isActive = (href: string) => pathName === href

  return (
    <div className="max-w-screen fixed top-0 z-50 w-full bg-white shadow-md">
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="w-[120px] transition lg:w-[190px]">
          <Icon name="logo-icon" />
        </Link>

        <nav className="hidden lg:block">
          <ul className="flex flex-row gap-6 text-black">
            {Links.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </ul>
        </nav>

        <Drawer direction="right">
          <DrawerTrigger>
            <button className="flex items-center gap-3">
              Menu
              <div className="w-10">
                <Icon name="horizontalLinesIcon" />
              </div>
            </button>
          </DrawerTrigger>

          <DrawerContent className="h-screen">
            <DrawerHeader className="flex justify-between text-lg font-bold">
              SPE UFPEL{' '}
              <DrawerClose className="flex w-12 items-center gap-3">
                <Icon name="xIcon" />
              </DrawerClose>
            </DrawerHeader>
            <nav className="flex flex-col items-start justify-center gap-6 p-4 text-black">
              {Links.map((link) => (
                <DrawerClose asChild>
                  <Link
                    key={link.href}
                    href={link.href}
                    className={clsx(
                      'text-2xl',
                      isActive(link.href) && 'text-3xl font-bold underline'
                    )}
                  >
                    {link.label}
                  </Link>
                </DrawerClose>
              ))}
            </nav>
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  )
}
