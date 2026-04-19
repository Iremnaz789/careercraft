export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">
          Career<span className="text-purple-500">Craft</span>
        </h1>
        <p className="text-gray-400 mb-8">AI destekli kariyer asistanin</p>
        <a href="/dashboard" className="bg-purple-600 text-white px-6 py-3 rounded-lg">
          Dashboarda git
        </a>
      </div>
    </main>
  )
}