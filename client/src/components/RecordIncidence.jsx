import React from "react";
import Title from "./Title";

const RecordIncidence = () => {
  function previewImage(input) {
    var preview = document.getElementById("image-preview");

    if (input.files && input.files[0]) {
      var reader = new FileReader();

      reader.onload = function (e) {
        preview.src = e.target.result;
      };

      reader.readAsDataURL(input.files[0]);
    }
  }

  // function uploadImage() {
  //   var preview = document.getElementById("image-preview");

  //   if (preview.src) {
  //     // Here, you can implement your logic to upload the image to a cloud service
  //     // For example, you can use fetch() to send the image data to an API endpoint
  //     // Replace 'your-cloud-upload-url' with the actual URL for uploading
  //     fetch("your-cloud-upload-url", {
  //       method: "POST",
  //       body: JSON.stringify({ image: preview.src }),
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     })
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log("Image uploaded:", data);
  //         // Handle success or other actions here
  //       })
  //       .catch((error) => {
  //         console.error("Error uploading image:", error);
  //         // Handle error or other actions here
  //       });
  //   } else {
  //     console.log("No image to upload.");
  //   }
  // }
  return (
    <div className="container mt-5">
      <Title>Post an Incidence</Title>
      <div className="row record-cont mt-3">
        <div className="incidence-cont">
          <div className="col-lg-5 col-md-5 col-sm-6 col-10 incidence-note">
            <div className="line"></div>
            <p>
              By Posting an incidence you may have witnessed, you help create
              awareness to the public. This may also be used by social providers
              to know the state of the area and what measures to take.
            </p>
          </div>
          <form>
            <div className="photo-cont">
              <label htmlFor="photo" className="photo-wrapper">
                <div className="camera-cont">
                  <i className="fa fa-camera" aria-hidden="true"></i>
                </div>
              </label>
              <input
                type="file"
                id="photo"
                accept="image/*"
                capture="camera"
                className="d-none"
                onChange={(e) => previewImage(e.target)}
              />
              <p>Take a photo or upload</p>
            </div>
            <img id="image-preview" src="" alt="Preview" />
            <div className="incidence-details">
              <label htmlFor="loc">Location</label>
              <input type="text" className="form-control" id="loc" />
              <label htmlFor="desc">Describe the incidence</label>
              <textarea className="form-control" id="desc" rows="3"></textarea>
              <button className="btn-submit">Post Incidence</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RecordIncidence;
