# PP-Scratchpay-Challenge

> - **Scratchpay Challenge:** A test covered search verb that returns clinics. Must be built in Node JS and using Clean Architecture and Clean Code. Also, must be containerised with GithubActions (CI) and the container image must be available for download on DockerHub after the applications has been automatically tested.

---

## Running the project

- Note: Please use **npm** as a package manager

> git clone https://github.com/Leandro-Gehlen/PP-Scratchpay-Challenge.git </br>
> npm install

- See the section End to End test with insominia to know the body of the request that must be sent.
- Test the application using insominia or postman

## General Information about the challenge execution

- First I´ve configured husky to run eslint , prettier and jest on each commit.
- At the beginning I´ve tried to make this application with TDD. With strict mode on and because I don´t have practice with it, I´ve got stucked.
- So, I´ve decided to build a decoupled and testable application using Clean Architecture first.
- Made end to end tests with insominia and the application worked as expected.
- The design patterns applied was factory, strategy, adapter and repository patterns.
- I didn´t make pagination because without a database I will not be able to create a repository to execute each query as I´d like. Both cursor and off-set pagination needs a connection with database to be done. Also, I didn´t have time to mock it.
- What I did was to add an ID starting with 1 on each response object inside the array, that might help cursor pagination.
- Also I´ve made changes on object keys on the key:value pairs and standarized on the adapter class.
- I´ve mocked the database calls with verifications inside the adapter classes so data returns as expected when every search case.
- I´m not had time to make unit tests, but the application is totaly testable.
- Error handling must be improved yet. That might me done when the application is being tested.
- I´m delivering that way, because time ended up.

## Preparing the project to this challenge

### Eslint + Prettier + Husky + Lint-Staged + Jest

> **Important**
>
> - The package manager that should be used is **npm**. </br>
>   Otherwise husky might not run as expected. Yarn has a different approach to start husky.

- I have prepared the project to run eslint , prettier and jest on my vscode.
  Also, to ensure that the code that is been commited to this github repo have prettier and lint applied, I´ve configured Husky to run lint-staged that runs eslint , prettier and tests before any commit.

---

![husky](https://raw.githubusercontent.com/Leandro-Gehlen/PP-Scratchpay-Challenge/main/images/husky-works.jpg)

---

## ![testfailure](https://raw.githubusercontent.com/Leandro-Gehlen/PP-Scratchpay-Challenge/main/images/test-fails.jpg)

## First things First. Let´s think!

### Assumptions

- This challenge must have just one endpoint, so **I will assum** that the frontend will be sending also the category of the clinic on the request. If it´s a **dental care** or a **vet** category.
- So I now have my **2 entites**. I also know now that I will need a **strategy service** to know which entity the request is about.
- I will also need a **validation middleware**. It´s better if I make validations outside and before the controller **and even before I know which kind of entity the request is about**. Remember, controllers should not know about the domain layer.
- First, the controller **will call the strategy pattern helper class** that will send the request to the right **use case**. I I might use a design pattern on this classes.(application layer with an strategy design pattern applied).
- The use cases will receive as dependency injection instaces of the infra layer concrete classes.(Respecting the Dependency Invertion Principle - D of Solid) and each one of this classes on infra layer will be quering data on a specific way to return the pagination as expected.
- Remember, every class must have only one concern.(Single Responsability principle - S of Solid)
- That´s a nice starting point for this challenge. Let´s start.

### Entities

- **dental**
- **vet**

### Use Cases

> **Strategy Design Pattern Class**
>
> - Should identify which entity the request is about.
> - Should send to the right usecase.
> - Should return an IHttpResponse with pagination applied.

---

> **VetCategory use case**
>
> - Should choose the right pagination adapter method to receive the rigth pagination applied.
> - Should return an IHttpResponse with the right pagination applied.

---

> **DentalCategory use case**
>
> - Should choose the right pagination adapter method to receive the rigth pagination applied.
> - Should return an IHttpResponse with the right pagination applied.

---

> **VetAdapter**
>
> - Should implement the pagination
> - Should return an IHttpResponse with the right pagination applied to the array of VetEntities

---

> **DentalAdapter**
>
> - Should implement the pagination
> - Should return an IHttpResponse with the right pagination applied to the array of DentalEntities

---

> **VetRepository**
>
> -Should receive data.
> -Should return the new data as an IHttpResponse so pagination can be applied on VetPaginationAdapter class

---

> **DentalRepository**
>
> - Should receive data.
> - Should return the new data as an IHttpResponse so paginantion can be applied on the DentalPaginationAdapter class

---

> **ResquestDataValidationMiddleware**
>
> - Should ensure that at least a category will be received as param on body request.
> - Should ensure that no empty request reachs the controller

---

> **ChangeArrKeyHelperFunction**
>
> - Should receive a newKey, a oldKey and an array as args and return a new array with those keys exchaged.(Transform opening to availability on vet json data received for exemple)

---

## Clean Architecture Application Works! (Decoupled and Testable code)

## **End to End tests with insominia**

---

> ### **Receiving only vet category**

---

![onlyvet](https://raw.githubusercontent.com/Leandro-Gehlen/PP-Scratchpay-Challenge/main/images/vet-only-category-provided.jpg)

---

> ### **Receiving only dental category**

---

![onlyvet](https://raw.githubusercontent.com/Leandro-Gehlen/PP-Scratchpay-Challenge/main/images/dental-only-category-provided.jpg)
