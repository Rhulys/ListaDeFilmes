"use client";

import React, { useState } from "react";
import MoviesList from "./components/MoviesList";
import AddMovie from "./components/AddMovie";
import UpdateMovie from "./components/UpdateMovie";
import { motion } from "framer-motion";

export default function Home() {
    const [editingMovie, setEditingMovie] = useState<{
        id: string;
        title: string;
        description: string;
    } | null>(null);

    const [refetch, setRefetch] = useState<(() => void) | null>(null);

    const handleEditClick = (movie: {
        id: string;
        title: string;
        description: string;
    }) => {
        setEditingMovie(movie);
    };

    const handleCancelEdit = () => {
        setEditingMovie(null);
    };

    return (
        <div className="flex flex-col items-center h-screen bg-bg bg-center pt-10">
            <motion.h1
                initial={{ opacity: 0}}
                animate={{ opacity: 1}}
                transition={{ duration: 1 }}
                className="text-black text-3xl font-bold bg-yellow-500 p-2 rounded-xl"
            >
                Lista de Filmes Favoritos
            </motion.h1>
            {editingMovie ? (
                <UpdateMovie
                    id={editingMovie.id}
                    currentTitle={editingMovie.title}
                    currentDescription={editingMovie.description}
                    onCancel={handleCancelEdit}
                    refetch={refetch || (() => {})}
                />
            ) : (
                <AddMovie />
            )}

            <MoviesList onEdit={handleEditClick} setRefetch={setRefetch} />
        </div>
    );
}
