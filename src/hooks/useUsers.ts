import { useQuery } from '@tanstack/react-query';
import { getUsers } from '../services/users';
import type { UsersResponse } from '@/types/usersType';

const PAGE_SIZE = 20;

export const useUsers = (page: number) => {
  return useQuery<UsersResponse, Error>({
    queryKey: ['users', page],
    queryFn: () => getUsers(page, PAGE_SIZE),
  });
};
