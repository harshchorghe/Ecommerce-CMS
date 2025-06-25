'use client';

import React, { useEffect, useState } from 'react';

type PromotionData = {
  title: string;
  heading: string;
  description: string;
  image: {
    url: string;
    title: string;
  };
  call_to_action?: string;
  start_date: string;
  end_date: string;
};

const Promotion = () => {
  const [promotion, setPromotion] = useState<PromotionData | null>(null);

  useEffect(() => {
    // Simulating CMS data fetch
    const fetchPromotion = async () => {
      // Replace this with actual API call
      const data: PromotionData = {
        title: 'Sale',
        heading: '50 % Off',
        description: 'This is the best sale that you can ever have',
        image: {
          url: 'https://eu-images.contentstack.com/v3/assets/blt9f7fb6656f851a15/blt18db7acebb7b7b46/685b934d5eac9d93b8aef427/perfume.webp',
          title: 'perfume.webp',
        },
        call_to_action: '',
        start_date: '2025-06-25T06:11:30.000Z',
        end_date: '2025-06-30T17:41:24.000Z',
      };

      const now = new Date();
      const startDate = new Date(data.start_date);
      const endDate = new Date(data.end_date);

      if (now >= startDate && now <= endDate) {
        setPromotion(data);
      }
    };

    fetchPromotion();
  }, []);

  if (!promotion) return null;

  return (
    <div className="w-full bg-gradient-to-r from-pink-100 via-pink-50 to-white p-6 md:flex md:items-center md:justify-between rounded-2xl shadow-md mt-6">
      <div className="md:w-1/2 space-y-4">
        <h2 className="text-3xl font-bold text-pink-600">{promotion.heading}</h2>
        <p className="text-lg text-gray-700">{promotion.description}</p>
        {promotion.call_to_action && (
          <button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-full mt-2">
            {promotion.call_to_action}
          </button>
        )}
      </div>
      <div className="md:w-1/2 mt-4 md:mt-0 flex justify-center">
        <img
          src={promotion.image.url}
          alt={promotion.image.title}
          className="max-w-[300px] rounded-xl shadow-md"
        />
      </div>
    </div>
  );
};

export default Promotion;
