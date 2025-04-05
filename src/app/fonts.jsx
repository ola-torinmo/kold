// src/app/fonts.js
import localFont from 'next/font/local'

export const interDisplay = localFont({
  src: [
    {
      path: '../../public/fonts/InterDisplay-Regular.ttf', // Path from src/app to public
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-interdisplay',
})

export const ppNeueMontreal = localFont({
  src: [
    {
      path: '../../public/fonts/ppneuemontreal-medium.otf', // Path from src/app to public
      weight: '400', 
      style: 'normal',
    },
  ],
  variable: '--font-ppneuemontreal',
})