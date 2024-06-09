import React from "react";

const ImageComponent = ({ data, loading }) => {
  if (loading) return <p>Loading...</p>;

  const imageUrl = URL.createObjectURL(data);

  return (
    <div style={{ textAlign: 'center' }}>
      <img src={imageUrl} alt="Fetched content" style={{ maxWidth: '100%', maxHeight: '400px' }} />
    </div>
  );
};

export default ImageComponent;
