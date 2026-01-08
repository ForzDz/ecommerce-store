import React from 'react';
import { Star } from 'lucide-react';

interface RatingStarsProps {
  rating: number;
  reviewsCount?: number;
  size?: 'sm' | 'md' | 'lg';
  showScore?: boolean;
}

const RatingStars: React.FC<RatingStarsProps> = ({ 
  rating, 
  reviewsCount, 
  size = 'md',
  showScore = false 
}) => {
  const sizeClasses = {
    sm: 'w-3 h-3',
    md: 'w-4 h-4',
    lg: 'w-6 h-6'
  };

  return (
    <div className="flex items-center gap-2">
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`${sizeClasses[size]} ${
              i < Math.floor(rating)
                ? 'fill-star text-star'
                : i < rating
                ? 'fill-star/50 text-star'
                : 'text-star-empty'
            }`}
          />
        ))}
      </div>
      {showScore && (
        <span className={`font-bold ${size === 'lg' ? 'text-3xl' : 'text-base'}`}>
          {rating.toFixed(1)}
        </span>
      )}
      {reviewsCount !== undefined && (
        <span className="text-sm text-muted-foreground">
          ({reviewsCount} avis)
        </span>
      )}
    </div>
  );
};

export default RatingStars;
