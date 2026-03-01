'use client';

import { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';

interface VideoDescriptionProps {
  description: string;
  playlistId: string;
  currentVideoId: string;
}

export function VideoDescription({ description, playlistId, currentVideoId }: VideoDescriptionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleTimestampClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Check if clicked element is a timestamp link
      if (target.tagName === 'A' && target.getAttribute('data-timestamp')) {
        e.preventDefault();
        const timestamp = target.getAttribute('data-timestamp');
        
        if (timestamp) {
          // Update URL with timestamp for the current video
          const url = `/course/${playlistId}?video=${currentVideoId}&t=${timestamp}`;
          router.push(url);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }
    };

    container.addEventListener('click', handleTimestampClick);
    
    return () => {
      container.removeEventListener('click', handleTimestampClick);
    };
  }, [playlistId, currentVideoId, router]);

  // Process description to make only timestamps clickable and convert plain URLs to links
  const processDescription = (desc: string): string => {
    // First, convert YouTube URLs with timestamps to clickable timestamps (only the timestamp part)
    // Handle timestamps with hours: (1:00:23)
    let processed = desc.replace(
      /\((\d+):(\d+):(\d+)\)\s*<a\s+href="https:\/\/www\.youtube\.com\/watch\?v=([^&]+)[^"]*"[^>]*>([^<]+)<\/a>/g,
      (match, hours, minutes, seconds, videoId, title) => {
        return `<a href="javascript:void(0)" data-timestamp="${parseInt(hours) * 3600 + parseInt(minutes) * 60 + parseInt(seconds)}" class="text-primary hover:underline cursor-pointer font-medium">(${hours}:${minutes}:${seconds})</a> ${title}`;
      }
    );
    
    // Handle timestamps without hours: (0:57)
    processed = processed.replace(
      /\((\d+):(\d+)\)\s*<a\s+href="https:\/\/www\.youtube\.com\/watch\?v=([^&]+)[^"]*"[^>]*>([^<]+)<\/a>/g,
      (match, minutes, seconds, videoId, title) => {
        return `<a href="javascript:void(0)" data-timestamp="${parseInt(minutes) * 60 + parseInt(seconds)}" class="text-primary hover:underline cursor-pointer font-medium">(${minutes}:${seconds})</a> ${title}`;
      }
    );
    
    // Also handle existing javascript:void(0) links with data-video-id
    processed = processed.replace(
      /\((\d+):(\d+)\)\s*<a\s+href="javascript:void\(0\)"\s+data-video-id="([^"]+)"[^>]*>([^<]+)<\/a>/g,
      (match, minutes, seconds, videoId, title) => {
        return `<a href="javascript:void(0)" data-timestamp="${parseInt(minutes) * 60 + parseInt(seconds)}" class="text-primary hover:underline cursor-pointer font-medium">(${minutes}:${seconds})</a> ${title}`;
      }
    );
    
    // Convert plain text URLs to clickable links (but not YouTube URLs)
    // This matches URLs that start with http:// or https:// and are not already in <a> tags
    processed = processed.replace(
      /(?<!href=")(https?:\/\/[^\s<]+)/g,
      (match) => {
        // Don't convert YouTube URLs
        if (match.includes('youtube.com') || match.includes('youtu.be')) {
          return match;
        }
        return `<a href="${match}" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline cursor-pointer">${match}</a>`;
      }
    );
    
    return processed;
  };

  const processedDescription = processDescription(description);

  return (
    <div 
      ref={containerRef}
      className="prose prose-sm max-w-none text-muted-foreground"
      dangerouslySetInnerHTML={{ __html: processedDescription.replace(/\n/g, '<br />') }}
    />
  );
}
