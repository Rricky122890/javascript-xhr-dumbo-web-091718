// function getRepositories() {
//   const req = new XMLHttpRequest();
//   req.open("GET","https://api.github.com/users/octocat/repos");
//   req.send();
// }

function getRepositories() {
  const req = new XMLHttpRequest();
  req.open("GET","https://api.github.com/users/octocat/repos");
  req.send();
}

function showRepositories(event, data) {
  //this is set to the XMLHttpRequest object that fired the event
  console.log(this.responseText);
}
