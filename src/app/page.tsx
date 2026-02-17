import FaultyTerminal from '@/components/FaultyTerminal';
import RotatingText from '@/components/RotatingText';

export default function Home() {
  return (
    <main className="absolute inset-0 w-full h-full flex flex-col items-center justify-center overflow-hidden">

      {/* Background: Faulty Terminal */}
      <div className="absolute inset-0 z-0 overflow-hidden opacity-60">
        <div className="absolute inset-0 min-w-full min-h-full">
          <FaultyTerminal
            scale={1.1}
            digitSize={1.5}
            scanlineIntensity={1}
            glitchAmount={0}
            flickerAmount={1}
            noiseAmp={0.05}
            chromaticAberration={0.05}
            dither={0}
            curvature={0.2}
            tint="#ffffee"
            mouseReact
            mouseStrength={0.2}
            brightness={0.6}
            style={{ width: '100%', height: '100%' }}
          />
        </div>
      </div>

      {/* Center Content */}
      <div className="relative z-10 flex flex-col items-center justify-center space-y-2 pointer-events-none">

        {/* Brand */}
        <div className="pointer-events-auto select-none py-2">
          <h1
            className="text-[6rem] md:text-[8rem] font-black tracking-wide text-foreground leading-none pb-4 drop-shadow-lg text-center"
            style={{ fontFamily: 'tanker' }}
          >
            Alvin Binoy
          </h1>
        </div>

        {/* Sub-brand */}
        <div className="flex flex-col items-center space-y-1">
          <span className="text-xs text-gray-200 tracking-[0.3em] font-mono opacity-50">AKA</span>
          <h2 className="text-5xl md:text-6xl font-bold font-space-grotesk text-foreground tracking-wide lowercase">
            ALVO
          </h2>
        </div>

        {/* Rotating Role */}
        <div className="mt-4 flex items-center text-gray-200 font-mono text-2xl md:text-3xl">
          <span>I&apos;m a </span>
          <RotatingText />
        </div>

      </div>
    </main>
  );
}
