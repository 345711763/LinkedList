### How to install
    npm install --save linked-list-dtx
### How to use
```Javascript
    let list = new LinkedList(...values); // create a linked list
```    
###### Available Methods
```Javascript
    list.add(value)         // add a Node to the end of list
    list.findNode(value)    // Return the first node whose value is equal to input value. If no such node, return null;
    list.findeNodes(value)  // Return an array of nodes whose value is equal to input value. If no such node, return an empty array 
    list.deleteNode(value)  // Delete the first node whose value is equal to input value. If there is one to delete, return true.
                            //If no such node to delete, return false;
    list.last()             //Return the last node
    list.toString()         //Return a string to show the list.
```    
### Example
```Javascript
    const LinkedList = require("LinkedList");
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
