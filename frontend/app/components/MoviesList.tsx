"use client";

import { useQuery, gql, useMutation } from "@apollo/client";
import React from "react";
import { motion } from "framer-motion";

const GET_MOVIES = gql`
    query GetMovies {
        movies {
            id
            title
            description
        }
    }
`;

const REMOVE_MOVIE = gql`
    mutation RemoveMovie($id: ID!) {
        removeMovie(id: $id)
    }
`;

interface MovieListProps {
    onEdit: (movie: { id: string; title: string; description: string }) => void;
    setRefetch: (refetch: () => void) => void;
}

const MoviesList: React.FC<MovieListProps> = ({ onEdit, setRefetch }) => {
    const { loading, error, data, refetch } = useQuery(GET_MOVIES);
    const [removeMovie] = useMutation(REMOVE_MOVIE);

    React.useEffect(() => {
        if (refetch) {
            console.log("Definindo refetch no MoviesList");
            setRefetch(refetch);
        }
    }, [refetch, setRefetch]);

    const handleRemoveMovie = async (id: string) => {
        await removeMovie({
            variables: { id },
        });

        refetch();
    };

    if (loading)
        return (
            <p className="bg-blue-500 font-bold p-4 mt-5 rounded-lg">
                Carregando...
            </p>
        );
    if (error) return <p>Erro ao carregar os filmes: {error.message}</p>;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-200 w-2/3 mt-4 p-4 rounded-md text-center h-80 overflow-auto"
        >
            <h2 className="text-2xl font-bold text-black">
                Seus Filmes Favoritos
            </h2>
            <ul className="flex flex-wrap gap-4">
                {data.movies
                    .slice()
                    .reverse()
                    .map(
                        (movie: {
                            id: string;
                            title: string;
                            description: string;
                        }) => (
                            <li
                                key={movie.id}
                                className="bg-white mt-4 rounded-lg border-black border py-2 w-[32%] flex flex-col"
                            >
                                <h3 className="text-xl font-bold text-black">
                                    {movie.title}
                                </h3>
                                <p className="text-black flex-grow">
                                    {movie.description}
                                </p>
                                <div className="flex gap-4 justify-center mt-auto">
                                    <motion.button
                                        whileHover={{
                                            scale: 1.1,
                                            transition: { duration: 0.5 },
                                        }}
                                        onClick={() => onEdit(movie)}
                                        className="bg-yellow-400 p-2 font-bold text-black"
                                    >
                                        Editar
                                    </motion.button>
                                    <motion.button
                                        whileHover={{
                                            scale: 1.1,
                                            transition: { duration: 0.5 },
                                        }}
                                        onClick={() =>
                                            handleRemoveMovie(movie.id)
                                        }
                                        className="bg-red-600 p-2 font-bold"
                                    >
                                        Deletar
                                    </motion.button>
                                </div>
                            </li>
                        )
                    )}
            </ul>
        </motion.div>
    );
};

export default MoviesList;
