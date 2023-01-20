import {erro} from "../modal/sweetalert2"


const hashTableSize = 10;
const hashTable = new Array(hashTableSize);

const MakeTable = (str) =>{
    try{
        let hash = 0;
        if (str.length === 0) return hash;
        for (let i = 0; i < str.length; i++) {
            const char = str.charCodeAt(i);
            hash = (hash << 5) - hash + char;
            hash = hash & hash;
        }
        return hash;
    }
    catch (error){
        erro(error);
    }

}


function hashFunction(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
        const char = key.charCodeAt(i);
        hash = (hash << 5) - hash + char;
        hash = hash & hash;
    }
    return key % hashTableSize + hash;
}

function put(key, value) {
    const index = hashFunction(key);
    if (hashTable[index] === undefined) {
        hashTable[index] = { key, value };
    } else {
        let nextIndex = (index + 1) % hashTableSize;
        while (hashTable[nextIndex] !== undefined) {
            nextIndex = (nextIndex + 1) % hashTableSize;
        }
        hashTable[nextIndex] = { key, value };
    }
}

function get(key) {
    const index = hashFunction(key);
    if (hashTable[index] !== undefined) {
        if (hashTable[index].key === key) {
            return hashTable[index].value;
        }
        let nextIndex = (index + 1) % hashTableSize;
        while (hashTable[nextIndex] !== undefined && hashTable[nextIndex].key !== key) {
            nextIndex = (nextIndex + 1) % hashTableSize;
        }
        if (hashTable[nextIndex] !== undefined && hashTable[nextIndex].key === key) {
            return hashTable[nextIndex].value;
        }
    }
    return undefined;
}

put(1, "value1");
put(2, "value2");
put(11, "value3");
console.log(get(11)); // prints "value3"



export {MakeTable, hashFunction};