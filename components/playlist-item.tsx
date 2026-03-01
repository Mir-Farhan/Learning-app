import Link from "next/link";
import { Play, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { Video } from "@/types";

interface PlaylistItemProps {
  video: Video;
  isActive: boolean;
  playlistId: string;
}

export function PlaylistItem({ video, isActive, playlistId }: PlaylistItemProps) {
  return (
    <Link
      href={`/course/${playlistId}?video=${video.id}`}
      className={cn(
        "flex items-start gap-3 p-3 rounded-lg transition-all duration-200 hover:bg-accent",
        isActive && "bg-accent border border-accent-foreground/20"
      )}
    >
      <div className="relative flex-shrink-0">
        <img
          src={video.thumbnail}
          alt={video.title}
          className="w-32 h-20 object-cover rounded-md"
        />
        {isActive && (
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center rounded-md">
            <Play className="w-6 h-6 text-white fill-white" />
          </div>
        )}
      </div>
      <div className="flex-1 min-w-0">
        <h4
          className={cn(
            "font-medium text-sm line-clamp-2",
            isActive && "text-primary"
          )}
        >
          {video.title}
        </h4>
        <div className="flex items-center gap-2 mt-1">
          <span className="text-xs text-muted-foreground">
            {new Date(video.publishedAt).toLocaleDateString()}
          </span>
        </div>
      </div>
      {isActive && (
        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
      )}
    </Link>
  );
}
