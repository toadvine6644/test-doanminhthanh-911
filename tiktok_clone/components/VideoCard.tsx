'use client';
import { useEffect, useRef, useState } from "react";
import { Heart, MessageCircle, Share2 } from "lucide-react";
import { VideoType } from "@/data/mockData";

export default function VideoCard({ video }: { video: VideoType }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(video.likesCount);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            videoRef.current?.play().catch(() => {});
          } else {
            videoRef.current?.pause();
            if (videoRef.current) videoRef.current.currentTime = 0; 
          }
        });
      },
      { threshold: 0.6 } 
    );

    if (videoRef.current) observer.observe(videoRef.current);

    return () => {
      if (videoRef.current) observer.unobserve(videoRef.current);
    };
  }, []);

  const handleLike = () => {
    if (liked) {
      setLiked(false);
      setLikes((prev) => prev - 1);
    } else {
      setLiked(true);
      setLikes((prev) => prev + 1);
    }
  };

  return (
    <div className="relative h-screen w-full snap-start bg-black flex justify-center items-center">
      <video
        ref={videoRef}
        src={video.videoUrl}
        className="h-full w-full object-cover max-w-[450px]"
        loop
        playsInline
        muted 
      />

      <div className="absolute right-4 bottom-24 flex flex-col items-center space-y-5 text-white z-10">
        <button onClick={handleLike} className="flex flex-col items-center group">
          <div className="bg-zinc-800 p-3 rounded-full transition group-hover:scale-105">
            <Heart className={`w-7 h-7 transition-colors ${liked ? "fill-red-500 text-red-500" : "text-white"}`} />
          </div>
          <span className="text-xs mt-1 font-medium">{likes}</span>
        </button>

        <button className="flex flex-col items-center">
          <div className="bg-zinc-800 p-3 rounded-full">
            <MessageCircle className="w-7 h-7 text-white" />
          </div>
          <span className="text-xs mt-1 font-medium">88</span>
        </button>

        <button className="flex flex-col items-center">
          <div className="bg-zinc-800 p-3 rounded-full">
            <Share2 className="w-7 h-7 text-white" />
          </div>
          <span className="text-xs mt-1 font-medium">Chia sẻ</span>
        </button>
      </div>

      <div className="absolute left-4 bottom-24 right-16 text-white z-10 max-w-[360px] drop-shadow-md">
        <h3 className="font-bold text-base mb-1">@{video.authorName}</h3>
        <p className="text-sm text-zinc-200 line-clamp-2">{video.description}</p>
      </div>
    </div>
  );
}