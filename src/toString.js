function toString(){
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
}

module.exports = toString;