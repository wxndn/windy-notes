import ProfileMain from '../components/Profile/ProfileMain'
import Navigation from '../components/Navigation'

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <main className="container mx-auto px-4 py-8 pb-24">
        <h1 className="text-3xl font-bold text-pink-600 dark:text-pink-400 mb-8">
          Profil
        </h1>
        <ProfileMain />
      </main>
      <Navigation />
    </div>
  )
}