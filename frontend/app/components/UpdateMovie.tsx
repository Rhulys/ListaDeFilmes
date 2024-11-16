"use client";

import React, { useState } from "react";
import { useMutation, gql } from "@apollo/client";
import { motion } from "framer-motion";

const UPDATE_MOVIE = gql`
    mutation UpdateMovie($id: ID!, $title: String!, $description: String!) {
        updateMovie(id: $id, title: $title, description: $description) {
            id
            title
            description
        }
    }
`;

interface UpdateMovieProps {
    id: string;
    currentTitle: string;
    currentDescription: string;
    onCancel: () => void;
    refetch: () => void;
}

const UpdateMovie: React.FC<UpdateMovieProps> = ({
    id,
    currentTitle,
    currentDescription,
    onCancel,
    refetch,
}) => {
    const [title, setTitle] = useState(currentTitle);
    const [description, setDescription] = useState(currentDescription);
    const [updateMovie] = useMutation(UPDATE_MOVIE);

    const handleUpdateMovie = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!title) return;
        try {
            await updateMovie({ variables: { id, title, description } });
            if (typeof refetch === "function") {
                refetch();
            }
            onCancel();
        } catch (error) {
            console.error("Erro ao atualizar filme:", error);
        }
    };

    return (
        <form
            onSubmit={handleUpdateMovie}
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
            <div className="flex gap-4 justify-center mt-4">
                <motion.button
                    whileHover={{
                        scale: 1.1,
                        transition: { duration: 0.5 },
                    }}
                    type="submit"
                    className="bg-yellow-500 text-black p-2 mt-2 rounded-lg font-bold"
                >
                    Salvar
                </motion.button>
                <motion.button
                    whileHover={{
                        scale: 1.1,
                        transition: { duration: 0.5 },
                    }}
                    type="button"
                    onClick={onCancel}
                    className="bg-red-500 text-black p-2 mt-2 rounded-lg font-bold"
                >
                    Cancelar
                </motion.button>
            </div>
        </form>
    );
};

export default UpdateMovie;
