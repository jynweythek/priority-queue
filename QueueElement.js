"use strict";
class QueueElement {
    constructor(priority) {
        this.priority = priority;
    }
}
class PriorityQueue {
    constructor(items) {
        this.isPrinted = false;
        this.items = items;
    }
    sortByPriority() {
        const outObject = this.items.reduce(function (sorted, el) {
            let estKey = el['priority'];
            (sorted[estKey] ? sorted[estKey] : (sorted[estKey] = [])).push(el);
            return sorted;
        }, []);
        return outObject
            .filter((el) => el)
            .reduce((acc, val) => [...acc, ...val], []);
    }
    run() {
        let sorted = this.sortByPriority();
        for (let key of sorted) {
            // console.log('Item priority:', key['priority']);
            console.table(key);
        }
    }
}
const items = [
    { priority: 88 },
    { priority: 7 },
    { priority: 5 },
    { priority: 3 },
    { priority: 1 },
    { priority: 6 },
    { priority: 10 },
    { priority: 110 },
    { priority: 101 },
    { priority: 11 },
    { priority: 12 },
    { priority: 99 },
    { priority: 22 },
];
let q = new PriorityQueue(items);
// q.hasMostPriority();
q.run();
