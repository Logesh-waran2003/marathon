import Link from "next/link";

interface Props {
  title: string;
  subtitle?: string;
  bg?: string;
}

export default function PageHeader({ title, subtitle, bg = "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=1920&q=80" }: Props) {
  return (
    <section className="relative pt-[120px] pb-14 overflow-hidden" aria-label={`${title} hero`}>
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center pointer-events-none"
        style={{ backgroundImage: `url(${bg})` }}
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent/70 to-accent/50" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        {/* Breadcrumbs */}
        <nav className="text-[13px] font-bold text-white/75" aria-label="Breadcrumb">
          <Link href="/" className="text-white/90 hover:text-white transition-colors">Home</Link>
          <span className="mx-1.5" aria-hidden="true">/</span>
          <span>{title}</span>
        </nav>

        <h1 className="mt-3.5 text-[42px] sm:text-5xl lg:text-[56px] font-black leading-[1.06] tracking-tight text-white">
          {title}
        </h1>

        {subtitle && (
          <p className="mt-3 max-w-3xl text-base sm:text-lg leading-relaxed text-white/85">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
