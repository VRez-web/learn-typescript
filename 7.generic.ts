const arrayOfNumbers: Array<number> = [1, 2, 3, 45, 5]
const arrayOfStrings: Array<string> = ['1', '2', '3', '45', '5']

function reverse<T>(arr: T[]): T[] {
    return arr.reverse()
}

reverse(arrayOfNumbers)
reverse(arrayOfStrings)
