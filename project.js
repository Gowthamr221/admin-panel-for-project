const inputFile = document.getElementById("file");

var eventForum = document.getElementById("project-form");
eventForum.addEventListener("submit",async (e) => {
  e.preventDefault();
  var formdata = new FormData();

  
  formdata.append("name", e.target.name.value);
  
  formdata.append("content", e.target.content.value);
  formdata.append("date", e.target.date.value);
  formdata.append("file1", inputFile.files[0]);

  var requestOptions = {
    method: "POST",
    body: formdata,
    redirect: "follow",
  };
  
  await fetch("https://safe-taiga-20513.herokuapp.com/project", requestOptions)
    .then((response) => response.text())
    .then((result) => {
      console.log(result)
      alert("your response has been submitted!")
    })
    .catch((error) => console.log("error", error));
});
