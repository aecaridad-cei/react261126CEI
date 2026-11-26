import { StateEffectPanel } from './components/level1/StateEffectPanel'

function App() {
  return (
    <main className="relative flex min-h-screen flex-col overflow-hidden bg-[#080b14] text-slate-100 selection:bg-[#fcee0a] selection:text-[#080b14]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(0,240,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(0,240,255,0.035)_1px,transparent_1px)] bg-size-[32px_32px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(255,43,214,0.14),transparent_55%)]"
      />

      <header className="relative mx-auto flex w-full max-w-6xl items-center justify-between border-b border-[#263443] px-5 py-5 sm:px-8">
        <a href="/" className="text-sm font-black tracking-[0.2em] text-[#fcee0a] sm:text-base">
          RX // LAB
        </a>
        <span className="flex items-center gap-2 text-[10px] tracking-[0.16em] text-[#00f0ff] sm:text-xs">
          <span className="size-2 animate-pulse bg-[#00f0ff]" />
          SISTEMA ACTIVO
        </span>
      </header>

      <div className="relative mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-5 py-16 sm:px-8 sm:py-24">
        <div className="mb-8 max-w-3xl">
          <p className="mb-4 text-xs font-bold tracking-[0.3em] text-[#ff2bd6]">
            // ENTORNO DE ENTRENAMIENTO · 01
          </p>
          <h1 className="text-4xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-6xl">
            React
            <span className="text-[#fcee0a]"> en la </span>
            <br className="sm:hidden" />
            <span className="text-[#00f0ff]">ciudad</span>
          </h1>
          <p className="mt-5 max-w-xl text-sm leading-6 text-slate-400 sm:text-base">
            Laboratorio de interfaces interactivas. Ejecuta una acción y observa cómo responde el sistema.
          </p>
        </div>

        <StateEffectPanel />

        <footer className="mt-10 flex items-center justify-between border-t border-[#263443] pt-4 text-[10px] tracking-[0.16em] text-slate-500">
          <span>BUILD 01.01 // REACT + TYPESCRIPT</span>
          <span className="text-[#ff2bd6]">NIGHT MODE: ON</span>
        </footer>
      </div>
    </main>
  )
}

export default App
