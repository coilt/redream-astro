<template>
  <div>
    <div
      class="thumbnail-container my-0 cursor-pointer relative"
      @mouseenter="handleVideoThumbnailHover"
      @mouseleave="handleVideoThumbnailLeave"
      :style="{ borderRadius: '10px', overflow: 'hidden' }"
    >
      <img
        :class="['img-responsive transition-opacity duration-300', isVideoHovered ? 'opacity-0' : 'opacity-100']"
        :src="posterImage"
        alt="Video Thumbnail"
        :style="{ width: '100%', height: '100%', borderRadius: '12px' }"
      />
      <video
        v-show="isVideoHovered"
        ref="videoThumbnailRef"
        class="thumbnail-video absolute inset-0 w-full h-full transition-opacity duration-300"
        :poster="posterImage"
        preload="auto"
        muted
        loop
        :style="{ borderRadius: '12px' }"
      >
        <source v-if="videoSource" :src="videoSource" type="video/mp4" />
      </video>
      <div v-if="lgThumbnailProps" v-bind="lgThumbnailProps"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Props {
  posterImage: string
  videoSource: string
  lgThumbnailProps?: Record<string, any>
}

defineProps<Props>()

const videoThumbnailRef = ref<HTMLVideoElement | null>(null)
const isVideoHovered = ref(false)

const handleVideoThumbnailHover = () => {
  isVideoHovered.value = true
  if (videoThumbnailRef.value) {
    videoThumbnailRef.value.play().catch((error) => {
      console.error("Error playing video:", error)
    })
  }
}

const handleVideoThumbnailLeave = () => {
  if (videoThumbnailRef.value) {
    videoThumbnailRef.value.pause()
    videoThumbnailRef.value.currentTime = 0
    isVideoHovered.value = false
  }
}
</script>
