import { stockImages } from '@/data/images';

export const imgByKey = (key: string) => stockImages.find(i => i.key === key); 