function lastNode(){
    if(this.length === 0){
        return null;
    }else{
        let last = this.head;
        while(last.next !== null){
            last = last.next;
        }
        return last;
    }
}

module.exports = lastNode;