import * as fs from "fs/promises";

fs.mkdir("nodejs", function (error) {
  if (error) throw error;
  console.log("Directory Created...");
});


