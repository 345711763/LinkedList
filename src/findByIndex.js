function findByIndex(index){
    //如果输入的index超出了长度范围或者index为负数，立即返回null
    if(index > this.length-1 || index < 0){
        return null
    }else{
        let current = this.head;
        for(let i=0;i<index;i++){
            current = current.next;
        }
        return current;
    }
}

module.exports = findByIndex;
