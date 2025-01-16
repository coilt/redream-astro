
<template>
  <div>
    <div class="flex justify-center">
      
      <div class="flex h-full overflow-auto w-11/12 justify-center mt-40">
        
        <main class="overflow-hidden">
          <h1
        class="mt-8 text-4xl font-bold tracking-tight text-pretty text-red-devil-500 sm:text-5xl mb-8"
      >Films</h1>
          <div class="flex flex-col items-center h-full">
            <div class="gradient-overlay"></div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 content-start ">
              <Lightgallery
                :settings="{
                  vimeoPlayerParams: { autoplay: true, controls: true },
                  plugins: [lgThumbnail, lgVideo],
                  download: false,
                  closeOnTap: true,
                  controls: false,
                  counter: false,
                  escKey: true,
                  mousewheel: false,
                  videoMaxSize: [1920 - 1080],
                  zoomFromOrigin: true,
                  videojs: true,
                  pointer: true,
                }"
                :onInit="onInit"
                v-for="(video, index) in videos"
                :key="index"
              >
                <a
                  :data-lg-size="1280 - 720"
                  :data-src="video.src"
                  :data-poster="video.poster"
                  :data-sub-html="video.subHtml"
                >
                  <VideoThumbnailComponent
                    :posterImage="video.poster"
                    :videoSource="video.videoSource"
                  />
                </a>
              </Lightgallery>
            </div>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import Lightgallery from 'lightgallery/vue'
import 'lightgallery/css/lightgallery.css'
import 'lightgallery/css/lg-thumbnail.css'
import 'lightgallery/css/lg-video.css'
import 'video.js/dist/video-js.css'
import '@styles/films.css'

import lgThumbnail from 'lightgallery/plugins/thumbnail'
import lgVideo from 'lightgallery/plugins/video'


import 'video.js/dist/video-js.css'
 
 

import VideoThumbnailComponent from './VideoThumbnailComponent.vue'

export default defineComponent({
  name: 'FilmsComponent',
  components: {
    Lightgallery,
    VideoThumbnailComponent,
    
     
  },

  setup() {
    const lightboxRef = ref(null)
    const formRef = ref(null)

    const videos = [
      {
        size: '1280-720',
        src: '//vimeo.com/180157095',
        poster: './images/thumbs/thumb-nightfall.webp',
        subHtml: '<h4>NIGHTFALL</h4>',
        videoSource: './videos/v-thumb-nightfall.webm',
      },
      {
        size: '1280-720',
        src: 'https://vimeo.com/156413267',
        poster: './images/thumbs/thumb-alabama.webp',
        subHtml: '<h4>Alabama Shakes — Gimme All Your Love</h4>',
        videoSource: './videos/v-thumb-alabama.webm',
      },
      {
        size: '1280-720',
        src: '//vimeo.com/129055751',
        poster: './images/thumbs/thumb-cgs.webp',
        subHtml: '<h4>CGS — Tattoo Artist Promo </h4>',
        videoSource: './videos/v-thumb-cgs.webm',
      },
      {
        size: '1280-720',
        src: '//vimeo.com/150533258',
        poster: './images/thumbs/thumb-woowooki.webp',
        subHtml: '<h4>WOOWOOKI — Promo</h4>',
        videoSource: './videos/v-thumb-woowooki.webm',
      },
    ]

    const onLightGalleryInit = (detail) => {
      console.log('lightGallery has been initialized', detail)
    }

    console.log('Videos data:', videos)

    return {
      lightboxRef,
      formRef,
      videos,
      lgThumbnail,
      lgVideo,
       
       
    }
  },
})
</script>
