import React from 'react';
import { Star } from 'lucide-react';
import { Review } from '@/data/products';

interface RatingDistributionProps {
  reviews: Review[];
  totalRating: number;
}

const RatingDistribution: React.FC<RatingDistributionProps> = ({ reviews, totalRating }) => {
  const distribution = [5, 4, 3, 2, 1].map(star => {
    const count = reviews.filter(r => Math.floor(r.rating) === star).length;
    const percentage = reviews.length > 0 ? (count / reviews.length) * 100 : 0;
    return { star, count, percentage };
  });

  // Calculate sample distribution if no reviews
  const sampleDistribution = reviews.length === 0 ? [
    { star: 5, count: 28, percentage: 70 },
    { star: 4, count: 9, percentage: 22 },
    { star: 3, count: 4, percentage: 5 },
    { star: 2, count: 1, percentage: 2 },
    { star: 1, count: 1, percentage: 1 },
  ] : distribution;

  return (
    <div className="flex gap-8 items-start">
      {/* Stars & Score */}
      <div className="flex flex-col items-center">
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-6 h-6 ${
                i < Math.floor(totalRating)
                  ? 'fill-star text-star'
                  : 'text-star-empty'
              }`}
            />
          ))}
        </div>
        <span className="text-4xl font-bold mt-2">{totalRating.toFixed(1)}</span>
      </div>

      {/* Distribution Bars */}
      <div className="flex-1 space-y-2">
        {sampleDistribution.map(({ star, count, percentage }) => (
          <div key={star} className="flex items-center gap-2 text-sm">
            <span className="w-3 text-muted-foreground">{star}</span>
            <div className="flex-1 h-2 bg-secondary rounded-full overflow-hidden">
              <div 
                className="h-full bg-star rounded-full transition-all duration-500"
                style={{ width: `${percentage}%` }}
              />
            </div>
            <span className="w-8 text-right text-muted-foreground">{count}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RatingDistribution;
