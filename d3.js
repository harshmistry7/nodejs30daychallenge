const cp = require('child_process');

function executeCommand(command) {
    cp.exec(command, function (err, data) {
        if (err) {
            console.log(err);
            return;
        }
        console.log(data);
    });
}

executeCommand('echo file1.txt');
executeCommand('echo file2.txt');
executeCommand('echo "hello,Node.js"');
