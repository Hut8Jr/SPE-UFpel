import Image from 'next/image'

export function Project() {
  return (
    <div className="flex max-w-[1006px] flex-col gap-3">
      <Image
        src="/projeto1.png"
        height={665}
        width={1000}
        alt="Projeto 1"
        className="max-h-[665px] max-w-[1006px]"
        style={{
          objectFit: 'fill',
        }}
      />

      <div className="flex justify-between">
        <span className="text-[27px] font-light text-black">Speaking</span>
        <span className="text-end text-[27px] font-light text-[#7A7A7A]">
          Palestras
        </span>
      </div>
    </div>
  )
}
