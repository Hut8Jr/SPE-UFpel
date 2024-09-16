import { Project } from './Project'

export function ProjectsList() {
  return (
    <section className="bg-white py-[40px] lg:py-[150px]">
      <div className="container">
        <div>
          <h1 className="text-[36px] font-light leading-[36px] text-black lg:text-[70px] lg:leading-[70px]">
            Nossos projetos
          </h1>
          <p className="mt-[20px] max-w-[813px] text-lg font-light text-black lg:text-[27px] lg:leading-[43px]">
            Nós do capítulos possuímos diversos projetos que visam auxiliar o
            aluno em formação, além dos projetos que tem impacto social na
            cidade de Pelotas, e a realização da semana acadêmica, o Petro-Sul.
          </p>
        </div>

        <div className="mx-auto mt-[20px] flex w-[80%] flex-col gap-[40px] lg:mt-[112px] lg:gap-[112px]">
          {[1, 2, 3, 4, 5].map((project) => {
            return <Project />
          })}
        </div>
      </div>
    </section>
  )
}
