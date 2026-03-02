"use client";

import Link from "next/link";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play } from "lucide-react";
import { Course } from "@/types";
import { motion } from "framer-motion";

interface EnhancedCourseCardProps {
  course: Course;
}

export function EnhancedCourseCard({ course }: EnhancedCourseCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className="group"
    >
      <Link href={`/course/${course.id}`}>
        <Card className="relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] cursor-pointer h-full flex flex-col bg-gradient-to-br from-card/80 to-muted/40 backdrop-blur-sm border border-white/10 dark:border-white/5 shadow-lg">
          <div className="relative aspect-video overflow-hidden bg-muted/50 backdrop-blur-sm">
            <img
              src={course.thumbnail}
              alt={course.title}
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
              <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity transform scale-75 group-hover:scale-100 shadow-lg">
                <Play className="w-7 h-7 text-white fill-white ml-1" />
              </div>
            </div>
            <div className="absolute top-3 right-3">
              <Badge variant="secondary" className="text-xs bg-white/20 backdrop-blur-md border border-white/30 text-foreground">
                {course.videoCount} {course.videoCount === 1 ? "video" : "videos"}
              </Badge>
            </div>
          </div>
          <CardContent className="flex-1 p-4 backdrop-blur-sm">
            <h3 className="font-bold text-lg line-clamp-2 text-card-foreground group-hover:text-primary transition-colors mb-2">
              {course.title}
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-2">
              {course.description}
            </p>
          </CardContent>
          <CardFooter className="p-4 pt-0 flex items-center justify-between backdrop-blur-sm">
            <span className="text-sm text-muted-foreground">{course.channelTitle}</span>
            <Badge variant="secondary" className="text-xs">
              {course.videoCount} {course.videoCount === 1 ? "video" : "videos"}
            </Badge>
          </CardFooter>
        </Card>
      </Link>
    </motion.div>
  );
}
