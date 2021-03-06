
const apiCall = "https://api.github.com/users/";

const form = document.querySelector('#git-user-form');
const inputSearch = document.querySelector('.input');

const imgPro = document.querySelector('.img-profile');
const profilName = document.querySelector('.profil-title');
const emailText = document.querySelector('.profil-email');
const joined = document.querySelector('.results__joined-date');
const repoText = document.querySelector('.repo-num')
const followerText = document.querySelector('.follower-num')
const followingText = document.querySelector('.following-num')

const locationTitle = document.querySelector('.location-title');
const twitterTitle = document.querySelector('.twitter-title');
const websiteTitle = document.querySelector('.website-title');
const companyTitle = document.querySelector('.company-title');
const noRes = document.querySelector('.no-res');





async function dataGitHub(user){
    const ans = await fetch(`${apiCall}${user}`);
    const data = await ans.json();
    
    const log = data.login
    const imgUrl = data.avatar_url
    const email = data.email;
    const date = Date.parse(data.created_at);
    
    const repo = data.public_repos;
    const follower = data.followers;
    const following = data.following;
    const location = data.location;
    const twitter = data.twitter_username;
    const website = data.html_url;
    const company = data.company;

    const mess = data.message

    if(mess === "Not Found" ){
        noRes.style.display="block"
    }else{
        noRes.style.display="none"
    //setting 

    // Setting img and name
    imgPro.src=imgUrl;
    profilName.innerText=log;
    
    // setting email

    if(email){
        emailText.innerText=email
    }else{
        emailText.innerText="not available"
    }
    

    // setting stats

    repoText.innerHTML=repo;
    followerText.innerHTML=follower;
    followingText.innerHTML=following;

    // setting social

    if(location){
        locationTitle.innerText=location
    }else{
        locationTitle.innerText="not available"
    }

    if(twitter){
        twitterTitle.innerText=twitter
    }else{
        twitterTitle.innerText="not available"
        
    }

    if(website){
        websiteTitle.innerText=website
    }else{
        websiteTitle.innerText="not available"
    }

    if(company){
        companyTitle.innerText=company
    }else{
        companyTitle.innerText="not available"
    }
    


    // date
    
    const months = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ];

    let tempDate = new Date(date);

    let day = tempDate.getDate();

    let month = tempDate.getMonth()
    month=months[month]

    const year = tempDate.getFullYear();
    
    joined.innerHTML=`Joined ${day} ${month} ${year} `

    }

}

// dataGitHub("ziratsu")

form.addEventListener('submit',(e)=>{
    if(inputSearch.value.length > 0 ){
        e.preventDefault();
        dataGitHub(inputSearch.value);
        inputSearch.value="";
    }
    
    
})

// toggle from light to dark 


// switch theme const
const btnLd = document.querySelector('i');

const h4 = document.querySelectorAll('h4');

const results = document.querySelector('.results');
const detailBlock = document.querySelector('.detail-block');
const imageSwitch = document.querySelector('.switch-container i')
const i = document.querySelectorAll('.social-cont i')

console.log(detailBlock);

btnLd.addEventListener('click',()=>{
    document.body.classList.toggle("dark-theme");
    h4.forEach((h)=>{
        h.classList.toggle("dark-theme")
    });
    
    form.classList.toggle("fg--search-dark");
    results.classList.toggle("dark-theme");
    
    detailBlock.classList.toggle("dark-theme");

    
    imageSwitch.classList.toggle("dark-theme")
    

    i.forEach((i)=>{
        i.classList.toggle("dark-theme")
    });

})