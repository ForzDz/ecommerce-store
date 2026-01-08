import React from 'react';

interface SizeSelectorProps {
  sizes: string[];
  selectedSize: string;
  onSelect: (size: string) => void;
}

const SizeSelector: React.FC<SizeSelectorProps> = ({ sizes, selectedSize, onSelect }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {sizes.map((size) => (
        <button
          key={size}
          onClick={() => onSelect(size)}
          data-selected={selectedSize === size}
          className="size-btn min-w-[50px]"
        >
          {size}
        </button>
      ))}
    </div>
  );
};

export default SizeSelector;
