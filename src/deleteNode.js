function deleteNode(value){
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
}

module.exports = deleteNode;