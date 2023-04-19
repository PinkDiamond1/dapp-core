import { ACCESS_TOKEN, REFRESH_TOKEN } from '@/constants/storage';
import localStorageUtil from '@/utils/local-storage';

export const getAccessToken = (): string | null => {
  const accessToken = localStorageUtil.get(ACCESS_TOKEN) as string;
  return accessToken;
};

export const clearAccessTokenStorage = (): void => {
  localStorageUtil.remove(ACCESS_TOKEN);
  localStorageUtil.remove(REFRESH_TOKEN);
};

export const setAccessToken = (accessToken: string, refreshToken: string): void => {
  localStorageUtil.set(ACCESS_TOKEN, accessToken);
  localStorageUtil.set(REFRESH_TOKEN, refreshToken);
};
