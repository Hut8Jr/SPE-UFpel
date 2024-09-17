import Link from 'next/link'

export function Hero() {
  return (
    <section className="bg-brand-dark-blue">
      <div className="container flex h-[250px] flex-1 flex-col lg:h-[720px]">
        <div className="mx-3 mt-8 flex flex-1 flex-col gap-3 lg:max-w-[591px] lg:justify-start lg:gap-7">
          <h2 className="text-[36px] font-light leading-[36px] text-white lg:text-[71px] lg:leading-[74px]">
            Um pouco mais sobre nossa SPE
          </h2>
          <span className="font-light text-white lg:no-underline">
            SOBRE NÓS
          </span>
        </div>
      </div>
    </section>
  )
}
