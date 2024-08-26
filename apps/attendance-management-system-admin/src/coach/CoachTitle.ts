import { Coach as TCoach } from "../api/coach/Coach";

export const COACH_TITLE_FIELD = "id";

export const CoachTitle = (record: TCoach): string => {
  return record.id?.toString() || String(record.id);
};
