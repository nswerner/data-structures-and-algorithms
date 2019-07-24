function numRegions(graph) {
    visited = new Set();
    let count = 0;

    for (let node in graph) {
        if (_numRegions(graph, node, visited)) count ++;
    }

    return count;
}

function _numRegions(graph, node, visited) {
    if (visited.has(node)) return false;
    visited.add(node);

    graph[node].forEach( neighbor => {
        _numRegions(graph, neighbor, visited);
    })

    return true;
}




module.exports = {
    numRegions
};


/*

    it('should return the number of connected components that make up the full graph', () => {
        let graph1 = {
            'a': ['b'],
            'b': ['a'],
            'c': ['d'],
            'd': ['e', 'c'],
            'e': ['d'],
        };
        expect(numRegions(graph1)).to.equal(2);

        let graph2 = {
            'x': [],
            'y': [],
            'z': []
        };
        expect(numRegions(graph2)).to.equal(3);
    });

    context('when the graph has a cycle', () => {
        it('should not get trapped in an infinite loop', () => {
            let graph1 = {
                'a': ['b'],
                'b': ['a'],
            };
            expect(numRegions(graph1)).to.equal(1);

            let graph2 = {
                'q': ['r'],
                'r': ['q'],
                's': ['t'],
                't': ['s', 'u', 'v'],
                'u': ['t', 'v'],
                'v': ['u', 't'],
                'w': []
            };
            expect(numRegions(graph2)).to.equal(3);

*/