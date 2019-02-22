function reverse(){
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
}

module.exports = reverse;