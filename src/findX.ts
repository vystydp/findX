export function findXInArray(x: number, arr: Array<number>): number {
    let left: number = 0;
    let right: number = arr.length;
  
    while (left < right) {
      const mid: number = Math.floor((left + right) / 2);
      if (x > arr[mid]) left = mid + 1;
      else right = mid;
    }
  
    return arr[left] === x ? left : -1;
}