#!/usr/bin/env node
const program = require("./program.js");
const {exec} = require("child_process");

program.action(() => {
    let command = "";

    if (process.platform === "win32") {
        command = `shutdown /s ${program.option.force ? "/f" : ""}/t 0`;
    } else if(process.platform === "linux" | process.platform === "darwin") {
        command = `sudo shutdown -h now`;
    } else {
        console.error("Unsupported platform");
        process.exit(1);
    }

    exec(command, (error, stdout, stderr) => {
        if (error) {
            console.error(`exec error: ${error}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
        console.error(`stderr: ${stderr}`);
    });
});

program.parse(process.argv);