import DataLoader from "dataloader";
import { tags } from "./database.js";

export class TagsDataSource {
  private loader = new DataLoader(async (keys: readonly number[]) => {
    console.log("Fetching tags", keys);
    return keys.map((key: number) => tags.filter((tag) => tag.post_id === key));
  });

  async getTagsBy(postId: number) {
    return this.loader.load(postId);
  }
}
