const findByIndex = require("./findByIndex");
const Node = require("./Node");
function insertAfter(value,index){
    let current = findByIndex.bind(this)(index);
    if(current){
        current.next = new Node(value,current.next);
        this.length++;
        return true;
    }else{
        return false;
    }
}

module.exports = insertAfter;