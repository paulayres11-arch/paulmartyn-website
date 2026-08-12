# Homepage video strip

Drop three files here, then set `src` (and ideally `poster`) on each item in
`VIDEOS.items` in ../../../../src/components/.../root-8a5edab2/content.ts

Expected names (any names work — the content file is the source of truth):
  video-1.mp4  video-2.mp4  video-3.mp4
Optional poster stills (shown before play, avoids a black frame):
  video-1.jpg  video-2.jpg  video-3.jpg

Guidance:
- H.264 MP4, ~1920x1080, under ~10 MB each so the page stays quick.
- A poster image is worth adding — without one the frame is black until play.
- For anything larger, host on Vimeo/YouTube and swap the <video> for an
  <iframe>; the layout is unchanged.
