# Nodejs Example API Getting Started

A simple Nodejs project, with three major functionalities -

 * Authentication
 * Authorization
 * CRUD operations

### 1. Clone the repository and install dependencies

```
git clone https://github.com/alokpaidalwar/nodejs-api-example.git
cd nodejs-api-example
npm install
```

### 2. Configure your local environment

Add ```mongodb url``` and ```jwt secret``` in .env file

### 3. Start the application

To run your site locally, use:

```
npm run dev
```

To run as production, use:

```
npm run start
```

## Testing the API routes.

### Authentication
This is a mock authentication so you can pass in any username or password to login.
 1. Set the request to **POST** and the url to _/api/login_. 
 2. In the **Body** for the Postman request, select **x-www-form-urlencoded**.
 3. Set two 2 keys- Set the ```username``` key to any name for ```student``` role and 'admin' for ```admin``` role. Set ```password``` to anything.
 4. Hit ```Send```. You will get the token, role and username:

### Posts API's
A. GET all posts by pagination
 1. Set the request to **GET** and the url to _/api/post_.
 2. Pass two query parameters page & perPage. Eg
 ```
 localhost:3000/api/post?page=1&perPage=3
 ```
 3. Since this is a secure route, for testing, you will have to set the token in the ```Header```. Set key as ```token``` and value as token you received from **Authentication**.

B. GET a post by id
 1. Set the request to **GET** and the url to _/api/post/:id_.
 2. Url Example
 ```
 localhost:3000/api/post/61da4fd87e3fc45e78cfd95f
 ```
 3. Since this is a secure route, for testing, you will have to set the token in the ```Header```. Set key as ```token``` and value as token you received from **Authentication**. 
 
C. Create a post
 1. Set the request to **POST** and the url to _/api/post_.
 2. In the **Body** for the Postman request, select **x-www-form-urlencoded**.
 3. Set the key ```title``` to create post with title. Eg.
 ```
 { "title": "my first post"}
 ```
 4. Since this is a secure route, for testing, you will have to set the token in the ```Header```. Set key as ```token``` and value as token you received from **Authentication**.

D. Update a post
 1. Set the request to **PATCH** and the url to _/api/post/:id_.
 2. In the **Body** for the Postman request, select **x-www-form-urlencoded**.
 3. Set the key ```title``` to create post with title. Eg.
 ```
 { "title": "my updated first post"}
 ```
 4. Url Example
 ```
 localhost:3000/api/post/61da4fd87e3fc45e78cfd95f
 ```
 5. Since this is a secure route, for testing, you will have to set the token in the ```Header```. Set key as ```token``` and value as token you received from **Authentication**.

E. Delete a post
 1. Set the request to **DELETE** and the url to _/api/post/:id_.
 2. Url Example
 ```
 localhost:3000/api/post/61da4fd87e3fc45e78cfd95f
 ```
 5. Since this is a secure route, for testing, you will have to set the token in the ```Header```. Set key as ```token``` and value as token you received from **Authentication**.


## Unit Testing

Run ```npm test``` from the application's root directory.