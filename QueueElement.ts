class QueueElement {
    priority: number;

    constructor(priority: number) {
        this.priority = priority;
    }
}

class PriorityQueue {
    protected items: any[];

    constructor(items: any[]) {
        this.items = items;
    }

    sortByPriority() {
        const outObject = this.items.reduce(function(sorted, el) {
            const estKey = el['priority'];
            (sorted[estKey] ? sorted[estKey] : (sorted[estKey] = [])).push(el);
            return sorted;
        }, []);

        return outObject
            .filter((el: QueueElement) => el)
            .reduce((acc: any, val: any) => [ ...acc, ...val ], []);
    }

    run() {
        let sorted = this.sortByPriority();
        for (let key of sorted) {
            console.log('Item priority:', key['priority']);
        }
    }
}
