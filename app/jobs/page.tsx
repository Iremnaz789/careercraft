export default function Jobs() {
  const jobs = [
    { title: "Frontend Developer", company: "Getir", location: "Istanbul / Remote", match: "94", source: "Adzuna" },
    { title: "React Engineer", company: "Trendyol", location: "Istanbul / Hybrid", match: "87", source: "Jooble" },
    { title: "Senior Frontend Dev", company: "Peak Games", location: "Remote", match: "81", source: "Adzuna" },
    { title: "UI Developer", company: "Hepsiburada", location: "Istanbul", match: "76", source: "Jooble" },
    { title: "JavaScript Developer", company: "Insider", location: "Istanbul / Remote", match: "71", source: "Adzuna" },
  ]

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
          <a href="/career" className="px-3 py-2 rounded-lg text-gray-400 hover:bg-gray-800 text-sm">Kariyer önerisi</a>
          <a href="/jobs" className="px-3 py-2 rounded-lg bg-purple-900 text-purple-300 text-sm">İş ilanları</a>
        </nav>
      </aside>
      <main className="flex-1 p-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold mb-1">İş İlanları</h2>
            <p className="text-gray-400 text-sm">Adzuna ve Jooble üzerinden senin için eşleşen ilanlar</p>
          </div>
          <div className="flex gap-2">
            <select className="bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-purple-500">
              <option>Tüm konumlar</option>
              <option>Remote</option>
              <option>Istanbul</option>
              <option>Hybrid</option>
            </select>
            <select className="bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-purple-500">
              <option>Tüm kaynaklar</option>
              <option>Adzuna</option>
              <option>Jooble</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          {jobs.map((job, i) => (
            <div key={i} className="bg-gray-900 border border-gray-800 rounded-xl p-5 flex items-center gap-4 hover:border-purple-700 transition-colors cursor-pointer">
              <div className="w-10 h-10 rounded-lg bg-purple-900 flex items-center justify-center text-purple-300 font-bold text-sm flex-shrink-0">
                {job.company[0]}
              </div>
              <div className="flex-1">
                <p className="font-medium text-sm">{job.title}</p>
                <p className="text-xs text-gray-400 mt-1">{job.company} · {job.location}</p>
              </div>
              <div className="text-xs text-gray-500">{job.source}</div>
              <div className="bg-green-900 text-green-400 text-xs font-medium px-3 py-1 rounded-full">
                %{job.match} eslesme
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}