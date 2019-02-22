function deleteNodes(value){
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
}
module.exports = deleteNodes;