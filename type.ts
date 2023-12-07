export type TState = {
  id: number;
  title: string;
  slug: string;
};

export type TCard = {
  basePrice: number;
  category: number;
  hit?: boolean;
  name: string;
};

export type TContent = TCard[];
