import React from 'react';
import { Star, ThumbsUp, MessageCircle } from 'lucide-react';
import { Review } from '@/data/products';

interface ReviewCardProps {
  review: Review;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
  return (
    <div className="py-6 border-b border-border last:border-0">
      <div className="flex items-start gap-4">
        {/* Avatar */}
        <img
          src={review.avatar}
          alt={review.author}
          className="w-12 h-12 rounded-full object-cover"
        />

        <div className="flex-1">
          {/* Header */}
          <div className="flex items-center gap-2 mb-1">
            <span className="font-semibold">{review.author}</span>
            <span className="text-sm text-muted-foreground">{review.date}</span>
          </div>

          {/* Stars */}
          <div className="flex mb-3">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < review.rating ? 'fill-star text-star' : 'text-star-empty'
                }`}
              />
            ))}
          </div>

          {/* Comment */}
          <p className="text-foreground/80 mb-4">{review.comment}</p>

          {/* Actions */}
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <button className="flex items-center gap-1 hover:text-foreground transition-colors">
              <span className="text-accent font-medium">Répondre</span>
            </button>
            <button className="flex items-center gap-1 hover:text-foreground transition-colors">
              <ThumbsUp className="w-4 h-4" />
              <span>{review.helpful}</span>
            </button>
            {review.replies > 0 && (
              <button className="flex items-center gap-1 hover:text-foreground transition-colors">
                <MessageCircle className="w-4 h-4" />
                <span>{review.replies}</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
