interface Person {
    name: string
    age: Number
}

type PersonKeys = keyof Person // name, age

let key: PersonKeys = "name"
key = 'age'

// key = 'job' ошибочка

type User = {
    _id: number
    name: String
    email: string
    createdAt: Date
}

type UserKeysNoMeta = Exclude<keyof User, '_id' | 'createdAt'> // 'name', 'email'
type UserKeysNoMeta2 = Pick<User, 'name' | 'email'>// 'name', 'email'

let user1:UserKeysNoMeta = "name"
// user1 = '_id'
