const path = require('path');

function resolvePath(relativePath) {
    // Get the absolute path by resolving the provided relative path
    const absolutePath = path.resolve(__dirname, relativePath);

    // Print the resolved path to the console
    console.log(`Resolved Path: ${absolutePath}`);
}

// Test Cases
resolvePath('/test-files/output1.txt');
// Expected Output: Resolved Path: /Users/username/project/folder/file.txt

resolvePath('nonexistent-folder/output1.txt');
// Expected Output: Resolved Path: /Users/username/nonexistent-folder/file.txt
