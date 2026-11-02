export type Video = {
  /** The YouTube video ID, the `v=` part of a watch URL. */
  youtubeId: string;
  title: string;
  /** Who's playing, if it isn't just Sam. */
  with?: string;
};

export const videos: Video[] = [];
