function findNodes(value){
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
}

module.export = findNodes;