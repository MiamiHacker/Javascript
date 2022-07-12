// string
const firstName = "Miami";
const lastName = "Hacker";
// number
let year = 2022
const birthYear = 2003
let age = year - birthYear;
// boolean
let user = false
// Undefined means not defined yet so it's a empty value
// Null also means empty value
let student;
// BigInt is for larger integers than the Number type cab hold
if (!user){
    console.log("firstName is a", typeof firstName, "\n", 
                "lastName is a", typeof lastName, "\n",
                "age is a", typeof age, "\n",
                "user is a", typeof user, "\n",
                "student is", typeof student)
    console.log("My name is", firstName, lastName, "and i'm", age, "yrs old.");
}

