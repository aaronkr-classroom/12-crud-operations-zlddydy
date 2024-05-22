// homeController.js
"use strict";

module.exports = {
  // 모든 컨트롤러 액션과 함께 객체 리터럴 익스포트
  /*
   * @TODO: showHome와 showTransportation 액션을 객체 리터럴로 묶어 익스포트
   */
  
showHome: (req, res) => {
  res.render("index");
  },
  showTransportation: (req, res) => {
    res.render("transportation");
  }
};
