export type MatchResult = 'W' | 'D' | 'L';

export interface TableData {
  clubName: string;
  matchesPlayed: number;
  wins: number;
  draws: number;
  losses: number;
  goalsScored: number;
  goalsAgainst: number;
  goalDifference: number;
  points: number;
  lastFive: MatchResult[];
}
