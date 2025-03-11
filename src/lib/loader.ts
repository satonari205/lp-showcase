"use client";

type LoaderProps = {
  src:     string;
  width:   number;
  quality: number;
}

export default function myImageLoader({ src, width, quality }: LoaderProps) {
  return `https://example.com/${src}?w=${width}&q=${quality || 75}`;
}
