'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Category } from '@prisma/client';

interface FilterSidebarProps {
  categories: Category[];
}

const FilterSidebar = ({ categories }: FilterSidebarProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [category, setCategory] = useState('all');
  const [rating, setRating] = useState('any');
  const [sortBy, setSortBy] = useState('newest');

  const handleFilter = () => {
    const params = new URLSearchParams();
    if (minPrice) params.set('minPrice', minPrice);
    if (maxPrice) params.set('maxPrice', maxPrice);
    if (category !== 'all') params.set('category', category);
    if (rating !== 'any') params.set('rating', rating);
    if (sortBy) params.set('sortBy', sortBy);

    const q = searchParams.get('q');
    if (q) {
      params.set('q', q);
    }

    router.push(`?${params.toString()}`);
  };

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());
    setMinPrice(params.get('minPrice') || '');
    setMaxPrice(params.get('maxPrice') || '');
    setCategory(params.get('category') || 'all');
    setRating(params.get('rating') || 'any');
    setSortBy(params.get('sortBy') || 'newest');
  }, [searchParams]);

  return (
    <aside className="w-full md:w-1/4 p-4 border-r">
      <h2 className="text-xl font-bold mb-4">Filters</h2>

      {/* Category Filter */}
      <div className="mb-4">
        <Label className="text-lg font-semibold">Category</Label>
        <Select value={category} onValueChange={setCategory}>
          <SelectTrigger>
            <SelectValue placeholder="All Categories" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            {categories.map((cat) => (
              <SelectItem key={cat.id} value={cat.name}>
                {cat.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Price Range Filter */}
      <div className="mb-4">
        <Label className="text-lg font-semibold">Price Range</Label>
        <div className="flex items-center space-x-2 mt-2">
          <Input
            type="number"
            placeholder="Min"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            className="w-full"
          />
          <span className="text-gray-500">-</span>
          <Input
            type="number"
            placeholder="Max"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            className="w-full"
          />
        </div>
      </div>

      {/* Customer Rating Filter */}
      <div className="mb-4">
        <Label className="text-lg font-semibold">Rating</Label>
        <Select value={rating} onValueChange={setRating}>
          <SelectTrigger>
            <SelectValue placeholder="Any Rating" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="any">Any Rating</SelectItem>
            <SelectItem value="4">4 stars & up</SelectItem>
            <SelectItem value="3">3 stars & up</SelectItem>
            <SelectItem value="2">2 stars & up</SelectItem>
            <SelectItem value="1">1 star & up</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Sorting Options */}
      <div className="mb-4">
        <Label className="text-lg font-semibold">Sort By</Label>
        <Select value={sortBy} onValueChange={setSortBy}>
          <SelectTrigger>
            <SelectValue placeholder="Newest" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="newest">Newest</SelectItem>
            <SelectItem value="price-asc">Price: Low to High</SelectItem>
            <SelectItem value="price-desc">Price: High to Low</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Button onClick={handleFilter} className="w-full">
        Apply Filters
      </Button>
    </aside>
  );
};

export default FilterSidebar;