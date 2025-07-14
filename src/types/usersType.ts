export type User = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
};

export type UsersResponse = {
  users: User[];
  nextPage: number | null;
  isLastPage: boolean;
  totalCount: number;
};