import React, { useState } from "react";
// import Canvasdraw from "./components/P5Canvas";

function UploadedImages() {
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  const uploadImage = async e => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "Shinto-App");
    setLoading(true);
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dhjlicxrz/image/upload",
      {
        method: "POST",
        body: data
      }
    );

    const file = await res.json();

    setImage(file.secure_url);
    setLoading(false);
  };

  return (
    <div>
      <h1>Upload Image</h1>
      <input
        type="file"
        name="file"
        placeholder="Upload an image"
        onChange={uploadImage}
      />
      {loading ? (
        <h3>Loading...</h3>
      ) : (
        <img src={image} style={{ width: "300px" }} />
      )}
    </div>
  );
}

export default UploadedImages;
