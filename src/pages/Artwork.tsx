import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Artwork = () => {
  // Screenshots first, then IMG files in numerical order
  const artworkImages = [
    "Screenshot-2026-05-30-at-1.06.39-AM.png",
    "Screenshot-2026-05-30-at-1.08.38-AM.png",
    "Screenshot-2026-05-30-at-1.08.51-AM.png",
    "Screenshot-2026-05-30-at-1.21.58-AM.png",
    "Screenshot-2026-05-30-at-1.22.27-AM.png",
    "Screenshot-2026-05-30-at-1.22.42-AM.png",
    "Screenshot-2026-05-30-at-1.22.57-AM.png",
    "IMG_3833.jpg",
    "IMG_3834.jpg",
    "IMG_3835.jpg",
    "IMG_3836.jpg",
    "IMG_3837.jpg",
    "IMG_3838.jpg",
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

  return (
    <div className="min-h-screen bg-black">
      {/* Back button */}
      <Link to="/" className="absolute top-8 left-8 z-10">
        <Button
          variant="outline"
          size="lg"
          className="font-bold text-lg hover:bg-accent/20 hover:scale-105 transition-all duration-300"
        >
          <ArrowLeft className="mr-2 h-5 w-5" />
          Back
        </Button>
      </Link>

      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {artworkImages.map((image, index) => (
            <div key={index} className="group">
              <img
                src={`/artwork/${image}`}
                alt=""
                className="w-full h-auto rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Artwork;
