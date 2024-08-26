import { Member as TMember } from "../api/member/Member";

export const MEMBER_TITLE_FIELD = "id";

export const MemberTitle = (record: TMember): string => {
  return record.id?.toString() || String(record.id);
};
