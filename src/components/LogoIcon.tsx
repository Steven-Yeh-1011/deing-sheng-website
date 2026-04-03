/**
 * Deing Sheng Logo Icon
 * Square black background with rounded corners, yellow/orange gradient "S" inside
 * S gradient: right = bright yellow #F7BA00, left fades to orange-red #E94F05
 * Matches original website: square black box with bold yellow DS letterform
 */
export default function LogoIcon({ size = 42 }: { size?: number }) {
  const gradId = `dsGrad-${size}`;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Deing Sheng Logo"
      style={{ filter: "drop-shadow(0 1px 3px rgba(0,0,0,0.4))" }}
    >
      <defs>
        {/* S gradient: left=orange-red → right=bright yellow */}
        <linearGradient id={gradId} x1="0" y1="0.5" x2="1" y2="0.5">
          <stop offset="0%" stopColor="#E94F05" />
          <stop offset="45%" stopColor="#FD8D19" />
          <stop offset="100%" stopColor="#F7BA00" />
        </linearGradient>
      </defs>

      {/* Square black background with rounded corners */}
      <rect x="2" y="2" width="96" height="96" rx="14" fill="#0D1319" />

      {/* S shape — geometric block S */}
      {/* Top bar */}
      <rect x="22" y="16" width="42" height="12" rx="2" fill={`url(#${gradId})`} />
      {/* Left vertical (upper half) */}
      <rect x="22" y="16" width="13" height="36" rx="2" fill={`url(#${gradId})`} />
      {/* Middle bar */}
      <rect x="22" y="44" width="46" height="12" rx="2" fill={`url(#${gradId})`} />
      {/* Right vertical (lower half) */}
      <rect x="55" y="44" width="13" height="36" rx="2" fill={`url(#${gradId})`} />
      {/* Bottom bar */}
      <rect x="26" y="68" width="42" height="12" rx="2" fill={`url(#${gradId})`} />
    </svg>
  );
}
