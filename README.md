# Study Academy - Learning Material App

A course learning platform that organizes and presents YouTube content in a structured way, inspired by Khan Academy's clean design.

## Features

- **Course Catalog**: Browse all courses as cards on the landing page
- **Course Player**: YouTube playlist player embedded directly
- **Responsive Design**: Mobile-friendly layouts
- **Clean UI**: Inspired by Khan Academy's educational design
- **No API Required**: Uses public YouTube playlists directly

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Data Source**: YouTube public playlists (no API required)

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Add Your Courses

Edit [`lib/courses.ts`](lib/courses.ts) to add your YouTube playlist IDs:

```typescript
export const courses: Course[] = [
  {
    id: "YOUR_PLAYLIST_ID_HERE",
    title: "Course Title",
    description: "Course description",
    thumbnail: "https://i.ytimg.com/vi/VIDEO_ID/maxresdefault.jpg",
    videoCount: 10,
    channelTitle: "Your Channel Name",
  },
  // Add more courses...
];
```

**How to get Playlist ID:**
1. Go to your YouTube playlist
2. The URL looks like: `https://www.youtube.com/playlist?list=PLxxxxxxxxxxxx`
3. Copy the part after `list=` - that's your playlist ID

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
learning_app/
├── app/
│   ├── course/
│   │   └── [playlistId]/
│   │       └── page.tsx          # Course player page
│   ├── layout.tsx                # Root layout
│   ├── page.tsx                  # Landing page
│   └── globals.css               # Global styles
├── components/
│   ├── course-card.tsx           # Course card component
│   ├── header.tsx                # Navigation header
│   ├── playlist-item.tsx         # Playlist video item
│   ├── playlist-sidebar.tsx     # Playlist sidebar
│   ├── video-player.tsx          # YouTube embed player
│   └── ui/                       # shadcn/ui components
├── lib/
│   ├── courses.ts                # Hardcoded course data ⭐
│   ├── utils.ts                  # Utility functions
│   └── youtube-api.ts            # (Not used - kept for reference)
├── types/
│   └── index.ts                  # TypeScript types
└── README.md                    # This file
```

## Pages

### Landing Page (`/`)
- Displays all courses as cards
- Shows course thumbnail, title, description, and video count
- Click on a card to navigate to course player page

### Course Player Page (`/course/[playlistId]`)
- YouTube playlist player embedded
- Shows all videos in the playlist
- Use YouTube's built-in playlist navigation
- Course title, description, and metadata

## Adding New Courses

1. Get the YouTube playlist ID from your playlist URL
2. Add a new course object to [`lib/courses.ts`](lib/courses.ts)
3. Optionally add a thumbnail URL (use any video from the playlist)
4. Restart the dev server

Example:

```typescript
{
  id: "PLrAXtmRdnEQy4d8w8yF3T9q8pX9qZ7vX9",
  title: "My New Course",
  description: "Learn something new!",
  thumbnail: "https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
  videoCount: 15,
  channelTitle: "My Channel",
}
```

## Customization

### Change Styling

Edit `app/globals.css` to customize colors and themes.

### Change Logo/Branding

Edit [`components/header.tsx`](components/header.tsx) to change the logo and title.

## Build for Production

```bash
npm run build
npm start
```

## Troubleshooting

### "Course not found"

- Check that the playlist ID in [`lib/courses.ts`](lib/courses.ts) is correct
- Make sure the playlist is public on YouTube

### Videos not playing

- Verify the playlist is public and not restricted
- Check that the playlist ID is correct

### Build errors

- Make sure all dependencies are installed: `npm install`
- Check TypeScript errors in your code editor

## License

MIT
# Learning-app
