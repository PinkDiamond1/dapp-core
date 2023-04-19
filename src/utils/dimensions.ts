import { isBrowser } from "./common";

export const getWindowDimensions = (): { width: number; height: number } => {
  if (!isBrowser()) {
    return {
      width: 0,
      height: 0,
    }
  }

  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
};
