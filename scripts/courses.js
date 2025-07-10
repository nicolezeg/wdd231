function filterCourses(category) {
    const courses = document.querySelectorAll("#courseList li");
    let count = 0;

    courses.forEach(course => {
      if (category === 'all' || course.dataset.category === category) {
        course.style.display = 'list-item';
        count++;
      } else {
        course.style.display = 'none';
      }
    });

    document.getElementById('creditCount').innerText =
      `The total credits for course listed above is ${count}`;
  }