import React from 'react';

function TechItem({ tech, onDelete }) {
  return (
    <li key={tech}>
      {tech}
      <button type="button" onClick={onDelete}>Delete</button>
    </li>
  );
}

export default TechItem;