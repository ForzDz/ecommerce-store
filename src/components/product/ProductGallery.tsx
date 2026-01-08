import React, { useState } from 'react';

interface ProductGalleryProps {
  images: string[];
  productName: string;
}

const ProductGallery: React.FC<ProductGalleryProps> = ({ images, productName }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const displayedThumbnails = 4;
  const extraImages = images.length - displayedThumbnails;



  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      nextImage();
    }
    if (isRightSwipe) {
      prevImage();
    }
  };

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="space-y-4 w-full max-w-full">
      {/* Main Image */}
      <div 
        className="aspect-square bg-secondary rounded-lg overflow-hidden w-full max-w-full relative group touch-pan-y"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <img
          src={images[selectedImage]}
          alt={productName}
          className="w-full h-full object-cover max-w-full transition-transform duration-300 pointer-events-none select-none"
        />
        
        {/* Navigation Arrows (visible on hover or focus for accessibility) */}
        {images.length > 1 && (
          <>
            <button 
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-black p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-md"
              aria-label="Image précédente"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
            </button>
            <button 
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-black p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-md"
              aria-label="Image suivante"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </button>
          </>
        )}
      </div>

      {/* Thumbnails */}
      <div className="flex gap-2 sm:gap-3 overflow-x-auto pb-2 -mx-3 px-3 sm:mx-0 sm:px-0 scrollbar-hide">
        {images.slice(0, displayedThumbnails).map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`relative aspect-square w-16 sm:w-20 rounded-lg overflow-hidden border-2 flex-shrink-0 transition-all duration-200 ${
              selectedImage === index ? 'border-primary' : 'border-transparent hover:border-muted-foreground/30'
            }`}
          >
            <img
              src={image}
              alt={`${productName} vue ${index + 1}`}
              className="w-full h-full object-cover max-w-full"
            />
          </button>
        ))}
        
        {extraImages > 0 && (
          <button
            onClick={() => setSelectedImage(displayedThumbnails)}
            className="aspect-square w-16 sm:w-20 rounded-lg bg-secondary flex items-center justify-center text-xs sm:text-sm font-medium text-muted-foreground hover:bg-muted transition-colors flex-shrink-0"
          >
            +{extraImages}
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductGallery;
