export const dynamic = "force-dynamic";
import VideoCard from "@/components/VideoCard";
import Navbar from "@/components/Navbar";
import { mockVideos } from "@/data/mockData";

export default function Home() {
  return (
    <div className="bg-black min-h-screen text-white overflow-hidden">
      <Navbar />

      <main className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth md:pl-64 pb-16 md:pb-0">
        <div className="max-w-[450px] mx-auto w-full">
          {mockVideos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      </main>
    </div>
  );
}