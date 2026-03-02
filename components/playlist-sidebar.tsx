import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { PlaylistItem } from "./playlist-item";
import { Video } from "@/types";

interface PlaylistSidebarProps {
  videos: Video[];
  currentVideoId: string;
  playlistId: string;
  title: string;
}

export function PlaylistSidebar({
  videos,
  currentVideoId,
  playlistId,
  title,
}: PlaylistSidebarProps) {
  return (
    <Card className="h-full flex flex-col bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-slate-200/50 dark:border-slate-700/50 shadow-xl">
      <CardHeader className="pb-3 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20">
        <CardTitle className="text-lg bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">{title}</CardTitle>
        <p className="text-sm text-slate-600 dark:text-slate-300">
          {videos.length} {videos.length === 1 ? "video" : "videos"}
        </p>
      </CardHeader>
      <CardContent className="flex-1 p-0">
        <ScrollArea className="h-full">
          <div className="p-3 space-y-1">
            {videos.map((video) => (
              <PlaylistItem
                key={video.id}
                video={video}
                isActive={video.id === currentVideoId}
                playlistId={playlistId}
              />
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
