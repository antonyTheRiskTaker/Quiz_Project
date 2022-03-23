class QuizRouter {
  constructor(/*quizService,*/express) {
    // this.quizService = quizService;
    this.express = express;
  }

  router() {
    let router = this.express.Router();

    router.get('/', this.get.bind(this));
    router.get('/admin', this.getAdmin.bind(this));
    // router.post();
    // router.put();
    // router.delete();

    return router;
  }

  // Homepage
  get(req, res) {
    res.render("home");
  }

  getAdmin(req, res) {
    res.render("admin", { layout: false });
  }

  // post(req, res) { }

  // put(req, res) { }

  // delete(req, res) { }
}

module.exports = QuizRouter;