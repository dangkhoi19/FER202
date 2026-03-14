// src/pages/MovieManager.jsx
import React from 'react';
import { Container } from 'react-bootstrap';
import { MovieProvider } from '../contexts/MovieContext';
import MovieForm from '../components/MovieForm';
import MovieTable from '../components/MovieTable';

// Component hiển thị nội dung
const MovieManagerContent = () => {
  return (
    <Container className="mt-5">
      <h1 className="text-center mb-4">
        🎬 Quản lý Phim (Context + useReducer + Axios)
      </h1>

      {/* FORM */}
      <MovieForm />

      {/* TABLE */}
      <h2 className="mt-4">Danh sách Phim</h2>
      <MovieTable />
    </Container>
  );
};

// Component chính cung cấp Context
const MovieManager = () => {
  return (
    <MovieProvider>
      <MovieManagerContent />
    </MovieProvider>
  );
};

export default MovieManager;