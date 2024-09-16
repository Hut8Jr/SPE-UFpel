import Image from 'next/image'

export function HomeAwards() {
  return (
    <section className="max-w-screen overflow-hidden bg-white py-[40px] lg:py-[180px]">
      <div className="container flex flex-col items-center justify-between gap-4 lg:flex-row">
        {[1, 2, 3].map((award) => (
          <div className="h-[150px] w-[150px] lg:h-[225px] lg:w-[225px]">
            <Image
              key={award}
              src={`/award1.png`}
              width={225}
              height={225}
              alt={`Prêmio ${award}`}
            />
          </div>
        ))}
      </div>
    </section>
  )
}
