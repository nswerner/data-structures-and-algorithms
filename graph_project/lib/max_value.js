function maxValue(node) {
    const visited = new Set();
    const queue = [ node ];
    let max = -Infinity;

    while (queue.length) {
        const currentNode = queue.shift();
        if (visited.has(currentNode)) continue;

        visited.add(currentNode);
        max = Math.max(currentNode.val, max);

        queue.push(...currentNode.neighbors);
    }

    return max;
}


function maxValue(node, visited=new Set()) {
    if (visited.has(node)) return -Infinity;
    visited.add(node);

    let max = node.val;

    node.neighbors.forEach( neighbor => {
        max = Math.max( maxValue(neighbor, visited), max);
    })

    return max;
}

module.exports = {
    maxValue
};