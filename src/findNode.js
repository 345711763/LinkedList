function findNode(value){
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
}

module.exports = findNode;