<template>
  <div>
    <div class="flex justify-center">
      <div class="flex h-full overflow-auto w-11/12 justify-center">
        <main class="pt-[20px]">
          <div class="flex flex-col items-center h-full">
            <div class="gradient-overlay"></div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 content-start">
              <Lightgallery
                :settings="{
                  plugins: plugins,
                  vimeoPlayerParams: {
                    autoplay: true,
                    controls: true,
                  },
                }"
                v-for="(video, index) in videos"
                :key="index"
                :speed="500"
                :plugins="[lgThumbnail, lgVideo]"
                :videojs="true"
              >
                <a
                  :data-lg-size="video.size"
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

<script lang="ts">
 import { Options, Vue } from 'vue-class-component';
import { defineComponent, ref } from 'vue'
import Lightgallery from 'lightgallery/vue'
import lgVideo from 'lightgallery/plugins/video'
import lgThumbnail from 'lightgallery/plugins/thumbnail'
import lgZoom from 'lightgallery/plugins/zoom';

import 'lightgallery/css/lightgallery.css'
import 'lightgallery/css/lg-thumbnail.css'
import 'lightgallery/css/lg-video.css'
import 'video.js/dist/video-js.css'
import videojs from 'video.js'

import VideoThumbnailComponent from './VideoThumbnailComponent.vue'

import styles from 'lightgallery/scss/lightgallery.scss';

@Options({
        components: {
            Lightgallery,
        },
        data: () => ({
            plugins: [lgThumbnail, lgZoom],
        }),
        methods: {
            onInit: () => {
                console.log('lightGallery has been initialized');
            },
            onBeforeSlide: () => {
                console.log('calling before slide');
            },
        },
    })




export default defineComponent({
  name: 'FilmsComponent',
  components: {
    Lightgallery,
    VideoThumbnailComponent,
    videojs,
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
      videojs,
    }
  },
})
</script>
