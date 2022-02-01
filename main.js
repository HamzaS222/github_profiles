const apiurl = 'https://api.github.com/users/'


var user_name = document.getElementById("username");
var  desc = document.getElementById("desc");
var  followers = document.getElementById("followers");
var  following = document.getElementById("following");
var posts = document.getElementById("posts");
var repo1= document.getElementById("repo1");
var repo2= document.getElementById("repo2");
var repo3= document.getElementById("repo3");
var repo4 = document.getElementById("repo4");


function getUser(username){
    axios(apiurl + username)
        .then(res => { 
            console.log(res.data)
            user_name.innerText= res.data.name
            desc.innerText= res.data.bio
            followers.innerHTML = res.data.followers +"<strong> followers </strong>"
            following.innerHTML= res.data.following +"<strong> following </strong>"
            posts.innerHTML= res.data.public_repos +"<strong> posts </strong>"
            // user_name.innerText= res.data.name
            // user_name.innerText= res.data.name
            // user_name.innerText= res.data.name
            // user_name.innerText= res.data.name
         }  )
        .catch(err => console.log(err))
}

const form = document.querySelector('#form');
const search = document.getElementById('search');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const user = search.value
    getUser(user)
})

