export interface MediaAssetResponseDto {
  id: number;
  listingCaseId: number;
  fileName: string;
  mediaType: 'Picture' | 'Video' | 'FloorPlan' | 'VRTour';
  mediaUrl: string | null;
  uploadedAt: string;
}
