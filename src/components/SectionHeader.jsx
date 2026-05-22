export default function SectionHeader({ title, subtitle, icon: Icon, dark = false, align = "center" }) {
  return (
    <div className={`mb-12 md:mb-16 px-4 relative z-10 ${align === "left" ? "text-left" : "text-center"} ${dark ? "text-white" : "text-slate-900"}`}>
      {Icon && (
        <div className={`inline-flex items-center justify-center p-3 mb-6 rounded-2xl ${dark ? "bg-white/10 text-white backdrop-blur-sm border border-white/10" : "bg-blue-50 text-blue-600 border border-blue-100"} ${align === "center" ? "mx-auto" : ""}`}>
          <Icon size={24} />
        </div>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight mb-6 font-sans">
        {title}
      </h2>
      <div className={`h-1.5 w-24 rounded-full mb-6 ${align === "center" ? "mx-auto" : ""} ${dark ? "bg-blue-500" : "bg-blue-600"}`}></div>
      <p className={`text-base md:text-lg lg:text-xl max-w-3xl font-medium leading-relaxed ${align === "center" ? "mx-auto" : ""} ${dark ? "text-slate-400" : "text-slate-500"}`}>
        {subtitle}
      </p>
    </div>
  );
}
