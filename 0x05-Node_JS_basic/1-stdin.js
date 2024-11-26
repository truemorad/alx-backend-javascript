process.stdout.write("Welcome to Holberton School, what is your name?\n");
process.stdin.on('data', name => { 
    name = name.toString()
    process.stdout.write(`Your name is: ${name}`);
    process.exit()
});