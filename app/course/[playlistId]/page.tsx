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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950/30 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="fixed top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>
      <div className="fixed top-40 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -z-10"></div>
      <div className="fixed bottom-20 left-1/4 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl -z-10"></div>
      
      <Header />
      
      <main className="container mx-auto px-4 py-8 relative z-10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-4 py-2 bg-white/70 dark:bg-slate-900/70 backdrop-blur-md border border-slate-200/50 dark:border-slate-700/50 rounded-full text-slate-700 dark:text-slate-300 hover:bg-white/90 dark:hover:bg-slate-800/90 hover:shadow-lg transition-all duration-300 mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="font-medium">Back to Courses</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main content - Video player */}
          <div className="lg:col-span-2 space-y-4">
            <VideoPlayer videoId={currentVideo.id} title={currentVideo.title} startTime={startTime} />
            
            <div className="space-y-4">
              <div className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-md border border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-6 shadow-xl">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent mb-4">{currentVideo.title}</h1>
                <VideoDescription
                  description={currentVideo.description}
                  playlistId={playlistId}
                  currentVideoId={currentVideo.id}
                />
              </div>
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
