# The Usefulness of the "Keyof" Operator

In big and complex projects ,like real-world applictaions, you have many moving parts that all depend on each other to function. In such a scenario, every line of code matters. All it would take is making a mistake with one small variable to cause your whole apllication to come crashing down.

With the cherry on top being that you wont be able to narrow down the culprit easily, in a codebase with hundreds of files and thousands of varibles.

There are many different strategies to prevent this. One of them being to limit the amount of Hardcoding. Because the more Hardcoded values are; the higher the chance of an application crash, because you missed some due to normal human error.

## What is it?

This operator gives you an Union of the keys of a type/interface/object, as a string literal.

Its dynamic so we can safely extend the Union if and when needed by changing a single variable.

```
type User = {
"name":string,
"age":string
}
type info = "name"| "age" // manual hardcodinng way
type innfo2 = keyof  User; // Much better, as it automaticlly updated when new additions are made to User.
```

Without keyof there would a jumble mess of hardcoded Union types across the entire codebase of a large project.

As you can see from above "info2" is:

    - cleaner
    - flexible
    - reusable

# Typescript: The Myth, The Legend

Typescript is a statically typed prgramming language built on top of Javascript, that extends the functionnality of Javascript by long margin.

It has become the industry standard in web development; even above Javascript itself.

But Why?Well there are lots of reasons:

1. ## Static Typing

   Typescript adds types to Javascript, which catches a lot of errors during developmment instead of runtime.

   It prevents a lot of bugs, like:

   - Accessing propeties that dont exist.
   - Adding strins and numbers.
   - passing the wrong parameter to a function. and many more.

2. ## Supports Object-Oriented Programming

   OOP is the industry standard in many IT sector; not just Web. It is an important topic that every programmer should know to be professional.

   No JS does have a unique type of OOP, but it is it and not very intuitive.

   On the other hand, TS supported OOP is very similar how OOP works inn other languages.

   Therefore, TS devs will easily able to transfer their skills to something like C#.

3. ## Makes Collabs Easier

   TS enforces a strict standard of how code should be written. This makes collaborating with other developers easier.

   In a real-life project you will have to work with tens of different developers on the same codebase. With JS, the codebase would easily become a hot mess due to different devs having different writing styles.

   Someone might make a function that is hard to understand what it does. Thus reducing productivity as you would nneed to look up the function code, otherwise you would break something trying to use it.

   Ts static typing and consistency fixes this. As just by calling the function you get all the info you need: What type of params it takes? What it returns? etc.

   Thus, TS improves the readability of your code, making collabs easier and boosting productivity.

4. ## Javascript Integration

   Typescript at the end of the day is compiled to vanilla Javascript. Therefore, it is tightly integrated with Javascript. Almost every JS library will work with TS flawlessly; others would need a bit tweaking

   It supports the modern ECMASccipt, with backward compatibility.

   If you want to use es5 or es6 or others, just specify it in tsconfig file and the compiler would do it.

With all the above points it can easily be seen why Typescript became the preferred option for big corporations.

At the end of the Typescript has all the versality of Javascript wrapped in several safety blankets to make development as painless for developers as possible.
