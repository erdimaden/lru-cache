# LRUCache-Map 
Simple LRUCache implementation based on JavaScript Map. 

## Usage

Class initialization with the capacity 
```
const LRU = new LRUCache(3); 
```
## Store
Stores the given key value pair 
```
LRU.set(`product-item-3521`, `1562`)
```

## Retrieve 
Gets the value of the key
```
LRU.get(`product-item-3521`)
```

## Cache Size 
Returns the size of the cache
```
LRU.size()
```

## Check the value exist
Checks the key in currently in cache. 
```
LRU.has(`product-item-3521`)
```

## Stored Keys 
Returns the keys of actively stored values
```
LRU.keys()
```

## Accessing the first item of the cache 
```
LRU.getFirst()
```

## Clear  
Removes all the values from cache
```
LRU.clear()
```

