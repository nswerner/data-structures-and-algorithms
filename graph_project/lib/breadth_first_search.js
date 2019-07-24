function breadthFirstSearch(startingNode, targetVal) {
    const visited = new Set();
    const queue = [ startingNode ]

    while (queue.length) {
        const currentNode = queue.shift();
        if (visited.has(currentNode)) continue;
        
        visited.add(currentNode);

        if (currentNode.val === targetVal) return currentNode;

        queue.push(...currentNode.neighbors);
    }

    return null;
}

module.exports = {
    breadthFirstSearch
};