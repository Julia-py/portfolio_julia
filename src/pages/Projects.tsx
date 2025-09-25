export default function Projects() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <div className="text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-6">
          Meus Projetos
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-12">
          Aqui você encontrará uma seleção dos meus projetos mais recentes
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Placeholder cards */}
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6">
              <div className="w-full h-48 bg-gray-300 dark:bg-gray-700 rounded-lg mb-4"></div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Projeto {i}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Descrição do projeto será adicionada em breve.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}


