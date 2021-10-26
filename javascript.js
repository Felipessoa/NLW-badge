const Links = {
  github: 'felipessoa',
  YouTube: 'jakelinygracielly',
  Facebook: 'maykbrito',
  Instagram: 'jakeliny.gracielly',
  twitter: 'jakelinytec'
}

function change_social_media_links() {
  for (let li of social_links.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${Links[social]}`
  }
}

change_social_media_links()

function get_github_profile_info() {
  const url = `https://api.github.com/users/${Links.github}`

  fetch(url)
    .then(Response => Response.json())
    .then(data => {
      user_name.textContent = data.name
      user_bio.textContent = data.bio
      user_github.href = data.html_url
      user_picture.src = data.avatar_url
      user_login.textContent = data.login
    })
}

get_github_profile_info()
