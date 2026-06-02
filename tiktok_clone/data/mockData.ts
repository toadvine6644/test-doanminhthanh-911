export interface VideoType {
  id: number;
  videoUrl: string;
  authorName: string;
  description: string;
  likesCount: number;
}

export const mockVideos: VideoType[] = [
  {
    id: 1,
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    authorName: "silly cartoon",
    description: "That was unexpected XDDDDDDD",
    likesCount: 368,
  },
  {
    id: 2,
    videoUrl: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/friday.mp4",
    authorName: "i love old movies",
    description: "random clips",
    likesCount: 845,
  },
  {
    id: 3,
    videoUrl: "https://media.w3.org/2010/05/sintel/trailer.mp4",
    authorName: "movie trailer",
    description: "trailer for the upcoming movie: Sintel",
    likesCount: 2316,
  }
];