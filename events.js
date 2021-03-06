const inputFile = document.getElementById("file");

var eventForum = document.getElementById("events-form");
eventForum.addEventListener("submit", async (e) => {
  e.preventDefault();
  var formdata = new FormData();

  
  formdata.append("name", e.target.name.value);
  formdata.append("url", e.target.url.value);
  formdata.append("content", e.target.content.value);
  formdata.append("date", e.target.date.value);
  formdata.append("time", e.target.time.value);
  formdata.append("file1", inputFile.files[0]);

  var requestOptions = {
    method: "POST",
    body: formdata,
    redirect: "follow",
  };

  await fetch("https://safe-taiga-20513.herokuapp.com/event", requestOptions)
    .then((response) => response.text())
    .then((result) => {
      console.log(result);
      alert("Your response has been submitted!");
    })
    .catch((error) => console.log("error", error));
});
