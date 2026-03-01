import { Header } from "@/components/header";
import { VideoPlayer } from "@/components/video-player";
import { PlaylistSidebar } from "@/components/playlist-sidebar";
import { VideoDescription } from "@/components/video-description";
import { getCourseById } from "@/lib/courses";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

interface CoursePageProps {
  params: Promise<{
    playlistId: string;
  }>;
  searchParams: Promise<{
    video?: string;
    t?: string;
  }>;
}

export default async function CoursePage({ params, searchParams }: CoursePageProps) {
  const { playlistId } = await params;
  const { video: currentVideoId, t: timestamp } = await searchParams;
  
  const course = getCourseById(playlistId);

  if (!course) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Courses
          </Link>
          <div className="text-center py-12">
            <p className="text-muted-foreground">Course not found</p>
          </div>
        </main>
      </div>
    );
  }

  // Get current video from URL params or default to first video
  const currentVideo = course.videos.find((v) => v.id === currentVideoId) || course.videos[0];

  // Parse timestamp from URL (in seconds)
  const startTime = timestamp ? parseInt(timestamp) : undefined;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Courses
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main content - Video player */}
          <div className="lg:col-span-2 space-y-4">
            <VideoPlayer videoId={currentVideo.id} title={currentVideo.title} startTime={startTime} />
            
            <div className="space-y-2">
              <h1 className="text-2xl font-bold">{currentVideo.title}</h1>
              <VideoDescription
                description={currentVideo.description}
                playlistId={playlistId}
                currentVideoId={currentVideo.id}
              />
            </div>
          </div>

          {/* Sidebar - Playlist */}
          <div className="lg:col-span-1">
            <div className="sticky top-20">
              <PlaylistSidebar
                videos={course.videos}
                currentVideoId={currentVideo.id}
                playlistId={course.id}
                title={course.title}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
