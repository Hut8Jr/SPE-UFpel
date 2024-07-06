import Link from 'next/link'

export function Hero() {
  return (
    <section className="flex lg:h-[720px] lg:flex-row">
      <div className="bg-brand-dark-blue flex flex-1 flex-col items-center justify-center">
        <div className="mx-3 flex flex-1 flex-col justify-center lg:max-w-[591px]">
          <h2 className="text-[71px] text-white">
            Um pouco mais sobre nossa SPE
          </h2>
          <Link href="/sobre" className="text-white">
            SOBRE NÓS
          </Link>
        </div>
      </div>

      <div className="bg-brand-primary-blue flex flex-1 flex-col items-center justify-center">
        <div className="mx-3 flex flex-1 flex-col justify-center lg:max-w-[591px]">
          <h2 className="text-[71px] text-white">Mudando com nosso trabalho</h2>
          <Link href="/" className="text-white">
            NOSSOS PROJETOS
          </Link>
        </div>
      </div>
    </section>
  )
}
