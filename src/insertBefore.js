const findByIndex = require("./findByIndex");
const Node = require("./Node");
function insertBefore(value,index){
    let current = findByIndex.bind(this)(index);
    let prev = findByIndex.bind(this)(index-1);
    if(current){
        if(prev !== null) {
            prev.next = new Node(value,current);
            this.length++;
            return true;
        }else{
            this.head = new Node(value,current);
            this.length++;
            return true;
        }
    }else{
        return false;
    }
}

module.exports = insertBefore;