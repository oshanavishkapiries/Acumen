import { ChromaFlow, FilmGrain, FlutedGlass, Shader, Swirl } from 'shaders/react'
import Hero from '../components/Hero'

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
            frequency={24}
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
      <Hero />
      
      {/* Empty section for scroll testing */}
      <div className="relative z-20 flex min-h-screen w-full items-center justify-center bg-white">
        <p className="text-xl font-medium text-gray-400">Next Section (Scroll Test)</p>
      </div>
    </>
  )
}
