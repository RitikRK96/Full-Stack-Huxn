function getData(id, nextId) {
  setTimeout(() => {
    console.log("data", id);
    if (nextId) {
      nextId();
    }
  }, 2000);
}

getData(1, () => {
  console.log("Getting data 4..."); 
  getData(5, () => {
    console.log("Getting data 4...");
    getData(43, () => {
      console.log("Getting data 43...");
      getData(23);
    });
  });
});
