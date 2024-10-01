import Icon from '@/components/Shared/Icon'

export function Hero() {
  return (
    <section className="relative bg-brand-primary-blue">
      <div className="container relative z-30 flex h-[250px] flex-1 flex-col lg:h-[720px]">
        <div className="mx-3 mt-8 flex flex-1 flex-col gap-3 lg:max-w-[591px] lg:justify-start lg:gap-7">
          <h2 className="z-30 text-[36px] font-light leading-[36px] text-white lg:text-[71px] lg:leading-[74px]">
            Frase marcante sobre o sobre
          </h2>
          <span className="z-30 font-light text-white lg:no-underline">
            NOSSOS PROJETOS
          </span>
        </div>
        <div className="absolute bottom-5 right-5 z-10 flex flex-col items-end gap-2">
          <div className="flex flex-row gap-2">
            <div className="w-[90px] lg:w-[200px]">
              <Icon name="shapeDarkIcon" />
            </div>
            <div className="w-[90px] rotate-180 lg:w-[200px]">
              <Icon name="shapeDarkIcon" />
            </div>
          </div>
          <div className="flex flex-row gap-2">
            <div className="w-[90px] lg:w-[200px]">
              <Icon name="shapeDarkIcon" />
            </div>
            <div className="w-[90px] rotate-180 lg:w-[200px]">
              <Icon name="shapeDarkIcon" />
            </div>
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
