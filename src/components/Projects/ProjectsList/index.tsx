import { Project } from './Project'

export function ProjectsList() {
  return (
    <section className="bg-white py-[160px]">
      <div className="container">
        <div>
          <h1 className="text-[70px] font-light leading-[70px] text-black">
            Nossos projetos
          </h1>
          <p className="mt-[20px] max-w-[813px] text-[27px] font-light leading-[43px] text-black">
            Nós do capítulos possuímos diversos projetos que visam auxiliar o
            aluno em formação, além dos projetos que tem impacto social na
            cidade de Pelotas, e a realização da semana acadêmica, o Petro-Sul.
          </p>
        </div>

        <div className="mt-[112px] flex flex-col gap-[112px]">
          {[1, 2, 3, 4, 5].map((project) => {
            return <Project />
          })}
        </div>
      </div>
    </section>
  )
}
