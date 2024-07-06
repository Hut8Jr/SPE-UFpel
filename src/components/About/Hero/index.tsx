import Link from 'next/link'

export function Hero() {
  return (
    <section className="container h-[720px] bg-brand-dark-blue">
      <div className="flex max-w-[591px] flex-col items-start justify-start">
        <h2 className="mt-[140px] text-[71px] font-light leading-[74px] text-white">
          Um pouco mais sobre nossa SPE
        </h2>
        <span className="mt-6 text-[22px] font-light lg:ml-[100px]">
          SOBRE NÓS
        </span>
      </div>
    </section>
  )
}
