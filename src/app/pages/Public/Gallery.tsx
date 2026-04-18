import { useState, useEffect, useCallback } from "react";
import Masonry from "react-masonry-css";
import { X, Trash2, Upload, ChevronLeft, ChevronRight, ImagePlus } from "lucide-react";
import { supabase } from "../../lib/supabaseClient";
import { SEOHead } from '../../components/SEOHead';
import { useSearchParams } from "react-router-dom";

interface GalleryImage {
  id: string;
  url: string;
  category: string;
}

export function Gallery() {
  const [searchParams] = useSearchParams();
  const userDetail = searchParams.get("userDetails");

  const [images, setImages] = useState<GalleryImage[]>([]);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [files, setFiles] = useState<File[]>([]);
  const [caption, setCaption] = useState("");
  const [category, setCategory] = useState("Wedding");  
  const [filterCategory, setFilterCategory] = useState("All");
  const [isLoading, setIsLoading] = useState(true);
  const [uploading, setUploading] = useState(false);

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    setIsLoading(true);
    const { data } = await supabase
      .from("gallery_images")
      .select("*")
      .order("created_at", { ascending: false });
    if (data) setImages(data);
    setIsLoading(false);
  };

  const categories = ["All", ...new Set(images.map(i => i.category))];
  const filteredImages =
    filterCategory === "All"
      ? images
      : images.filter(i => i.category === filterCategory);

  // Upload Images
  const uploadImages = async () => {
    if (files.length === 0) return;
    setUploading(true);
    try {
      for (const file of files) {
        const fileName = `${Date.now()}-${file.name}`;
        const { error } = await supabase.storage
          .from("gallery-images")
          .upload(fileName, file);

        if (error) throw error;

        const { data } = supabase.storage
          .from("gallery-images")
          .getPublicUrl(fileName);

        await supabase.from("gallery_images").insert({
          url: data.publicUrl,
          category
        });
      }

      // Reset Upload State
      setFiles([]);
      setCaption("");
      setCategory("Wedding");
      await fetchImages();
    } catch (err: any) {
      alert(err.message);
    }
    setUploading(false);
  };

  const deleteImage = async (id: string) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this image?");
    if (!confirmDelete) return;

    // Optimistic UI update
    setImages(prev => prev.filter(img => img.id !== id));

    await supabase
      .from("gallery_images")
      .delete()
      .eq("id", id);
  };

  // Lightbox Navigation
  const showNext = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % filteredImages.length);
    }
  }, [selectedImageIndex, filteredImages.length]);

  const showPrev = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex - 1 + filteredImages.length) % filteredImages.length);
    }
  }, [selectedImageIndex, filteredImages.length]);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImageIndex === null) return;
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "Escape") setSelectedImageIndex(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImageIndex, showNext, showPrev]);

  return (
    <div className="relative min-h-screen bg-gray-50">
      <SEOHead
        title="Gallery"
        description="Browse our portfolio of beautifully executed South Indian events, weddings, and cultural celebrations."
        keywords="event gallery, wedding photos, south indian weddings, event decoration"
      />

      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-[#8B0000] to-[#4A0000] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-serif mb-6">
            Our <span className="text-[#D4AF37]">Gallery</span>
          </h1>
          <div className="w-16 h-1 bg-[#D4AF37] mx-auto mb-6"></div>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto font-light">
            A glimpse into the beautiful moments we've created. Each image tells a story
            of tradition, celebration, and unforgettable memories.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {uploading && (
          <div className="fixed inset-0 backdrop-blur-md bg-black/60 z-50 flex items-center justify-center">
            <div className="bg-white p-8 rounded-2xl shadow-2xl flex flex-col items-center gap-5 max-w-xs w-full">
              <div className="relative w-16 h-16">
                <div className="absolute inset-0 border-4 border-gray-100 rounded-full"></div>
                <div className="absolute inset-0 border-4 border-t-[#8B0000] rounded-full animate-spin"></div>
              </div>
              <div className="text-center">
                <p className="text-gray-900 font-semibold text-lg">Uploading Files</p>
                <p className="text-gray-500 text-sm mt-1">Please wait a moment...</p>
              </div>
            </div>
          </div>
        )}

        {/* <div className="bg-white shadow-sm border border-gray-100 rounded-xl p-8 mb-12">
          <h2 className="text-xl font-semibold mb-6 text-gray-800 flex items-center gap-2">
            <ImagePlus size={20} className="text-[#8B0000]" />
            Upload Event Photos
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-5">
              <label className="group flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-gray-200 hover:border-[#D4AF37] rounded-xl cursor-pointer bg-gray-50 hover:bg-amber-50/30 transition-all duration-300">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <Upload className="w-8 h-8 text-gray-400 group-hover:text-[#8B0000] mb-3 transition-colors" />
                  <p className="text-sm text-gray-600 font-medium">Click to upload or drag & drop</p>
                  <p className="text-xs text-gray-400 mt-1">PNG, JPG, JPEG up to 10MB</p>
                </div>
                <input
                  type="file"
                  multiple
                  className="hidden"
                  onChange={(e) => {
                    const selected = e.target.files;
                    if (selected) {
                      const newFiles = Array.from(selected);
                      setFiles((prevFiles) => {
                        const uniqueNewFiles = newFiles.filter(
                          (newFile) => !prevFiles.some(
                            (prev) => prev.name === newFile.name && prev.size === newFile.size
                          )
                        );
                        return [...prevFiles, ...uniqueNewFiles];
                      });
                    }
                    e.target.value = "";
                  }}
                />
              </label>
            </div>

            <div className="lg:col-span-7 flex flex-col justify-between gap-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-gray-500 uppercase tracking-wider">Category</label>
                  <div className="relative">
                    <select
                      className="w-full appearance-none border border-gray-200 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/30 focus:border-[#D4AF37] transition-all bg-white cursor-pointer text-gray-700"
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                    >
                      <option value="Wedding Events">Wedding Events</option>
                      <option value="Reception Events">Reception Events</option>
                      <option value="Engagement Ceremony">Engagement Ceremony</option>
                      <option value="Corporate Events">Corporate Events</option>
                      <option value="Birthday Parties">Birthday Parties</option>
                      <option value="Baby Shower">Baby Shower</option>
                      <option value="Puberty Function">Puberty Function</option>
                      <option value="Naming Ceremony">Naming Ceremony</option>
                      <option value="Housewarming">Housewarming</option>
                      <option value="Anniversary Celebrations">Anniversary Celebrations</option>
                      <option value="Get-togethers & Reunions">Get-togethers & Reunions</option>
                      <option value="Christmas Event Management">Christmas Event Management</option>
                      <option value="School & College Events">School & College Events</option>
                      <option value="Community / Public Events">Community / Public Events</option>
                      <option value="Others">Others</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-400">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <button
                disabled={uploading || files.length === 0}
                onClick={uploadImages}
                className="w-full bg-[#8B0000] hover:bg-[#6B0000] disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-semibold p-3.5 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 shadow-md hover:shadow-lg active:scale-[0.98]"
              >
                <Upload size={18} />
                {uploading ? (
                  <span className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Processing...
                  </span>
                ) : (
                  `Upload ${files.length > 0 ? `(${files.length})` : ''} Images`
                )}
              </button>
            </div>
          </div>

          {files.length > 0 && (
            <div className="mt-6 border-top pt-4">
              <p className="text-xs font-medium text-gray-500 mb-2">Selected Files ({files.length})</p>
              <div className="flex gap-4 overflow-x-auto pb-2">
                {files.map((file, idx) => (
                  <div key={idx} className="relative min-w-[80px] h-[80px] flex-shrink-0 rounded-lg overflow-hidden border border-gray-100 shadow-sm">
                    <img
                      src={URL.createObjectURL(file)}
                      alt={file.name}
                      className="w-full h-full object-cover"
                    />
                    <button
                      onClick={() => setFiles(prev => prev.filter((_, i) => i !== idx))}
                      className="absolute top-1 right-1 bg-black/60 hover:bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs transition-colors"
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div> */}

        <div className="flex justify-between items-center mb-8">
          <h3 className="text-lg font-medium text-gray-700">All Masterpieces</h3>
          <div className="relative">
            <select
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              className="appearance-none border border-gray-200 pl-4 pr-10 py-2.5 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/30 text-gray-700 font-medium cursor-pointer"
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95a1 1 0 001.414 0l4-4a1 1 0 00-1.414-1.414L10 10.828 5.707 6.586a1 1 0 00-1.414 1.414l4 4z" /></svg>
            </div>
          </div>
        </div>

        {isLoading ? (
          <div className="text-center py-20 text-gray-400">
            <div className="w-10 h-10 border-4 border-gray-100 border-t-[#8B0000] rounded-full animate-spin mx-auto mb-4"></div>
            Loading gallery...
          </div>
        ) : (
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="flex gap-2"
            columnClassName="space-y-4"
          >
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                className="relative group cursor-pointer overflow-hidden  bg-gray-100 shadow-sm transition-all duration-300 hover:shadow-lg"
              >
                <img
                  src={image.url}
                  loading="lazy"
                  alt={image.url}
                  className="w-full transform transition-transform duration-500 group-hover:scale-105"
                  onClick={() => setSelectedImageIndex(index)}
                />

                {/* Gradient Hover Overlay */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4"
                  onClick={() => setSelectedImageIndex(index)}
                >
                  <div className="flex justify-between items-start">
                    <span className="bg-[#D4AF37] text-[#8B0000] text-xs font-bold px-2.5 py-1 rounded">
                      {image.category}
                    </span>
                    {userDetail && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          deleteImage(image.id);
                        }}
                        className="bg-white/20 hover:bg-red-600 text-white p-2 rounded-full backdrop-blur-sm transition-colors"
                      >
                        <Trash2 size={14} />
                      </button>
                    )}
                  </div>
                  
                </div>
              </div>
            ))}
          </Masonry>
        )}

        {/* Immersive Lightbox with Blurred Background and Arrows */}
        {selectedImageIndex !== null && (
          <div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 backdrop-blur-xl"
            onClick={() => setSelectedImageIndex(null)}
          >
            {/* Dynamic blurred backdrop duplicate */}
            <div
              className="absolute inset-0 bg-cover bg-center opacity-30 blur-2xl scale-110 pointer-events-none"
              style={{ backgroundImage: `url(${filteredImages[selectedImageIndex].url})` }}
            />

            {/* Close Button */}
            <button className="absolute top-6 right-6 z-50 text-white/70 hover:text-white transition-colors">
              <X size={32} />
            </button>

            {/* Left Arrow */}
            <button
              className="absolute left-6 top-1/2 -translate-y-1/2 z-50 bg-white/10 hover:bg-white/20 text-white p-4 rounded-full backdrop-blur-sm transition-all hover:scale-105"
              onClick={showPrev}
            >
              <ChevronLeft size={28} />
            </button>

            {/* Image Container */}
            <div
              className="relative max-h-[90vh] max-w-[95vw] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={filteredImages[selectedImageIndex].url}
                className="max-h-[90vh] object-contain  shadow-2xl"
                alt={filteredImages[selectedImageIndex].url}
              />

              <div className="mt-4 text-white text-center absolute bottom-6  px-4 py-2   ">
                <span className="bg-[#D4AF37] text-[#8B0000] text-xs font-bold px-5 py-3 rounded">{filteredImages[selectedImageIndex].category}</span>
              </div>
            </div>

            {/* Right Arrow */}
            <button
              className="absolute right-6 top-1/2 -translate-y-1/2 z-50 bg-white/10 hover:bg-white/20 text-white p-4 rounded-full backdrop-blur-sm transition-all hover:scale-105"
              onClick={showNext}
            >
              <ChevronRight size={28} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}