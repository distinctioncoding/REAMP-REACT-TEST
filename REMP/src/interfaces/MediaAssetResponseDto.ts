import { MediaType } from "../enums/mediaType";

export interface MediaAssetResponseDto {
  id: number;
  listingCaseId: number;
  fileName: string;
  mediaType: MediaType;
  mediaUrl: string | null;
  uploadedAt: string;
}
