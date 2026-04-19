export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-950 text-white flex">
      <aside className="w-52 bg-gray-900 border-r border-gray-800 flex flex-col p-4">
        <div className="mb-8">
          <h1 className="text-lg font-bold">
            Career<span className="text-purple-500">Craft</span>
          </h1>
          <p className="text-xs text-gray-500 mt-1">AI Career Suite</p>
        </div>
        <nav className="flex flex-col gap-1">
          <a href="/dashboard" className="px-3 py-2 rounded-lg bg-purple-900 text-purple-300 text-sm">Dashboard</a>
          <a href="#" className="px-3 py-2 rounded-lg text-gray-400 hover:bg-gray-800 text-sm">CV'lerim</a>
          <a href="#" className="px-3 py-2 rounded-lg text-gray-400 hover:bg-gray-800 text-sm">Motivasyon mektupları</a>
          <a href="#" className="px-3 py-2 rounded-lg text-gray-400 hover:bg-gray-800 text-sm">Kariyer önerisi</a>
          <a href="#" className="px-3 py-2 rounded-lg text-gray-400 hover:bg-gray-800 text-sm">İş ilanları</a>
        </nav>
      </aside>
      <main className="flex-1 p-8">
        <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
        <div className="grid grid-cols-4 gap-4 mb-8">
          <div className="bg-gray-900 rounded-xl p-4 border border-gray-800">
            <p className="text-xs text-gray-500 mb-2">Toplam CV</p>
            <p className="text-3xl font-bold">3</p>
          </div>
          <div className="bg-gray-900 rounded-xl p-4 border border-gray-800">
            <p className="text-xs text-gray-500 mb-2">Profil görüntüleme</p>
            <p className="text-3xl font-bold">148</p>
          </div>
          <div className="bg-gray-900 rounded-xl p-4 border border-gray-800">
            <p className="text-xs text-gray-500 mb-2">Eşleşen ilan</p>
            <p className="text-3xl font-bold">12</p>
          </div>
          <div className="bg-gray-900 rounded-xl p-4 border border-gray-800">
            <p className="text-xs text-gray-500 mb-2">AI kullanımı</p>
            <p className="text-3xl font-bold">7</p>
          </div>
        </div>
        <p className="text-gray-500 text-sm">Daha fazla özellik yakında eklenecek...</p>
      </main>
    </div>
  )
}