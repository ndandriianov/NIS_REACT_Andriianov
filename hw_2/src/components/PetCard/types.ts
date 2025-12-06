export type Pet = {
  id: string; // UUID
  name: string;
  species: string;
  mood: number;
  energy: number;
  level: number;
  avatar: string;
}

export type PetAction =
  | { type: 'FEED'; energy: number }
  | { type: 'LEVEL_UP' }
  | { type: 'CHEER' }
  | { type: 'RESET' }
  | { type: 'TIRE' }
  | { type: 'SET_MOOD'; mood: number };