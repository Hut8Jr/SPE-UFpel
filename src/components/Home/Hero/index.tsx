import clsx from 'clsx'
import Link from 'next/link'

export function Hero() {
  return (
    <section
      className={clsx(
        'flex lg:h-[720px] lg:flex-row',
        // gradient
        'bg-[linear-gradient(90deg,#163C76_50%,#0B4499_50%)]'
      )}
    >
      <div className="container flex flex-row justify-between">
        <div className="flex flex-1 flex-col items-center justify-center">
          <div className="mx-3 flex flex-1 flex-col justify-center lg:max-w-[591px]">
            <h2 className="text-[71px] text-white">
              Um pouco mais sobre nossa SPE
            </h2>
            <Link href="/sobre" className="text-white">
              SOBRE NÓS
            </Link>
          </div>
        </div>

        <div className="flex flex-1 flex-col items-center justify-center">
          <div className="mx-3 flex flex-1 flex-col justify-center lg:max-w-[591px]">
            <h2 className="text-[71px] text-white">
              Mudando com nosso trabalho
            </h2>
            <Link href="/" className="text-white">
              NOSSOS PROJETOS
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
