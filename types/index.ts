interface Anime {
  id: number;
  title: {
    romaji: string;
    english: string;
    native: string;
  };
  coverImage: {
    medium: string;
    large: string;
  };
}

export type { Anime };
