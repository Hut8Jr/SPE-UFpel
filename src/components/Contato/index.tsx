import Icon from '../Shared/Icon'

export const ContatoContainer = () => {
  return (
    <main className="h-full">
      <div className="mx-auto flex h-[250px] max-w-[400px] flex-col items-start justify-center gap-2 lg:h-[500px] lg:text-2xl">
        <div>
          Email:&nbsp;
          <a
            href="mailto:spestudentchapterufpel@gmail.com"
            className="text-blue-400 hover:underline"
          >
            spestudentchapterufpel@gmail.com
          </a>
        </div>
        <div className="flex items-center">
          <Icon name="instagramIcon" width={32} height={32} />:
          <a
            href="https://www.instagram.com/speufpel/"
            className="ml-8 flex items-center text-blue-400 hover:underline"
            target="_blank"
          >
            @speufpel
          </a>
        </div>
        <div className="flex items-center">
          <Icon name="linkedinIcon" width={32} height={32} />:
          <a
            href="https://www.linkedin.com/company/spe-ufpel-student-chapter/"
            className="ml-8 flex items-center text-blue-400 hover:underline"
            target="_blank"
          >
            SPE UFPel
          </a>
        </div>
      </div>
    </main>
  )
}
