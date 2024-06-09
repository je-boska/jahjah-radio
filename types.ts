export interface EventInterface {
  id: string;
  stationId: string;
  title: string;
  startDateUtc: string;
  endDateUtc: string;
  description?: JSON;
  duration: number;
  timezone: string;
  color?: string;
  artistIds?: string[];
  isRecurring: boolean;
  media:
    | {
        type: "mix";
        trackId?: string | undefined;
      }
    | {
        type: "playlist";
        playlistId: string;
      }
    | {
        type: "live";
      };
}

export interface SuccessfulLiveAPIResponse {
  success: true;
  result:
    | { status: "schedule"; content: EventInterface }
    | { status: "offAir"; content: "Off Air" }
    | {
        status: "defaultPlaylist";
        content: {
          name: string;
          numberOfSongs: number;
          duration: number;
        };
      };
}

export interface UnsuccessfulLiveAPIResponse {
  success: false;
  error?: string;
}

export type LiveAPIResponse =
  | SuccessfulLiveAPIResponse
  | UnsuccessfulLiveAPIResponse;
