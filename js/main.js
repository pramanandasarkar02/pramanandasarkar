document.addEventListener('DOMContentLoaded', () => {
    loadProjects();
    loadBlogPosts();
    updateBlogCount();
  });
  
  function loadProjects() {
    fetch('projects/project1.json')
      .then(response => response.json())
      .then(data => {
        document.getElementById('projects-list').textContent = formatProject(data);
      })
      .catch(() => {
        document.getElementById('projects-list').textContent = 'Error loading projects.';
      });
  }
  
  function loadBlogPosts() {
    fetch('blog/post1.json')
      .then(response => response.json())
      .then(data => {
        document.getElementById('blog-list').textContent = formatBlogPost(data);
      })
      .catch(() => {
        document.getElementById('blog-list').textContent = 'Error loading blog posts.';
      });
  }
  
  function formatProject(project) {
    return `[${project.title}]\n- ${project.description}\n- Tech: ${project.tech}`;
  }
  
  function formatBlogPost(post) {
    return `[${post.title} - ${post.date}]\n- ${post.summary}`;
  }
  
  function updateBlogCount() {
    const blogList = document.getElementById('blog-list');
    fetch('blog/post1.json')
      .then(response => response.json())
      .then(() => {
        const count = 1; // Simulate one post for now; expand with more files
        document.querySelector('#blog-list').previousElementSibling.textContent = `Blog Posts (${count})`;
      });
  }
  
  function submitContact() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    if (!name || !email || !message) {
      document.getElementById('contact-response').textContent = 'Status: All fields required.';
      return;
    }
  
    const contactData = { name, email, message, timestamp: new Date().toISOString() };
    simulateBackend(contactData)
      .then(response => {
        document.getElementById('contact-response').textContent = `Status: ${response.status}\n${JSON.stringify(response.data, null, 2)}`;
        document.getElementById('contact-form').reset();
      })
      .catch(() => {
        document.getElementById('contact-response').textContent = 'Status: Failed to send.';
      });
  }