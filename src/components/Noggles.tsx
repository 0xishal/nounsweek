// Noggles ⌐◨-◨ dalam grid piksel 16x6. Karya Nouns berlisensi CC0.
type Props = {
  color?: string;
  className?: string;
  /** -1 = pupil kiri, 1 = pupil kanan (pupil = kotak hitam di lensa) */
  look?: -1 | 1;
  title?: string;
};

export function Noggles({ color = "var(--color-noggle)", className, look = 1, title }: Props) {
  const lens = (x: number) => {
    const white = look === 1 ? x : x + 2;
    const black = look === 1 ? x + 2 : x;
    return (
      <>
        <rect x={white} y={1} width={2} height={4} fill="#fff" />
        <rect x={black} y={1} width={2} height={4} fill="#000" />
      </>
    );
  };
  return (
    <svg
      viewBox="0 0 16 6"
      className={`pixel ${className ?? ""}`}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
    >
      <g fill={color}>
        <rect x={3} y={0} width={6} height={6} />
        <rect x={10} y={0} width={6} height={6} />
        <rect x={9} y={1} width={1} height={1} />
        <rect x={0} y={1} width={3} height={1} />
        <rect x={0} y={2} width={1} height={2} />
      </g>
      {lens(4)}
      {lens(11)}
    </svg>
  );
}
