const validateKey = (key, value, expirationTime) => {
	if (!Number.isInteger(key) || !Number.isInteger(value)) throw new Error('Key and value must be integers.');
	if (!Number.isInteger(expirationTime) || expirationTime <= 0) throw new Error('TimeToLive must be a positive integer.');
};

class TimeLimitedCache {
    constructor() {
        this.cache = new Map(); // store key-value items
    }

    set(key, value, duration) {
		validateKey(key, value, duration); // validates that key, value and expirationTime are integers and that expirationTime is a positive integer

        const currentTime = Date.now();
        const expirationTime = currentTime + duration;
        const exists = this.cache.has(key) && this.cache.get(key).expiration > currentTime; // check if the key already exists and is unexpired

        this.cache.set(key, { value, expiration: expirationTime }); // Set/overwrite the key with the new value and expiration

        return exists; // return the key if already existed or is unexpired
    }

    get(key) {
        const currentTime = Date.now();
        const item = this.cache.get(key);

        return item && item.expiration > currentTime ? item.value : -1; // return the value if the key is unexpired, otherwise return -1
    }

    count() {
        const currentTime = Date.now();
        let count = 0;

        Array.from(this.cache.values()).forEach(item => item.expiration > currentTime && count++); // check all the cache items for expired keys to increase the count of unexpired keys

        return count; // Return the count of unexpired keys
    }
}

// Example
const actions = ["TimeLimitedCache", "set", "get", "count", "get"];
const values = [[], [1, 42, 100], [1], [], [1]];
const timeDelays = [0, 0, 50, 50, 150];

const cache = new TimeLimitedCache();
const outputs = [];

timeDelays.forEach((delay, index) => {
    setTimeout(() => {
        const action = actions[index];
        const value = values[index];

		switch(action) {
			case "set":
				outputs.push(cache.set(value[0], value[1], value[2]));
				break;
			case "get":
				outputs.push(cache.get(value[0]));
				break;
			case "count":
				outputs.push(cache.count());
				break;
		}

		console.log(`Delay: ${delay}\nIndex:${index}\n`, outputs); //after all actions are executed the outputs will be collected in the `outputs` variable
		console.log('\n');
	}, delay);
});