import { useState } from 'react';

export const ChameleonButton = () => {
    const [active, setActive] = useState<boolean>(false);

    const handletoggle = () => {
        setActive((prev) => !prev);
    }

    return (
        <section className="relative flex w-full flex-col overflow-hidden border-[3px] border-[#202b34] bg-[#fffaf0] p-5 text-[#202b34] shadow-[7px_7px_0_#536f7a] sm:p-8">
            <div aria-hidden="true" className="pointer-events-none absolute right-4 top-4 size-12 bg-[radial-gradient(#202b34_1px,transparent_1px)] bg-size-[5px_5px] opacity-15" />
            <div className="relative mb-5 flex items-center justify-between gap-4 border-b-2 border-dashed border-[#9a9a8d] pb-4">
                <p className="text-[10px] font-black tracking-[0.16em] text-[#ad554c]">
                    MÓDULO // 02
                </p>
                <p className="text-[10px] font-bold tracking-[0.12em] text-[#536f7a]">
                    ESTADO: CAMBIO DE COLOR
                </p>
            </div>
            <h2 className="mb-2 text-xl font-black uppercase leading-tight text-[#202b34] sm:text-2xl">
                Botón Camaleón
            </h2>
            <p className="mb-7 text-sm font-medium leading-6 text-[#53666c]">
                Toca el botón y mira cómo cambia de apariencia.
            </p>
            <button
                type="button"
                aria-pressed={active}
                onClick={handletoggle}
                className={`relative mt-auto min-h-12 cursor-pointer border-[3px] border-[#202b34] px-5 text-xs font-black uppercase tracking-wider text-[#fffaf0] shadow-[4px_4px_0_#202b34] transition duration-150 focus-visible:outline-2 focus-visible:outline-offset-4 active:translate-y-1 active:shadow-none ${active ? 'bg-[#536f7a] hover:-translate-y-0.5 hover:bg-[#405b65] focus-visible:outline-[#536f7a]' : 'bg-[#ad554c] hover:-translate-y-0.5 hover:bg-[#96483f] focus-visible:outline-[#ad554c]'}`}
            >
                {active ? 'Estado: Activado' : 'Haz clic para activar'}
            </button>
        </section>
    );
}