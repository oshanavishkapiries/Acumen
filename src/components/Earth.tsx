import createGlobe from 'cobe'
import { useEffect, useRef } from 'react'

export default function Earth() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    let phi = 0
    let animationId: number

    const globe = createGlobe(canvasRef.current!, {
      devicePixelRatio: 2,
      width: 1000,
      height: 1000,
      phi: 0,
      theta: 0.3,
      dark: 0,
      diffuse: 1.2,
      scale: 1,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [1, 1, 1],
      markerColor: [255 / 255, 107 / 255, 107 / 255],
      glowColor: [0.95, 0.95, 0.95],
    })

    const update = () => {
      phi += 0.005
      globe.update({ phi })
      animationId = requestAnimationFrame(update)
    }
    update()

    return () => {
      cancelAnimationFrame(animationId)
      globe.destroy()
    }
  }, [])

  return (
    <div className="w-full aspect-square relative mx-auto lg:ml-auto flex items-center justify-center">
      <canvas
        ref={canvasRef}
        style={{
          width: '100%',
          height: '100%',
          contain: 'layout paint size',
          cursor: 'grab',
        }}
      />
    </div>
  )
}
