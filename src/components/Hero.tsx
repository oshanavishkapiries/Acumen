import Earth from './Earth'

export default function Hero() {
  return (
    <div className="relative z-20 flex min-h-[calc(100vh-80px)] w-full flex-col overflow-hidden pt-12 lg:pt-0">
      
      {/* Background Globe Section for Desktop (Shifted right to cut off) */}
      <div className="pointer-events-none absolute right-0 top-1/2 z-10 hidden w-[150vh] -translate-y-1/2 translate-x-[35%] lg:block">
        <Earth />
      </div>

      <div className="relative z-30 mx-auto flex w-full max-w-[1440px] flex-1 flex-col justify-center px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col lg:max-w-[55%]">
          <p className="mb-5 text-[13px] font-semibold tracking-wide text-[#FF6B6B] uppercase sm:mb-8 sm:text-[14px]">
            BEETLECODE (PVT) LTD
          </p>
          <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-[1.05] tracking-[-0.03em] text-gray-900">
            Code Smart. Build Strong.
            <br />
            Grow Digital.
          </h1>
          <p className="mt-6 max-w-[600px] text-[16px] font-normal leading-[1.6] text-gray-700 sm:mt-8 sm:text-[18px]">
            BeetleCode crafts resilient, AI-driven digital ecosystems that accelerate enterprise transformation.
          </p>
          
          <div className="mt-8 flex flex-col gap-4 sm:mt-10 sm:flex-row sm:items-center sm:gap-6">
            <a
              href="mailto:info@beetlecode.com"
              className="group inline-flex w-fit items-center gap-3 rounded-full bg-[#FF6B6B] px-8 py-3.5 text-[15px] font-medium text-white shadow-lg transition-all duration-300 hover:bg-[#FF4C4C] hover:shadow-xl hover:-translate-y-0.5"
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>

      {/* Background Globe Section for Mobile (Anchored at bottom) */}
      <div className="pointer-events-none absolute -bottom-[15%] left-1/2 z-10 w-[150vw] max-w-[800px] -translate-x-1/2 lg:hidden">
        <Earth />
      </div>

    </div>
  )
}
