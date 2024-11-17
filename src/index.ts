import { GraphQLFileLoader } from "@graphql-tools/graphql-file-loader";
import { loadSchemaSync } from "@graphql-tools/load";
import { addResolversToSchema } from "@graphql-tools/schema";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { PostsDataSource } from "./postsDataSource.js";
import { TagsDataSource } from "./tagsDataSource.js";
import { getAuthors } from "./authorsDataSource.js";

const schema = loadSchemaSync("schema.graphql", {
  loaders: [new GraphQLFileLoader()],
});

interface ContextValue {
  dataSources: {
    posts: PostsDataSource;
    tags: TagsDataSource;
  };
}

type Post = {
  id: number;
  title: string;
  body: string;
  tags?: string[];
};

type Author = {
  id: number;
  name: string;
};

const resolvers = {
  Query: {
    authors: () => getAuthors(),
  },
  Post: {
    tags: (parent: Post, _: any, { dataSources }: ContextValue) =>
      dataSources.tags.getTagsBy(parent.id),
  },
  Author: {
    posts: (parent: Author, _: any, { dataSources }: ContextValue) =>
      dataSources.posts.getPostsBy(parent.id),
  },
};

const schemaWithResolvers = addResolversToSchema({ schema, resolvers });
const apolloServer = new ApolloServer<ContextValue>({
  schema: schemaWithResolvers,
});
const { url } = await startStandaloneServer(apolloServer, {
  context: async () => {
    return {
      dataSources: {
        posts: new PostsDataSource(),
        tags: new TagsDataSource(),
      },
    };
  },
});
console.log(`Apollo Server started: ${url}`);
