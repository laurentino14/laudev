import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Lucas Laurentino - Software Engineer',
    short_name: 'Laurentino',
    description:
      'Working behind the scenes of technology, my mission is to turn ideas into reality, lines of code into functional applications, and challenges into achievements.',
    start_url: '/',
    display: 'standalone',
    icons: [
      {
        src: 'https://cdn.laudev.com.br/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
