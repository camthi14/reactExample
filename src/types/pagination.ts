export interface Filters {
  page: number;
  per_page: number;
}

export interface Paginations extends Filters {
  total: number;
  total_pages: number;
}
