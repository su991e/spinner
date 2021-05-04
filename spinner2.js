let lines = ['\r| ', '\r/ ', '\r- ', '\r\\ ', '\r| ', '\r| ', '\r/ ', '\r- ', '\r\\ ', '\r| ', '\n'];
let times = 100;

for (let a = 0; a < lines.length; a++) {
    setTimeout(() => {
    process.stdout.write(lines[a]);
  }, times);
  times += 200;
}