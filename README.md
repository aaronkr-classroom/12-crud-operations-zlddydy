# 사용자 모델 제작

이번 과제에서는 "사용자 모델 제작" 배웁니다.

이 과제는 4 부분으로 나뉩니다.

1. '데이터 모델의 개선' (17장)
2. '사용자 모델의 구현' (18장)
3. '모델의 생성과 읽기' (19장)
4. '모델의 업데이트와 삭제' (20장)

---

## 1. 데이터 모델의 개선

1. Add validations to the **`Subscriber`** model in `models/Subscriber.js`.<br>
    `models/Subscriber.js`의 `Subscriber` 모델에 유효성 검사를 추가합니다.
2. Add instance methods to the `Subscriber` model in `models/Subscriber.js`.<br>
    `models/Subscriber.js`의 `Subscriber` 모델에 인스턴스 메서드를 추가합니다.
3. Create a **`Course`** model in `models/Course.js`.<br>
    `models/Course.js`에 `Course` 모델을 생성합니다.
4. **Seed** the database with _courses_ in `seedCourses.js`.<br>
    `seedCourses.js`에서 데이터베이스에 코스를 씁니다.
5. Set up associations between the `Subscriber` and `Course` models in `models/Subscriber.js`.<br>
    `models/Subscriber.js`의 `Subscriber`와 `Course` 모델 사이의 연관 관계를 설정합니다.
6. **Seed** the database with _subscribers_ in `seedSubscribers.js`.<br>
    `seedSubscribers.js`에서 데이터베이스에 구독자를 씁니다.
7. Randomly associate subscribers with courses in and populate subscribers' courses.<br>
    구독자를 코스에 무작위로 연결하고 구독자의 코스를 채웁니다.

---

## 2. 사용자 모델의 구현

1. Build a **`User`** model in `models/User.js` and a add virtual attribute.<br>
    `models/User.js`에 `User` 모델을 생성하고 가상 속성을 추가합니다.
2. **Seed** the database with _users_ in `seedUsers.js`.<br>
    `seedUsers.js`에서 데이터베이스에 사용자를 씁니다.
3. Associate subscribers with users.<br>
    구독자를 사용자와 연결합니다.
4. Create a `userController.js` in the `controllers` folder.<br>
    `controllers` 폴더에 `userController.js`를 생성합니다.
5. Create a `users` folder in the `views` folder and add `index.ejs` to it.<br>
    `views` 폴더에 `users` 폴더를 생성하고 `index.ejs`를 추가합니다.

---

## 3. 모델의 생성과 읽기

1. Add `new` and `create` routes for users in `main.js`.<br>
    `main.js`에 사용자의 `new`와 `create` 라우트를 추가합니다.
2. Create functions for `new` and `create` in `controllers/userController.js`.<br>
    `controllers/userController.js`에 `new`와 `create` 함수를 생성합니다.
3. Add a pre('save') hook to the `User` model in `models/User.js`.<br>
    `models/User.js`의 `User` 모델에 `pre('save')` 훅을 추가합니다.
4. Add a `show` route for users in `main.js` using the `:id` parameter, and create a function for it in `controllers/userController.js`.<br>
    `main.js`에 `:id` 매개변수를 사용하여 사용자의 `show` 라우트를 추가하고 `controllers/userController.js`에 함수를 생성합니다.

---

## 4. 모델의 업데이트와 삭제

1. Add `method-override` to your project and require it in `main.js`.<br>
    `method-override`를 프로젝트에 추가하고 `main.js`에서 요구합니다.
2. Add `edit` and `update` routes for users and create functions for them in `controllers/userController.js`.<br>
    `controllers/userController.js`에 사용자의 `edit`와 `update` 라우트를 추가하고 함수를 생성합니다.
3. Add a `delete` route for users and create a function for it in `controllers/userController.js`.<br>
    `controllers/userController.js`에 사용자의 `delete` 라우트를 추가하고 함수를 생성합니다.
4. Update the `show` route for users in `main.js` to include a link to the `edit` and `delete` routes.<br>
    `main.js`의 사용자의 `show` 라우트를 업데이트하여 `edit`와 `delete` 라우트에 대한 링크를 포함합니다.

---

## 과제 파일

These files will need to be updated to complete the assignment. / 이 파일들을 업데이트하여 과제를 완료해야 합니다.

- **6-crud-operations `(16/16)`** _(5월 26일까지)_
  - [lesson-17](./lesson-17) (Seed + associate data)
    - /models/Subscriber.js `(2/2)`
    - /models/Course.js `(2/2)`
  - [lesson-18](./lesson-18) (Users MVC)
    - /models/User.js `(2/2)`
    - /controllers/userController.js `(2/2)`
  - [lesson-19](./lesson-19) (CREATE + READ)
    - /models/User.js `(2/2)`
    - /controllers/userController.js `(2/2)`
  - [lesson-20](./lesson-20) (UPDATE + DELETE)
    - /controllers/userController.js `(2/2)`
    - main.js `(2/2)`
