import { Premio } from './Premio'

export function PremiosList() {
  return (
    <section className="bg-white pb-10">
      <div className="container items-center">
        <div className="mx-auto flex w-[80%] flex-col gap-[40px] lg:gap-[112px]">
          {[1, 2, 3, 4, 5].map((project) => {
            return <Premio />
          })}
        </div>
      </div>
    </section>
  )
}
