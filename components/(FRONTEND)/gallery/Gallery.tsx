"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const images = [
  "/gallery/1.jpg",
  "/gallery/2.jpg",
  "/gallery/3.jpg",
  "/gallery/4.jpg",
  "/gallery/5.jpg",
  "/gallery/6.jpg",
  "/gallery/7.jpg",
];

const Gallery = () => {
  const [index, setIndex] = useState(-1);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl">
        {images.slice(0, 6).map((image, i) => (
          <button
            key={image}
            type="button"
            onClick={() => setIndex(i)}
            className="relative aspect-4/3 overflow-hidden"
          >
            <Image
              src={image}
              alt={`Zdjęcie ${i + 1}`}
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>

      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={images.map((src) => ({ src }))}
      />
    </>
  );
};

export default Gallery;
