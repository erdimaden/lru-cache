import LRUCache from "../index";

describe("LRUCache base test cases", () => {
  test("Capacity value should raise if the value is not a number", () => {
    expect(() => {
      new LRUCache(true);
    }).toThrow(`Capacity must be number`);
  });

  test("Remove unused keys", () => {
    let cache = new LRUCache(3);
    Array(100)
      .fill(0)
      .forEach((_, v) => {
        expect(cache.size()).toBeLessThan(4);
        cache.set(v, "v:" + v);
      });
    for (let i = 0; i < 10; i++) cache.set(3, "v:3");
    expect(cache.get(3)).toEqual("v:3");
  });
  test("Make sure overall all the methods work", () => {
    let cache = new LRUCache(3);
    [1, 2, 3, 4, 5].forEach((v) => cache.set(v, "v:" + v));
    expect(cache.get(2)).toEqual(undefined);
    expect(cache.get(3)).toEqual("v:3");
    expect(cache.get(3)).toEqual("v:3");
    expect(cache.has(3)).toEqual(true);
    cache.set(6, 6);
    expect(cache.get(6)).toEqual(6);
    expect(cache.get(4)).toEqual(undefined);
    expect(cache.get(3)).toEqual("v:3");
    expect(cache.size()).toEqual(3);
    expect([...cache.keys()]).toEqual([5, 6, 3]);
    cache.clear();
    expect(cache.size()).toEqual(0);
    expect({ ...cache.keys() }).toEqual({});
  });

  test("Remove unused keys", () => {
    let cache = new LRUCache(3);
    Array(100)
      .fill(0)
      .forEach((_, v) => {
        expect(cache.size()).toBeLessThan(4);
        cache.set(v, "v:" + v);
      });
    for (let i = 0; i < 10; i++) cache.set(3, "v:3");
    expect(cache.get(3)).toEqual("v:3");
  });

  test("Cache should be capable to store Any object", () => {
    function TreeNode(val) {
      this.val = val;
    }
    let cache = new LRUCache(3);
    cache.set(1, new TreeNode(1));
    cache.set(2, new TreeNode(2));
    cache.set(3, new TreeNode(3));

    expect(cache.get(1).val).toEqual(1);
    expect(cache.get(2).val).toEqual(2);
    expect(cache.get(3).val).toEqual(3);
  });
});
