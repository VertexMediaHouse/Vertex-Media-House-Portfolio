import { Link } from "react-router-dom";
const cardData = [
  {
    id: '01',
    icon: '⚙️',
    title: 'Automation',
    desc: "We identify the tasks eating your time and replace them with systems that run 24/7 — no extra hires, no extra headaches.",
    href: '/automate',
    glowPosition: '70% 20%',
  },
  {
    id: '02',
    icon: '🎨',
    title: 'Design',
    desc: "From your website to your social feed - every touchpoint your audience sees, built to impress and convert.",
    href: '/design',
    glowPosition: '30% 20%',
  },
  {
    id: '03',
    icon: '🎬',
    title: 'Edit',
    desc: "Raw footage in, scroll-stopping content out. Whether it's a 30-second reel or a 2-hour podcast - we handle the full edit.",
    href: '/edit',
    glowPosition: '70% 20%',
  },
];

function ServiceCard({ id, icon, title, desc, href, glowPosition }) {
  return (
    <div className="relative border bg-neutral-50 overflow-hidden group h-full p-5 md:p-6 rounded-2xl border-neutral-200 backdrop-blur-xl backdrop-saturate-150 shadow-sm transition-colors duration-300 hover:border-sky-300">
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"
        style={{ background: `radial-gradient(circle at ${glowPosition}, rgba(56,189,248,0.16), transparent 80%)` }}
      />

      <div className="relative flex flex-col h-full">

        <div className="relative aspect-[1.4/1] w-full overflow-hidden rounded-xl bg-gradient-to-br from-sky-100/60 to-white border border-neutral-200 mb-6 flex items-center justify-center transition-colors duration-300 group-hover:border-sky-200">
          <span className="text-4xl">{icon}</span>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-white/40 via-transparent to-white/10" />
        </div>

        <div className="flex items-center justify-between">
          <span className="inline-flex items-center rounded-sm border border-neutral-200 bg-white px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-neutral-600">
            {id}
          </span>
          <div className="flex h-8 w-8 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-500 transition-colors duration-300 group-hover:border-sky-300 group-hover:text-sky-500">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
              strokeLinejoin="round" className="h-4 w-4">
              <path d="M7 7h10v10"></path>
              <path d="M7 17 17 7"></path>
            </svg>
          </div>
        </div>

        <h3 className="mt-4 text-2xl font-semibold tracking-tight text-neutral-900">{title}</h3>
        <p className="mt-2 text-sm md:text-[15px] leading-snug text-neutral-500">{desc}</p>
        <div className="mt-6 flex justify-start">
          <Link to={href}
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium cursor-pointer border shadow-sm rounded-xl px-6 py-3 h-auto w-fit border-neutral-300 bg-white hover:bg-sky-50 hover:border-sky-300 hover:text-sky-600 text-neutral-800 transition-all hover:scale-[1.03]">
            Explore our services
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function ServicesGrid() {
  return (
    <section className="bg-white pb-16 md:pb-20 px-6 md:px-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 max-w-[1400px] mx-14">
        {cardData.map((card) => (
          <ServiceCard key={card.id} {...card} />
        ))}
      </div>
    </section>
  );
}