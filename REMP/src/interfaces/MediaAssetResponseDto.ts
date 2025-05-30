export interface MediaAssetResponseDto {
  id: number;
  listingCaseId: number;
  fileName: string;
  mediaType: 1|2|3|4;
  mediaUrl: string | null;
  uploadedAt: string;
}
