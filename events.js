// var formdata = new FormData();
// formdata.append("name", "Aquen Pheonix 2.0");
// formdata.append("url", "https://www.youtube.com/watch?v=XXZ2X2k7niU");
// formdata.append("content", "Lorem ipsum somthing for testing.awdadawdwa aw daw dawd");
// formdata.append("date", "Fri Feb 25 2022 11:10:49 GMT+0530 (India Standard Time)");
// formdata.append("time", "6:30-9:30AM");
// formdata.append("file1", fileInput.files[0], "Screenshot (1050).png");

// var requestOptions = {
//   method: 'POST',
//   body: formdata,
//   redirect: 'follow'
// };

var eventForum = document.getElementById('events-form')
eventForum.addEventListener("submit",(e)=>{
  e.preventDefault();
  var formdata = new FormData(eventForum);
  console.log(formdata)
  console.log(e.target.file1.value);
  
})

// fetch("https://safe-taiga-20513.herokuapp.com/event", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));