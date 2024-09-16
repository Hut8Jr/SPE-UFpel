import Link from 'next/link'

export function Hero() {
  return (
    <section className="container h-[250px] bg-brand-dark-blue lg:h-[720px]">
      <div className="flex flex-1 flex-col lg:items-center lg:justify-center">
        <div className="mx-3 mt-8 flex flex-1 flex-col gap-3 lg:max-w-[591px] lg:justify-center lg:gap-7">
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
