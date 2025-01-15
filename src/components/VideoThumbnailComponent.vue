<template>
  <div>
    <div
      class="thumbnail-container my-0"
      @mouseenter="handleVideoThumbnailHover"
      @mouseleave="handleVideoThumbnailLeave"
      :style="{ borderRadius: '10px', overflow: 'hidden' }"
    >
      <img
        :class="['img-responsive', isVideoHovered ? 'hidden' : 'opacity-100']"
        :src="posterImage"
        alt="Video Thumbnail"
        :style="{ width: '100%', height: '100%', borderRadius: '12px' }"
      />
      <video
        v-if="isVideoHovered"
        ref="videoThumbnailRef"
        class="thumbnail-video active"
        :poster="posterImage"
        preload="metadata"
        muted
        loop
        autoplay
        :style="{ width: '100%', height: '100%', borderRadius: '12px' }"
      >
        <source v-if="videoSource" :src="videoSource" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div v-if="lgThumbnailProps" v-bind="lgThumbnailProps"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onUnmounted } from 'vue';
import type { PropType } from 'vue'

interface LgThumbnailProps {
  [key: string]: any;
}

export default defineComponent({
  name: 'VideoThumbnailComponent',
  props: {
    posterImage: {
      type: String,
      required: true,
    },
    videoSource: {
      type: String,
      required: true,
    },
    lgThumbnailProps: {
      type: Object as PropType<LgThumbnailProps>,
      default: () => ({}),
    },
  },
  setup(props) {
    const videoThumbnailRef = ref<HTMLVideoElement | null>(null);
    const isVideoHovered = ref(false);

    const handleVideoThumbnailHover = () => {
      isVideoHovered.value = true;
      if (videoThumbnailRef.value) {
        videoThumbnailRef.value.play().catch((error) => {
          console.error("Error playing video:", error);
        });
      }
    };

    const handleVideoThumbnailLeave = () => {
      if (videoThumbnailRef.value) {
        videoThumbnailRef.value.pause();
        videoThumbnailRef.value.currentTime = 0;
        isVideoHovered.value = false;
      }
    };

    onUnmounted(() => {
  if ((window as any).lgData && 'videoGallery' in (window as any).lgData) {
    ((window as any).lgData.videoGallery as any).destroy();
  }
});


    return {
      videoThumbnailRef,
      isVideoHovered,
      handleVideoThumbnailHover,
      handleVideoThumbnailLeave,
    };
  },
});
</script>
