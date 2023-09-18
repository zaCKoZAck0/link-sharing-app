const { execSync } = require('child_process');

const date = new Date()

try {
  execSync('git add .');
  execSync(`git commit -m "Auto commit: ${date.toUTCString()}"`);
  console.log('Changes committed.');
} catch (error) {
  console.error('Error committing changes:', error.message);
}
