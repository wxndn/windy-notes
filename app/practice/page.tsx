import ConsecutiveTool from '../components/Interpretation/ConsecutiveTool'
import Navigation from '../components/Navigation'

export default function PracticePage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <main className="container mx-auto px-4 py-8 pb-24">
        <h1 className="text-3xl font-bold text-pink-600 dark:text-pink-400 mb-8">
          Pratique d'interprétation
        </h1>
        <ConsecutiveTool />
      </main>
      <Navigation />
    </div>
  )
}