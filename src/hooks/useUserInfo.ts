import { useQuery } from '@tanstack/react-query';
import { getUserInfo } from '@/services/users';

type UserInfoResponse = {
  username: string;
};

export const useUserInfo = () => {
  return useQuery<UserInfoResponse, Error>({
    queryKey: ['user-info'],
    queryFn: () => getUserInfo(),
  });
};
