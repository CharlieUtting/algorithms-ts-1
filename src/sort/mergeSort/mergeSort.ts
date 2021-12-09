import { SortAlgorithm } from "../common";

const mergeSort: SortAlgorithm<any> = <T>(items: T[]): T[] => {

    // Your code here
    if(items.length == 0){
        return items
      }
      return mergeSortRecurse<T>(items, 0, items.length - 1);
  }
  
  const mergeSortRecurse = <T>(inputArr: T[], leftPointer: number, rightPointer: number) => {
    if(leftpointer == rightpointer){
      return [inputArr[leftpointer]]
    }
    let midpoint: number = math.floor((rightPointer+leftPointer)/2)
    const firstHalf: T[] = mergeSortRecurse(inputArr, leftPointer, midpoint)
    const secondHalf: T[] = mergeSortRecurse(inputArr, midpoint + 1, rightPointer)
  
    const outputList = []
  
    while(firstHalf.length > 0 && secondHalf.length > 0){
      if(firstHalf[0] > secondHalf[0]){
        outputList.push(secondHalf.shift())
      } else {
        outputList.push(secondHalf.shift)
      }
    }
    outputList.push(firstHalf)
    outputList.push(secondHalf)
  
    return outputList
  }

    return items;
}

export default mergeSort;