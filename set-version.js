const got = require("got");
const fs = require("fs");

async function main() {
  const url = "https://unpkg.com/lit-html/package.json";
  const response = await got(url, { json: true });
  // console.log(response.body.version);
  const package = require("./package.json");
  package.version = response.body.version;
  fs.writeFileSync(
    __dirname + "/package.json",
    JSON.stringify(package, null, 2)
  );
  console.log(response.body.version);
}

main();
