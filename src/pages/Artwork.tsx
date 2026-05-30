import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Artwork = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-950 to-slate-900">
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

      <div className="max-w-6xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Placeholder for artwork - You can customize this section */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
            <div className="aspect-square bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg mb-4"></div>
            <h3 className="text-white text-lg font-semibold mb-2">Art Piece 1</h3>
            <p className="text-purple-200 text-sm">Description of your artwork</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
            <div className="aspect-square bg-gradient-to-br from-blue-400 to-cyan-400 rounded-lg mb-4"></div>
            <h3 className="text-white text-lg font-semibold mb-2">Art Piece 2</h3>
            <p className="text-purple-200 text-sm">Description of your artwork</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
            <div className="aspect-square bg-gradient-to-br from-orange-400 to-red-400 rounded-lg mb-4"></div>
            <h3 className="text-white text-lg font-semibold mb-2">Art Piece 3</h3>
            <p className="text-purple-200 text-sm">Description of your artwork</p>
          </div>
        </div>

        {/* Link to Google Drive */}
        <div className="mt-12 text-center">
          <a
            href="https://drive.google.com/drive/u/0/folders/1uHuOOtQRYWn7SqQSOgzymbJekouQGP8W"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors text-lg"
          >
            View Full Gallery on Google Drive
          </a>
        </div>
      </div>
    </div>
  );
};

export default Artwork;
