// Hardcoded course data
// Add your courses here with their YouTube playlist IDs and videos

export interface Video {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  position: number;
  publishedAt: string;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  videoCount: number;
  channelTitle: string;
  videos: Video[];
}

export const courses: Course[] = [
  {
    id: "PLhPJQNTj-xQXPhm0l-wAfyjCsGJ_BRDK",
    title: "Devops",
    description: "https://www.youtube.com/@ProjectIqraTheGKTWeb",
    thumbnail: "https://i.ytimg.com/vi/9XqNzeKWriY/maxresdefault.jpg",
    videoCount: 2,
    channelTitle: "Project IQRA",
    videos: [
      {
        id: "9XqNzeKWriY",
        title: "Build your Complete Application Infrastructure on AWS | Part 1 | Project Iqra GKTWEB",
        description: "Hello guys, So in todays lecture, we are going to discover the power of aws and its services likeVPC, EC2, etc. We will start from scratch and build up a complete infrastructure on AWS, which you could add to your resume. This lecture is covered by our guest lecturer, Sajiya Salat, a DevOps and cloud engineer. This project is divided into two parts. We will cover the theory completely from scratch to advanced, and after getting familiar, we will move on to hands-on work. Let's dive in.",
        thumbnail: "https://i.ytimg.com/vi/9XqNzeKWriY/maxresdefault.jpg",
        position: 1,
        publishedAt: new Date().toISOString(),
      },
      {
        id: "Iy9ZdOrXfFg",
        title: "Build your Complete Application Infrastructure on AWS - Practical | Part 2 | Project Iqra GKTWEB",
        description: "Hello guys, In last video we have covered the complete theory part of aws cloud and the services we will use in this project. This is the complete practical implementation of aws infrastructure. We have use #loadbalncer #vpc #ec2 #cloudwatch #sns and autoscaler to build this infrastructure. This is the great project to add in your resume.Like, share and subscribe. Be safe. Happy coding.",
        thumbnail: "https://i.ytimg.com/vi/Iy9ZdOrXfFg/maxresdefault.jpg",
        position: 2,
        publishedAt: new Date().toISOString(),
      },
    ],
  },
  {
    id: "PLhPJQNTjg-xTGyi19ZnohKcSSAaE2OGSx",
    title: "Docker",
    description: "https://www.youtube.com/@ProjectIqraTheGKTWeb",
    thumbnail: "https://i.ytimg.com/vi/56VNoE-nmhI/maxresdefault.jpg",
    videoCount: 1,
    channelTitle: "Project IQRA",
    videos: [
      {
        id: "56VNoE-nmhI",
        title: "Docker Tutorial 2024: Complete Guide to Major Topics | Project Iqra GKTWEB | Masterclass",
        description: "Dive into the world of Docker with this all-encompassing one-shot video tutorial. Covering all the major topics, from containerization basics to advanced orchestration, this guide is perfect for both beginners looking to get started and seasoned professionals seeking a refresher.\n\nBrought to you by Project Iqra, we're dedicated to providing quality educational content at no cost. Don't forget to like, share, and subscribe for more insightful tutorials!\n\nReferences:\n• docker install: https://docs.docker.com/engine/install/\n• docker github: https://github.com/docker\n• kubernetes documentary: Kubernetes: The Documentary [PART 1]\n• clone this repo: https://github.com/Sajiyah-Salat/go-d...\n• dockerhub image: https://hub.docker.com/repository/doc...\n\nGuest Lecturer for this Video:\nSajiyah is a DevOps engineer and a Kubernetes member, actively contributing to Kubernetes SIGs subproject Kubebuilder. She's passionate about assisting beginners in their journey to learn DevOps tools.",
        thumbnail: "https://i.ytimg.com/vi/56VNoE-nmhI/maxresdefault.jpg",
        position: 1,
        publishedAt: new Date().toISOString(),
      },
    ],
  },
  {
    id: "PLhPJQNTjg-xSFItuArFQXqK8jvtkYmWVK",
    title: "GIT Series",
    description: "https://www.youtube.com/@ProjectIqraTheGKTWeb",
    thumbnail: "https://i.ytimg.com/vi/noksR7stJgg/maxresdefault.jpg",
    videoCount: 1,
    channelTitle: "Project IQRA",
    videos: [
      {
        id: "noksR7stJgg",
        title: "Git Course 2024: Lec 01 - Understanding Git & Its Importance | Project Iqra - The GKTWEB",
        description: "We at Project Iqra aim to provide Quality education for FREE to everyone. Please like share and comment this video. Thank You :)\n\nMy GITHUB Profile: <a href=\"https://github.com/gibrankhantareen\" target=\"_blank\" rel=\"noopener noreferrer\">https://github.com/gibrankhantareen</a>\n\nImportant Timeline for my Students:\n\n(0:02) <a href=\"https://www.youtube.com/watch?v=noksR7stJgg&list=PLhPJQNTjg-xSFItuArFQXqK8jvtkYmWVK&index=1\" target=\"_blank\" rel=\"noopener noreferrer\">Intro</a>\n(0:08) <a href=\"https://www.youtube.com/watch?v=noksR7stJgg&list=PLhPJQNTjg-xSFItuArFQXqK8jvtkYmWVK&index=2\" target=\"_blank\" rel=\"noopener noreferrer\">Announcement : New GIT Series</a>\n(0:52) <a href=\"https://www.youtube.com/watch?v=noksR7stJgg&list=PLhPJQNTjg-xSFItuArFQXqK8jvtkYmWVK&index=3\" target=\"_blank\" rel=\"noopener noreferrer\">Starting of Lecture</a>\n(0:57) <a href=\"https://www.youtube.com/watch?v=noksR7stJgg&list=PLhPJQNTjg-xSFItuArFQXqK8jvtkYmWVK&index=4\" target=\"_blank\" rel=\"noopener noreferrer\">What is GIT?</a>\n(1:42) <a href=\"https://www.youtube.com/watch?v=noksR7stJgg&list=PLhPJQNTjg-xSFItuArFQXqK8jvtkYmWVK&index=5\" target=\"_blank\" rel=\"noopener noreferrer\">Explanation with Example</a>\n(5:34) <a href=\"https://www.youtube.com/watch?v=noksR7stJgg&list=PLhPJQNTjg-xSFItuArFQXqK8jvtkYmWVK&index=6\" target=\"_blank\" rel=\"noopener noreferrer\">Concept of Version Control System</a>\n(8:31) <a href=\"https://www.youtube.com/watch?v=noksR7stJgg&list=PLhPJQNTjg-xSFItuArFQXqK8jvtkYmWVK&index=7\" target=\"_blank\" rel=\"noopener noreferrer\">The Problem Statement which GIT solves</a>\n(11:35) <a href=\"https://www.youtube.com/watch?v=noksR7stJgg&list=PLhPJQNTjg-xSFItuArFQXqK8jvtkYmWVK&index=8\" target=\"_blank\" rel=\"noopener noreferrer\">Concept of Repositories (Local Repo, Remote Repo)</a>\n(14:35) <a href=\"https://www.youtube.com/watch?v=noksR7stJgg&list=PLhPJQNTjg-xSFItuArFQXqK8jvtkYmWVK&index=9\" target=\"_blank\" rel=\"noopener noreferrer\">Brief Concept of Collaborating in Projects and Commits</a>\n(15:59) <a href=\"https://www.youtube.com/watch?v=noksR7stJgg&list=PLhPJQNTjg-xSFItuArFQXqK8jvtkYmWVK&index=10\" target=\"_blank\" rel=\"noopener noreferrer\">What exactly does GIT do during Project collaboration?</a>\n(17:32) <a href=\"https://www.youtube.com/watch?v=noksR7stJgg&list=PLhPJQNTjg-xSFItuArFQXqK8jvtkYmWVK&index=11\" target=\"_blank\" rel=\"noopener noreferrer\">What do you mean by Merge changes? Why to Merge?</a>\n(18:32) <a href=\"https://www.youtube.com/watch?v=noksR7stJgg&list=PLhPJQNTjg-xSFItuArFQXqK8jvtkYmWVK&index=12\" target=\"_blank\" rel=\"noopener noreferrer\">Revision of Lecture</a>\n(19:59) <a href=\"https://www.youtube.com/watch?v=noksR7stJgg&list=PLhPJQNTjg-xSFItuArFQXqK8jvtkYmWVK&index=13\" target=\"_blank\" rel=\"noopener noreferrer\">What will come in Upcoming Videos?</a>\n(20:36) <a href=\"https://www.youtube.com/watch?v=noksR7stJgg&list=PLhPJQNTjg-xSFItuArFQXqK8jvtkYmWVK&index=14\" target=\"_blank\" rel=\"noopener noreferrer\">What is GIT Bash? Brief Explanation</a>\n(21:34) <a href=\"https://www.youtube.com/watch?v=noksR7stJgg&list=PLhPJQNTjg-xSFItuArFQXqK8jvtkYmWVK&index=15\" target=\"_blank\" rel=\"noopener noreferrer\">A small message from Educator</a>\n(21:17) <a href=\"https://www.youtube.com/watch?v=noksR7stJgg&list=PLhPJQNTjg-xSFItuArFQXqK8jvtkYmWVK&index=16\" target=\"_blank\" rel=\"noopener noreferrer\">A Small Request from Educator</a>\n(21:34) <a href=\"https://www.youtube.com/watch?v=noksR7stJgg&list=PLhPJQNTjg-xSFItuArFQXqK8jvtkYmWVK&index=17\" target=\"_blank\" rel=\"noopener noreferrer\">Why is GIT useful for everyone (including non coding background people)</a>",
        thumbnail: "https://i.ytimg.com/vi/noksR7stJgg/maxresdefault.jpg",
        position: 1,
        publishedAt: new Date().toISOString(),
      },
    ],
  },
  // Add more courses below...
  // Example format:
  // {
  //   id: "PLAYLIST_ID_HERE",
  //   title: "Course Title",
  //   description: "Course description",
  //   thumbnail: "https://i.ytimg.com/vi/VIDEO_ID/maxresdefault.jpg",
  //   videoCount: 10,
  //   channelTitle: "Channel Name",
  //   videos: [
  //     {
  //       id: "VIDEO_ID",
  //       title: "Video Title",
  //       description: "Video description",
  //       thumbnail: "https://i.ytimg.com/vi/VIDEO_ID/maxresdefault.jpg",
  //       position: 1,
  //     },
  //   ],
  // },
];

// Get course by ID
export function getCourseById(id: string): Course | undefined {
  return courses.find((course) => course.id === id);
}

// Get all courses
export function getAllCourses(): Course[] {
  return courses;
}
