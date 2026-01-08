import React, { useState, useRef, useEffect } from 'react';
import { wilayas, getCommunesByWilaya, Wilaya } from '@/data/wilayas';
import { MapPin, Map, Search, ChevronDown } from 'lucide-react';

interface WilayaSelectorProps {
  selectedWilaya: string;
  selectedCommune: string;
  onWilayaChange: (wilaya: string) => void;
  onCommuneChange: (commune: string) => void;
  errors?: { wilaya?: string; commune?: string };
}

const WilayaSelector: React.FC<WilayaSelectorProps> = ({
  selectedWilaya,
  selectedCommune,
  onWilayaChange,
  onCommuneChange,
  errors
}) => {
  const [isWilayaOpen, setIsWilayaOpen] = useState(false);
  const [isCommuneOpen, setIsCommuneOpen] = useState(false);
  const [wilayaSearch, setWilayaSearch] = useState('');
  const [communeSearch, setCommuneSearch] = useState('');
  
  const wilayaRef = useRef<HTMLDivElement>(null);
  const communeRef = useRef<HTMLDivElement>(null);

  const communes = selectedWilaya ? getCommunesByWilaya(selectedWilaya) : [];
  const currentWilaya = wilayas.find(w => w.code === selectedWilaya);

  const filteredWilayas = wilayas.filter(w => 
    w.name.toLowerCase().includes(wilayaSearch.toLowerCase()) || 
    w.code.includes(wilayaSearch)
  );

  const filteredCommunes = communes.filter(c => 
    c.toLowerCase().includes(communeSearch.toLowerCase())
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (wilayaRef.current && !wilayaRef.current.contains(event.target as Node)) {
        setIsWilayaOpen(false);
      }
      if (communeRef.current && !communeRef.current.contains(event.target as Node)) {
        setIsCommuneOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="grid grid-cols-2 gap-4" dir="rtl">
      {/* Wilaya Selector */}
      <div className="space-y-2 relative" ref={wilayaRef}>
        <label className="block text-sm font-medium text-right">
          <span className="flex items-center gap-2 justify-start font-bold">
            <MapPin className="w-4 h-4 text-primary" />
            الولاية
          </span>
        </label>
        
        <button
          type="button"
          onClick={() => {
            setIsWilayaOpen(!isWilayaOpen);
            setIsCommuneOpen(false);
          }}
          className={`flex items-center justify-between w-full h-12 px-4 py-2 bg-white border ${errors?.wilaya ? 'border-destructive' : 'border-[#e5e5e5]'} rounded-xl text-right text-sm transition-all hover:border-primary shadow-sm`}
        >
          <span className={selectedWilaya ? 'text-black font-semibold' : 'text-[#666]'}>
            {currentWilaya ? `${currentWilaya.code} - ${currentWilaya.name}` : 'اختر الولاية'}
          </span>
          <ChevronDown className={`w-5 h-5 text-black transition-transform ${isWilayaOpen ? 'rotate-180' : ''}`} />
        </button>

        {isWilayaOpen && (
          <div className="absolute z-[60] top-full mt-2 w-full bg-white border border-[#e5e5e5] rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
            <div className="p-3 border-b border-[#e5e5e5] bg-[#f9f9f9]">
              <div className="relative">
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#666]" />
                <input
                  type="text"
                  placeholder="بحث عن ولاية..."
                  className="w-full h-10 pl-3 pr-10 bg-white border border-[#e5e5e5] rounded-lg text-black text-sm outline-none focus:border-primary transition-colors"
                  value={wilayaSearch}
                  onChange={(e) => setWilayaSearch(e.target.value)}
                  autoFocus
                />
              </div>
            </div>
            <div className="max-h-[250px] overflow-y-auto custom-scrollbar">
              {filteredWilayas.length > 0 ? (
                filteredWilayas.map((wilaya) => (
                  <button
                    key={wilaya.code}
                    type="button"
                    onClick={() => {
                      onWilayaChange(wilaya.code);
                      onCommuneChange('');
                      setIsWilayaOpen(false);
                      setWilayaSearch('');
                    }}
                    className={`w-full px-5 py-3 text-right text-sm text-black hover:bg-[#f5f5f5] transition-colors border-b border-[#eee] last:border-0 ${selectedWilaya === wilaya.code ? 'bg-[#f0f0f0] font-bold' : ''}`}
                  >
                    {wilaya.code} - {wilaya.name}
                  </button>
                ))
              ) : (
                <div className="px-4 py-6 text-center text-sm text-[#888]">لا توجد نتائج</div>
              )}
            </div>
          </div>
        )}
        
        {errors?.wilaya && (
          <p className="text-xs text-destructive mt-1 text-right">{errors.wilaya}</p>
        )}
      </div>

      {/* Commune Selector */}
      <div className="space-y-2 relative" ref={communeRef}>
        <label className="block text-sm font-medium text-right text-black dark:text-white">
          <span className="flex items-center gap-2 justify-start font-bold">
            <Map className="w-4 h-4" />
            البلدية
          </span>
        </label>

        <button
          type="button"
          disabled={!selectedWilaya}
          onClick={() => {
            setIsCommuneOpen(!isCommuneOpen);
            setIsWilayaOpen(false);
          }}
          className={`flex items-center justify-between w-full h-12 px-4 py-2 bg-white border ${errors?.commune ? 'border-destructive' : 'border-[#e5e5e5]'} rounded-xl text-right text-sm transition-all hover:border-primary shadow-sm ${!selectedWilaya ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          <span className={selectedCommune ? 'text-black font-semibold' : 'text-[#666]'}>
            {selectedCommune || 'اختر البلدية'}
          </span>
          <ChevronDown className={`w-5 h-5 text-black transition-transform ${isCommuneOpen ? 'rotate-180' : ''}`} />
        </button>

        {isCommuneOpen && (
          <div className="absolute z-[60] top-full mt-2 w-full bg-white border border-[#e5e5e5] rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
            <div className="p-3 border-b border-[#e5e5e5] bg-[#f9f9f9]">
              <div className="relative">
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#666]" />
                <input
                  type="text"
                  placeholder="بحث عن بلدية..."
                  className="w-full h-10 pl-3 pr-10 bg-white border border-[#e5e5e5] rounded-lg text-black text-sm outline-none focus:border-primary transition-colors"
                  value={communeSearch}
                  onChange={(e) => setCommuneSearch(e.target.value)}
                  autoFocus
                />
              </div>
            </div>
            <div className="max-h-[250px] overflow-y-auto custom-scrollbar">
              {filteredCommunes.length > 0 ? (
                filteredCommunes.map((commune) => (
                  <button
                    key={commune}
                    type="button"
                    onClick={() => {
                      onCommuneChange(commune);
                      setIsCommuneOpen(false);
                      setCommuneSearch('');
                    }}
                    className={`w-full px-5 py-3 text-right text-sm text-black hover:bg-[#f5f5f5] transition-colors border-b border-[#eee] last:border-0 ${selectedCommune === commune ? 'bg-[#f0f0f0] font-bold' : ''}`}
                  >
                    {commune}
                  </button>
                ))
              ) : (
                <div className="px-4 py-6 text-center text-sm text-[#888]">لا توجد نتائج</div>
              )}
            </div>
          </div>
        )}
        
        {errors?.commune && (
          <p className="text-xs text-destructive mt-1 text-right">{errors.commune}</p>
        )}
      </div>
    </div>
  );
};

export default WilayaSelector;
