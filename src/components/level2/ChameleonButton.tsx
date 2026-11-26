import { useState } from 'react';

export const ChameleonButton = () => {
    const [active, setActive] = useState<boolean>(false);

    const handletoggle = () => {
        setActive((prev) => !prev);
    }

    return (
        <div>
            <h3>
                Botón Camaleón
            </h3>
            <button onClick={handletoggle} className={`min-h-12 cursor-pointer border-2 px-5 text-xs font-black uppercase tracking-wider transition duration-150 focus-visible:outline-2 focus-visible:outline-offset-4 ${active ? 'border-[#00f0ff] bg-[#00f0ff] text-[#080b14] hover:-translate-y-1 hover:bg-transparent hover:text-[#00f0ff] focus-visible:outline-[#00f0ff]' : 'border-[#ff2bd6] bg-transparent text-[#ff2bd6] hover:-translate-y-1 hover:bg-[#ff2bd6] hover:text-[#080b14] focus-visible:outline-[#ff2bd6]'}`}>
                {active ? 'Estado: Activado' : 'Haz click para activar'}
            </button>
        </div>
    );
}