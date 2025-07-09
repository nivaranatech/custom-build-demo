// src/lib/defaultData.ts

import { Part, ReadyMadePC } from "../context/PartsContext";

export const defaultParts: Part[] = [
  {
    id: 'cpu1',
    category: 'cpu',
    name: 'Intel Core i5-12400F',
    price: 15000,
    specs: ['Intel', 'LGA1700', '6 cores', '12 threads'],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=100&h=100&fit=crop',
    sold: false
    
  },
  {
    id: 'cpu2',
    category: 'cpu',
    name: 'AMD Ryzen 5 5600X',
    price: 18000,
    specs: ['AMD', 'AM4', '6 cores', '12 threads'],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=100&h=100&fit=crop',
    sold: false
  },
  {
    id: 'mb1',
    category: 'motherboard',
    name: 'ASUS B550M-K',
    price: 8000,
    specs: ['ASUS', 'AM4', 'mATX'],
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=100&h=100&fit=crop',
    sold: false
  },
  {
    id: 'mb2',
    category: 'motherboard',
    name: 'MSI B450M PRO-VDH MAX',
    price: 6500,
    specs: ['MSI', 'AM4', 'mATX'],
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=100&h=100&fit=crop',
    sold: false
  },
  {
    id: 'ram1',
    category: 'ram',
    name: '16GB DDR4 3200MHz',
    price: 5000,
    specs: ['Corsair', '16GB', '3200MHz', 'DDR4'],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=100&h=100&fit=crop',
    sold: false
  },
  {
    id: 'ram2',
    category: 'ram',
    name: '32GB DDR4 3600MHz',
    price: 12000,
    specs: ['G.Skill', '32GB', '3600MHz', 'DDR4'],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=100&h=100&fit=crop',
    sold: false
  },
  {
    id: 'ssd1',
    category: 'storage',
    name: '500GB NVMe SSD',
    price: 4000,
    specs: ['Samsung', '500GB', 'NVMe SSD', '3500MB/s'],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=100&h=100&fit=crop',
    sold: false
  },
  {
    id: 'ssd2',
    category: 'storage',
    name: '1TB NVMe SSD',
    price: 7500,
    specs: ['WD', '1TB', 'NVMe SSD', '3500MB/s'],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=100&h=100&fit=crop',
    sold: false
  },
  {
    id: 'gpu1',
    category: 'gpu',
    name: 'RTX 4060',
    price: 35000,
    specs: ['NVIDIA', '8GB GDDR6', 'Mid-range'],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=100&h=100&fit=crop',
    sold: false
  },
  {
    id: 'gpu2',
    category: 'gpu',
    name: 'RTX 4070',
    price: 55000,
    specs: ['NVIDIA', '12GB GDDR6X', 'High-end'],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=100&h=100&fit=crop',
    sold: false
  },
  {
    id: 'psu1',
    category: 'psu',
    name: '650W 80+ Gold',
    price: 6000,
    specs: ['Corsair', '650W', '80+ Gold', 'Semi-modular'],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=100&h=100&fit=crop',
    sold: false
  },
  {
    id: 'psu2',
    category: 'psu',
    name: '750W 80+ Bronze',
    price: 4500,
    specs: ['Cooler Master', '750W', '80+ Bronze', 'Non-modular'],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=100&h=100&fit=crop',
    sold: false
  },
  {
    id: 'case1',
    category: 'case',
    name: 'Mid Tower RGB',
    price: 4000,
    specs: ['Corsair', 'Mid Tower', 'RGB'],
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=100&h=100&fit=crop',
    sold: false
  },
  {
    id: 'case2',
    category: 'case',
    name: 'Compact mATX',
    price: 2500,
    specs: ['Fractal Design', 'mATX', 'No RGB'],
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=100&h=100&fit=crop',
    sold: false
  },
  {
    id: 'cool1',
    category: 'cooling',
    name: 'Air Cooler - Basic',
    price: 2000,
    specs: ['Cooler Master', 'Air', 'Basic'],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=100&h=100&fit=crop',
    sold: false
  },
  {
    id: 'cool2',
    category: 'cooling',
    name: 'AIO Liquid Cooler 240mm',
    price: 8000,
    specs: ['Corsair', 'Liquid', 'High'],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=100&h=100&fit=crop',
    sold: false
  },
  {
    id: 'mon1',
    category: 'monitor',
    name: '24" 1080p 144Hz',
    price: 12000,
    specs: ['ASUS', '24"', '1080p', '144Hz'],
    image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=100&h=100&fit=crop',
    sold: false
  },
  {
    id: 'mon2',
    category: 'monitor',
    name: '27" 1440p 165Hz',
    price: 25000,
    specs: ['LG', '27"', '1440p', '165Hz'],
    image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=100&h=100&fit=crop',
    sold: false
  },
  {
    id: 'kb1',
    category: 'keyboard',
    name: 'Mechanical RGB Keyboard',
    price: 4500,
    specs: ['Corsair', 'Mechanical', 'RGB'],
    image: 'https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=100&h=100&fit=crop',
    sold: false
  },
  {
    id: 'kb2',
    category: 'keyboard',
    name: 'Wireless Gaming Keyboard',
    price: 8000,
    specs: ['Logitech', 'Wireless', 'RGB'],
    image: 'https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=100&h=100&fit=crop',
    sold: false
    
  },
  {
    id: 'ms1',
    category: 'mouse',
    name: 'Gaming Mouse 12000 DPI',
    price: 3500,
    specs: ['Razer', '12000 DPI', 'Gaming'],
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=100&h=100&fit=crop',
    sold: false
  },
  {
    id: 'ms2',
    category: 'mouse',
    name: 'Wireless Office Mouse',
    price: 1500,
    specs: ['Logitech', '1600 DPI', 'Office'],
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=100&h=100&fit=crop',
    sold: false
  }
];

export const defaultReadyMadePCs: ReadyMadePC[] = [
   {
      id: 'pc1',
      name: 'Gaming PC - Ryzen 5, 16GB RAM, RTX 4060',
      type: 'desktop',
      price: 75000,
      image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=300&h=300&fit=crop',
      specs: ['AMD Ryzen 5 5600X', '16GB DDR4 RAM', 'RTX 4060 8GB', '500GB NVMe SSD', '650W PSU'],
      sold: false
    },
    {
      id: 'pc2',
      name: 'Office PC - Core i5, 8GB RAM, Integrated Graphics',
      type: 'desktop',
      price: 35000,
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=300&h=300&fit=crop',
      specs: ['Intel Core i5-12400', '8GB DDR4 RAM', 'Intel UHD Graphics', '256GB SSD', '450W PSU'],
      sold: false
    },
    {
      id: 'laptop1',
      name: 'Gaming Laptop - Core i7, 16GB RAM, RTX 4050',
      type: 'laptop',
      price: 85000,
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=300&h=300&fit=crop',
      specs: ['Intel Core i7-12700H', '16GB DDR4 RAM', 'RTX 4050 4GB', '512GB SSD', '15.6" 144Hz Display'],
      sold: false
    },
    {
      id: 'laptop2',
      name: 'Business Laptop - Core i5, 8GB RAM, Intel Graphics',
      type: 'laptop',
      price: 45000,
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=300&h=300&fit=crop',
      specs: ['Intel Core i5-1235U', '8GB DDR4 RAM', 'Intel Iris Xe', '256GB SSD', '14" Full HD Display'],
      sold: false
    },
    {
      id: 'pc3',
      name: 'Workstation PC - Ryzen 9, 32GB RAM, RTX 4070',
      type: 'desktop',
      price: 125000,
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=300&h=300&fit=crop',
      specs: ['AMD Ryzen 9 5900X', '32GB DDR4 RAM', 'RTX 4070 12GB', '1TB NVMe SSD', '750W PSU'],
      sold: false
    },
    {
      id: 'laptop3',
      name: 'Ultrabook - Core i7, 16GB RAM, Intel Graphics',
      type: 'laptop',
      price: 65000,
      image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=300&h=300&fit=crop',
      specs: ['Intel Core i7-1255U', '16GB LPDDR4 RAM', 'Intel Iris Xe', '512GB SSD', '13.3" 2K Display'],
      sold: false
    }
];