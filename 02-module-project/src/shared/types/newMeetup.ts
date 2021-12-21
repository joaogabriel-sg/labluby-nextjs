import { MeetupType } from ".";

export type NewMeetupType = Omit<MeetupType, "id">;
