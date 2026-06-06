import { ChromaFlow, FilmGrain, FlutedGlass, Shader, Swirl } from 'shaders/react'

export default function Home() {
  return (
    <>
      <div className="pointer-events-none absolute inset-0 z-10">
        <Shader className="h-full w-full">
          <Swirl colorA="#ffffff" colorB="#f0f0f0" detail={1.7} />
          <ChromaFlow
            baseColor="#ffffff"
            downColor="#FF6B6B"
            leftColor="#FF6B6B"
            rightColor="#FF6B6B"
            upColor="#FF6B6B"
            momentum={13}
            radius={3.5}
          />
          <FlutedGlass
            aberration={0.61}
            angle={31}
            frequency={8}
            highlight={0.12}
            highlightSoftness={0}
            lightAngle={-90}
            refraction={4}
            shape="rounded"
            softness={1}
            speed={0.15}
          />
          <FilmGrain strength={0.05} />
        </Shader>
      </div>
      <div className="relative z-20 flex flex-1 flex-col">
        <div className="flex-1" />
        <div className="mx-auto w-full max-w-[1440px] px-5 pb-14 sm:px-8 sm:pb-16 lg:px-12 lg:pb-20">
          <p className="mb-5 text-[13px] tracking-wide text-gray-900 sm:mb-8 sm:text-[14px] uppercase font-semibold">
            BEETLECODE (PVT) LTD
          </p>
          <h1 className="max-w-[1120px] text-[clamp(1.75rem,7vw,4.2rem)] font-medium leading-[1.08] tracking-[-0.03em] text-gray-900 sm:text-[clamp(2.5rem,5vw,4.2rem)]">
            Code Smart. Build Strong.
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            Grow Digital.
          </h1>
          <p className="mt-6 max-w-[600px] text-[15px] font-medium leading-[1.6] text-gray-800 sm:mt-8 sm:text-[17px]">
            BeetleCode crafts resilient, AI-driven digital ecosystems that accelerate enterprise transformation.
          </p>
          
          <div className="mt-8 flex flex-col gap-4 sm:mt-12 sm:flex-row sm:items-center sm:gap-6">
            <a
              href="mailto:info@beetlecode.com"
              className="group inline-flex w-fit items-center gap-3 rounded-full bg-[#FF6B6B] py-3 px-6 text-[14px] font-medium text-white transition-colors duration-300 hover:bg-[#FF4C4C]"
            >
              Get in touch
            </a>
            
            <div className="flex gap-4 text-[14px] font-medium">
              <a href="https://www.tiktok.com/@beetlecode" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-[#FF6B6B] transition-colors">TikTok</a>
              <a href="https://www.youtube.com/@BeetleCode" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-[#FF6B6B] transition-colors">YouTube</a>
              <a href="https://www.instagram.com/beetlecode.global/" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-[#FF6B6B] transition-colors">Instagram</a>
              <a href="https://web.facebook.com/beetlecode.global" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-[#FF6B6B] transition-colors">Facebook</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
