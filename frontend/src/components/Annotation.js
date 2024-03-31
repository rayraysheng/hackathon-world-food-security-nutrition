import React, { useState } from 'react';
import '../style/Annotation.css';

// Annotation Component
const Annotation = ({ text, author }) => {
  return (
    <div className="annotation">
      <strong>{author}</strong>: {text}
    </div>
  );
};

// AnnotationBox Component
const AnnotationBox = () => {
  const [annotations, setAnnotations] = useState([]);
  const [newAnnotation, setNewAnnotation] = useState('');

  const handleAnnotationChange = (e) => {
    setNewAnnotation(e.target.value);
  };

  const handleAnnotationSubmit = (e) => {
    e.preventDefault();
    if (newAnnotation.trim() !== '') {
      const newAnnotations = [...annotations, { text: newAnnotation, author: 'E-Researcher' }];
      setAnnotations(newAnnotations);
      setNewAnnotation('');
    }
  };

  return (
    <div className="annotation-box">
      <h2>Annotations</h2>
      {annotations.map((annotation, index) => (
        <Annotation key={index} text={annotation.text} author={annotation.author} />
      ))}
      <form onSubmit={handleAnnotationSubmit}>
        <textarea
          value={newAnnotation}
          onChange={handleAnnotationChange}
          placeholder="Write an annotation..."
          rows="3"
          cols="30"
        >
        </textarea>
        <br />
        <button type="submit">Post Annotation</button>
      </form>
    </div>
  );
};

export default AnnotationBox;
