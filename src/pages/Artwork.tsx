import { ArrowLeft, ArrowRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";

const IMAGES_PER_PAGE = 1;

const Artwork = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [page, setPage] = useState(0);

  // img1-img9 first, then remaining IMG files in numerical order
  const artworkImages = [
    "img1.png",
    "img2.jpg",
    "img3.png",
    "img4.png",
    "img4.1.jpg.JPG",
    "img4.2.JPG",
    "img4.3.png",
    "img4.4.png",
    "img5.jpg",
    "img6.jpg",
    "img7.jpg",
    "img8.png",
    "img9.png",
    "IMG_3836.jpg",
    "IMG_3839.jpg",
    "IMG_3840.jpg",
    "IMG_3841.jpg",
    "IMG_3842.jpg",
    "IMG_3843.jpg",
    "IMG_3844.jpg",
    "IMG_3845.jpg",
    "IMG_3846.jpg",
    "IMG_3847.jpg",
    "IMG_3848.jpg",
    "IMG_3849.jpg",
    "IMG_3850.jpg",
  ];

  const totalPages = Math.ceil(artworkImages.length / IMAGES_PER_PAGE);
  const visibleImages = artworkImages.slice(
    page * IMAGES_PER_PAGE,
    page * IMAGES_PER_PAGE + IMAGES_PER_PAGE
  );

  const goPrev = () => setPage((p) => Math.max(0, p - 1));
  const goNext = () => setPage((p) => Math.min(totalPages - 1, p + 1));

  return (
    <div className="min-h-screen bg-black">
      {/* Back button */}
      <div className="pt-8 pb-8">
        <Link to="/" className="absolute top-8 left-8 z-10">
          <Button
            variant="outline"
            size="lg"
            className="font-bold text-lg bg-black text-white border-white hover:bg-white hover:text-black hover:scale-105 transition-all duration-300"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back
          </Button>
        </Link>
      </div>

      {/* Page count */}
      <span className="absolute top-8 right-8 z-10 text-white/70 text-sm">
        {page + 1} / {totalPages}
      </span>

      {/* Prev/Next arrows */}
      <Button
        variant="outline"
        size="icon"
        onClick={goPrev}
        disabled={page === 0}
        aria-label="Previous"
        className="fixed left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 bg-black text-white border-white hover:bg-white hover:text-black"
      >
        <ArrowLeft className="h-5 w-5" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        onClick={goNext}
        disabled={page === totalPages - 1}
        aria-label="Next"
        className="fixed right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 bg-black text-white border-white hover:bg-white hover:text-black"
      >
        <ArrowRight className="h-5 w-5" />
      </Button>

      <div className="min-h-screen flex items-center justify-center px-4">
        {visibleImages.map((image) => (
          <div key={image} className="group">
            <img
              src={`/artwork/${image}`}
              alt=""
              className="max-h-[90vh] w-auto max-w-full object-contain rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
              loading="lazy"
              onClick={() => setSelectedImage(image)}
            />
          </div>
        ))}
      </div>

      {/* Image popup modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={`/artwork/${selectedImage}`}
            alt=""
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default Artwork;
