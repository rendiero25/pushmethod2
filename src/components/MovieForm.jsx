import React, { useState } from 'react';

const MovieForm = ({ movie, onSave }) => {
  const [formData, setFormData] = useState(movie || { title: '', image: '', popularity: '', overview: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" value={formData.title} onChange={handleChange} placeholder="Title" required />
      <input type="text" name="image" value={formData.image} onChange={handleChange} placeholder="Image URL" required />
      <input type="number" name="popularity" value={formData.popularity} onChange={handleChange} placeholder="Popularity" required />
      <textarea name="overview" value={formData.overview} onChange={handleChange} placeholder="Overview" required />
      <button type="submit">Save</button>
    </form>
  );
};

export default MovieForm;
