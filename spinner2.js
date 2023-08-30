process.stdout.write('hello from spinner1.js... \rheyyy\n');
const loading = "|/-\\\n";
let timer = 0;

for (const char of loading) {
  setTimeout(() => {
    process.stdout.write(`\r${char}`);
  }, timer);
  timer += 200;
};