const base = { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true }

export const ArrowRight = ({ size = 18, ...p }) => (
  <svg {...base} width={size} height={size} {...p}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
)
export const ArrowLeft = ({ size = 20, ...p }) => (
  <svg {...base} width={size} height={size} {...p}><path d="M19 12H5M11 6l-6 6 6 6" /></svg>
)
export const ArrowUpRight = ({ size = 16, ...p }) => (
  <svg {...base} width={size} height={size} {...p}><path d="M7 17 17 7M8 7h9v9" /></svg>
)
export const External = ({ size = 16, ...p }) => (
  <svg {...base} width={size} height={size} strokeWidth={1.8} {...p}>
    <path d="M18 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h5" />
    <path d="M15 3h6v6M10 14 21 3" />
  </svg>
)
export const Plus = ({ size = 18, ...p }) => (
  <svg {...base} width={size} height={size} strokeWidth={1.8} {...p}><path d="M12 5v14M5 12h14" /></svg>
)
export const Check = ({ size = 14, ...p }) => (
  <svg {...base} width={size} height={size} strokeWidth={2.4} {...p}><path d="m5 12.5 4.5 4.5L19 7.5" /></svg>
)
export const Menu = ({ size = 24, ...p }) => (
  <svg {...base} width={size} height={size} {...p}><path d="M4 7h16M4 12h16M4 17h16" /></svg>
)
export const Close = ({ size = 24, ...p }) => (
  <svg {...base} width={size} height={size} {...p}><path d="M6 6l12 12M18 6 6 18" /></svg>
)
export const Download = ({ size = 20, ...p }) => (
  <svg {...base} width={size} height={size} strokeWidth={1.8} {...p}>
    <path d="M7 18a4.5 4.5 0 0 1-.6-8.96A6 6 0 0 1 18 9.5a4 4 0 0 1 .5 8" />
    <path d="M12 12v8M9 17l3 3 3-3" />
  </svg>
)
export const LinkIcon = ({ size = 18, ...p }) => (
  <svg {...base} width={size} height={size} {...p}>
    <path d="M10 14a4.5 4.5 0 0 0 6.4 0l3-3a4.5 4.5 0 0 0-6.4-6.4l-1 1" />
    <path d="M14 10a4.5 4.5 0 0 0-6.4 0l-3 3a4.5 4.5 0 0 0 6.4 6.4l1-1" />
  </svg>
)

const fill = { viewBox: '0 0 24 24', fill: 'currentColor', 'aria-hidden': true }

export const Twitter = ({ size = 20, ...p }) => (
  <svg {...fill} width={size} height={size} {...p}>
    <path d="M22 5.9c-.7.3-1.5.5-2.4.6.9-.5 1.5-1.3 1.8-2.3-.8.5-1.7.8-2.6 1a4.1 4.1 0 0 0-7 3.7C8.4 8.7 5.4 7.1 3.4 4.6a4.1 4.1 0 0 0 1.3 5.5c-.7 0-1.3-.2-1.9-.5 0 2 1.4 3.7 3.3 4.1-.6.2-1.2.2-1.8.1.5 1.6 2 2.8 3.8 2.9A8.3 8.3 0 0 1 2 18.4 11.7 11.7 0 0 0 8.3 20c7.5 0 11.7-6.3 11.7-11.7v-.5c.8-.6 1.5-1.3 2-2.1Z" />
  </svg>
)
export const Discord = ({ size = 20, ...p }) => (
  <svg {...fill} width={size} height={size} {...p}>
    <path d="M19.3 5.4A16.5 16.5 0 0 0 15.2 4l-.5 1a15 15 0 0 0-5.4 0l-.5-1a16.5 16.5 0 0 0-4.1 1.4C2 9.3 1.3 13.1 1.6 16.9a16.6 16.6 0 0 0 5 2.5l1.1-1.7c-.6-.2-1.2-.5-1.7-.9l.4-.3a11.8 11.8 0 0 0 10.2 0l.4.3c-.5.4-1.1.7-1.700.9l1.1 1.7a16.5 16.5 0 0 0 5-2.5c.4-4.400-.7-8.200-3.100-11.500ZM8.700 14.600c-1 0-1.800-.9-1.800-2s.8-2 1.800-2 1.800.9 1.800 2-.8 2-1.800 2Zm6.600 0c-1 0-1.800-.9-1.800-2s.8-2 1.800-2 1.800.9 1.800 2-.8 2-1.800 2Z" />
  </svg>
)
export const Github = ({ size = 20, ...p }) => (
  <svg {...fill} width={size} height={size} {...p}>
    <path d="M12 2a10 10 0 0 0-3.2 19.500c.5.100.700-.200.700-.500v-1.800c-2.800.600-3.400-1.200-3.400-1.200-.5-1.200-1.100-1.500-1.100-1.500-.9-.6.100-.6.100-.6 1 .1 1.500 1 1.500 1 .9 1.500 2.300 1.100 2.900.8.1-.7.4-1.100.6-1.400-2.200-.3-4.600-1.100-4.600-5 0-1.100.4-2 1-2.700-.1-.3-.4-1.300.1-2.700 0 0 .8-.3 2.700 1a9.300 9.300 0 0 1 5 0c1.900-1.300 2.700-1 2.700-1 .5 1.400.2 2.400.1 2.700.6.700 1 1.600 1 2.700 0 3.900-2.300 4.700-4.600 5 .4.300.7.900.7 1.900v2.800c0 .3.200.6.700.5A10 10 0 0 0 12 2Z" />
  </svg>
)
export const LinkedIn = ({ size = 20, ...p }) => (
  <svg {...fill} width={size} height={size} {...p}>
    <path d="M20.400 2H3.600C2.700 2 2 2.700 2 3.600v16.800c0 .9.700 1.600 1.600 1.600h16.800c.9 0 1.600-.7 1.600-1.600V3.600c0-.9-.7-1.600-1.600-1.600ZM8 19H5V9.500h3V19ZM6.500 8.200a1.700 1.700 0 1 1 0-3.400 1.700 1.700 0 0 1 0 3.400ZM19 19h-3v-4.600c0-1.100 0-2.500-1.500-2.500s-1.800 1.200-1.800 2.400V19h-3V9.500h2.800v1.300c.4-.7 1.300-1.500 2.700-1.500 2.900 0 3.500 1.900 3.500 4.400V19Z" />
  </svg>
)
