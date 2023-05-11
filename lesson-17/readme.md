# 사용자 모델 제작

## 데이터 모델의 개선 (17장)

1. Add validations to the **`Subscriber`** model in `models/Subscriber.js`.<br>
   `models/Subscriber.js`의 `Subscriber` 모델에 유효성 검사를 추가합니다.
2. Add instance methods to the `Subscriber` model in `models/Subscriber.js`.<br>
   `models/Subscriber.js`의 `Subscriber` 모델에 인스턴스 메서드를 추가합니다.
3. Create a **`Course`** model in `models/Course.js`.<br>
   `models/Course.js`에 `Course` 모델을 생성합니다.
4. Set up associations between the `Subscriber` and `Course` models in `models/Subscriber.js`.<br>
   `models/Subscriber.js`의 `Subscriber`와 `Course` 모델 사이의 연관 관계를 설정합니다.
5. **Seed** the database with _courses_ in `seedCourses.js`.<br>
   `seedCourses.js`에서 데이터베이스에 코스를 씁니다. **(REPL 대신)**
6. **Seed** the database with _subscribers_ in `seedSubscribers.js`.<br>
   `seedSubscribers.js`에서 데이터베이스에 구독자를 씁니다. **(REPL 대신)**
7. <del>Randomly associate subscribers with courses in and populate subscribers' courses.<br>
   구독자를 코스에 무작위로 연결하고 구독자의 코스를 채웁니다. **(나중에)**</del>

---

## 과제 파일

These files will need to be updated to complete the assignment. / 이 파일들을 업데이트하여 과제를 완료해야 합니다.

- lesson-17 (Seed + associate data)
  - /models/Subscriber.js `(2/2)`
  - /models/Course.js `(2/2)`

---

## 전체 파일

```
├── main.js
├── package-lock.json
├── package.json
│
├── /controllers
│   ├── errorController.js
│   ├── homeController.js (`courses` 배열 삭제해도 됨)
│   └── subscribersController.js
│
├── /data
│   ├── seedCourses.js (`node seedCourses.js`로 실행)
│   └── seedSubscribers.js (`node seedSubscribers.js`로 실행)
│
├── /models
│   ├── 17.9.js (REPL 명령어 - 보기만 해도 됨)
│   ├── repl.js (REPL 명령어 - 보기만 해도 됨)
│   ├── `Course.js`
│   └── `Subscriber.js`
│
├── /public
│   ├── /css
│   ├── /img
│   └── /js
│
├── /views
│   ├── /partials
|   |   ├── _confetti.ejs
|   |   ├── _navigation.ejs (구독자, 코스, 사용자 목록 링크 추가)
│   │   ├── _footer.ejs
│   │   └── _header.ejs
│   ├── contact.ejs
│   ├── error.ejs
│   ├── index.ejs
│   ├── layout.ejs
│   ├── subscribers.ejs (구독자 정보 데이터 추가)
│   ├── thanks.ejs
│   └── transportation.ejs
```
