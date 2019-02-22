function deleteByIndex(index){
    //如果输入的index超出了长度范围或者index为负数，立即返回null
    if(index > this.length-1 || index < 0){
        return false;
    }else{
        //如果index是0,表示要重新设置头结点
        if(index === 0){
            this.head = this.head.next;
            this.length--;
            return true;
        }else {
            let current = this.head;
            let prev = null;
            for (let i = 0; i < index; i++) {
                prev = current;
                current = current.next;
            }
            prev.next = current.next;
            this.length--;
            return true;
        }
    }
}

module.exports = deleteByIndex;
