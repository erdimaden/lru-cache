export default class LRUCache {
  capacity: number;
  cache: Record<any, any>;

  constructor(capacity: number) {
    if(typeof capacity != "number")
      throw new Error('Capacity must be number')
    this.capacity = capacity;
    this.cache = new Map();
  }

  has(key: string | number): boolean {
    return this.cache.has(key);
  }

  set(key: string | number, value: any): any {
    if (this.cache.has(key)) {
      this.cache.delete(key);
    } else if (this.cache.size >= this.capacity) {
      this.cache.delete(this.getFirst());
    }
    this.cache.set(key, value);
  }

  get(key: string | number): any {
    const value = this.cache.get(key);
    if (value) {
      this.cache.delete(key);
      this.set(key, value);
    }
    return value;
  }

  keys(): void {
    return this.cache.keys();
  }

  getFirst(): any {
    return this.cache.keys().next().value;
  }

  size(): number {
    return this.cache.size;
  }

  clear(): void {
    this.cache.clear();
  }
}
