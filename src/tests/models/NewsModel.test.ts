import { describe, expect, it, vitest } from "vitest";
import News from "../../models/NewsModel.js";

describe("Testing model NewsPage", () => {
  const newsPost = {
    title: "Frost Punk 2",
    description:
      "Descubra um jogo de sobrevivência de cidade ambientado 30 anos após uma nevasca apocalíptica que devastou a Terra.",
    slug: "frost-punk-2",
  };

  it("instance new post in newspage", () => {
    const newPost = new News(newsPost);

    expect(newPost).toEqual(expect.objectContaining(newsPost));
  });

  it.skip("save newPost in database", () => {
    const newPost = new News(newsPost);

    newPost.save().then((datas) => {
      expect(datas.title).toBe("Frost Punk 2");
    });
  });

  it.skip("save newsPost in database using new sintaxe", async () => {
    const newPost = new News(newsPost);

    const datas = await newPost.save();

    const res = await News.find(datas.id);

    expect(res).toEqual(
      expect.objectContaining({
        id: expect.any(String),
        ...newsPost,
        created_at: expect.any(String),
        updated_at: expect.any(String),
      })
    );
  });

  it("create mock to DataBase", () => {
    const newPost = new News(newsPost);

    newPost.save = vitest.fn().mockReturnValue({
      title: "Frost Punk 2",
      description:
        "Descubra um jogo de sobrevivência de cidade ambientado 30 anos após uma nevasca apocalíptica que devastou a Terra.",
      slug: "frost-punk-2",
      created_at: "2022-10-01",
      updated_at: "2022-10-01",
    });

    const res = newPost.save();

    expect(res).toEqual(expect.objectContaining(newsPost));
  });
});
