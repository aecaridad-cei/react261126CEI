import { useState } from 'react';
import { INITIAL_ITEMS_CLICK } from '../../data/mockLists';
import type { InteractiveItem } from '../../types/interactive.types';

export const InteractiveClickList = () => {
    const [items, setItems] = useState<InteractiveItem[]>(INITIAL_ITEMS_CLICK);
    const handleToggleItem = (id: number) => {
        setItems((prevItems) =>
            prevItems.map((item) => ({
                ...item,
                active: item.id === id ? !item.active : item.active
            }))
        );
    };

    const completedItems = items.filter((item) => item.active).length;

    return (
        <section className="relative w-full overflow-hidden border-[3px] border-[#202b34] bg-[#fffaf0] p-5 text-[#202b34] shadow-[7px_7px_0_#ad554c] sm:p-8">
            <div
                aria-hidden="true"
                className="pointer-events-none absolute right-4 top-4 size-14 bg-[radial-gradient(#202b34_1px,transparent_1px)] bg-size-[5px_5px] opacity-15"
            />
            <div className="relative mb-5 flex flex-wrap items-center justify-between gap-3 border-b-2 border-dashed border-[#9a9a8d] pb-4">
                <p className="text-[10px] font-black tracking-[0.16em] text-[#ad554c]">
                    MÓDULO // 04
                </p>
                <p aria-live="polite" className="border-2 border-[#202b34] bg-[#d2b16b] px-2 py-1 text-[10px] font-black tracking-[0.1em] shadow-[2px_2px_0_#202b34]">
                    MISIONES: {completedItems}/{items.length}
                </p>
            </div>
            <h2 className="mb-2 text-xl font-black uppercase leading-tight sm:text-2xl">
                Lista de misiones
            </h2>
            <p className="mb-6 text-sm font-medium leading-6 text-[#53666c]">
                Completa cada objetivo de la travesía. Pulsa de nuevo para desmarcarlo.
            </p>
            <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((item) => (
                    <li key={item.id}>
                        <button
                            type="button"
                            aria-pressed={item.active}
                            onClick={() => handleToggleItem(item.id)}
                            className={`flex min-h-20 w-full items-center gap-3 border-[3px] border-[#202b34] p-3 text-left shadow-[3px_3px_0_#202b34] transition duration-150 hover:-translate-y-0.5 hover:shadow-[4px_4px_0_#202b34] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ad554c] active:translate-y-1 active:shadow-none ${item.active ? 'bg-[#536f7a] text-[#fffaf0]' : 'bg-[#f1e8d8] text-[#202b34]'}`}
                        >
                            <span className={`grid size-9 shrink-0 place-items-center border-2 border-[#202b34] text-xs font-black ${item.active ? 'bg-[#d2b16b] text-[#202b34]' : 'bg-[#fffaf0] text-[#ad554c]'}`}>
                                {String(item.id).padStart(2, '0')}
                            </span>
                            <span className="min-w-0 flex-1">
                                <span className="block text-xs font-black uppercase leading-5">
                                    {item.active ? item.activeText : item.initialText}
                                </span>
                                <span className={`mt-1 block text-[9px] font-bold uppercase tracking-[0.12em] ${item.active ? 'text-[#eee8dc]' : 'text-[#53666c]'}`}>
                                    {item.active ? 'Objetivo completado' : 'Pulsa para completar'}
                                </span>
                            </span>
                            <span aria-hidden="true" className="text-lg font-black">
                                {item.active ? '✓' : '→'}
                            </span>
                        </button>
                    </li>
                ))}
            </ul>
        </section>
    );
}
