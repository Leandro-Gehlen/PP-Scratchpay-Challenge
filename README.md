# PP-Scratchpay-Challenge

> - **Scratchpay Challenge:** A test covered search verb that returns clinics. Must be built in Node JS and using Clean Architecture and Clean Code. Also, must be containerised with GithubActions (CI) and the container image must be available for download on DockerHub after the applications has been automatically tested.

---

## Preparing the project to this challenge

### Eslint + Prettier + Husky + Lint-Staged + Jest

> **Important**
>
> - The package manager that should be used is **npm**. </br>
>   Otherwise husky might not run as expected. Yarn has a different approach to start husky.

- I have prepared the project to run eslint , prettier and jest on my vscode.
  Also, to ensure that the code that is been commited to this github repo have prettier and lint applied, I´ve configured Husky to run lint-staged that runs eslint , prettier and tests before any commit.

  ![Husky](https://github.com/Leandro-Gehlen/PP-Scratchpay-Challenge/blob/main/images/husky-works.png?raw=true)

---

## First things First. Let´s think!

### Assumptions

- This challenge must have just one endpoint, so **I will assum** that the frontend will be sending also the category of the clinic on the request. If it´s a **dental care** or a **vet** category.
- So I now have my **2 entites**. I also know now that I will need a **middleware** to know which entity the request is about.
- I will also need a **validation middleware**. It´s better if I make validations outside and before the controller **and even before I know which kind of entity the request is about**. Remember, controllers should not know about the domain layer.
- Once the request reachs the controller, I will already know the entity it´s about and also that I have all the params that I need to manage data as requested on the challenge.
- First, the controller **will call the entity helper class** that will send the query to the right **use case**. I might use a design pattern on this classes.(application layer).
- The use cases will receive as dependency injection instaces of the infra layer concrete classes.(Respecting the Dependency Invertion Principle - D of Solid) and each one of this classes on infra layer will be quering data on a specific way to return the pagination as expected.
- Remember, every class must have only one concern.(Single Responsability principle - S of Solid)
- That´s a nice starting point for this challenge. Let´s start.

### Entities

- **dental**
- **vet**

### Dental Use Cases

> **Receiving only NAME as a query param.**
>
> - Should identify that only a name param was passed.
> - Should send to the right usecase, that will receive an instance of the right repository
