import React from 'react';
import { useParams } from 'react-router-dom';

function ShowCertificate() {
  const { username } = useParams();
  const imageUrl = `https://irshad-khan.github.io/Laravel-Basics-August-20-2025/certificates/${username}.png`;

  return (
    <div className="text-center">
      <h2 className="text-white">Your Certificate</h2>
      <p className="text-white">
        Congratulations, <strong>{username.replace('_', ' ')}</strong>! You have
        completed the course.
      </p>

      <a href={imageUrl} download={`${username}_Certificate.png`}>
        <button className="btn btn-primary mb-3">Download Certificate</button>
      </a>

      <img
        src={imageUrl}
        alt={`${username} Certificate`}
        className="img-fluid d-block mx-auto mt-3"
      />
    </div>
  );
}

export default ShowCertificate;
