import { ListcaseStatus } from "../enums/listcase-status";
export const getStatusLabel = (status: ListcaseStatus): string => {
    switch (status) {
      case ListcaseStatus.Created:
        return 'Created';
      case ListcaseStatus.Pending:
        return 'Pending';
      case ListcaseStatus.Delivered:
        return 'Delivered';
      default:
        return 'Unknown';
    }
  };