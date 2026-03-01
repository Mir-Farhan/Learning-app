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
  {
    id: "PLhPJQNTjg-xRxqluhJFGaImkxkORIWAD1",
    title: "Python Course - From Zero to Hero",
    description: "https://www.youtube.com/@ProjectIqraTheGKTWeb",
    thumbnail: "https://i.ytimg.com/vi/mEpzL9GNd08/maxresdefault.jpg",
    videoCount: 7,
    channelTitle: "Project IQRA",
    videos: [
      {
        id: "mEpzL9GNd08",
        title: "Python Course 2024: Lec 01 - Syllabus & Why Choose Python? | Project Iqra GKTWEB | Masterclass",
        description: "We at Project Iqra aim to provide Quality education for FREE to everyone. Please like share and comment this video. Subscribe to our channel for future videos and updates. Thank You :)\n\nFor any Doubt / Feedback / Suggestion please reach out to us via:\nEmail - project-iqra@thegktweb.com\nCall/Message via Whatsapp Only: +1(403)621-3844\n\n_________________________\n\n",
        thumbnail: "https://i.ytimg.com/vi/mEpzL9GNd08/maxresdefault.jpg",
        position: 1,
        publishedAt: new Date().toISOString(),
      },
      {
        id: "MZH3SYNHQIw",
        title: "Python Course 2024: Lec 02 - Introduction & Installation | Project Iqra GKTWEB | Masterclass",
        description: "We at Project Iqra aim to provide Quality education for FREE to everyone. Please like share and comment this video. Thank You :)\n\nImportant Timeline for my Students:\n\n(1:02) <a href=\"https://www.youtube.com/watch?v=MZH3SYNHQIw&list=PLhPJQNTjg-xRxqluhJFGaImkxkORIWAD1&index=2\" target=\"_blank\" rel=\"noopener noreferrer\">Part 1: What is Programming? Explanation with Example</a>\n(2:21) <a href=\"https://www.youtube.com/watch?v=MZH3SYNHQIw&list=PLhPJQNTjg-xRxqluhJFGaImkxkORIWAD1&index=2&t=141s\" target=\"_blank\" rel=\"noopener noreferrer\">Real life example of Instruction and Task</a>\n(6:35) <a href=\"https://www.youtube.com/watch?v=MZH3SYNHQIw&list=PLhPJQNTjg-xRxqluhJFGaImkxkORIWAD1&index=2&t=395s\" target=\"_blank\" rel=\"noopener noreferrer\">Defination of Program</a>\n(8:25) <a href=\"https://www.youtube.com/watch?v=MZH3SYNHQIw&list=PLhPJQNTjg-xRxqluhJFGaImkxkORIWAD1&index=2&t=505s\" target=\"_blank\" rel=\"noopener noreferrer\">Why should we program or write instructions for our computer?</a>\n(10:40) <a href=\"https://www.youtube.com/watch?v=MZH3SYNHQIw&list=PLhPJQNTjg-xRxqluhJFGaImkxkORIWAD1&index=2&t=640s\" target=\"_blank\" rel=\"noopener noreferrer\">Defination of Programming</a>\n(12:51) <a href=\"https://www.youtube.com/watch?v=MZH3SYNHQIw&list=PLhPJQNTjg-xRxqluhJFGaImkxkORIWAD1&index=2&t=771s\" target=\"_blank\" rel=\"noopener noreferrer\">Very Important Points including defination of 'Programming Language'</a>\n(15:19) <a href=\"https://www.youtube.com/watch?v=MZH3SYNHQIw&list=PLhPJQNTjg-xRxqluhJFGaImkxkORIWAD1&index=2&t=919s\" target=\"_blank\" rel=\"noopener noreferrer\">Quick Quiz Revision Question</a>\n(15:31) <a href=\"https://www.youtube.com/watch?v=MZH3SYNHQIw&list=PLhPJQNTjg-xRxqluhJFGaImkxkORIWAD1&index=2&t=931s\" target=\"_blank\" rel=\"noopener noreferrer\">Part 2.1 - Your New Friend Python</a>\n(16:17) <a href=\"https://www.youtube.com/watch?v=MZH3SYNHQIw&list=PLhPJQNTjg-xRxqluhJFGaImkxkORIWAD1&index=2&t=977s\" target=\"_blank\" rel=\"noopener noreferrer\">What is High Level Programming Language</a>\n(18:36) <a href=\"https://www.youtube.com/watch?v=MZH3SYNHQIw&list=PLhPJQNTjg-xRxqluhJFGaImkxkORIWAD1&index=2&t=1116s\" target=\"_blank\" rel=\"noopener noreferrer\">Brief Definition of Syntax</a>\n(18:58) <a href=\"https://www.youtube.com/watch?v=MZH3SYNHQIw&list=PLhPJQNTjg-xRxqluhJFGaImkxkORIWAD1&index=2&t=1138s\" target=\"_blank\" rel=\"noopener noreferrer\">More Imp Points on Python</a>\n(19:20) <a href=\"https://www.youtube.com/watch?v=MZH3SYNHQIw&list=PLhPJQNTjg-xRxqluhJFGaImkxkORIWAD1&index=2&t=1160s\" target=\"_blank\" rel=\"noopener noreferrer\">What is Open Source Language?</a>\n(20:27) <a href=\"https://www.youtube.com/watch?v=MZH3SYNHQIw&list=PLhPJQNTjg-xRxqluhJFGaImkxkORIWAD1&index=2&t=1227s\" target=\"_blank\" rel=\"noopener noreferrer\">Important Point for MCQ Questions</a>\n(22:22) <a href=\"https://www.youtube.com/watch?v=MZH3SYNHQIw&list=PLhPJQNTjg-xRxqluhJFGaImkxkORIWAD1&index=2&t=1342s\" target=\"_blank\" rel=\"noopener noreferrer\">Part 2.2 - Versions of Python 2 vs 3</a>\n(23:57) <a href=\"https://www.youtube.com/watch?v=MZH3SYNHQIw&list=PLhPJQNTjg-xRxqluhJFGaImkxkORIWAD1&index=2&t=1437s\" target=\"_blank\" rel=\"noopener noreferrer\">Major Differences between Python 2 & 3</a>\n(30:43) <a href=\"https://www.youtube.com/watch?v=MZH3SYNHQIw&list=PLhPJQNTjg-xRxqluhJFGaImkxkORIWAD1&index=2&t=1843s\" target=\"_blank\" rel=\"noopener noreferrer\">\"WHY\" to study Python?</a>\n(31:55) <a href=\"https://www.youtube.com/watch?v=MZH3SYNHQIw&list=PLhPJQNTjg-xRxqluhJFGaImkxkORIWAD1&index=2&t=1915s\" target=\"_blank\" rel=\"noopener noreferrer\">\"WHERE\" can I use Python? Career Options</a>\n(36:51) <a href=\"https://www.youtube.com/watch?v=MZH3SYNHQIw&list=PLhPJQNTjg-xRxqluhJFGaImkxkORIWAD1&index=2&t=2211s\" target=\"_blank\" rel=\"noopener noreferrer\">Part 3 - How it works + Installation of Python</a>\n(37:13) <a href=\"https://www.youtube.com/watch?v=MZH3SYNHQIw&list=PLhPJQNTjg-xRxqluhJFGaImkxkORIWAD1&index=2&t=2233s\" target=\"_blank\" rel=\"noopener noreferrer\">3.1- How does Python work in the backend?</a>\n(38:09) <a href=\"https://www.youtube.com/watch?v=MZH3SYNHQIw&list=PLhPJQNTjg-xRxqluhJFGaImkxkORIWAD1&index=2&t=2289s\" target=\"_blank\" rel=\"noopener noreferrer\">Important Point on Python</a>\n(38:50) <a href=\"https://www.youtube.com/watch?v=MZH3SYNHQIw&list=PLhPJQNTjg-xRxqluhJFGaImkxkORIWAD1&index=2&t=2330s\" target=\"_blank\" rel=\"noopener noreferrer\">What is Source Code?</a>\n(40:25) <a href=\"https://www.youtube.com/watch?v=MZH3SYNHQIw&list=PLhPJQNTjg-xRxqluhJFGaImkxkORIWAD1&index=2&t=2425s\" target=\"_blank\" rel=\"noopener noreferrer\">Addition of a point to the Definition of High Level Programming Language</a>\n(42:03) <a href=\"https://www.youtube.com/watch?v=MZH3SYNHQIw&list=PLhPJQNTjg-xRxqluhJFGaImkxkORIWAD1&index=2&t=2523s\" target=\"_blank\" rel=\"noopener noreferrer\">Working of Interpreter</a>\n(42:41) <a href=\"https://www.youtube.com/watch?v=MZH3SYNHQIw&list=PLhPJQNTjg-xRxqluhJFGaImkxkORIWAD1&index=2&t=2561s\" target=\"_blank\" rel=\"noopener noreferrer\">Summarizing the Backend functioning of Python</a>\n(44:26) <a href=\"https://www.youtube.com/watch?v=MZH3SYNHQIw&list=PLhPJQNTjg-xRxqluhJFGaImkxkORIWAD1&index=2&t=2666s\" target=\"_blank\" rel=\"noopener noreferrer\">3.2 - Installation of Python 3.10.8 (Latest version till date of Recording)</a>\n(49:28) <a href=\"https://www.youtube.com/watch?v=MZH3SYNHQIw&list=PLhPJQNTjg-xRxqluhJFGaImkxkORIWAD1&index=2&t=2968s\" target=\"_blank\" rel=\"noopener noreferrer\">Part 4 - Installation of Jupyter Notebook IDE in our PC</a>\n(53:48) <a href=\"https://www.youtube.com/watch?v=MZH3SYNHQIw&list=PLhPJQNTjg-xRxqluhJFGaImkxkORIWAD1&index=2&t=3228s\" target=\"_blank\" rel=\"noopener noreferrer\">End note from your Educator</a>\n(54:47) <a href=\"https://www.youtube.com/watch?v=MZH3SYNHQIw&list=PLhPJQNTjg-xRxqluhJFGaImkxkORIWAD1&index=2&t=3287s\" target=\"_blank\" rel=\"noopener noreferrer\">A Small Request from Educator</a>\n(54:57) <a href=\"https://www.youtube.com/watch?v=MZH3SYNHQIw&list=PLhPJQNTjg-xRxqluhJFGaImkxkORIWAD1&index=2&t=3297s\" target=\"_blank\" rel=\"noopener noreferrer\">Important Information regarding my Python Course - High Tech Course Content</a>\n(55:34) <a href=\"https://www.youtube.com/watch?v=MZH3SYNHQIw&list=PLhPJQNTjg-xRxqluhJFGaImkxkORIWAD1&index=2&t=3334s\" target=\"_blank\" rel=\"noopener noreferrer\">My Aim at Project Iqra - The GKTWEB</a>\n(55:46) <a href=\"https://www.youtube.com/watch?v=MZH3SYNHQIw&list=PLhPJQNTjg-xRxqluhJFGaImkxkORIWAD1&index=2&t=3346s\" target=\"_blank\" rel=\"noopener noreferrer\">Thank You Note!</a>\n\n_________________________________",
        thumbnail: "https://i.ytimg.com/vi/MZH3SYNHQIw/maxresdefault.jpg",
        position: 2,
        publishedAt: new Date().toISOString(),
      },
      {
        id: "yz0fJdip4Ls",
        title: "Python Course 2024: Lec 03 - Writing our First Program & Bonus Concepts | Project Iqra GKTWEB",
        description: "We at Project Iqra aim to provide Quality education for FREE to everyone. Please like share and comment this video. Thank You :)\n\nImportant Timeline for my Students:\n\n(0:57) <a href=\"https://www.youtube.com/watch?v=yz0fJdip4Ls&list=PLhPJQNTjg-xRxqluhJFGaImkxkORIWAD1&index=3\" target=\"_blank\" rel=\"noopener noreferrer\">Part 1: Quick Recap</a>\n(1:40) <a href=\"https://www.youtube.com/watch?v=yz0fJdip4Ls&list=PLhPJQNTjg-xRxqluhJFGaImkxkORIWAD1&index=3&t=100s\" target=\"_blank\" rel=\"noopener noreferrer\">Part 2: Bonus Concept - Can my Computer Do \"Any\" Task?</a>\n(2:26) <a href=\"https://www.youtube.com/watch?v=yz0fJdip4Ls&list=PLhPJQNTjg-xRxqluhJFGaImkxkORIWAD1&index=3&t=146s\" target=\"_blank\" rel=\"noopener noreferrer\">Detailed Explanation with Example</a>\n(5:35) <a href=\"https://www.youtube.com/watch?v=yz0fJdip4Ls&list=PLhPJQNTjg-xRxqluhJFGaImkxkORIWAD1&index=3&t=335s\" target=\"_blank\" rel=\"noopener noreferrer\">Part 3.1: Writing our First Python Program (Theory & Explanation)</a>\n(8:03) <a href=\"https://www.youtube.com/watch?v=yz0fJdip4Ls&list=PLhPJQNTjg-xRxqluhJFGaImkxkORIWAD1&index=3&t=483s\" target=\"_blank\" rel=\"noopener noreferrer\">How to Display any text or Print anything in Python?</a>\n(8:28) <a href=\"https://www.youtube.com/watch?v=yz0fJdip4Ls&list=PLhPJQNTjg-xRxqluhJFGaImkxkORIWAD1&index=3&t=508s\" target=\"_blank\" rel=\"noopener noreferrer\">Very Important Points about \"print()\" function</a>\n(8:36) <a href=\"https://www.youtube.com/watch?v=yz0fJdip4Ls&list=PLhPJQNTjg-xRxqluhJFGaImkxkORIWAD1&index=3&t=516s\" target=\"_blank\" rel=\"noopener noreferrer\">What is an inbuilt function?</a>\n(9:05) <a href=\"https://www.youtube.com/watch?v=yz0fJdip4Ls&list=PLhPJQNTjg-xRxqluhJFGaImkxkORIWAD1&index=3&t=545s\" target=\"_blank\" rel=\"noopener noreferrer\">Syntax of Print function</a>\n(10:23) <a href=\"https://www.youtube.com/watch?v=yz0fJdip4Ls&list=PLhPJQNTjg-xRxqluhJFGaImkxkORIWAD1&index=3&t=623s\" target=\"_blank\" rel=\"noopener noreferrer\">Part 3.2 - Our First Python Program on Jupyter Notebook (Practical)</a>\n(11:57) <a href=\"https://www.youtube.com/watch?v=yz0fJdip4Ls&list=PLhPJQNTjg-xRxqluhJFGaImkxkORIWAD1&index=3&t=717s\" target=\"_blank\" rel=\"noopener noreferrer\">Part 4.1: Bonus Concept - Comments in Python</a>\n(12:09) <a href=\"https://www.youtube.com/watch?v=yz0fJdip4Ls&list=PLhPJQNTjg-xRxqluhJFGaImkxkORIWAD1&index=3&t=729s\" target=\"_blank\" rel=\"noopener noreferrer\">Definition of Comment</a>\n(12:37) <a href=\"https://www.youtube.com/watch?v=yz0fJdip4Ls&list=PLhPJQNTjg-xRxqluhJFGaImkxkORIWAD1&index=3&t=757s\" target=\"_blank\" rel=\"noopener noreferrer\">Why do we use Comments in Python?</a>\n(13:04) <a href=\"https://www.youtube.com/watch?v=yz0fJdip4Ls&list=PLhPJQNTjg-xRxqluhJFGaImkxkORIWAD1&index=3&t=784s\" target=\"_blank\" rel=\"noopener noreferrer\">Detailed explanation with Example</a>\n(14:45) <a href=\"https://www.youtube.com/watch?v=yz0fJdip4Ls&list=PLhPJQNTjg-xRxqluhJFGaImkxkORIWAD1&index=3&t=885s\" target=\"_blank\" rel=\"noopener noreferrer\">Syntax of writing a Comment in Python</a>\n(16:14) <a href=\"https://www.youtube.com/watch?v=yz0fJdip4Ls&list=PLhPJQNTjg-xRxqluhJFGaImkxkORIWAD1&index=3&t=974s\" target=\"_blank\" rel=\"noopener noreferrer\">Another very important point about Comments in Python</a>\n(16:48) <a href=\"https://www.youtube.com/watch?v=yz0fJdip4Ls&list=PLhPJQNTjg-xRxqluhJFGaImkxkORIWAD1&index=3&t=1008s\" target=\"_blank\" rel=\"noopener noreferrer\">Detailed explanation of \"Single Line\" comment Concept</a>\n(18:42) <a href=\"https://www.youtube.com/watch?v=yz0fJdip4Ls&list=PLhPJQNTjg-xRxqluhJFGaImkxkORIWAD1&index=3&t=1122s\" target=\"_blank\" rel=\"noopener noreferrer\">Syntax and output of writing a Comment in Python</a>\n(19:12) <a href=\"https://www.youtube.com/watch?v=yz0fJdip4Ls&list=PLhPJQNTjg-xRxqluhJFGaImkxkORIWAD1&index=3&t=1152s\" target=\"_blank\" rel=\"noopener noreferrer\">Part 4.2: Bonus Concept - Pratical Implementation of Comment</a>\n(20:21) <a href=\"https://www.youtube.com/watch?v=yz0fJdip4Ls&list=PLhPJQNTjg-xRxqluhJFGaImkxkORIWAD1&index=3&t=1221s\" target=\"_blank\" rel=\"noopener noreferrer\">Part 5: Bonus Concept - Indentation in Python</a>\n(21:07) <a href=\"https://www.youtube.com/watch?v=yz0fJdip4Ls&list=PLhPJQNTjg-xRxqluhJFGaImkxkORIWAD1&index=3&t=1267s\" target=\"_blank\" rel=\"noopener noreferrer\">Definition of Indentation</a>\n(20:47) <a href=\"https://www.youtube.com/watch?v=yz0fJdip4Ls&list=PLhPJQNTjg-xRxqluhJFGaImkxkORIWAD1&index=3&t=1247s\" target=\"_blank\" rel=\"noopener noreferrer\">Detailed explanation with example for Indentation</a>\n(22:16) <a href=\"https://www.youtube.com/watch?v=yz0fJdip4Ls&list=PLhPJQNTjg-xRxqluhJFGaImkxkORIWAD1&index=3&t=1336s\" target=\"_blank\" rel=\"noopener noreferrer\">Another important point to note under Indentation</a>\n(22:37) <a href=\"https://www.youtube.com/watch?v=yz0fJdip4Ls&list=PLhPJQNTjg-xRxqluhJFGaImkxkORIWAD1&index=3&t=1357s\" target=\"_blank\" rel=\"noopener noreferrer\">Why are we studying Indentation here?</a>\n(23:00) <a href=\"https://www.youtube.com/watch?v=yz0fJdip4Ls&list=PLhPJQNTjg-xRxqluhJFGaImkxkORIWAD1&index=3&t=1380s\" target=\"_blank\" rel=\"noopener noreferrer\">Proving importance of Indentation in Python with a Practical example</a>\n(23:55) <a href=\"https://www.youtube.com/watch?v=yz0fJdip4Ls&list=PLhPJQNTjg-xRxqluhJFGaImkxkORIWAD1&index=3&t=1435s\" target=\"_blank\" rel=\"noopener noreferrer\">Additional Information on Indentation in Python</a>\n(25:39) <a href=\"https://www.youtube.com/watch?v=yz0fJdip4Ls&list=PLhPJQNTjg-xRxqluhJFGaImkxkORIWAD1&index=3&t=1539s\" target=\"_blank\" rel=\"noopener noreferrer\">Summary of Lecture</a>\n(27:13) <a href=\"https://www.youtube.com/watch?v=yz0fJdip4Ls&list=PLhPJQNTjg-xRxqluhJFGaImkxkORIWAD1&index=3&t=1633s\" target=\"_blank\" rel=\"noopener noreferrer\">Important end note from your Educator</a>\n(27:48) <a href=\"https://www.youtube.com/watch?v=yz0fJdip4Ls&list=PLhPJQNTjg-xRxqluhJFGaImkxkORIWAD1&index=3&t=1668s\" target=\"_blank\" rel=\"noopener noreferrer\">Small Humble Request from Educator</a>\n(28:25) <a href=\"https://www.youtube.com/watch?v=yz0fJdip4Ls&list=PLhPJQNTjg-xRxqluhJFGaImkxkORIWAD1&index=3&t=1705s\" target=\"_blank\" rel=\"noopener noreferrer\">Outro</a>\n",
        thumbnail: "https://i.ytimg.com/vi/yz0fJdip4Ls/maxresdefault.jpg",
        position: 3,
        publishedAt: new Date().toISOString(),
      },
      {
        id: "H8ioISVT6uY",
        title: "Python Course 2024: Lec 04 - What are Variables & How to use them | Project Iqra GKTWEB",
        description: "We at Project Iqra aim to provide Quality education for FREE to everyone. Please like share and comment this video. Thank You :)\n\nImportant Timeline for my Students:\n\n(0:02) <a href=\"https://www.youtube.com/watch?v=H8ioISVT6uY&list=PLhPJQNTjg-xRxqluhJFGaImkxkORIWAD1&index=4\" target=\"_blank\" rel=\"noopener noreferrer\">Intro</a>\n(0:47) <a href=\"https://www.youtube.com/watch?v=H8ioISVT6uY&list=PLhPJQNTjg-xRxqluhJFGaImkxkORIWAD1&index=4&t=47s\" target=\"_blank\" rel=\"noopener noreferrer\">Part 1: Concept of Variables</a>\n(04:38) <a href=\"https://www.youtube.com/watch?v=H8ioISVT6uY&list=PLhPJQNTjg-xRxqluhJFGaImkxkORIWAD1&index=4&t=278s\" target=\"_blank\" rel=\"noopener noreferrer\">Part 2.1: Variables: Syntax and Use</a>\n(08:20) <a href=\"https://www.youtube.com/watch?v=H8ioISVT6uY&list=PLhPJQNTjg-xRxqluhJFGaImkxkORIWAD1&index=4&t=500s\" target=\"_blank\" rel=\"noopener noreferrer\">BONUS CONCEPT: Rules for Variable Names (Very IMP)</a>\n(15:29) <a href=\"https://www.youtube.com/watch?v=H8ioISVT6uY&list=PLhPJQNTjg-xRxqluhJFGaImkxkORIWAD1&index=4&t=929s\" target=\"_blank\" rel=\"noopener noreferrer\">Part 2.2: What can we store in it? Type #1 - Strings</a>\n(19:15) <a href=\"https://www.youtube.com/watch?v=H8ioISVT6uY&list=PLhPJQNTjg-xRxqluhJFGaImkxkORIWAD1&index=4&t=1155s\" target=\"_blank\" rel=\"noopener noreferrer\">Part 2.3: What can we store in it? Type #2 - Numeric Data</a>\n(29:34) <a href=\"https://www.youtube.com/watch?v=H8ioISVT6uY&list=PLhPJQNTjg-xRxqluhJFGaImkxkORIWAD1&index=4&t=1774s\" target=\"_blank\" rel=\"noopener noreferrer\">Part 2.4: What can we store in it? Type #3 - Boolean</a>\n(33:34) <a href=\"https://www.youtube.com/watch?v=H8ioISVT6uY&list=PLhPJQNTjg-xRxqluhJFGaImkxkORIWAD1&index=4&t=2014s\" target=\"_blank\" rel=\"noopener noreferrer\">Part 3.1: Concept of Input using Variables (Explanation)</a>\n(36:10) <a href=\"https://www.youtube.com/watch?v=H8ioISVT6uY&list=PLhPJQNTjg-xRxqluhJFGaImkxkORIWAD1&index=4&t=2170s\" target=\"_blank\" rel=\"noopener noreferrer\">Part 3.2: Practical - How to use Variables and Store Input in them</a>\n(49:32) <a href=\"https://www.youtube.com/watch?v=H8ioISVT6uY&list=PLhPJQNTjg-xRxqluhJFGaImkxkORIWAD1&index=4&t=2972s\" target=\"_blank\" rel=\"noopener noreferrer\">Final Part: Revision by Quick Quiz</a>\n(54:55) <a href=\"https://www.youtube.com/watch?v=H8ioISVT6uY&list=PLhPJQNTjg-xRxqluhJFGaImkxkORIWAD1&index=4&t=3295s\" target=\"_blank\" rel=\"noopener noreferrer\">Endnote & Summary of Lecture</a>\n(56:25) <a href=\"https://www.youtube.com/watch?v=H8ioISVT6uY&list=PLhPJQNTjg-xRxqluhJFGaImkxkORIWAD1&index=4&t=3385s\" target=\"_blank\" rel=\"noopener noreferrer\">Message from Educator</a>\n(56:59) <a href=\"https://www.youtube.com/watch?v=H8ioISVT6uY&list=PLhPJQNTjg-xRxqluhJFGaImkxkORIWAD1&index=4&t=3419s\" target=\"_blank\" rel=\"noopener noreferrer\">Outro</a>\n",
        thumbnail: "https://i.ytimg.com/vi/H8ioISVT6uY/maxresdefault.jpg",
        position: 4,
        publishedAt: new Date().toISOString(),
      },
      {
        id: "9zTphFBViGU",
        title: "Python Course 2024: Lec 05 - Operators In Python - Detailed Explanation | Project Iqra GKTWEB",
        description: "We at Project Iqra aim to provide Quality education for FREE to everyone. Please like share and comment this video. Thank You :)\n\nImportant Timeline for my Students:\n\n(0:02) <a href=\"https://www.youtube.com/watch?v=9zTphFBViGU&list=PLhPJQNTjg-xRxqluhJFGaImkxkORIWAD1&index=5\" target=\"_blank\" rel=\"noopener noreferrer\">Intro</a>\n(0:18) <a href=\"https://www.youtube.com/watch?v=9zTphFBViGU&list=PLhPJQNTjg-xRxqluhJFGaImkxkORIWAD1&index=5&t=18s\" target=\"_blank\" rel=\"noopener noreferrer\">Part 1: Base Concept of Operators</a>\n(2:49) <a href=\"https://www.youtube.com/watch?v=9zTphFBViGU&list=PLhPJQNTjg-xRxqluhJFGaImkxkORIWAD1&index=5&t=169s\" target=\"_blank\" rel=\"noopener noreferrer\">What are Operands and Operators?</a>\n(5:43) <a href=\"https://www.youtube.com/watch?v=9zTphFBViGU&list=PLhPJQNTjg-xRxqluhJFGaImkxkORIWAD1&index=5&t=343s\" target=\"_blank\" rel=\"noopener noreferrer\">What is Assignment Operator?</a>\n(04:38) <a href=\"https://www.youtube.com/watch?v=9zTphFBViGU&list=PLhPJQNTjg-xRxqluhJFGaImkxkORIWAD1&index=5&t=278s\" target=\"_blank\" rel=\"noopener noreferrer\">Part 2.1: Assignment Operators in Python: Concept and Use</a>\n(9:29) <a href=\"https://www.youtube.com/watch?v=9zTphFBViGU&list=PLhPJQNTjg-xRxqluhJFGaImkxkORIWAD1&index=5&t=569s\" target=\"_blank\" rel=\"noopener noreferrer\">BONUS CONCEPT: Explanation of Modulus operator (%)</a>\n(11:19) <a href=\"https://www.youtube.com/watch?v=9zTphFBViGU&list=PLhPJQNTjg-xRxqluhJFGaImkxkORIWAD1&index=5&t=679s\" target=\"_blank\" rel=\"noopener noreferrer\">BONUS CONCEPT : Explanation of Truncate Operator (//)</a>\n(19:03) <a href=\"https://www.youtube.com/watch?v=9zTphFBViGU&list=PLhPJQNTjg-xRxqluhJFGaImkxkORIWAD1&index=5&t=1143s\" target=\"_blank\" rel=\"noopener noreferrer\">Part 2.2:  Practical Lab for Arthimetic Operators</a>\n(30:05) <a href=\"https://www.youtube.com/watch?v=9zTphFBViGU&list=PLhPJQNTjg-xRxqluhJFGaImkxkORIWAD1&index=5&t=1805s\" target=\"_blank\" rel=\"noopener noreferrer\">Part 3.1: Comparison Operators in Python: Concept and Use</a>\n(32:09) <a href=\"https://www.youtube.com/watch?v=9zTphFBViGU&list=PLhPJQNTjg-xRxqluhJFGaImkxkORIWAD1&index=5&t=1929s\" target=\"_blank\" rel=\"noopener noreferrer\">IMPORTANT Explanation: Equal-to Comparison Operator</a>\n(33:20) <a href=\"https://www.youtube.com/watch?v=9zTphFBViGU&list=PLhPJQNTjg-xRxqluhJFGaImkxkORIWAD1&index=5&t=2000s\" target=\"_blank\" rel=\"noopener noreferrer\">IMPORTANT Explanation: Not Equal-to Comparison Operator</a>\n(36:06) <a href=\"https://www.youtube.com/watch?v=9zTphFBViGU&list=PLhPJQNTjg-xRxqluhJFGaImkxkORIWAD1&index=5&t=2166s\" target=\"_blank\" rel=\"noopener noreferrer\">Part 3.2:  Practical Lab for Comparison Operators</a>\n(40:28) <a href=\"https://www.youtube.com/watch?v=9zTphFBViGU&list=PLhPJQNTjg-xRxqluhJFGaImkxkORIWAD1&index=5&t=2428s\" target=\"_blank\" rel=\"noopener noreferrer\">Part 4.1: Logical Operators in Python: Concept and Use</a>\n(40:47) <a href=\"https://www.youtube.com/watch?v=9zTphFBViGU&list=PLhPJQNTjg-xRxqluhJFGaImkxkORIWAD1&index=5&t=2447s\" target=\"_blank\" rel=\"noopener noreferrer\">IMPORTANT Explanation: AND Logical Operator</a>\n(42:43) <a href=\"https://www.youtube.com/watch?v=9zTphFBViGU&list=PLhPJQNTjg-xRxqluhJFGaImkxkORIWAD1&index=5&t=2563s\" target=\"_blank\" rel=\"noopener noreferrer\">IMPORTANT Explanation: OR Logical Operator</a>\n(43:57) <a href=\"https://www.youtube.com/watch?v=9zTphFBViGU&list=PLhPJQNTjg-xRxqluhJFGaImkxkORIWAD1&index=5&t=2637s\" target=\"_blank\" rel=\"noopener noreferrer\">IMPORTANT Explanation: NOT Operator</a>\n(46:30) <a href=\"https://www.youtube.com/watch?v=9zTphFBViGU&list=PLhPJQNTjg-xRxqluhJFGaImkxkORIWAD1&index=5&t=2790s\" target=\"_blank\" rel=\"noopener noreferrer\">Part 4.2:  Practical Lab for Logical Operators</a>\n(55:48) <a href=\"https://www.youtube.com/watch?v=9zTphFBViGU&list=PLhPJQNTjg-xRxqluhJFGaImkxkORIWAD1&index=5&t=3348s\" target=\"_blank\" rel=\"noopener noreferrer\">Final Part: Quick  Revision</a>\n(58:34) <a href=\"https://www.youtube.com/watch?v=9zTphFBViGU&list=PLhPJQNTjg-xRxqluhJFGaImkxkORIWAD1&index=5&t=3514s\" target=\"_blank\" rel=\"noopener noreferrer\">Endnote & Summary of Lecture</a>\n(1:00:23) <a href=\"https://www.youtube.com/watch?v=9zTphFBViGU&list=PLhPJQNTjg-xRxqluhJFGaImkxkORIWAD1&index=5&t=3623s\" target=\"_blank\" rel=\"noopener noreferrer\">Message from Educator</a>\n(1:01:12) <a href=\"https://www.youtube.com/watch?v=9zTphFBViGU&list=PLhPJQNTjg-xRxqluhJFGaImkxkORIWAD1&index=5&t=3672s\" target=\"_blank\" rel=\"noopener noreferrer\">A Small Request from Educator</a>\n(1:01:56) <a href=\"https://www.youtube.com/watch?v=9zTphFBViGU&list=PLhPJQNTjg-xRxqluhJFGaImkxkORIWAD1&index=5&t=3716s\" target=\"_blank\" rel=\"noopener noreferrer\">Outro</a>\n",
        thumbnail: "https://i.ytimg.com/vi/9zTphFBViGU/maxresdefault.jpg",
        position: 5,
        publishedAt: new Date().toISOString(),
      },
      {
        id: "Vd1OEny2pxU",
        title: "Python Course 2024: Lec 06 - Decision Making In Python | Project Iqra GKTWEB | Masterclass",
        description: "We at Project Iqra aim to provide Quality education for FREE to everyone. Please like share and comment this video. Thank You :)\n\nImportant Timeline for my Students:\n\n(0:02) <a href=\"https://www.youtube.com/watch?v=Vd1OEny2pxU&list=PLhPJQNTjg-xRxqluhJFGaImkxkORIWAD1&index=6\" target=\"_blank\" rel=\"noopener noreferrer\">Intro</a>\n(0:25) <a href=\"https://www.youtube.com/watch?v=Vd1OEny2pxU&list=PLhPJQNTjg-xRxqluhJFGaImkxkORIWAD1&index=6&t=25s\" target=\"_blank\" rel=\"noopener noreferrer\">Introduction + Real Life Example for Decision Making</a>\n(2:10) <a href=\"https://www.youtube.com/watch?v=Vd1OEny2pxU&list=PLhPJQNTjg-xRxqluhJFGaImkxkORIWAD1&index=6&t=130s\" target=\"_blank\" rel=\"noopener noreferrer\">Decision Making in Python - 3 Decision Making Statements</a>\n(3:45) <a href=\"https://www.youtube.com/watch?v=Vd1OEny2pxU&list=PLhPJQNTjg-xRxqluhJFGaImkxkORIWAD1&index=6&t=225s\" target=\"_blank\" rel=\"noopener noreferrer\">Decision Making Statement #1 - IF Statement</a>\n(7:56) <a href=\"https://www.youtube.com/watch?v=Vd1OEny2pxU&list=PLhPJQNTjg-xRxqluhJFGaImkxkORIWAD1&index=6&t=476s\" target=\"_blank\" rel=\"noopener noreferrer\">Decision Making Statement #2 - IF-ELSE Statement</a>\n(10:56) <a href=\"https://www.youtube.com/watch?v=Vd1OEny2pxU&list=PLhPJQNTjg-xRxqluhJFGaImkxkORIWAD1&index=6&t=656s\" target=\"_blank\" rel=\"noopener noreferrer\">BONUS CONCEPT: Realtime Project Explanation of Decision Making in Python by using If-ELSE</a>\n(15:02) <a href=\"https://www.youtube.com/watch?v=Vd1OEny2pxU&list=PLhPJQNTjg-xRxqluhJFGaImkxkORIWAD1&index=6&t=902s\" target=\"_blank\" rel=\"noopener noreferrer\">Decision Making Statement #3 - IF-ELIF Statement</a>\n(18:09) <a href=\"https://www.youtube.com/watch?v=Vd1OEny2pxU&list=PLhPJQNTjg-xRxqluhJFGaImkxkORIWAD1&index=6&t=1089s\" target=\"_blank\" rel=\"noopener noreferrer\">BONUS CONCEPT : Realtime Project Explanation of Decision Making in Python by using IF-ELIF</a>\n(21:49) <a href=\"https://www.youtube.com/watch?v=Vd1OEny2pxU&list=PLhPJQNTjg-xRxqluhJFGaImkxkORIWAD1&index=6&t=1309s\" target=\"_blank\" rel=\"noopener noreferrer\">Practical Lab Starts</a>\n(22:09) <a href=\"https://www.youtube.com/watch?v=Vd1OEny2pxU&list=PLhPJQNTjg-xRxqluhJFGaImkxkORIWAD1&index=6&t=1329s\" target=\"_blank\" rel=\"noopener noreferrer\">Problem Q1 for understanding IF Statement in depth</a>\n(25:42) <a href=\"https://www.youtube.com/watch?v=Vd1OEny2pxU&list=PLhPJQNTjg-xRxqluhJFGaImkxkORIWAD1&index=6&t=1542s\" target=\"_blank\" rel=\"noopener noreferrer\">Problem Q2 for understanding IF-ELSE Statement in depth</a>\n(28:06) <a href=\"https://www.youtube.com/watch?v=Vd1OEny2pxU&list=PLhPJQNTjg-xRxqluhJFGaImkxkORIWAD1&index=6&t=1686s\" target=\"_blank\" rel=\"noopener noreferrer\">IMPORTANT EXPLANATION for need of ELSE statement</a>\n(29:05) <a href=\"https://www.youtube.com/watch?v=Vd1OEny2pxU&list=PLhPJQNTjg-xRxqluhJFGaImkxkORIWAD1&index=6&t=1745s\" target=\"_blank\" rel=\"noopener noreferrer\">IMP EXPLANATION for workflow of Decisions</a>\n(30:08) <a href=\"https://www.youtube.com/watch?v=Vd1OEny2pxU&list=PLhPJQNTjg-xRxqluhJFGaImkxkORIWAD1&index=6&t=1808s\" target=\"_blank\" rel=\"noopener noreferrer\">Problem Q3 for understanding IF-ELIF Statement in depth</a>\n(33:03) <a href=\"https://www.youtube.com/watch?v=Vd1OEny2pxU&list=PLhPJQNTjg-xRxqluhJFGaImkxkORIWAD1&index=6&t=1983s\" target=\"_blank\" rel=\"noopener noreferrer\">IMP Point for IF Statement</a>\n(36:19) <a href=\"https://www.youtube.com/watch?v=Vd1OEny2pxU&list=PLhPJQNTjg-xRxqluhJFGaImkxkORIWAD1&index=6&t=2179s\" target=\"_blank\" rel=\"noopener noreferrer\">Complete breakdown explanation for Q3 of IF-ELIF statement</a>\n(36:58) <a href=\"https://www.youtube.com/watch?v=Vd1OEny2pxU&list=PLhPJQNTjg-xRxqluhJFGaImkxkORIWAD1&index=6&t=2218s\" target=\"_blank\" rel=\"noopener noreferrer\">Important Explanation (Make note of it)</a>\n(39:57) <a href=\"https://www.youtube.com/watch?v=Vd1OEny2pxU&list=PLhPJQNTjg-xRxqluhJFGaImkxkORIWAD1&index=6&t=2397s\" target=\"_blank\" rel=\"noopener noreferrer\">Need of ELSE Statement explained with Realtime example</a>\n(41:05) <a href=\"https://www.youtube.com/watch?v=Vd1OEny2pxU&list=PLhPJQNTjg-xRxqluhJFGaImkxkORIWAD1&index=6&t=2465s\" target=\"_blank\" rel=\"noopener noreferrer\">End Note & A Small Message from Educator</a>\n___________________________\n\n",
        thumbnail: "https://i.ytimg.com/vi/Vd1OEny2pxU/maxresdefault.jpg",
        position: 6,
        publishedAt: new Date().toISOString(),
      },
      {
        id: "O1_JTQ8In0I",
        title: "Python Loops Tutorial 2024: Complete Guide for Beginners | Project Iqra GKTWEB | Lecture 07",
        description: "Join us in Lecture 07 as we delve into Python Loops - an essential skill for budding developers! This comprehensive guide covers everything you need to know about 'for' and 'while' loops, helping you master control flow in Python with practical examples and exercises. Perfect for beginners or anyone looking to refresh their skills!\n\n📘 What You'll Learn:\nIntroduction to Loops in Python\n'For' Loops and 'While' Loops: When and How to Use\nReal-World Applications of Loops\n\nDon't forget to subscribe to Project Iqra GKTWEB for more free, high-quality educational content. Hit the bell icon to stay updated!\n\n▶️ Previous Lecture: <a href=\"/course/PLhPJQNTjg-xRxqluhJFGaImkxkORIWAD1?video=Vd1OEny2pxU\" rel=\"noopener noreferrer\">Python Course 2024: Lec 06 - Decision Maki...</a>\n▶️ Python Course: <a href=\"/course/PLhPJQNTjg-xRxqluhJFGaImkxkORIWAD1\" rel=\"noopener noreferrer\">Python Course - From Zero to Hero</a>\n\n© Project Iqra GKTWEB, 2024. All rights reserved.\n\n#PythonLoops #PythonTutorial #FreeEducation #ProjectIqraGKTWEB\n\nRemember, your feedback is what keeps us going! Share your thoughts in comments below.\n\n______________________\n\nImportant Timeline for Students:\n\n(01:34) <a href=\"https://www.youtube.com/watch?v=O1_JTQ8In0I&list=PLhPJQNTjg-xRxqluhJFGaImkxkORIWAD1&index=7\" rel=\"noopener noreferrer\">What is concept of Loops in Programming</a>\n(08:16) <a href=\"https://www.youtube.com/watch?v=O1_JTQ8In0I&list=PLhPJQNTjg-xRxqluhJFGaImkxkORIWAD1&index=7&t=496s\" rel=\"noopener noreferrer\">What are types of loops in python</a>\n(08:39) <a href=\"https://www.youtube.com/watch?v=O1_JTQ8In0I&list=PLhPJQNTjg-xRxqluhJFGaImkxkORIWAD1&index=7&t=519s\" rel=\"noopener noreferrer\">What are For-loops in Python? - Complete Explanation</a>\n(08:46) <a href=\"https://www.youtube.com/watch?v=O1_JTQ8In0I&list=PLhPJQNTjg-xRxqluhJFGaImkxkORIWAD1&index=7&t=526s\" rel=\"noopener noreferrer\">What is syntax of For-loop in Python?</a>\n(10:26) <a href=\"https://www.youtube.com/watch?v=O1_JTQ8In0I&list=PLhPJQNTjg-xRxqluhJFGaImkxkORIWAD1&index=7&t=626s\" rel=\"noopener noreferrer\">What is Range function in Python? - Explanation and Examples</a>\n(16:19) <a href=\"https://www.youtube.com/watch?v=O1_JTQ8In0I&list=PLhPJQNTjg-xRxqluhJFGaImkxkORIWAD1&index=7&t=979s\" rel=\"noopener noreferrer\">What are Break and Continue Keywords in Python?</a>\n(19:49) <a href=\"https://www.youtube.com/watch?v=O1_JTQ8In0I&list=PLhPJQNTjg-xRxqluhJFGaImkxkORIWAD1&index=7&t=1189s\" rel=\"noopener noreferrer\">Practical Lab of For-Loop</a>\n(20:05) <a href=\"https://www.youtube.com/watch?v=O1_JTQ8In0I&list=PLhPJQNTjg-xRxqluhJFGaImkxkORIWAD1&index=7&t=1205s\" rel=\"noopener noreferrer\">How to print numbers from 0-9 using For-Loop in Python?</a>\n(21:40) <a href=\"https://www.youtube.com/watch?v=O1_JTQ8In0I&list=PLhPJQNTjg-xRxqluhJFGaImkxkORIWAD1&index=7&t=1300s\" rel=\"noopener noreferrer\">An example of step parameter in range function in Python</a>\n(23:00) <a href=\"https://www.youtube.com/watch?v=O1_JTQ8In0I&list=PLhPJQNTjg-xRxqluhJFGaImkxkORIWAD1&index=7&t=1380s\" rel=\"noopener noreferrer\">How to print even numbers from range 0,20 using for-loop in Python</a>\n(26:02) <a href=\"https://www.youtube.com/watch?v=O1_JTQ8In0I&list=PLhPJQNTjg-xRxqluhJFGaImkxkORIWAD1&index=7&t=1562s\" rel=\"noopener noreferrer\">How to apply Break and Continue in for-loop</a>\n(34:44) <a href=\"https://www.youtube.com/watch?v=O1_JTQ8In0I&list=PLhPJQNTjg-xRxqluhJFGaImkxkORIWAD1&index=7&t=2084s\" rel=\"noopener noreferrer\">What are While Loops</a>\n(35:50) <a href=\"https://www.youtube.com/watch?v=O1_JTQ8In0I&list=PLhPJQNTjg-xRxqluhJFGaImkxkORIWAD1&index=7&t=2150s\" rel=\"noopener noreferrer\">What is syntax of While loop in Python?</a>\n(40:19) <a href=\"https://www.youtube.com/watch?v=O1_JTQ8In0I&list=PLhPJQNTjg-xRxqluhJFGaImkxkORIWAD1&index=7&t=2419s\" rel=\"noopener noreferrer\">Print values from 0-4 using while loop in Python</a>\n(42:46) <a href=\"https://www.youtube.com/watch?v=O1_JTQ8In0I&list=PLhPJQNTjg-xRxqluhJFGaImkxkORIWAD1&index=7&t=2566s\" rel=\"noopener noreferrer\">Printing values from 1-10 but BREAKING on 5</a>\n(45:13) <a href=\"https://www.youtube.com/watch?v=O1_JTQ8In0I&list=PLhPJQNTjg-xRxqluhJFGaImkxkORIWAD1&index=7&t=2713s\" rel=\"noopener noreferrer\">What is concept of infinite loop?</a>\n(47:13) <a href=\"https://www.youtube.com/watch?v=O1_JTQ8In0I&list=PLhPJQNTjg-xRxqluhJFGaImkxkORIWAD1&index=7&t=2833s\" rel=\"noopener noreferrer\">What is concept of Nested Loop in Python?</a>\n(49:35) <a href=\"https://www.youtube.com/watch?v=O1_JTQ8In0I&list=PLhPJQNTjg-xRxqluhJFGaImkxkORIWAD1&index=7&t=2975s\" rel=\"noopener noreferrer\">Recap for the lecture</a>\n",
        thumbnail: "https://i.ytimg.com/vi/O1_JTQ8In0I/maxresdefault.jpg",
        position: 7,
        publishedAt: new Date().toISOString(),
      }
    ],
  },
  {
    id: "PLhPJQNTjg-xQj1Bn0kO94paIS2CFDv5Ey",
    title: "Computer Crash Course for Complete Beginners",
    description: "https://www.youtube.com/@ProjectIqraTheGKTWeb",
    thumbnail: "https://i.ytimg.com/vi/AEmrvip24K4/maxresdefault.jpg",
    videoCount: 2,
    channelTitle: "Project IQRA",
    videos: [
      {
        id: "AEmrvip24K4",
        title: "Computer Crash Course for Complete Beginners - Part 1",
        description: "We at Project Iqra aim to provide Quality education for FREE to everyone. Please like share and comment this video. Thank You :)",
        thumbnail: "https://i.ytimg.com/vi/AEmrvip24K4/maxresdefault.jpg",
        position: 1,
        publishedAt: new Date().toISOString(),
      },
      {
        id: "_q9aVm5yx34",
        title: "Computer Crash Course for Complete Beginners - Part 2",
        description: "We at Project Iqra aim to provide Quality education for FREE to everyone. Please like share and comment this video. Thank You :)",
        thumbnail: "https://i.ytimg.com/vi/_q9aVm5yx34/maxresdefault.jpg",
        position: 2,
        publishedAt: new Date().toISOString(),
      },
    ],
  },
  {
    id: "PLhPJQNTjg-xQc_sgwAL7EspRiK7cs0Isj",
    title: "Live Classes - Concept Clearing",
    description: "https://www.youtube.com/@ProjectIqraTheGKTWeb",
    thumbnail: "https://i.ytimg.com/vi/9raN_CsaoSM/maxresdefault.jpg",
    videoCount: 1,
    channelTitle: "Project IQRA",
    videos: [
      {
        id: "9raN_CsaoSM",
        title: "Live Classes - Concept Clearing",
        description: "We at Project Iqra aim to provide Quality education for FREE to everyone. Please like share and comment this video. Thank You :)",
        thumbnail: "https://i.ytimg.com/vi/9raN_CsaoSM/maxresdefault.jpg",
        position: 1,
        publishedAt: new Date().toISOString(),
      },
    ],
  },
  {
    id: "PLhPJQNTjg-xRcMG_v0AVnu3VqVFAdIhpu",
    title: "Class 7 - Maths",
    description: "https://www.youtube.com/@ProjectIqraTheGKTWeb",
    thumbnail: "https://i.ytimg.com/vi/ZyOtc7aRZPo/hqdefault.jpg",
    videoCount: 1,
    channelTitle: "Project IQRA",
    videos: [
      {
        id: "ZyOtc7aRZPo",
        title: "Class 7 - Maths",
        description: "We at Project Iqra aim to provide Quality education for FREE to everyone. Please like share and comment this video. Thank You :)",
        thumbnail: "https://i.ytimg.com/vi/ZyOtc7aRZPo/hqdefault.jpg",
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





