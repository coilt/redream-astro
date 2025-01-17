// player.ts
import 'vidstack/player/styles/base.css';
import 'vidstack/player';
import 'vidstack/player/ui';
import 'vidstack/icons';
 
import 'vidstack/player/styles/default/theme.css';
import 'vidstack/player/styles/default/layouts/audio.css';
import 'vidstack/player/styles/default/layouts/video.css';
import { type TextTrackInit } from 'vidstack';

export function initializePlayer() {
  const player = document.querySelector('media-player')!;
  
  player.addEventListener('can-play', () => {
    // ...
  });
  
  return player;
}

// You can also export the player type
export type MediaPlayerElement = HTMLElement & { addEventListener: Function };

// ***********************************************************************************************
// Text Track Management
// ***********************************************************************************************

/**
 * You can add these tracks using HTML as well.
 *
 * @example
 * ```html
 * <media-provider>
 *   <track label="..." src="..." kind="..." srclang="..." default />
 *   <track label="..." src="..." kind="..." srclang="..." />
 * </media-provider>
 * ```
 */


 