const Node = require("./Node");
function addNode(value){
    //如果这个节点是第一个节点，把这个节点设置成root
    //如果这个节点不是第一个节点，则加入末尾
    if(this.length === 0){
        this.head = new Node(value,null);
    }else{
        this.lastNode().next = new Node(value,null);
    }
    //LinkedList长度增加1;
    this.length++;
}

module.exports = addNode;