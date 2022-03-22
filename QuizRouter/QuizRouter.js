const express = require('express');

class QuizRouter {
  constructor(quizService) {
    this.quizService = quizService;
  }

  router() {
    let router = express.Router();

    router.get('/', this.get.bind(this));
    router.post();
    router.put();
    router.delete();

    return router;
  }

  get() {}

  post() {}

  put() {}

  delete() {}
}

module.exports = QuizRouter;