<p align="center">
  <img src="./screenshot/banner.png"/>
</p>

# About
A food recipe app side project build with <a href="#"><img alt="React Native" src="https://img.shields.io/badge/-React Native-3391ff?logo=React&logoColor=white"></a> <a href="#"><img alt="Strapi" src="https://img.shields.io/badge/-Strapi-8c4bff?logo=Strapi&logoColor=white"></a> <a href="#"><img alt="GraphQL" src="https://img.shields.io/badge/-GraphQL-e10098?logo=Graphql&logoColor=white"></a>

---

# Installation guide

### Running Server

1. install dependencies and run server side

```
$ git clone https://github.com/syahirdev/food-recipe.git
$ cd server
$ yarn install && yarn develop
```

### Running Client (Android)

1. add .env file into the folder `food-recipe/client/.env`
```
BASE_URL=http://192.168.x.x (replace with your own ip address)
```

> Note: to get the ip address for windows, open cmd and insert `ipconfig`, then select ipv4 address as the base_url.

2. install dependencies and run client side
```
$ cd client
$ yarn install && yarn start
$ yarn android
```

---

# Screenshots

### 1. Landing Screen
![](./screenshot/landing-screen.png)

---

### 2. Home Screen
![](./screenshot/home-screen.png)
![](./screenshot/home-screen2.png)

---

### 3 Recipe Details Screen
![](./screenshot/recipe-screen.png)

---

### 4. Search Screen
![](./screenshot/search-screen.png)
![](./screenshot/search-screen2.png)

---

### 5. Bookmark Screen
![](./screenshot/bookmark-screen.png)

---

### 6. Add New Recipe Screen
![](./screenshot/addrecipe-screen.png)
![](./screenshot/addrecipe-screen2.png)
