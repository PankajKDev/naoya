"use server";

import {
  IYouTubeVideo,
  YouTubeSearchItem,
  YouTubeSearchResponse,
} from "@/types";

export async function searchYoutubeVideos(
  query: string,
): Promise<IYouTubeVideo[]> {
  const apiKey = process.env.YOUTUBE_API_KEY;
  const maxResults = 10;

  if (!apiKey) {
    throw new Error("YOUTUBE API KEY IS MISSING");
  }

  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(
    query,
  )}&type=video&maxResults=${maxResults}&key=${apiKey}`;

  try {
    const response = await fetch(url);
    const data: YouTubeSearchResponse = await response.json();

    if (!response.ok) {
      console.log("youtube api error", data);
      return [];
    }

    console.log(data);

    return data.items.map(
      (item: YouTubeSearchItem): IYouTubeVideo => ({
        id: item.id.videoId,
        title: item.snippet.title,
        description: item.snippet.description,
        img: item.snippet.thumbnails.medium.url,
        channelTitle: item.snippet.channelTitle,
        publishedAt: item.snippet.publishedAt,
      }),
    );
  } catch (e) {
    console.log(`Error fetching videos: ${e}`);
    return [];
  }
}
