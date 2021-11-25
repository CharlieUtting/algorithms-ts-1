import { NO_MATCH } from "../common"

const binarySearch = (items: any[], item: any): number => {
    let index: number = -1;
    let found: boolean = false;
    let first: number = 0;
    let last: number = items.length - 1;


    while(found=false && first<last) {
        let midpoint: number = (first+last)/2
        if(items[midpoint] === items){
            index==midpoint;
            found==true;
        }else if(items[midpoint]<item) {
            first = midpoint + 1
        }else if(items[midpoint]>item) {
            last = midpoint - 1
        }
    }
    return index;
    return NO_MATCH;
}


export default binarySearch;