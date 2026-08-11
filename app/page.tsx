import Image from "next/image";
import { FAQ, WHY_CHOOSE } from "@/lib/content";
import { Hero } from "@/components/home/Hero";
import { ServiceCardGrid } from "@/components/home/ServiceCardGrid";
import { TestimonialsSlider } from "@/components/home/TestimonialsSlider";
import { Button } from "@/components/ui/Button";

const HOME_STATS = [
  { value: "35+", label: "Years of Experience" },
  { value: "1200+", label: "Projects Completed" },
  { value: "180+", label: "Skilled Experts" },
  { value: "4.9/5", label: "Client Satisfaction" },
] as const;

const PROJECTS = [
  {
    title: "Home Renovation",
    subtitle: "Residential construction",
    image: "/Home-Renovation.avif",
    category: "Residential",
    color: "bg-gradient-to-r from-orange-400 to-orange-600",
  },
  {
    title: "Commercial Tower",
    subtitle: "Office development",
    image: "/Commercial-Tower.jpg",
    category: "Commercial",
    color: "bg-gradient-to-r from-teal-400 to-teal-600",
  },
  {
    title: "Office Complex",
    subtitle: "Corporate workspace",
    image: "/Office-Complex.avif",
    category: "Corporate",
    color: "bg-gradient-to-r from-indigo-400 to-indigo-600",
  },
  {
    title: "Industrial Site",
    subtitle: "Heavy engineering",
    image: "/Industrial-Site.png",
    category: "Industrial",
    color: "bg-gradient-to-r from-emerald-400 to-emerald-600",
  },
] as const;


export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="py-16 bg-slate-50" aria-labelledby="home-stats-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {HOME_STATS.map((stat) => (
              <div
                key={stat.label}
                className="rounded-[24px] bg-white border border-slate-200 p-6 shadow-[0_20px_40px_rgba(15,23,42,0.06)] text-center"
              >
                <p className="text-4xl sm:text-5xl font-semibold text-slate-900 tracking-tight">
                  {stat.value}
                </p>
                <p className="mt-3 text-sm font-semibold uppercase tracking-[0.28em] text-orange-600">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="relative mx-auto w-full max-w-[500px]">
              <div className="absolute left-4 top-5 h-24 w-24 rounded-full border-[10px] border-pink-200" />
              <div className="absolute right-4 top-8 h-12 w-12 rounded-full border-[8px] border-blue-200" />
              <div className="absolute left-6 bottom-10 h-10 w-10 rounded-full border-[8px] border-green-200" />
              <div className="absolute bottom-6 right-8 h-8 w-8 rounded-full border-[8px] border-teal-200" />
              <div className="absolute inset-x-8 bottom-5 h-[76%] rounded-[36px] bg-[#f7b83a] blur-3xl opacity-40" />
              <div className="relative overflow-hidden rounded-[36px] border border-slate-200 bg-[#fffaf2] p-4 shadow-[0_30px_70px_rgba(15,23,42,0.08)] sm:p-6">
                <Image
                  src="/about-professional.svg"
                  alt="Painting professional wearing a yellow hard hat and grey apron"
                  width={640}
                  height={760}
                  className="w-full h-auto object-contain"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
              </div>
            </div>

            <div className="max-w-2xl">
              <p className="inline-flex rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-sm font-semibold uppercase tracking-[0.28em] text-orange-600">
                About Us
              </p>
              <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900 leading-tight">
                We Are The Best <span className="text-orange-600">Painting</span> Company
              </h2>
              <p className="mt-6 text-base leading-8 text-slate-600">
                From flawless finishes to dependable project delivery, we combine craftsmanship, safety, and attention to detail to create spaces that feel polished and lasting.
              </p>

              <ul className="mt-8 space-y-4">
                <li className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4">
                  <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                    <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.2 7.2a1 1 0 0 1-1.4 0l-3.6-3.6a1 1 0 1 1 1.4-1.4l2.9 2.9 6.5-6.5a1 1 0 0 1 1.4 0Z" />
                    </svg>
                  </span>
                  <span className="text-base font-medium text-slate-700">Skilled professionals with proven experience in premium painting and finishing.</span>
                </li>
                <li className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4">
                  <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                    <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.2 7.2a1 1 0 0 1-1.4 0l-3.6-3.6a1 1 0 1 1 1.4-1.4l2.9 2.9 6.5-6.5a1 1 0 0 1 1.4 0Z" />
                    </svg>
                  </span>
                  <span className="text-base font-medium text-slate-700">Transparent planning, clean execution, and timely project support.</span>
                </li>
                <li className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4">
                  <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                    <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.2 7.2a1 1 0 0 1-1.4 0l-3.6-3.6a1 1 0 1 1 1.4-1.4l2.9 2.9 6.5-6.5a1 1 0 0 1 1.4 0Z" />
                    </svg>
                  </span>
                  <span className="text-base font-medium text-slate-700">Premium materials and finish quality crafted for every space.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-slate-500">
              Our Projects
            </p>
            <h2 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
              Completed Construction Projects
            </h2>
            <div className="mt-3 h-2 w-36 rounded-full bg-gradient-to-r from-orange-300 to-orange-500" />
          </div>

          <div className="mt-12 grid gap-6 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
            {PROJECTS.map((project) => (
              <article key={project.title} className="group relative overflow-hidden rounded-[32px] bg-white border border-slate-200 shadow-sm transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transform transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />

                  {/* gradient overlay at bottom */}
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/60 to-transparent" />

                  {/* category badge on image */}
                  <div className="absolute left-3 bottom-3 z-10">
                    <span className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold text-white ${project.color}`}>
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-400">{project.subtitle}</p>
                  <h3 className="mt-3 text-xl font-semibold text-slate-900">{project.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">Delivering premium construction work with precision, safety, and modern design standards.</p>

                  <div className="mt-6">
                    <Button href="#contact" variant="ghost" size="sm" className="inline-flex items-center gap-2 rounded-md bg-white/0 border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-900 transition-transform duration-200 group-hover:translate-x-1">
                      View Details
                      <svg className="h-4 w-4 transition-transform duration-200" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L13.586 11H3a1 1 0 110-2h10.586L10.293 5.707a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-orange-600">Our Services</p>
            <h2 className="mt-4 text-4xl sm:text-5xl font-semibold tracking-tight text-slate-900">
              Professional Construction Services
            </h2>
          </div>
        </div>
      </section>

      <ServiceCardGrid />

      <section id="why-choose" className="py-20 bg-slate-50" aria-labelledby="why-choose-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-stretch">
            {/* Left column: label, heading, description, image (CTA removed) */}
            <div className="flex flex-col h-full space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-orange-600">WHY CHOOSE US</p>
              <h2 id="why-choose-heading" className="mt-2 text-4xl sm:text-5xl font-extrabold tracking-tight text-[#10233c]">
                Premium Painting. Lasting Results.
              </h2>
              <p className="mt-2 text-base leading-7 text-[#10233c] max-w-xl">
                From surface preparation to final finish, Aradhya Paints delivers professional painting services using premium materials, meticulous workmanship, and transparent pricing so your space looks beautiful for years.
              </p>

              <div className="mt-3 rounded-[20px] overflow-hidden border border-slate-200 h-64 sm:h-80 lg:h-72">
                <Image
                  src="/why-choose-us.jpeg"
                  alt="Aradhya Paints project"
                  width={1200}
                  height={700}
                  className="w-full h-full object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Right column: 2x2 feature cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 auto-rows-fr h-full">
              {/* Card 1: Premium Materials */}
              <div className="group rounded-[16px] border border-[#e9eef6] bg-white p-6 transition-transform duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(15,23,42,0.10)] h-full flex">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-orange-50 text-orange-600 p-3 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:bg-orange-100 group-hover:text-orange-700">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5C3 6.119 4.119 5 5.5 5h13c1.381 0 2.5 1.119 2.5 2.5v5C21 13.881 19.881 15 18.5 15H5.5C4.119 15 3 13.881 3 12.5v-5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7 15v3a2 2 0 002 2h6a2 2 0 002-2v-3" />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-sm font-semibold uppercase text-orange-600 transition-colors duration-300 group-hover:text-orange-700">Premium Materials</h3>
                    <div className="h-0.5 w-8 bg-orange-500 my-2 rounded transition-colors duration-300 group-hover:bg-orange-600" />
                    <p className="text-[#10233c] text-sm leading-6">We use top-grade paints and primers for long-lasting colour and protection that withstands daily wear.</p>
                  </div>
                </div>
              </div>

              {/* Card 2: Experienced Craftsmanship */}
              <div className="group rounded-[16px] border border-[#e9eef6] bg-white p-6 transition-transform duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(15,23,42,0.10)] h-full flex">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-orange-50 text-orange-600 p-3 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:bg-orange-100 group-hover:text-orange-700">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v6m0 0l3-3m-3 3-3-3M5.5 9.5A7.5 7.5 0 0112 5.25 7.5 7.5 0 0118.5 9.5c0 4.142-3.358 7.5-7.5 7.5S5.5 13.642 5.5 9.5z" />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-sm font-semibold uppercase text-orange-600 transition-colors duration-300 group-hover:text-orange-700">Experienced Craftsmanship</h3>
                    <div className="h-0.5 w-8 bg-orange-500 my-2 rounded transition-colors duration-300 group-hover:bg-orange-600" />
                    <p className="text-[#10233c] text-sm leading-6">Skilled painters deliver meticulous surface prep and flawless application for a showroom-quality finish.</p>
                  </div>
                </div>
              </div>

              {/* Card 3: On-Time Execution */}
              <div className="group rounded-[16px] border border-[#e9eef6] bg-white p-6 transition-transform duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(15,23,42,0.10)] h-full flex">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-orange-50 text-orange-600 p-3 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:bg-orange-100 group-hover:text-orange-700">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-sm font-semibold uppercase text-orange-600 transition-colors duration-300 group-hover:text-orange-700">On-Time Execution</h3>
                    <div className="h-0.5 w-8 bg-orange-500 my-2 rounded transition-colors duration-300 group-hover:bg-orange-600" />
                    <p className="text-[#10233c] text-sm leading-6">Planned schedules, reliable teams, and clear coordination — projects completed when promised.</p>
                  </div>
                </div>
              </div>

              {/* Card 4: Transparent Pricing */}
              <div className="group rounded-[16px] border border-[#e9eef6] bg-white p-6 transition-transform duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(15,23,42,0.10)] h-full flex">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-orange-50 text-orange-600 p-3 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:bg-orange-100 group-hover:text-orange-700">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6M7 10V6a5 5 0 0110 0v4M7 10h10" />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-sm font-semibold uppercase text-orange-600 transition-colors duration-300 group-hover:text-orange-700">Transparent Pricing</h3>
                    <div className="h-0.5 w-8 bg-orange-500 my-2 rounded transition-colors duration-300 group-hover:bg-orange-600" />
                    <p className="text-[#10233c] text-sm leading-6">Clear, itemised estimates and no hidden charges so you can plan with confidence.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-orange-600">
              Testimonials
            </p>
            <h2 className="mt-4 text-4xl sm:text-5xl font-semibold tracking-tight text-slate-900">
              What Our Clients Say About Us
            </h2>
            <div className="mt-4 h-px w-24 rounded-full bg-orange-200" />
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600">
              Trusted by customers across India for premium painting, waterproofing, and renovation services.
            </p>
          </div>
          <div className="mt-10">
            <TestimonialsSlider />
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-orange-600">FAQ</p>
            <h2 className="mt-4 text-4xl sm:text-5xl font-semibold tracking-tight text-slate-900">
              Common Questions
            </h2>
          </div>

          <div className="mt-12 space-y-4">
            {FAQ.slice(0, 5).map((item) => (
              <details
                key={item.q}
                className="group rounded-[24px] border border-slate-200 bg-white p-5 transition-all duration-200 open:border-orange-200"
              >
                <summary className="cursor-pointer list-none text-lg font-semibold text-slate-900 flex justify-between items-center gap-3">
                  {item.q}
                  <span className="text-2xl font-medium text-orange-600 transition-transform duration-200 group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 text-sm leading-7 text-slate-600">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-orange-400">Need a Quote?</p>
          <h2 className="mt-4 text-4xl sm:text-5xl font-semibold tracking-tight">
            We are ready to build your next project.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300">
            Get in touch with our team for a detailed proposal, cost estimate, and schedule. We deliver professional planning, transparent pricing, and reliable site coordination.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button href="mailto:hello@aradhya-paints.com" size="lg" className="bg-orange-500 hover:bg-orange-400 text-white">
              Email Us
            </Button>
            <Button href="tel:+919876543210" variant="secondary" size="lg" className="bg-slate-800 hover:bg-slate-700 text-white border-white/15">
              Call +91-98765-43210
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
