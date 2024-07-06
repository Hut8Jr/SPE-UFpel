import Image from 'next/image'

export function HomeAwards() {
  return (
    <section className="bg-white py-[180px]">
      <div className="container flex flex-row justify-between">
        {[1, 2, 3].map((award) => (
          <Image
            key={award}
            src={`/award1.png`}
            width={225}
            height={225}
            alt={`Prêmio ${award}`}
          />
        ))}
      </div>
    </section>
  )
}
