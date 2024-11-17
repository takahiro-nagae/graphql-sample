import DataLoader from "dataloader";
import { posts } from "./database.js";

export class PostsDataSource {
  private loader = new DataLoader(async (keys: readonly number[]) => {
    console.log("Fetching posts", keys);

    return keys.map((key: number) =>
      posts.filter((post) => post.author_id === key)
    );
  });

  async getPostsBy(authorId: number) {
    return this.loader.load(authorId);
  }
}
