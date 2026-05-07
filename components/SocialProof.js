export function SocialProof() {
  return (
    <section className="bg-white py-12 px-[5%] border-t border-b border-border">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-12 flex-wrap">
        <div className="text-center">
          <div className="text-2xl text-yellow-400 tracking-widest mb-1">★★★★★</div>
          <div className="text-sm text-muted font-medium">Over 1,600 Five Star Reviews</div>
        </div>
        <div className="w-px h-12 bg-border hidden sm:block" />
        <div className="flex items-center gap-10 flex-wrap justify-center">
          {['Forbes', 'Vogue', 'TechCrunch', 'Wired'].map(b => (
            <span key={b} className="font-sora font-bold text-base text-border uppercase tracking-widest">{b}</span>
          ))}
        </div>
        <div className="w-px h-12 bg-border hidden sm:block" />
        <div className="flex items-center gap-6 flex-wrap justify-center">
          {[['🌿', '100% Natural'], ['♻️', 'Eco Friendly'], ['🛡️', 'Lifetime Guarantee']].map(([icon, label]) => (
            <div key={label} className="flex items-center gap-2 text-sm text-muted font-medium">
              <div className="w-8 h-8 bg-skyblue rounded-lg flex items-center justify-center text-base">{icon}</div>
              {label}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const features = [
  ['⚗️', 'Superior Formula'],
  ['🌾', 'Gluten-Free'],
  ['🌱', 'Soy-Free'],
  ['🐾', 'Vegan'],
  ['🍃', 'Natural Ingredients'],
  ['⚡', 'Fast Hydration'],
]

export function FeatureBar() {
  return (
    <div className="bg-brand py-8 px-[5%]">
      <div className="max-w-7xl mx-auto flex justify-between items-center gap-5 flex-wrap">
        {features.map(([icon, label]) => (
          <div key={label} className="flex items-center gap-3 text-white flex-1 min-w-[130px] justify-center group cursor-default transition-transform hover:-translate-y-0.5">
            <div className="w-11 h-11 bg-white/15 rounded-xl flex items-center justify-center text-xl flex-shrink-0">{icon}</div>
            <span className="text-[13px] font-semibold leading-tight">{label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
