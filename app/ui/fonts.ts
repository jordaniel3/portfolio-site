import localFont from 'next/font/local'
import { Didact_Gothic } from 'next/font/google'
 
// Font files can be colocated inside of `pages`
export const neueMontreal = localFont({
    src: [
      {
        path: '../../public/fonts/NeueMontreal-Regular.otf',
        weight: '400',
        style: 'normal',
      },
      {
        path: '../../public/fonts/NeueMontreal-Bold.otf',
        weight: '700',
        style: 'bold',
      },
    ],
  })
  export const didactGothic = Didact_Gothic({subsets:['latin'],weight:'400'})