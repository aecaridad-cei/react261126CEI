import type { InteractiveItem, TechnologyItem } from "../types/interactive.types";

export const INITIAL_ITEMS_CLICK: InteractiveItem[] = [
    {
        id: 1,
        initialText: "Revisar Pull Request",
        activeText: "PR Aprovado",
        active: false
    },
    {
        id: 2,
        initialText: "Configurar Tailwind",
        activeText: "Estilos Listos",
        active: false
    },
    {
        id: 3,
        initialText: "Desplegar en Vercel",
        activeText: "En Producción",
        active: false
    }
]

export const HOVER_TECHNOLOGIES: TechnologyItem[] = [
    {
        id: 1,
        name: "React 19",
        category: "Libreria UI"
    },
    {
        id: 2,
        name: "TypeScript",
        category: "Tipado Estático"
    },
    {
        id: 3,
        name: "TailwindCSS",
        category: "Estilos Utilitarios"
    }
]

export const ZOOM_STEPS: string[] = [
    "1. Definir interfaces en /types",
    "2. Separar datos iniciales en /data",
    "3. Crear componentes con responsabilidad única",
]