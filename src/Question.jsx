import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";
const initialState = {
  type: "",
  subject: "",
  topic: "",
  difficulty: "",
  question: "",
  options: [],
  correctAnswer: "",
};

const QuestionForm = ({ selectedQuestion, onRefresh }) => {
  const [formData, setFormData] = useState(initialState);

  useEffect(() => {
    if (selectedQuestion) {
      setFormData(selectedQuestion);
    } else {
      setFormData(initialState);
    }
  }, [selectedQuestion]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleOptionsChange = (e) => {
    const { value } = e.target;
    setFormData((prev) => ({
      ...prev,
      options: value.split(",").map((opt) => opt.trim()),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (selectedQuestion) {
        await axios.put(
          ``,
          formData
        );
      } else {
        await axios.post("http://localhost:8080/api/v1/product/create-product", formData);
      }
      onRefresh();
      setFormData(initialState);
    } catch (error) {
      console.error("Error saving question:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">
        {selectedQuestion ? "Edit Question" : "Create Question"}
      </h2>
      <div className="mb-4">
        <label className="block mb-1">Type</label>
        <input
          type="text"
          name="type"
          value={formData.type}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1">Subject</label>
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1">Topic</label>
        <input
          type="text"
          name="topic"
          value={formData.topic}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1">Difficulty</label>
        <input
          type="text"
          name="difficulty"
          value={formData.difficulty}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1">Question</label>
        <textarea
          name="question"
          value={formData.question}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1">Options (comma-separated)</label>
        <input
          type="text"
          value={formData.options.join(",")}
          onChange={handleOptionsChange}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1">Correct Answer</label>
        <input
          type="text"
          name="correctAnswer"
          value={formData.correctAnswer}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full p-2 bg-blue-500 text-white rounded"
      >
        {selectedQuestion ? "Update Question" : "Create Question"}
      </button>
    </form>
  );
};

export default QuestionForm;
