const apiCall = "https://api.github.com/users/";

const form = document.querySelector('#git-user-form');
const inputSearch = document.querySelector('.input');

const imgPro = document.querySelector('.img-profile');
const profilName = document.querySelector('.profil-title');
const email = document.querySelector('.profil-email');
const joined = document.querySelector('.results__joined-date');


async function dataGitHub(user){
    const ans = await fetch(`${apiCall}${user}`);
    const data = await ans.json();
    
    const log = data.login
    const imgUrl = data.avatar_url
    const email = data.email;
    const date = data.created_at;


    console.log(email);

    imgPro.src=imgUrl;
    profilName.innerText=log;
    if(email==null){email.innerText="not fulfilled!!"}else{email.innerText=email};
    joined.innerHTML=`Joined ${date.getFullYear()}`

}

// dataGitHub("ziratsu")

form.addEventListener('submit',(e)=>{
    if(inputSearch.value.length > 0 ){
        e.preventDefault();
        dataGitHub(inputSearch.value);
        inputSearch.value="";
    }
    
    
})