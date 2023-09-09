import React from "react";
import { useEffect } from "react";

function ShowCourses() {
    const [courses, setCourses] = React.useState([]);
    useEffect(() => {
        // Define a function to fetch courses
        const fetchCourses = async () => {
            try {
                const response = await fetch('http://localhost:3000/admin/courses', {
                    headers: {
                        Authorization: "Bearer " + localStorage.getItem("token"),
                        'Content-Type': 'application/json', // Example of another header
                    }
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setCourses(data.courses);
            } catch (error) {
                console.error('Error fetching courses:', error);
            }
        };

        // Call the fetchCourses function
        fetchCourses();
    }, []);

    // Add code to fetch courses from the server
    // and set it in the courses state variable.
    return (
        <div className="showcourses">
            <h1>Courses</h1>
            {courses.map(course => <Course key={course.id} title={course.title} />)}
        </div>
    );
}

function Course(props) {
    return <div>
        <h1>{props.title}</h1>
    </div>
}

export default ShowCourses;