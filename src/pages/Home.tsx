import { Link } from 'react-router-dom'

export default function Home() {
  const skills = [
    'React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS',
    'Node.js', 'Git', 'Figma', 'Vite', 'Next.js', 'Responsive Design'
  ]

  const experiences = [
    {
      title: 'Desenvolvedora Frontend',
      company: 'Tech Solutions',
      period: '2023 - Presente',
      description: 'Desenvolvimento de interfaces modernas e responsivas usando React e TypeScript.'
    },
    {
      title: 'Estagiária de Desenvolvimento',
      company: 'StartupX',
      period: '2022 - 2023',
      description: 'Aprendizado e aplicação de tecnologias web modernas em projetos reais.'
    }
  ]

  const technologies = [
    { name: 'React', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'JavaScript', level: 88 },
    { name: 'Tailwind CSS', level: 82 },
    { name: 'Node.js', level: 75 },
    { name: 'Git', level: 80 }
  ]

  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <p className="text-sm uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-4">
                Olá, eu sou
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white mb-6">
                Julia Benjamin
              </h1>
              <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0">
                Desenvolvedora Front-end apaixonada por criar interfaces elegantes e funcionais.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  to="/projects"
                  className="inline-block rounded-lg bg-black dark:bg-white text-white dark:text-black px-6 py-3 text-center font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
                >
                  Ver Projetos
                </Link>
                <Link
                  to="/curriculo"
                  className="inline-block rounded-lg border-2 border-black dark:border-white text-black dark:text-white px-6 py-3 text-center font-medium hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
                >
                  Ver Currículo
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="w-full h-96 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-lg font-medium">
                  🚀 Desenvolvedora Frontend
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Habilidades
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Tecnologias e ferramentas que domino
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {skills.map((skill) => (
              <div
                key={skill}
                className="bg-white dark:bg-gray-700 rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="text-gray-900 dark:text-white font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Experiências
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Minha trajetória profissional
            </p>
          </div>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {exp.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-2">{exp.company}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-500">{exp.period}</p>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mt-4 md:mt-0 md:max-w-md">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Tecnologias
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Nível de proficiência nas principais tecnologias
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {technologies.map((tech) => (
              <div key={tech.name} className="bg-white dark:bg-gray-700 rounded-lg p-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-900 dark:text-white font-medium">{tech.name}</span>
                  <span className="text-gray-600 dark:text-gray-400 text-sm">{tech.level}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                  <div
                    className="bg-blue-500 h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${tech.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trajectory Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Minha Trajetória
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Como cheguei até aqui
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-200 dark:bg-gray-700"></div>
            <div className="space-y-12">
              {[
                {
                  year: '2024',
                  title: 'Portfolio Pessoal',
                  description: 'Desenvolvimento deste portfolio com React, TypeScript e Tailwind CSS'
                },
                {
                  year: '2023',
                  title: 'Primeiro Emprego',
                  description: 'Início da carreira como desenvolvedora frontend em uma empresa de tecnologia'
                },
                {
                  year: '2022',
                  title: 'Estágio',
                  description: 'Primeiro contato com desenvolvimento web profissional'
                },
                {
                  year: '2021',
                  title: 'Início dos Estudos',
                  description: 'Comecei a estudar programação e desenvolvimento web'
                }
              ].map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {milestone.year}
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


