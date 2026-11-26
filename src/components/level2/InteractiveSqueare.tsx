import { useState } from 'react';

export const InteractiveSquare = () => {
    const [onTop, setOnTop] = useState<boolean>(false);
    const [activeBorder, setActiveBorder] = useState<boolean>(false);

    return (
        <section className="relative flex w-full flex-col overflow-hidden border-[3px] border-[#202b34] bg-[#fffaf0] p-5 text-[#202b34] shadow-[7px_7px_0_#d2b16b] sm:p-8">
            <div aria-hidden="true" className="pointer-events-none absolute right-4 top-4 size-12 bg-[radial-gradient(#202b34_1px,transparent_1px)] bg-size-[5px_5px] opacity-15" />
            <div className="relative mb-5 flex items-center justify-between gap-4 border-b-2 border-dashed border-[#9a9a8d] pb-4">
                <p className="text-[10px] font-black tracking-[0.16em] text-[#ad554c]">
                    MÓDULO // 03
                </p>
                <p className="text-[10px] font-bold tracking-[0.12em] text-[#536f7a]">
                    ESTADO: EN CAPAS
                </p>
            </div>
            <h2 className="mb-2 text-xl font-black uppercase leading-tight text-[#202b34] sm:text-2xl">
                Cuadrado interactivo
            </h2>
            <p className="mb-5 text-sm font-medium leading-6 text-[#53666c]">
                Cambia qué figura queda por encima.
            </p>
            <button
                type="button"
                aria-label="Cambiar el orden de las capas"
                aria-pressed={onTop}
                onClick={() => setOnTop((previous) => !previous)}
                onPointerEnter={() => setActiveBorder(true)}
                onPointerLeave={() => setActiveBorder(false)}
                onFocus={() => setActiveBorder(true)}
                onBlur={() => setActiveBorder(false)}
                className={`relative mx-auto h-32 w-48 cursor-pointer border-[3px] bg-[#eee8dc] shadow-[4px_4px_0_#202b34] transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ad554c] ${activeBorder ? 'border-[#ad554c]' : 'border-[#202b34]'}`}
            >
                <span
                    aria-hidden="true"
                    className={`absolute left-8 top-5 grid size-16 place-items-center border-[3px] border-[#202b34] bg-[#ad554c] text-sm font-black text-[#fffaf0] shadow-[3px_3px_0_#202b34] transition-all ${onTop ? 'z-10 translate-x-8 translate-y-3 rotate-6' : 'z-0 -rotate-6'}`}
                >
                    A
                </span>
                <span
                    aria-hidden="true"
                    className={`absolute right-8 top-5 grid size-16 place-items-center border-[3px] border-[#202b34] bg-[#536f7a] text-sm font-black text-[#fffaf0] shadow-[3px_3px_0_#202b34] transition-all ${onTop ? 'z-0 rotate-6' : 'z-10 -translate-x-8 translate-y-3 -rotate-6'}`}
                >
                    B
                </span>
            </button>
            <p aria-live="polite" className="mt-5 text-center text-[10px] font-black uppercase tracking-[0.14em] text-[#53666c]">
                {onTop ? 'Capa superior: A' : 'Capa superior: B'}
            </p>
        </section>
    )
}