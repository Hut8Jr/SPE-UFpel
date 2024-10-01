import Icon from '@/components/Shared/Icon'
import clsx from 'clsx'
import Link from 'next/link'

export function Hero() {
  return (
    <section
      className={clsx(
        'flex h-[500px] lg:h-[720px] lg:flex-row',
        'lg:bg-[linear-gradient(90deg,#163C76_50%,#0B4499_50%)]',
        'bg-[linear-gradient(#163C76_50%,#0B4499_50%)]'
      )}
    >
      <div className="container flex flex-col justify-between lg:flex-row">
        <div className="flex flex-1 flex-col lg:items-center lg:justify-center">
          <div className="mx-3 mt-8 flex flex-1 flex-col gap-3 lg:max-w-[591px] lg:justify-center lg:gap-7">
            <h2 className="text-[36px] font-light leading-[36px] text-white lg:text-[71px] lg:leading-[74px]">
              Um pouco mais sobre nossa SPE
            </h2>
            <Link
              href="/sobre"
              className="font-light text-white underline hover:underline lg:no-underline"
            >
              SOBRE NÓS
            </Link>
          </div>
        </div>

        <div className="relative flex flex-1 flex-col lg:items-center lg:justify-center">
          <div className="mx-3 mt-8 flex flex-1 flex-col gap-3 lg:max-w-[591px] lg:justify-center lg:gap-7">
            <h2 className="text-[36px] font-light leading-[36px] text-white lg:text-[71px] lg:leading-[74px]">
              Mudando com nosso trabalho
            </h2>
            <Link
              href="/projetos"
              className="font-light text-white underline hover:underline lg:no-underline"
            >
              NOSSOS PROJETOS
            </Link>
          </div>

          <div className="absolute bottom-5 right-0 flex flex-row gap-2">
            <div className="w-[90px] lg:w-[200px]">
              <Icon name="shapeDarkIcon" />
            </div>
            <div className="w-[90px] rotate-180 lg:w-[200px]">
              <Icon name="shapeDarkIcon" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
