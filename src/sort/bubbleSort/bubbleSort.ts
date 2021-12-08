import { SortAlgorithm } from "../common";
import swap from "../swap";

const bubbleSort: SortAlgorithm<any> = <T>(items: T[]): T[] => {

    // Your code here
    for(let top = items.length; top>1;top = top-1){
        let swapmade: boolean = false;
        for(let index = 0; index < (top);index++){
            if(items[index] > items[index+1]){
                swapmade=true;
                swap(items, index, index+1);
            }
        }
        if(!swapmade){
            break
        }
    }
    
    return items;
}

export default bubbleSort;