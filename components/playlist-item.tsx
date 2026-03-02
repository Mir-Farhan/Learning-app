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
        "flex items-start gap-3 p-3 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg",
        isActive
          ? "bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30 border-2 border-blue-500/60 dark:border-blue-400/60 shadow-lg"
          : "bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700"
      )}
    >
      <div className="relative flex-shrink-0">
        <img
          src={video.thumbnail}
          alt={video.title}
          className="w-32 h-20 object-cover rounded-lg shadow-md"
        />
        {isActive && (
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/80 to-purple-500/80 flex items-center justify-center rounded-lg backdrop-blur-sm">
            <Play className="w-6 h-6 text-white fill-white" />
          </div>
        )}
      </div>
      <div className="flex-1 min-w-0">
        <h4
          className={cn(
            "font-medium text-sm line-clamp-2 transition-colors",
            isActive
              ? "bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent font-semibold"
              : "text-slate-900 dark:text-slate-100"
          )}
        >
          {video.title}
        </h4>
        <div className="flex items-center gap-2 mt-1">
          <span className="text-xs text-slate-600 dark:text-slate-400">
            {new Date(video.publishedAt).toLocaleDateString()}
          </span>
        </div>
      </div>
      {isActive && (
        <CheckCircle2 className="w-5 h-5 bg-gradient-to-r from-blue-500 to-purple-500 text-white flex-shrink-0 mt-1 rounded-full p-0.5" />
      )}
    </Link>
  );
}
