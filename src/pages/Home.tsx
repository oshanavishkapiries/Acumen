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
          {/* Hero content goes here */}
          <h1 className="text-4xl font-bold text-gray-900">Home Page</h1>
        </div>
      </div>
    </>
  )
}
