export function Hero() {
  return (
    <section className="bg-brand-primary-blue">
      <div className="container flex h-[250px] flex-1 flex-col lg:h-[720px]">
        <div className="mx-3 mt-8 flex flex-1 flex-col gap-3 lg:max-w-[591px] lg:justify-start lg:gap-7">
          <h2 className="text-[36px] font-light leading-[36px] text-white lg:text-[71px] lg:leading-[74px]">
            Frase marcante sobre o sobre
          </h2>
          <span className="font-light text-white lg:no-underline">
            NOSSOS PROJETOS
          </span>
        </div>
      </div>
    </section>
  )
}
