export default function CoverLetter() {
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
          <a href="/cover-letter" className="px-3 py-2 rounded-lg bg-purple-900 text-purple-300 text-sm">Motivasyon mektupları</a>
          <a href="/career" className="px-3 py-2 rounded-lg text-gray-400 hover:bg-gray-800 text-sm">Kariyer önerisi</a>
          <a href="/jobs" className="px-3 py-2 rounded-lg text-gray-400 hover:bg-gray-800 text-sm">İş ilanları</a>
        </nav>
      </aside>
      <main className="flex-1 p-8 max-w-2xl">
        <h2 className="text-2xl font-bold mb-2">Motivasyon Mektubu</h2>
        <p className="text-gray-400 mb-8 text-sm">Basvurdugun pozisyonu gir, AI kisisel mektubunu yazsin</p>
        <div className="bg-gray-900 rounded-xl p-6 border border-gray-800 flex flex-col gap-4">
          <div>
            <label className="text-xs text-gray-500 mb-1 block">Basvurdugun pozisyon</label>
            <input className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-purple-500" placeholder="Frontend Developer" />
          </div>
          <div>
            <label className="text-xs text-gray-500 mb-1 block">Sirket adi</label>
            <input className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-purple-500" placeholder="Trendyol" />
          </div>
          <div>
            <label className="text-xs text-gray-500 mb-1 block">Is ilani metni (opsiyonel ama onerilen)</label>
            <textarea className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-purple-500 h-32 resize-none" placeholder="Is ilanini buraya yapistir..." />
          </div>
          <div>
            <label className="text-xs text-gray-500 mb-1 block">Kendin hakkinda (2-3 cumle)</label>
            <textarea className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-purple-500 h-24 resize-none" placeholder="3 yil React deneyimim var, takım calısmasına önem veririm..." />
          </div>
          <div>
            <label className="text-xs text-gray-500 mb-1 block">Dil</label>
            <select className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-purple-500">
              <option value="tr">Turkce</option>
              <option value="en">Ingilizce</option>
            </select>
          </div>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors w-full mt-2">
            AI ile mektup olustur
          </button>
        </div>
      </main>
    </div>
  )
}