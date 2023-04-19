import { TAPROOT_ADDRESS } from '@/constants/storage';
import localStorage from '@/utils/local-storage';

class BitCoinStorage {
  private getUserTaprootKey = (evmAddress: string): string => {
    return `${TAPROOT_ADDRESS}-${evmAddress.toLowerCase()}`;
  };

  getUserTaprootAddress = (evmAddress: string): string | null => {
    const key = this.getUserTaprootKey(evmAddress);
    return localStorage.get<string | null>(key);
  };

  setUserTaprootAddress = (evmAddress: string, taprootAddress: string): void => {
    const key = this.getUserTaprootKey(evmAddress);
    return localStorage.set(key, taprootAddress);
  };

  removeUserTaprootAddress = (evmAddress: string): void => {
    const key = this.getUserTaprootKey(evmAddress);
    return localStorage.remove(key);
  };
}

const instance = new BitCoinStorage();

export default instance;
