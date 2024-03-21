
interface UsersT {
    name: string,
    age: number,
    height: number,
    fantasy?: {
        hobby: string
    } 
}
const Users: UsersT = {
    name: "Jack",
    age: 12,
    height: 159
}

console.log(Users.fantasy?.hobby)