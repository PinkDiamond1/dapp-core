class LocalStorage {

  set(key: string, data: unknown): void {
    const json = JSON.stringify(data);
    return localStorage.setItem(key, json);
  }

  get<T>(key: string): T | null {
    const json = localStorage.getItem(key);
    return json ? JSON.parse(json) : null;
  }

  remove(key: string): void {
    return localStorage.removeItem(key);
  }
}

const instance = new LocalStorage();

export default instance;
