import axios from './axios';

export const getUsers = async (page: number, size: number) => {
  const res = await axios.get(
    `/manager-get-all-users-of-org?page=${page}&size=${size}`
  );

  return {
    users: res.data.results,
    nextPage: res.data.next ? page + 1 : null,
    isLastPage: !res.data.next,
    totalCount: res.data.count,
  };
};

export const deleteUser = async (id: number) => {
  const formData = new FormData();
  formData.append('action', 'delete');

  try {
    const res = await axios.post(`/manager-manage-account/${id}`, formData);
    console.log(res.data);

    if ('error' in res.data) throw new Error(res.data.error);
    return res.data.success;
  } catch (error: unknown) {
    console.error('Error deleting user:', error);
    throw error;
  }
};

export const getUserInfo = async () => {
  try {
    const res = await axios.post('/get-info/');
    return res.data;
  } catch (error) {
    console.error('خطا در دریافت اطلاعات کاربر:', error);
    throw error;
  }
};
