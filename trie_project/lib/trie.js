class Node {
    constructor() {
        this.children = {};
        this.isTerminal = false;
    }
}

class Trie {
    constructor() {
       this.root = new Node();
    }

    insertRecur(word, root=this.root) {
       if (word.length === 0) return;

       const letter = word[0];

       if (!(letter in root.children)) {
            root.children[letter] = new Node();
       } 

       if (word.length === 1) {
           root.children[letter].isTerminal = true;
       }
        
       this.insertRecur(word.slice(1), root.children[letter])
   }

    searchRecur(word, root=this.root) {
        if (word.length === 0) {
            if (root.isTerminal) { 
                return true;
            } else {
                return false;
            }
        }

       const letter = word[0];

        if (root.children[letter]) {
           return this.searchRecur(word.slice(1), root.children[letter]);
        } else {
           return false;
        }
   }

    insertIter(word) {
        let root = this.root;

        for (let idx = 0; idx < word.length; idx++) {
            const letter = word[idx];

            if (!(letter in root.children)) {
                root.children[letter] = new Node();
            }  
            
            root = root.children[letter];

            if (idx === word.length - 1) {
                root.isTerminal = true;
            }
        }
    }

    searchIter(word) {
        let root = this.root;

        for (let idx = 0; idx < word.length; idx++) {
            const letter = word[idx];

            if (!(letter in root.children)) {
                return false;
            } else {
                root = root.children[letter];

                if (idx === word.length - 1 && root.isTerminal) {
                    return true;
                }
            }
        }

        return false;
    }

    depthFirstTraversal(root = this.root) {
        if (!root) return;
        // if (Object.keys(root.children).length === 0) return;

        let result; 
        if this

        for (let letter in root.children) {
            const traversal = depthFirstTraversal(root.children[letter]);
            result.push(...traversal);
        }
    }

    wordsWithPrefix(prefix) {
        const matchingWords = [];
        let root = this.root;

        for (let idx = 0; idx < prefix.length; idx++) {
            const letter = prefix[idx];

            if (!(letter in root.children)) {
                return [];
            }

            root = root.children[letter];
        }


   }
}

module.exports = {
    Node,
    Trie
};


// 
//     t
//    / \
//   e   a
//  / \   \
// N   A   N
//      \
//       R

// [ ten, tea, tan, tear ]

// at every terminal node, print that word, and keep looking until this.children = {} is empty (or root is null)