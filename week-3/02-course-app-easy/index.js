const express = require('express');
const app = express();

app.use(express.json());

let ADMINS = [];
let USERS = [];
let COURSES = [];

const adminAuthentication = (req, res , next) => {
  const { username, password } = req.headers;

  const admin = ADMINS.find(a => a.username === username && a.password === password);

  if(admin) {
    next();
  } else {
    res.status(403).json({ message: 'Admin authentication failed'})
  }
}
const userAuthentication = (req, res , next) => {
  const { username, password } = req.headers;

  const user = USERS.find(u => u.username === username && u.password === password);

  if(user) {
    next();
  } else {
    res.status(403).json({ message: 'User authentication failed'})
  }
}


// Admin routes
app.post('/admin/signup', (req, res) => {
  var admin = req.body;
  let Existingadmin = ADMINS.find(a => a.username === admin.username);

  if(Existingadmin){
    res.status(403).json({ message :'Admin already exists.'})
  }
  else{
    ADMINS.push(admin)
    res.json({message :'Admin created '});
  }
});

app.post('/admin/login', adminAuthentication, (req, res) => {
      res.json({message: "Logged in succesfully"})
});

app.post('/admin/courses', (req, res) => {
  const course = req.body;

  course.id = Date.now();
  COURSES.push(course);
  res.json({message : 'Course created succesfully' , courseId: course.id});
});

app.put('/admin/courses/:courseId', (req, res) => {
const courseId = parseInt(req.params.courseId);
const course = COURSES.find(c => c.id === courseId);
if(course){
  Object.assign(course, req.body);
  res.json({message : 'Course updated succesfully '})
}else {
  res.status(404).json({message : 'Course not found'});
}
});

app.get('/admin/courses', adminAuthentication, (req, res) => {
 res.json({ courses: COURSES});
});

// User routes
app.post('/users/signup', (req, res) => {
  const user = req.body;
  USERS.push(user);
  res.json({ message : " user logged in succesfully ."})
});

app.post('/users/login', userAuthentication, (req, res) => {
  res.json({ message : " user logged in succesfully"})
  
});

app.get('/users/courses', (req, res) => {
  // logic to list all courses
});

app.post('/users/courses/:courseId', (req, res) => {
  // logic to purchase a course
  const courseId = Number(req.params.courseId)
  const course = COURSES.find(c => c.id ===courseID && c.)
});

app.get('/users/purchasedCourses', (req, res) => {
  // logic to view purchased courses
});

app.listen(3001, () => {
  console.log('Server is listening on port 3000');
});
