const fs = require('fs');
const path = require('path');
// Function to write text to a file
function writeTextToFile(filename, content) {
    const filePath = path.resolve(__dirname, filename);

    // Write content to the file
    fs.writeFile(filePath, content, 'utf8', (err) => {
        if (err) {
            console.error('Error writing to file:', err);
            return;
        }
        console.log(`Text successfully written to ${filePath}`);
    });
}
// Example usage
const filename = 'app.yaml'; // Name of the file to write
const text = `runtime: nodejs22
instance_class: F1
entrypoint: npm start
env_variables: 
  REACT_APP_BACKEND_API_URL: ${process.env.REACT_APP_BACKEND_API_URL}
  REACT_APP_BACKEND_API_TOKEN: ${process.env.REACT_APP_BACKEND_API_TOKEN}
automatic_scaling:
  target_cpu_utilization: 0.65
  min_instances: 1
  max_instances: 10
  min_pending_latency: 30ms
  max_pending_latency: automatic
  max_concurrent_requests: 10
handlers:
- url: /.*
  secure: always
  redirect_http_response_code: 301
  script: auto`

writeTextToFile(filename, text)