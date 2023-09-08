import React from "react";

function ShowCourses() {
    const [courses, setCourses] = React.useState([]);
    console.log("hiii");

    // Add code to fetch courses from the server
    // and set it in the courses state variable.
    return <div className="showcourses">
        <h1>Create Course Page</h1>
        hirirojfherfhiajfoiwjfio
        {courses.map(c => <Course title={c.title} />)}
    </div>
}

function Course(props) {
    return <div>
        <h1>{props.title}</h1>
    </div>
}

export default ShowCourses;