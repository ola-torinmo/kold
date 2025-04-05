
import { interDisplay, ppNeueMontreal } from './fonts'
import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${interDisplay.variable} ${ppNeueMontreal.variable}`}>
      <body
      suppressHydrationWarning={true}
      >{children}</body>
    </html>
  )
}