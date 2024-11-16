import { gql } from "graphql-tag";
import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
    title: String,
    description: String,
});

const Movie = mongoose.model("Movie", movieSchema);

export const typeDefs = gql`
    type Movie {
        id: ID!
        title: String!
        description: String
    }

    type Query {
        movies: [Movie]
    }

    type Mutation {
        addMovie(title: String!, description: String): Movie
        removeMovie(id: ID!): Boolean
        updateMovie(id: ID!, title: String!, description: String): Movie
    }
`;

export const resolvers = {
    Query: {
        movies: async () => await Movie.find(),
    },
    Mutation: {
        addMovie: async (_: any, { title, description }: any) => {
            const movie = new Movie({ title, description });
            await movie.save();
            return movie;
        },
        removeMovie: async (_: any, { id }: { id: string }) => {
            const result = await Movie.findByIdAndDelete(id);
            return result ? true : false;
        },
        updateMovie: async (
            _: any,
            {
                id,
                title,
                description,
            }: { id: string; title: string; description: string }
        ) => {
            try {
                const updateMovie = await Movie.findByIdAndUpdate(
                    id,
                    { title, description },
                    { new: true }
                );

                if (!updateMovie) {
                    throw new Error("Filme não encontrado");
                }
                return updateMovie;
            } catch (error) {
                throw new Error("Falha ao atualizar o filme");
            }
        },
    },
};
