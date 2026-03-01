// YouTube API Types

export interface YouTubeThumbnail {
  url: string;
  width: number;
  height: number;
}

export interface YouTubeThumbnails {
  default: YouTubeThumbnail;
  medium: YouTubeThumbnail;
  high: YouTubeThumbnail;
  standard?: YouTubeThumbnail;
  maxres?: YouTubeThumbnail;
}

export interface YouTubeVideoSnippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: YouTubeThumbnails;
  channelTitle: string;
  playlistId: string;
  position: number;
  resourceId: {
    kind: string;
    videoId: string;
  };
}

export interface YouTubeVideoContentDetails {
  videoId: string;
  videoPublishedAt: string;
}

export interface YouTubeVideo {
  kind: string;
  etag: string;
  id: string;
  snippet: YouTubeVideoSnippet;
  contentDetails?: YouTubeVideoContentDetails;
}

export interface YouTubePlaylistSnippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: YouTubeThumbnails;
  channelTitle: string;
  localized: {
    title: string;
    description: string;
  };
}

export interface YouTubePlaylistContentDetails {
  itemCount: number;
}

export interface YouTubePlaylist {
  kind: string;
  etag: string;
  id: string;
  snippet: YouTubePlaylistSnippet;
  contentDetails: YouTubePlaylistContentDetails;
}

export interface YouTubeChannelSnippet {
  title: string;
  description: string;
  customUrl: string;
  publishedAt: string;
  thumbnails: YouTubeThumbnails;
  localized: {
    title: string;
    description: string;
  };
  country: string;
}

export interface YouTubeChannelContentDetails {
  relatedPlaylists: {
    likes: string;
    favorites: string;
    uploads: string;
  };
}

export interface YouTubeChannel {
  kind: string;
  etag: string;
  id: string;
  snippet: YouTubeChannelSnippet;
  contentDetails: YouTubeChannelContentDetails;
}

export interface YouTubeApiResponse<T> {
  kind: string;
  etag: string;
  nextPageToken?: string;
  prevPageToken?: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: T[];
}

// App-specific types
export interface Course {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  videoCount: number;
  channelTitle: string;
}

export interface Video {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  position: number;
  publishedAt: string;
}

export interface CourseWithVideos extends Course {
  videos: Video[];
}
