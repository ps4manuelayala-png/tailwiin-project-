export const Flex = () => {
  return (
    <section className="mx-auto flex min-h-[60vh] max-w-6xl flex-col items-center justify-center rounded-2xl bg-slate-200 p-8 text-center">
      <h2 className="mb-4 rounded-lg border bg-amber-500 p-3 text-3xl font-bold text-slate-900">
        Ejemplo con Flexbox
      </h2>
      <p className="mx-10 mb-4 text-emerald-800">
        Este contenido usa Flexbox para alinear y centrar sus elementos.
      </p>
      <button className="rounded bg-blue-700 px-4 py-2 text-white transition hover:bg-blue-800">
        Botón de ejemplo
      </button>
    </section>
  )
}