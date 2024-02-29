import Home from "../models/homeModel.js";

class HomeController {
  static async listarReview(req, res) {
    try {
      const homePage = await Home.find({});
      res.status(200).json(homePage);
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - falha na requisição` });
    }
  }
  static async cadastrarReview(req, res) {
    try {
      const novoReview = await Home.create(req.body);
      res
        .status(201)
        .json({ message: "review cadastrado com sucesso", Home: novoReview });
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - falha ao cadastrar review` });
    }
  }
  static async excluirReview(req, res) {
    try {
      const id = req.params.id;
      await Home.findByIdAndDelete(id);
      res.status(200).json({ message: "Review removida" });
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - falha ao excluir review` });
    }
  }
}

export default HomeController;
