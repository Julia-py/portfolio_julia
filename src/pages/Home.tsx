import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-16">
      <p className="text-sm uppercase tracking-widest text-gray-500">Olá, eu sou</p>
      <h1 className="mt-2 text-4xl sm:text-5xl font-extrabold">Julia Benjamin</h1>
      <p className="mt-4 text-lg text-gray-700 max-w-2xl">
        Desenvolvedora Front-end focada em React, TypeScript e interfaces elegantes.
      </p>
      <div className="mt-8">
        <Link
          to="/projects"
          className="inline-block rounded-md bg-black text-white px-5 py-3 hover:bg-gray-800 transition-colors"
        >
          Ver Projetos
        </Link>
      </div>
    </section>
  )
}


