
### How to install
```Javascript
    npm install --save linked-list-dtx
```    
### How to use
```Javascript
    let list = new LinkedList(...values); // create a linked list
```    
###### Available Methods
```Javascript
    add(value)              // Add a Node to the end of list
    findNode(val)           // Return the first node whose value is equal to input value. If no such node, return null;
    findeNodes(val)         // Return an array of nodes whose value is equal to input value. If no such node, return an empty array 
    findByIndex(index)      // Return the Node at certain index. If no such node, return null; 
    deleteNode(val)         // Delete the first node whose value is equal to input value. If there is one to delete, return true.If no such node to delete, return false;
    deleteNodes(val)        // Delete all Nodes whose value is equal to input value.If there is one to delete, return true.If no such node to delete, return false;
    deleteByIndex(index)    // Delete Node at certain index. Return true if one node is deleted, false if no node at input index.
    indexOf(val)            // Return the index of the first Node whose value is equal to input value. Return -1 if no such node. 
    reverse()               // Reverse the list
    insertBefore(val,index) // Insert a Node before the Node at certain index. Return true if success, false if can't find Node at input index.
    insertAfter(val,index)  // Insert a Node after the Node at certain index. Return true if success, false if can't find Node at input index.
    
    last()                  // Return the last node
    toString()              // Return a string to show the list.
```    
### Example
```Javascript
    const LinkedList = require("linked-list-dtx");
    let list = new LinkedList(1,3,4,5,3);
    console.log(list.toString());               // "1 3 4 5 3"
    
    list.add(1);
    console.log(list.toString());               // "1 3 4 5 3 1"
    console.log(list.findNode(4))               //Return a Node object { value: 4, next: Node}
    console.log(list.findNodes(1));             //Return an Array of Node objects [{value:1, next:Node},{value:1,next:null}]
    console.log(list.deleteNode(1));            //True
    console.log(list.toString());               //"3 4 5 3 1"
    console.log(list.last());                   //{value:1, next:null}
   
```
