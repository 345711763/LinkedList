//一个linkedList 对象有两个属性 root和length
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
//节点类
function Node(value = null,next = null){
    this.value = value;
    this.next = next;
}
LinkedList.prototype.addNode = function(value){
    //如果这个节点是第一个节点，把这个节点设置成root
    //如果这个节点不是第一个节点，则加入末尾
    if(this.length === 0){
        this.head = new Node(value,null);
    }else{
        this.lastNode().next = new Node(value,null);
    }
    //LinkedList长度增加1;
    this.length++;
};
//找到第一个具有这个value的Node,返回一个Node
LinkedList.prototype.findNode = function(value){
    //如果linkedlist为空，则返回null
    //如果linkendlist不为空，依次检查每个节点的值是否等于value,是则return这个节点,不是则判断下一个节点是否存在，如果存在，前往下一个节点，如果不存在return null;
    if(this.length === 0 ){
        return null;
    }else {
        let current = this.head;
        for(let i=0;i<this.length;i++){
            if(current.value === value){
                return current;
            }else if(!current.next){
                return null;
            }else{
                current = current.next;
            }
        }
    }
};
//找到所有具有这个value的Node,返回一个数组
LinkedList.prototype.findNodes = function(value){
    if(this.length === 0){
        return [];
    }else{
        let result = [];
        let current = this.head;
        for(let i=0;i<this.length;i++){
            if(current.value === value){
                result.push(current);
            }
            current = current.next;
        }
        return result;
    }
};
//删除第一个具有该value的Node节点,如果删除了一个元素，则返回true,如果没有则返回false
LinkedList.prototype.deleteNode = function(value){
    if(this.length === 0){
        return false;
    }else{
        let current = this.head;
        for(let i=0;i<this.length-1;i++){
            //分情况讨论:
            //1. a:如果是头节点且value相等，则把root指针指向头结点的next,长度-1,然后return true; 否则进入b
            //   b:  检查下一个节点的值是否匹配
            //      （I） 下一个节点的值不匹配，进入下一轮
            //      (II)  下一个节点的值匹配，将当前节点的next指向下一个节点的next指针,长度-1,然后return true
            if(i===0 && current.value === value){
                this.head = current.next;
                this.length--;
                return true;
            }else if(current.next.value === value){
                    current.next = current.next.next;
                    this.length--;
                    return true;
                }
            current = current.next;
        }
        //之前都没有return，说明没有找到匹配的Node，返回false
        return false;
    }
};
//删除所有具有该value的Node节点,如果删除了一个元素则返回true,如果没有则返回false
LinkedList.prototype.deleteNodes = function(value){
    //如果list为空，则return false;
    if(this.length === 0){
        return false;
    }
    //当list不为空,遍历list,每找到一个匹配的Node,把这个value的
    let prev = null;
    let current = this.head;
    let didDelete = false;
    while(current !== null){
        if(current.value === value){
            if(prev === null){
                this.head = current.next;
            }else{
                prev.next = current.next;
            }
            this.length --;
            didDelete = true;
        }else{
            prev = current;
        }
        current = current.next;
    }
    return didDelete;
};
//得到最后一个Node
LinkedList.prototype.lastNode = function(){
  if(this.length === 0){
      return null;
  }else{
      let last = this.head;
      while(last.next !== null){
          last = last.next;
      }
      return last;
  }
};
//把LinkedList转换成字符串输出
LinkedList.prototype.toString = function(){
    //如果list是空的，返回空串""， 不是空list,则遍历每一个节点，拼接每个Node的value值用space分割开，字符串最后不留space.
  if(this.length === 0){
      return "";
  }else{
      let str = "";
      let current = this.head;
      for(let i=0;i<this.length;i++){
          //判断当前是否是最后一个Node
          if(i === this.length-1){
              str += current.value;
          }else{
              str += current.value + " ";
              current = current.next;
          }
      }
      return str;
  }
};
//找到并且返回第一个value匹配的Node的下标,找不到则返回-1
LinkedList.prototype.indexOf = function(value){
    if(this.length === 0 ){
        return -1;
    }else {
        let current = this.head;
        for(let i=0;i<this.length;i++){
            if(current.value === value){
                return i;
            }else if(!current.next){
                return -1;
            }else{
                current = current.next;
            }
        }
    }
};
//revert list
LinkedList.prototype.reverse = function(){
    //list少于两个Nodes，什么都不做
    if(this.length >= 2){
        let prev = null;
        let current = this.head;
        while(current !== null){
            this.head = current; // keep track of head
            let temp = current.next;
            current.next = prev;
            prev = current;
            current = temp;
        }
    }
};

module.exports = LinkedList;