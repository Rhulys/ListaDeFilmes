"use client";

import React, { useState } from "react";
import { useMutation, gql, useQuery } from "@apollo/client";
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

const ADD_MOVIE = gql`
    mutation AddMovie($title: String!, $description: String) {
        addMovie(title: $title, description: $description) {
            id
            title
            description
        }
    }
`;

const AddMovie = () => {
    const { loading, error, data, refetch } = useQuery(GET_MOVIES);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [addMovie] = useMutation(ADD_MOVIE);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!title) return;
        try {
            await addMovie({ variables: { title, description } });
            setTitle("");
            setDescription("");
        } catch (error) {
            console.error("Erro ao adicionar filme:", error);
        }

        refetch();
    };

    return (
        <motion.form
            initial={{ opacity: 0, x: 150 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            className="mt-4 rounded-md border-4  text-center p-2 w-1/3 bg-gray-200"
        >
            <div className="pt-4">
                <label className="block font-bold pb-2 text-black">
                    Titulo do Filme:
                </label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="border-4 p-1 w-full rounded-md text-black border-black"
                />
            </div>
            <div className="pt-4">
                <label className="block font-bold pb-2 text-black">
                    Descrição:
                </label>
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="border-4 p-1 w-full rounded-md text-black border-black"
                ></textarea>
            </div>
            <motion.button
                whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.5 },
                }}
                type="submit"
                className="bg-yellow-500 text-black p-2 mt-2 rounded-lg font-bold"
            >
                Adicionar
            </motion.button>
        </motion.form>
    );
};

export default AddMovie;
