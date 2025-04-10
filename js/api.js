function fetchStats() {
    const stats = {
      uptime: `${Math.floor(Math.random() * 10000)} seconds`,
      cpu_load: `${(Math.random() * 100).toFixed(2)}%`,
      memory_used: `${Math.floor(Math.random() * 16384)} MB`,
      kernel_version: "5.15.0-73-generic",
      timestamp: new Date().toISOString()
    };
    document.getElementById('api-output').textContent = JSON.stringify(stats, null, 2);
  }
  
  function simulateBackend(data) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          status: 'Success',
          data: { message: 'Contact received', received: data }
        });
      }, 1000); // Simulate network delay
    });
  }