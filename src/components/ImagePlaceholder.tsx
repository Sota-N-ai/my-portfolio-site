interface ImagePlaceholderProps {
  className?: string;
  label?: string;
}

export default function ImagePlaceholder({
  className = "",
  label = "画像",
}: ImagePlaceholderProps) {
  return (
    <div
      className={`bg-charcoal/10 border border-charcoal/20 flex items-center justify-center ${className}`}
    >
      <div className="text-center">
        <div className="text-charcoal/30 text-2xl mb-1">□</div>
        <span className="text-charcoal/40 text-xs tracking-wider">
          {label}
        </span>
      </div>
    </div>
  );
}
