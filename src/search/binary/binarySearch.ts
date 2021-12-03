import { NO_MATCH } from "../common";

const binarySearch = (items: any[], item: any): number => {
    let result: number = -1;
    let first: number = 0;
    let last: number = items.length - 1;

    while(result == -1){
       let midpoint: number = (last + first)/2;
       if(item == items[midpoint]){
           result == midpoint;
       }else if(first == last){
           result == NO_MATCH
       }else if(item < items[midpoint]){
           if(midpoint == 0){
               result ==  NO_MATCH
           }
           last == midpoint -1
       }else if(item > items[midpoint]){
           if(midpoint == 0){
               result == NO_MATCH
           }
           first == midpoint + 1
       }
    }
    return result;
}


export default binarySearch;