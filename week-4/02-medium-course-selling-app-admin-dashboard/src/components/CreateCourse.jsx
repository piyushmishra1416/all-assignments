import React, { useState } from "react";

function CreateCourse() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [instructor, setInstructor] = useState("");

  const handleCreateCourse = () => {
    // Perform the course creation logic here, e.g., send a POST request to the server

    // For demonstration, log the course information
    console.log("Course Title:", title);
    console.log("Course Description:", description);
    console.log("Instructor:", instructor);

    // You can also send this data to your server for course creation
    // Example fetch request:
   
    fetch("http://localhost:3000/admin/courses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      body: JSON.stringify({
        title,
        description,
        instructor,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the server
        console.log("Course created successfully:", data);
      })
      .catch((error) => {
        console.error("An error occurred during course creation:", error);
      });
    
  };

  return (
    <div className="create course">
      {/* <h1>Create Course Page</h1> */}
      <div>
        <label>Title:</label>
        <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} />
      </div>
      <div>
        <label>Description:</label>
        <textarea
          rows="4"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
      </div>
      <div>
        <label>Instructor:</label>
        <input type="text" onChange={(e) => setInstructor(e.target.value)} value={instructor} />
      </div>
      <button onClick={handleCreateCourse}>Create Course</button>
    </div>
  );
}

export default CreateCourse;
