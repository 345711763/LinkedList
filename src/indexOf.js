function indexOf(value){
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
}

module.exports = indexOf;