export default function NewCV() {
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
          <a href="#" className="px-3 py-2 rounded-lg bg-purple-900 text-purple-300 text-sm">CV'lerim</a>
          <a href="#" className="px-3 py-2 rounded-lg text-gray-400 hover:bg-gray-800 text-sm">Motivasyon mektupları</a>
          <a href="#" className="px-3 py-2 rounded-lg text-gray-400 hover:bg-gray-800 text-sm">Kariyer önerisi</a>
          <a href="#" className="px-3 py-2 rounded-lg text-gray-400 hover:bg-gray-800 text-sm">İş ilanları</a>
        </nav>
      </aside>
      <main className="flex-1 p-8 max-w-2xl">
        <h2 className="text-2xl font-bold mb-2">Yeni CV Oluştur</h2>
        <p className="text-gray-400 mb-8 text-sm">Bilgilerini doldur, AI profesyonel hale getirsin</p>

        <div className="flex gap-2 mb-8">
          {["Kişisel", "Deneyim", "Eğitim", "Beceriler", "Özet"].map((step, i) => (
            <div key={i} className={`flex-1 text-center py-2 rounded-lg text-xs font-medium ${i === 0 ? "bg-purple-600 text-white" : "bg-gray-800 text-gray-500"}`}>
              {step}
            </div>
          ))}
        </div>

        <div className="bg-gray-900 rounded-xl p-6 border border-gray-800 flex flex-col gap-4">
          <h3 className="text-sm font-medium text-gray-300 mb-2">Kişisel Bilgiler</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs text-gray-500 mb-1 block">Ad</label>
              <input className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-purple-500" placeholder="Ahmet" />
            </div>
            <div>
              <label className="text-xs text-gray-500 mb-1 block">Soyad</label>
              <input className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-purple-500" placeholder="Yilmaz" />
            </div>
          </div>
          <div>
            <label className="text-xs text-gray-500 mb-1 block">E-posta</label>
            <input className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-purple-500" placeholder="ahmet@email.com" />
          </div>
          <div>
            <label className="text-xs text-gray-500 mb-1 block">Telefon</label>
            <input className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-purple-500" placeholder="+90 555 000 00 00" />
          </div>
          <div>
            <label className="text-xs text-gray-500 mb-1 block">Sehir</label>
            <input className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-purple-500" placeholder="Istanbul" />
          </div>
          <div>
            <label className="text-xs text-gray-500 mb-1 block">LinkedIn URL</label>
            <input className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-purple-500" placeholder="linkedin.com/in/ahmetyilmaz" />
          </div>
          <div className="flex justify-end mt-2">
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors">
              Devam et
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}