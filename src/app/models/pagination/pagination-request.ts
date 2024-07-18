export interface PaginationRequest {
  pageNumber: number;
  pageSize: number;
  direction: DirectionEnum;
  sortBy: string;
}

enum DirectionEnum {
  'ASC',
  'DESC',
}
