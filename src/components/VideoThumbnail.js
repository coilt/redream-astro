// VideoThumbnail.js
export default class VideoThumbnail {
  constructor(container, { posterImage, videoSource }) {
    this.container = container;
    this.posterImage = posterImage;
    this.videoSource = videoSource;
    this.isVideoHovered = false;
    
    this.init();
  }

  init() {
    this.container.style.borderRadius = '10px';
    this.container.style.overflow = 'hidden';
    this.container.style.position = 'relative';
    this.container.style.cursor = 'pointer';
    
    // Create poster image
    this.img = document.createElement('img');
    this.img.src = this.posterImage;
    this.img.alt = 'Video Thumbnail';
    this.img.style.width = '100%';
    this.img.style.height = '100%';
    this.img.style.borderRadius = '12px';
    this.img.style.transition = 'opacity 300ms';
    
    // Create video element
    this.video = document.createElement('video');
    this.video.style.position = 'absolute';
    this.video.style.inset = '0';
    this.video.style.width = '100%';
    this.video.style.height = '100%';
    this.video.style.borderRadius = '12px';
    this.video.style.transition = 'opacity 300ms';
    this.video.style.display = 'none';
    this.video.muted = true;
    this.video.loop = true;
    this.video.preload = 'auto';
    
    const source = document.createElement('source');
    source.src = this.videoSource;
    source.type = 'video/mp4';
    this.video.appendChild(source);
    
    // Add elements to container
    this.container.appendChild(this.img);
    this.container.appendChild(this.video);
    
    // Add event listeners
    this.container.addEventListener('mouseenter', this.handleHover.bind(this));
    this.container.addEventListener('mouseleave', this.handleLeave.bind(this));
  }

  handleHover() {
    this.isVideoHovered = true;
    this.img.style.opacity = '0';
    this.video.style.display = 'block';
    this.video.play().catch(error => console.error("Error playing video:", error));
  }

  handleLeave() {
    this.isVideoHovered = false;
    this.img.style.opacity = '1';
    this.video.pause();
    this.video.currentTime = 0;
    this.video.style.display = 'none';
  }
}
