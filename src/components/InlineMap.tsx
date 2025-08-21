export function InlineMap({ q, title }: { q: string; title: string }) {
  const src = `https://www.google.com/maps?q=${q}&output=embed`;
  return (
    <div className="rounded-xl overflow-hidden border bg-muted/30">
      <iframe
        title={`Map - ${title}`}
        src={src}
        className="w-full h-56 md:h-64"
        loading="lazy"
      />
    </div>
  );
} 