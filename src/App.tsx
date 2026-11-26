import { StateEffectPanel } from './components/level1/StateEffectPanel'
import { ChameleonButton } from './components/level2/ChameleonButton'
import { InteractiveSquare } from './components/level2/InteractiveSqueare'

function App() {
  return (
    <main className="relative flex min-h-screen flex-col overflow-hidden bg-[#eee8dc] text-[#202b34] selection:bg-[#d2b16b] selection:text-[#202b34]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(#202b34_0.8px,transparent_0.8px)] bg-size-[18px_18px] opacity-[0.07]"
      />

      <header className="relative mx-auto flex w-full max-w-6xl items-center justify-between border-b-[3px] border-[#202b34] px-5 py-5 sm:px-8">
        <a href="/" className="text-sm font-black tracking-[0.16em] text-[#202b34] sm:text-base">
          BITÁCORA <span className="text-[#ad554c]">// REACT</span>
        </a>
        <span className="flex items-center gap-2 text-[10px] font-bold tracking-[0.12em] text-[#53666c] sm:text-xs">
          <span className="size-2 border-2 border-[#202b34] bg-[#d2b16b]" />
          RUMBO: AVENTURA
        </span>
      </header>

      <div className="relative mx-auto flex w-full max-w-6xl flex-1 flex-col px-5 py-10 sm:px-8 sm:py-14">
        <section className="relative overflow-hidden border-[3px] border-[#202b34] bg-[#fffaf0] p-6 shadow-[8px_8px_0_#202b34] sm:p-9">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-5 -top-5 size-40 rounded-full bg-[radial-gradient(#536f7a_1px,transparent_1px)] bg-size-[6px_6px] opacity-20"
          />
          <div className="relative flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
            <div className="max-w-3xl">
              <p className="mb-5 inline-flex -rotate-1 border-2 border-[#202b34] bg-[#d2b16b] px-3 py-1 text-[10px] font-black tracking-[0.15em] shadow-[3px_3px_0_#202b34]">
                CRÓNICA DE ALTA MAR · CAPÍTULO 01
              </p>
              <h1 className="text-4xl font-black uppercase leading-[0.92] tracking-tight sm:text-6xl">
                React
                <span className="text-[#ad554c]"> en </span>
                <span className="text-[#536f7a]">acción</span>
              </h1>
              <p className="mt-5 max-w-xl text-sm font-medium leading-6 text-[#53666c] sm:text-base">
                Una aventura interactiva entre estados, efectos y controles. Explora cada módulo y descubre qué sucede.
              </p>
            </div>
            <div className="w-fit shrink-0 -rotate-2 border-[3px] border-[#202b34] bg-[#ad554c] px-4 py-3 text-center text-[#fffaf0] shadow-[5px_5px_0_#202b34]">
              <p className="text-[9px] font-black tracking-[0.18em]">EDICIÓN</p>
              <p className="text-3xl font-black leading-none">01</p>
            </div>
          </div>
          <div aria-hidden="true" className="relative mt-7 border-t-2 border-dashed border-[#9a9a8d] pt-3 text-[9px] font-black tracking-[0.2em] text-[#536f7a]">
            ◀ NAVEGACIÓN · APRENDIZAJE · AVENTURA ▶
          </div>
        </section>

        <div className="mt-9 grid items-stretch gap-7 md:grid-cols-2">
          <div className="md:col-span-2">
            <StateEffectPanel />
          </div>
          <ChameleonButton />
          <InteractiveSquare />
        </div>

        <footer className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t-[3px] border-[#202b34] pt-4 text-[10px] font-bold tracking-[0.12em] text-[#53666c]">
          <span>BITÁCORA 01 // REACT + TYPESCRIPT</span>
          <span className="text-[#ad554c]">CONTINUARÁ...</span>
        </footer>
      </div>
    </main>
  )
}

export default App
