const isFetching: boolean = true
const isLoading: boolean = false

const int: number = 42
const float: number = 4.2
const num: number = 3e10

const message: string = 'hello typescript'

const numberArray: number[] = [1, 1, 2, 3, 5, 8, 13]
const numberArray2: Array<number> = [1, 1, 2, 3, 5, 8, 13]

const words: string[] = ['hello', 'typescript']

// Tuple
const contact: [string, number] = ['Victor', 29840234]

// Any
let variable: any = 42
// ...
variable = 'New string'
variable = []

// =====

function sayMyName(name: string): void {
    console.log(name)
}

sayMyName('Test')


// Never

function throwArrow(message: string): never {
    throw new Error(message)
}

function infinite(): never {
    while (true) {

    }
}

// Type

type Login = string

const login: Login = 'Admin'
// const login2:Login = 2

type ID = string | number

const id1: ID = 1234
const id2: ID = 'sldkfl;sd'
// const id3:ID = true

type SomeType = string | null | undefined
