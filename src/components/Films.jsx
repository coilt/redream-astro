'use client'

import React, { useRef } from 'react'

import VideoThumbnailComponent from './VideoThumbnailComponent.jsx'

import LightGalleryComponent from 'lightgallery/react'




import 'lightgallery/css/lightgallery.css'
import 'lightgallery/css/lg-thumbnail.css'
import 'lightgallery/css/lg-video.css'
import 'video.js/dist/video-js.css'
import lgThumbnail from 'lightgallery/plugins/thumbnail'
import lgVideo from 'lightgallery/plugins/video'

export function FilmsComponent() {
  const lightboxRef = useRef(null)

  const formRef = useRef(null)

  return (
    <div>
      <div className='fixed top-0 right-0 p-8 z-10'>
        <ul className='flex space-x-4'>
          <li>
            <a href='/' className='text-sm text-white hover:text-gray-300'>
              Home
            </a>
          </li>
          <li>
            <a
              href='/films'
              className='text-sm text-red-600 hover:text-gray-300'
            >
              Films
            </a>
          </li>

          <li>
            <a href='/contact' className='text-sm text-white hover:text-gray-300'>
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div className='flex justify-center'>
        <div className='flex h-full overflow-auto  w-11/12 justify-center '>
          <main className='pt-[110px]'>
            <div className='flex flex-col items-center h-full'>
              <div className='gradient-overlay'></div>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4 content-start'>
                <LightGalleryComponent
                  speed={500}
                  plugins={[lgThumbnail, lgVideo]}
                  videojs={true}
                >
                  <a
                    data-lg-size='1280-720'
                    data-src='//vimeo.com/180157095'
                    data-poster='./thumbs/thumb-nightfall.webp'
                    data-sub-html='<h4>NIGHTFALL</h4>'
                  >
                    <VideoThumbnailComponent
                      posterImage='./thumbs/thumb-nightfall.webp'
                      videoSource='./video/v-thumb-nightfall.webm'
                    />
                  </a>
                </LightGalleryComponent>
                <LightGalleryComponent
                  speed={500}
                  plugins={[lgThumbnail, lgVideo]}
                  videojs={true}
                >
                  <a
                    data-lg-size='1280-720'
                    data-src='//vimeo.com/156413267'
                    data-poster='./thumbs/thumb-alabama.webp'
                    data-sub-html='<h4>Alabama Shakes — Gimme All Your Love</h4>'
                  >
                    <VideoThumbnailComponent
                      posterImage='./thumbs/thumb-alabama.webp'
                      videoSource='./video/v-thumb-alabama.webm'
                    />
                  </a>
                </LightGalleryComponent>
                <LightGalleryComponent
                  speed={500}
                  plugins={[lgThumbnail, lgVideo]}
                  videojs={true}
                >
                  <a
                    data-lg-size='1280-720'
                    data-src='//vimeo.com/129055751'
                    data-poster='./thumbs/thumb-cgs.webp'
                    data-sub-html='<h4>CGS — Tattoo Artist Promo </h4>'
                  >
                    <VideoThumbnailComponent
                      posterImage='./thumbs/thumb-cgs.webp'
                      videoSource='./video/v-thumb-cgs.webm'
                    />
                  </a>
                </LightGalleryComponent>
                <LightGalleryComponent
                  speed={500}
                  plugins={[lgThumbnail, lgVideo]}
                  videojs={true}
                >
                  <a
                    data-lg-size='1280-720'
                    data-src='//vimeo.com/150533258'
                    data-poster='./thumbs/thumb-woowooki.webp'
                    data-sub-html='<h4>WOOWOOKI — Promo</h4>'
                  >
                    <VideoThumbnailComponent
                      posterImage='./thumbs/thumb-woowooki.webp'
                      videoSource='./video/v-thumb-woowooki.webm'
                    />
                  </a>
                </LightGalleryComponent>
              </div>
            </div>
          </main>
        </div>
      </div>
      <footer className='bg-black text-slate-600 py-4 '>
        <div className='container mx-auto text-center'>
          <p className='text-sm'>Redream &copy; 2012 — 2024</p>
        </div>
      </footer>
    </div>
  )
}
