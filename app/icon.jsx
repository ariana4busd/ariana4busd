export function Icon({ id, className, fill = "currentColor" }) {
  return (
    <svg className={className} fill={fill}>
      <use href={`#${id}`} />
    </svg>
  );
}
