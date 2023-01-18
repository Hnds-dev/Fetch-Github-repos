// the main variables
let input = document.querySelector(".container input");
let btn = document.querySelector(".container button");
let showPlace = document.querySelector(".container .show-data");
let msg = document.querySelector(".container .msg");

//fetching
btn.onclick = function () {
  showRepos();
};

function showRepos(data) {
  if (input.value == "") {
    msg.innerHTML = "Enter Username";
  } else {
    fetch(`https://api.github.com/users/${input.value}/repos`)
      .then((response) => response.json())
      .then((data) => {
        showPlace.innerHTML = "";
        data.forEach((repo) => {
          // create repo name
          let repoName = document.createTextNode(`${repo.name}`);
          let spanName = document.createElement("span");
          spanName.appendChild(repoName);

          //create link of repo
          let link = document.createElement("a");
          let linkText = document.createTextNode("Go");
          link.appendChild(linkText);
          link.href = repo["html_url"];
          link.setAttribute("target", "_blank");

          let mainDiv = document.createElement("div");
          mainDiv.className = "mainDiv";
          mainDiv.appendChild(spanName);
          mainDiv.appendChild(link);
          showPlace.appendChild(mainDiv);
        });
      });
  }
}
