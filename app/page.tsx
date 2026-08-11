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
  },
  {
    title: "Commercial Tower",
    subtitle: "Office development",
    image: "/Commercial-Tower.jpg",
  },
  {
    title: "Office Complex",
    subtitle: "Corporate workspace",
    image: "/Office-Complex.avif",
  },
  {
    title: "Industrial Site",
    subtitle: "Heavy engineering",
    image: "/Industrial-Site.png",
  },
] as const;

const TEAM = [
  { name: "Adam Smith", role: "Project Manager" },
  { name: "Andrew Devito", role: "Site Engineer" },
  { name: "Alisha Martin", role: "Design Lead" },
  { name: "Boris Green", role: "Quality Supervisor" },
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

      <section id="projects" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-orange-600">
              Our Projects
            </p>
            <h2 className="mt-4 text-4xl sm:text-5xl font-semibold tracking-tight text-slate-900">
              Completed Construction Projects
            </h2>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {PROJECTS.map((project) => (
              <article key={project.title} className="group overflow-hidden rounded-[28px] bg-white shadow-[0_18px_55px_rgba(15,23,42,0.08)]">
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="p-6">
                  <p className="text-sm uppercase tracking-[0.24em] text-orange-600">
                    {project.subtitle}
                  </p>
                  <h3 className="mt-4 text-xl font-semibold text-slate-900">{project.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">Delivering premium construction work with precision, safety, and modern design standards.</p>
                  <Button href="#contact" variant="ghost" size="sm" className="mt-6 px-4 py-2">
                    View Details
                  </Button>
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

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-orange-600">Why Choose Us</p>
              <h2 className="mt-4 text-4xl sm:text-5xl font-semibold tracking-tight text-slate-900">
                The advantage of working with a dedicated construction partner
              </h2>
              <p className="mt-6 text-base leading-8 text-slate-600">
                We combine planning, execution, and communication so every project stays on schedule, looks refined, and delivers long-term value.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {WHY_CHOOSE.map((item) => (
                <div key={item.title} className="rounded-[28px] border border-slate-200 bg-white p-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-orange-600">{item.title}</p>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{item.desc}</p>
                </div>
              ))}
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

      <section id="team" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-orange-600">Our Team</p>
            <h2 className="mt-4 text-4xl sm:text-5xl font-semibold tracking-tight text-slate-900">
              Meet Our Expert Team
            </h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {TEAM.map((member) => (
              <div key={member.name} className="rounded-[28px] border border-slate-200 bg-white p-6 text-center shadow-[0_18px_40px_rgba(15,23,42,0.06)]">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-orange-100 text-3xl font-semibold text-orange-700">
                  {member.name.split(" ").map((word) => word[0]).join("")}
                </div>
                <h3 className="mt-6 text-xl font-semibold text-slate-900">{member.name}</h3>
                <p className="mt-2 text-sm text-slate-600">{member.role}</p>
              </div>
            ))}
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
