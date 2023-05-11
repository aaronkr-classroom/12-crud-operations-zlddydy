# 사용자 모델 제작

## 2. 사용자 모델의 구현 (18장)

1. Build a **`User`** model in `models/User.js` and a add virtual attribute.<br>
   `models/User.js`에 `User` 모델을 생성하고 가상 속성을 추가합니다.
2. **Seed** the database with _users_ in `seedUsers.js`.<br>
   `seedUsers.js`에서 데이터베이스에 사용자를 씁니다. **(REPL 대신)**
3. Associate subscribers with users.<br>
   구독자를 사용자와 연결합니다. **(링크 나중에)**
4. Create a `userController.js` in the `controllers` folder.<br>
   `controllers` 폴더에 `userController.js`를 생성합니다.
5. Create a `users` folder in the `views` folder and add `index.ejs` to it.<br>
   `views` 폴더에 `users` 폴더를 생성하고 `index.ejs`를 추가합니다.

---

## 과제 파일

These files will need to be updated to complete the assignment. / 이 파일들을 업데이트하여 과제를 완료해야 합니다.

- [lesson-18](./lesson-18) (Users MVC)
  - /models/User.js `(2/2)`
  - /controllers/userController.js `(2/2)`

---

## 전체 파일

```
├── main.js (18과: usersController.indexView 추가)
├── package-lock.json
├── package.json
│
├── /controllers
│   ├── errorController.js
│   ├── homeController.js (17과: `courses` 배열 삭제해도 됨)
│   ├── subscribersController.js
│   └── usersController.js (18과: 새로 생성)
│
├── /data
│   ├── repl.js (REPL 명령어 - 보기만 해도 됨)
│   ├── seedCourses.js (17과: `node seedCourses.js`로 실행)
│   ├── seedSubscribers.js (17과: `node seedSubscribers.js`로 실행)
│   └── seedUsers.js (18과: `node seedUsers.js`로 실행)
│
├── /models
│   ├── `Course.js` (17과)
│   ├── `Subscriber.js` (17과)
│   └── `User.js` (18과: 새로 생성)
│
├── /public
│   ├── /css
│   ├── /img
│   └── /js
│
├── /views
│   ├── /partials
|   |   ├── _confetti.ejs
|   |   ├── _navigation.ejs (17과: 구독자, 코스, 사용자 목록 링크 추가)
│   │   ├── _footer.ejs
│   │   └── _header.ejs
│   │
│   ├── /users (18과: 새로 생성)
│   │   └── index.ejs (18과: 새로 생성)
│   │
│   ├── contact.ejs
│   ├── error.ejs
│   ├── index.ejs
│   ├── layout.ejs
│   ├── subscribers.ejs (17과: 구독자 정보 데이터 추가)
│   ├── thanks.ejs
│   └── transportation.ejs
```
