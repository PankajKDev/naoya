export interface YouTubeSearchItem {
  id: {
    videoId: string;
  };
  snippet: {
    title: string;
    description: string;
    thumbnails: {
      medium: {
        url: string;
      };
    };
    channelTitle: string;
    publishedAt: string;
  };
}

export interface YouTubeSearchResponse {
  items: YouTubeSearchItem[];
}

export interface YouTubeVideo {
  id: string;
  title: string;
  description: string;
  img: string;
  channelTitle: string;
  publishedAt: string;
}
