export default function Career() {
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
          <a href="/dashboard" className="px-3 py-2 rounded-lg text-gray-400 hover:bg-gray-800 text-sm">Dashboard</a>
          <a href="/cv/new" className="px-3 py-2 rounded-lg text-gray-400 hover:bg-gray-800 text-sm">CV'lerim</a>
          <a href="/cover-letter" className="px-3 py-2 rounded-lg text-gray-400 hover:bg-gray-800 text-sm">Motivasyon mektupları</a>
          <a href="/career" className="px-3 py-2 rounded-lg bg-purple-900 text-purple-300 text-sm">Kariyer önerisi</a>
          <a href="/jobs" className="px-3 py-2 rounded-lg text-gray-400 hover:bg-gray-800 text-sm">İş ilanları</a>
        </nav>
      </aside>
      <main className="flex-1 p-8 max-w-2xl">
        <h2 className="text-2xl font-bold mb-2">Kariyer Önerisi</h2>
        <p className="text-gray-400 mb-8 text-sm">Becerilerini gir, AI sana en uygun kariyer yolunu önersin</p>
        <div className="bg-gray-900 rounded-xl p-6 border border-gray-800 flex flex-col gap-4">
          <div>
            <label className="text-xs text-gray-500 mb-1 block">Becerilerim</label>
            <textarea className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-purple-500 h-28 resize-none" placeholder="React, TypeScript, Node.js, Python..." />
          </div>
          <div>
            <label className="text-xs text-gray-500 mb-1 block">Deneyim yılı</label>
            <select className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-purple-500">
              <option>0-1 yıl (Yeni mezun)</option>
              <option>1-3 yıl</option>
              <option>3-5 yıl</option>
              <option>5+ yıl</option>
            </select>
          </div>
          <div>
            <label className="text-xs text-gray-500 mb-1 block">Çalışma tercihi</label>
            <select className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-purple-500">
              <option>Remote</option>
              <option>Hybrid</option>
              <option>Ofis</option>
            </select>
          </div>
          <div>
            <label className="text-xs text-gray-500 mb-1 block">Sektör tercihi (opsiyonel)</label>
            <input className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-purple-500" placeholder="Teknoloji, Finans, E-ticaret..." />
          </div>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors w-full mt-2">
            AI kariyer önerisi al
          </button>
        </div>
      </main>
    </div>
  )
}