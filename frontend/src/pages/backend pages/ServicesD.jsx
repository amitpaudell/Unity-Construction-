import React, { useState, useEffect } from 'react';

const ServicesD = () => {
  //fetching from db
  const [constructionProject, setConstructionProject] = useState(null);

  useEffect(() => {
    const fetchConstructionP = async () => {
      const response = await fetch('http://localhost:3000/api/service');
      const json = await response.json();

      if (response.ok) {
        setConstructionProject(json);
      }
    };
    fetchConstructionP();
  }, []);

  const [showForm, setShowForm] = useState(false);
  const [image, setImage] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState(null);

  // New state for edit mode and editing project id
  const [isEditMode, setIsEditMode] = useState(false);
  const [editingProjectId, setEditingProjectId] = useState(null);

  const handleCreate = () => {
    setShowForm(true);
    setIsEditMode(false);
    setEditingProjectId(null);
    setTitle('');
    setDescription('');
    setError(null);
  };

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const data = new FormData();
    data.append('file', file);
    data.append('upload_preset', 'construction_first');
    data.append('cloud_name', 'dziuccshe');

    const res = await fetch(
      'https://api.cloudinary.com/v1_1/dziuccshe/image/upload',
      {
        method: 'POST',
        body: data,
      }
    );

    const uploadedImageURL = await res.json();
    setImage(uploadedImageURL.url);
    console.log(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const constructionProjectData = { image, title, description };

    if (isEditMode && editingProjectId) {
      // Edit mode: update existing project
      const response = await fetch(
        `http://localhost:3000/api/service/${editingProjectId}`,
        {
          method: 'PUT',
          body: JSON.stringify(constructionProjectData),
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      const json = await response.json();
      if (!response.ok) {
        setError(json.error);
      } else {
        setTitle('');
        setDescription('');
        setImage('');
        setError(null);
        setShowForm(false);
        setIsEditMode(false);
        setEditingProjectId(null);
        // Update the project in the list
        setConstructionProject((prevCP) =>
          prevCP.map((project) =>
            (project._id || project.id) === editingProjectId
              ? { ...project, ...constructionProjectData }
              : project
          )
        );
      }
    } else {
      // Create mode: add new project
      const response = await fetch('http://localhost:3000/api/service', {
        method: 'POST',
        body: JSON.stringify(constructionProjectData),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const json = await response.json();
      if (!response.ok) {
        setError(json.error);
      }

      if (response.ok) {
        setTitle('');
        setDescription('');
        setImage('');
        setError(null);
        setShowForm(false);
        // Add the new project to the list
        setConstructionProject((prevCP) =>
          Array.isArray(prevCP) ? [json, ...prevCP] : [json]
        );
      }
    }
  };

  // Edit handler: populate form with project data and switch to edit mode
  const handleEdit = (id) => {
    const projectToEdit =
      Array.isArray(constructionProject) &&
      constructionProject.find((project) => (project._id || project.id) === id);
    if (projectToEdit) {
      setTitle(projectToEdit.title || projectToEdit.name || '');
      setDescription(projectToEdit.description || '');
      setImage(projectToEdit.image || '');
      setShowForm(true);
      setIsEditMode(true);
      setEditingProjectId(id);
      setError(null);
    }
  };

  const handleDelete = async (id) => {
    const response = await fetch(`http://localhost:3000/api/service/${id}`, {
      method: 'DELETE',
    });

    const json = await response.json();
    if (response.ok) {
      console.log('Construction deleted ');
      setConstructionProject((prevCP) =>
        prevCP.filter((project) => project._id !== id)
      );
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Services</h1>
        <button
          onClick={handleCreate}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Create
        </button>
      </div>

      {showForm && (
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            {isEditMode ? 'Edit Project' : 'Create New Project'}
          </h2>
          <form
            className="space-y-4"
            onSubmit={handleSubmit}
            encType="multipart/form-data"
          >
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Upload Image
              </label>
              <input
                type="file"
                id="project-image-input"
                onChange={handleImageChange}
                accept="image/*"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Service Name
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter service name"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Description
              </label>
              <textarea
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={3}
                placeholder="Enter service description"
                onChange={(e) => setDescription(e.target.value)}
                value={description}
              />
            </div>

            <div className="flex gap-3">
              <button
                type="submit"
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
              >
                Save
              </button>
              <button
                type="button"
                onClick={() => {
                  setShowForm(false);
                  setIsEditMode(false);
                  setEditingProjectId(null);
                  setTitle('');
                  setDescription('');
                  setImage('');
                  setError(null);
                }}
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
              >
                Cancel
              </button>
            </div>
            {error && <div className="error">{error}</div>}
          </form>
        </div>
      )}

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {Array.isArray(constructionProject) &&
            constructionProject.length > 0 ? (
              constructionProject.map((project) => (
                <tr
                  key={project._id || project.id}
                  className="hover:bg-gray-50"
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {project._id || project.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {project.title || project.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button
                      onClick={() => handleEdit(project._id || project.id)}
                      className="text-blue-600 hover:text-blue-900 mr-4"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(project._id)}
                      className="text-red-600 hover:text-red-900"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={3} className="px-6 py-4 text-center text-gray-500">
                  No Services found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ServicesD;
