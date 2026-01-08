import React from 'react';
import { ProductColor } from '@/data/products';

interface ColorSelectorProps {
  colors: ProductColor[];
  selectedColor: string;
  onSelect: (colorName: string) => void;
}

const ColorSelector: React.FC<ColorSelectorProps> = ({ colors, selectedColor, onSelect }) => {
  return (
    <div className="flex gap-3">
      {colors.map((color) => (
        <button
          key={color.name}
          onClick={() => onSelect(color.name)}
          data-selected={selectedColor === color.name}
          className="color-swatch"
          style={{ backgroundColor: color.hex }}
          title={color.name}
          aria-label={`Couleur ${color.name}`}
        />
      ))}
    </div>
  );
};

export default ColorSelector;
