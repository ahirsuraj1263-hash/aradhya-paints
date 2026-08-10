interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  hindi?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  title,
  subtitle,
  hindi,
  align = "center",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center" : "text-left";

  return (
    <div className={`mb-8 sm:mb-10 lg:mb-12 ${alignClass}`}>
      <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl text-[#ffb47a] tracking-wide leading-tight">
        {title}
      </h2>
      {hindi && (
        <p className="font-hindi text-[#cddaf1] text-sm mt-1.5">{hindi}</p>
      )}
      <div
        className={`gold-line w-20 sm:w-24 mt-3 sm:mt-4 ${align === "center" ? "mx-auto" : ""}`}
      />
      {subtitle && (
        <p
          className={`mt-3 sm:mt-4 text-sm text-[#d8e2f6] max-w-2xl leading-relaxed px-1 ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
