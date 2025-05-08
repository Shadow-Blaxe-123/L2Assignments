<h1>The Usefulness of the "Keyof" Operator</h1>

In big and complex projects ,like real-world applictaions, you have many moving parts that all depend on each other to function. In such a scenario, every line of code matters. All it would take is making a mistake with one small variable to cause your whole apllication to come crashing down.

With the cherry on top being that you wont be able to narrow down the culprit easily, in a codebase with hundreds of files and thousands of varibles.

There are many different strategies to prevent this. One of them being to limit the amount of Hardcoding. Because the more Hardcoded values are; the higher the chance of an application crash, because you missed some due to normal human error.

<h2>What is it?</h2>
This operator gives you an  Union of the keys of a type/interface/object, as a string literal.

Its dynamic so we can safely extend the Union if and when needed by changing a single variable.

```
type User = {
"name":string,
"age":string
}
type info = "name"| "age" // manual hardcodinng way
type innfo2 = keyof  User; // Much better, as it automaticlly updated when new additions are made to User.
```
Without keyof there would a jumble mess of  hardcoded Union types across the entire codebase of a large project.

As you can see from above "info2" is:
                  *cleaner
                  *flexible
                  *reusable











