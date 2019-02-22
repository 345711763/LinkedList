const addNode = require("./src/addNode.js");
const deleteNode = require("./src/deleteNode");
const deleteNodes = require("./src/deleteNodes");
const findNode = require("./src/findNode");
const findNodes = require("./src/findNodes");
const indexOf = require("./src/indexOf");
const reverse = require("./src/reverse");
const toString = require("./src/toString");
const lastNode = require("./src/lastNode");
const Node = require("./src/Node");

//一个linkedList 对象有两个属性 head和length
function LinkedList(...values){
    if(values.length === 0){
        this.head = null;
        this.length = 0;
    }else {
        //根据输入的数据创建一个Linkendlist
        //#1 取values数组中的每一个value,生成一个Node,从而得到一个Node数组
        //#2 遍历Node数组中的每一个Node,把前面一个Node的next指针指向后面一个Node,最后一个元素指向null
        let nodes = [];
        values.forEach(value => {
            let newNode = new Node(value, null);
            nodes.push(newNode);
        });
        nodes.forEach((node, index, nodes) => {
            if (index !== nodes.length - 1) {
                node.next = nodes[index + 1];
            } else {
                node.next = null;
            }
        });
        this.length = nodes.length;
        this.head = nodes[0];
    }
}

LinkedList.prototype.addNode = addNode;

LinkedList.prototype.findNode = findNode; //找到第一个具有这个value的Node,返回一个Node

LinkedList.prototype.findNodes = findNodes; //找到所有具有这个value的Node,返回一个数组

LinkedList.prototype.deleteNode = deleteNode; //删除第一个具有该value的Node节点,如果删除了一个元素，则返回true,如果没有则返回false

LinkedList.prototype.deleteNodes = deleteNodes; //删除所有具有该value的Node节点,如果删除了一个元素则返回true,如果没有则返回false

LinkedList.prototype.lastNode = lastNode; //得到最后一个Node

LinkedList.prototype.toString = toString; //把LinkedList转换成字符串输出

LinkedList.prototype.indexOf = indexOf; //找到并且返回第一个value匹配的Node的下标,找不到则返回-1

LinkedList.prototype.reverse = reverse; //翻转list

module.exports = LinkedList;