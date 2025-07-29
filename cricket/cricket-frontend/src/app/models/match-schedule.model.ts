export interface MatchSchedule {
  id: number;
  homeClubId: number;
  awayClubId: number;
  matchDate: string; // ISO format date string
  isCompleted: boolean;
}
