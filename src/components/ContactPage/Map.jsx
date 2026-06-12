"use client";

export default function CampusMap() {
  // Safe Google Maps Embed URI targeting Lagos, Nigeria coordinates
  const mapEmbedUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253682.4631112444!2d3.1191429988775435!3d6.548055088267272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a3c5719082!2sLagos!5e0!3m2!1sen!2sng!4v1718220000000!5m2!1sen!2sng";

  return (
    <div className="w-full h-[400px] relative bg-slate-100 dark:bg-zinc-900 overflow-hidden border-t border-slate-200/40 dark:border-zinc-800/40 shrink-0">
      <iframe
        title="HigherSchools Campus Map Location"
        src={mapEmbedUrl}
        className="w-full h-full border-0  dark:invert dark:opacity-80 dark:contrast-125 transition-all duration-300"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
