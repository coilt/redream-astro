<template>
  <div>
    <Lightgallery
      :settings="{
        download: false,
        plugins: [lgThumbnail, lgVideo],
      }"
    >
      <a
         
        data-lg-size="1280-720"
        data-src="//vimeo.com/112836958"
        data-poster="/images/thumbs/thumb-cgs.webp"
      >
        <img src="/images/thumbs/thumb-cgs.webp" alt="video thumbnail" />
      </a>
    </Lightgallery>
  </div>
</template>

<script>
import Lightgallery from 'lightgallery/vue'
import lgVideo from 'lightgallery/plugins/video'
import lgThumbnail from 'lightgallery/plugins/thumbnail'

import videojs from 'video.js'
import VimeoPlayer from '@vimeo/player'

export default {
  components: {
    Lightgallery,
    videojs,
    VimeoPlayer,
  },
  setup() {
    return { plugins: [lgVideo] }
  },
}
</script>
