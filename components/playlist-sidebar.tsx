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
    <Card className="h-full flex flex-col">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg">{title}</CardTitle>
        <p className="text-sm text-muted-foreground">
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
