import { Sora, Arimo } from 'next/font/google'
 
export const sora = Sora({
  subsets: ['latin'],
  style: 'normal',
  weight: ['400', '600', '700', '800']
})
 
export const arimo400 = Arimo({
  subsets: ['latin'],
  weight: ['400'],
  style: 'normal'
})
export const arimo700 = Arimo({
    subsets: ['latin'],
    weight: ['700'],
    style: 'normal'
  })