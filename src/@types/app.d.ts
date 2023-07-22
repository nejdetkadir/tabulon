/// <reference types="nativewind/types" />

type TeamType = {
  id: string;
  name: string;
  totalScore: number;
};

type RoundType = {
  order: number;
  team: TeamType;
  score: number;
  remainingTime: number;
  remainingPasses: number;
};

type WordType = {
  id: string;
  word: string;
  forbiddenWords: string[];
};
