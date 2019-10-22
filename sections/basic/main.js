const listRepos = async username => {
  const repos = await fetch(
    `https://api.github.com/users/${username}/repos?type=owner&sort=updated`
  )
    .then(res => {
      console.log(res.json());
      res.json();
    })
    .catch(err => {
      console.log(err);
    });

  const markup = repos
    .map(
      repo => `
        <li>
            <a href="${repo.html_url}">${repo.name}</a>
            (stars: ${repo.stargazers_count})
        </li>`
    )
    .join("");

  const content = document.getElementById("content");
  content.innetHTML = `<ul>${markup}</ul>`;
};

listRepos("andiegonzalez");
