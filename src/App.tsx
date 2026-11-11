import { useEffect, useState } from 'react'
import { Flex } from './flex'

const items = Array.from({ length: 10 }, (_, index) => index + 1)

type View = 'app' | 'flex' | 'grid'

const views: { id: View; label: string }[] = [
  { id: 'app', label: 'App' },
  { id: 'flex', label: 'Flex' },
  { id: 'grid', label: 'Grid' },
]

function isView(value: string): value is View {
  return views.some((view) => view.id === value)
}

function getViewFromHash(): View {
  const hash = window.location.hash.slice(1)
  return isView(hash) ? hash : 'app'
}

export function Grid() {
  return (
    <section className="mx-auto max-w-6xl" aria-labelledby="grid-title">
      <h2 id="grid-title" className="mb-2 text-2xl font-semibold text-slate-900">
        Cuadrícula responsive
      </h2>
      <p className="mb-6 text-slate-600">
        Las columnas se ajustan automáticamente al tamaño de la pantalla.
      </p>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {items.map((item) => (
          <article
            className="rounded-xl border border-slate-300 bg-slate-100 p-6 text-center font-semibold text-slate-800 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            key={item}
          >
            Elemento {item}
          </article>
        ))}
      </div>
    </section>
  )
}

function App() {
  const [activeView, setActiveView] = useState<View>(getViewFromHash)

  useEffect(() => {
    const handleHashChange = () => setActiveView(getViewFromHash())
    window.addEventListener('hashchange', handleHashChange)

    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8 sm:px-8">
      <header className="mx-auto mb-10 flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <h1 className="text-3xl font-bold text-blue-700 sm:text-4xl">
          Mi aplicación con React
        </h1>
        <nav aria-label="Navegación principal" className="flex gap-2">
          {views.map((view) => (
            <a
              aria-current={activeView === view.id ? 'page' : undefined}
              className={`rounded-lg px-4 py-2 font-semibold transition ${
                activeView === view.id
                  ? 'bg-blue-700 text-white'
                  : 'bg-white text-slate-700 hover:bg-blue-100'
              }`}
              href={`#${view.id}`}
              key={view.id}
            >
              {view.label}
            </a>
          ))}
        </nav>
      </header>
      {activeView === 'app' && (
        <section className="mx-auto max-w-6xl rounded-2xl bg-white p-8 shadow-sm">
          <h2 className="mb-3 text-2xl font-semibold text-slate-900">
            Inicio
          </h2>
          <p className="text-slate-600">
            Usa los enlaces de navegación para ver los ejemplos de Flexbox y
            Grid hechos con Tailwind CSS.
          </p>
        </section>
      )}
      {activeView === 'flex' && <Flex />}
      {activeView === 'grid' && <Grid />}
    </main>
  )
}

export default App
