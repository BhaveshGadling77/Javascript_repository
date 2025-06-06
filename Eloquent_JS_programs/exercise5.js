/* Write a class Vec that represents a vector in two-dimensional space. It takes x
and y parameters (numbers), that it saves to properties of the same name.
Give the Vec prototype two methods, plus and minus, that take another
vector as a parameter and return a new vector that has the sum or difference
of the two vectors’ (this and the parameter) x and y values.
Add a getter property length to the prototype that computes the length of
the vector—that is, the distance of the point (x, y) from the origin (0, 0).*/

class vec {
   constructor(x, y) {
    this.x = x
    this.y = y
   }
   plus(other) {
    return new vec(this.x + other.x , other.y + this.y);
   }
   minus(other) {
    return new vec(this.x - other.x, this.y - other.y)
   }
   get length() {
    return (Math.sqrt(this.x * this.x) + (this.y * this.y))
   }
}
 let A = new vec(1,2)
 console.log(A.plus(new vec(1,2)))
console.log(A.length)

/* The standard JavaScript environment provides another data structure called
Set. Like an instance of Map, a set holds a collection of values. Unlike Map, it
does not associate other values with those—it just tracks which values are part
of the set. A value can be part of a set only once—adding it again doesn’t have
any effect.
Write a class called Group (since Set is already taken). Like Set, it has add,
delete, and has methods. Its constructor creates an empty group, add adds
a value to the group (but only if it isn’t already a member), delete removes
its argument from the group (if it was a member), and has returns a Boolean
value indicating whether its argument is a member of the group.
Use the === operator, or something equivalent such as indexOf, to determine
whether two values are the same.
Give the class a static from method that takes an iterable object as its ar-
gument and creates a group that contains all the values produced by iterating
over it.*/

class Group {
    constructor(empty_group) {
        this.empty_group = empty_group
    }
}
// i will do this exercise later because i don't have command on the OOPs for now.