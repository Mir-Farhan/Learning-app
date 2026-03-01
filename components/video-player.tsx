'use client';

import { useEffect, useRef } from 'react';
import { Card } from "@/components/ui/card";

interface VideoPlayerProps {
  videoId: string;
  title: string;
  startTime?: number;
}

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

export function VideoPlayer({ videoId, title, startTime }: VideoPlayerProps) {
  const playerRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isPlayerReady = useRef(false);

  useEffect(() => {
    // Load YouTube IFrame API if not already loaded
    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

      window.onYouTubeIframeAPIReady = () => {
        initializePlayer();
      };
    } else {
      initializePlayer();
    }

    function initializePlayer() {
      if (containerRef.current && !playerRef.current) {
        playerRef.current = new window.YT.Player(containerRef.current, {
          videoId: videoId,
          playerVars: {
            rel: 0,
            start: startTime || 0,
          },
          events: {
            onReady: () => {
              isPlayerReady.current = true;
              // Seek to timestamp if provided and player is ready
              if (startTime && startTime > 0) {
                playerRef.current.seekTo(startTime, true);
                playerRef.current.playVideo();
              }
            },
          },
        });
      }
    }

    return () => {
      if (playerRef.current) {
        playerRef.current.destroy();
        playerRef.current = null;
        isPlayerReady.current = false;
      }
    };
  }, [videoId]);

  // Handle timestamp changes without reloading the player
  useEffect(() => {
    if (isPlayerReady.current && playerRef.current && startTime !== undefined) {
      playerRef.current.seekTo(startTime, true);
      playerRef.current.playVideo();
    }
  }, [startTime]);

  return (
    <Card className="overflow-hidden">
      <div className="aspect-video w-full bg-black">
        <div ref={containerRef} className="w-full h-full" />
      </div>
    </Card>
  );
}
