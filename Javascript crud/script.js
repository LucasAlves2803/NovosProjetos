let form = document.getElementById('form');
let input = document.getElementById('input');
let msg = document.getElementById("msg");
let post = document.getElementById('posts');


form.addEventListener('submit',(e) => { 
    e.preventDefault();
    formValidation(); // this function must be inside event listener because
    // here the validation will be executed always that the button submit is clicked 
    
    console.log('button clicked');
    }
    )

let data = {};

let acceptData = () => {
    data['text'] = input.value;
    console.log(data['text']);
    createPost();
}

let formValidation = () => {
    if(input.value === ''){
        msg.innerHTML = 'Post cannot be blank';
    }
    else{
        console.log('success');
        acceptData();
        msg.innerHTML = '';
    }
}

let createPost = ()  =>{
    post.innerHTML += `<div> 
                        <p> ${data.text}</p>
                        <span class="options">
                        
                        <i onClick='editPost(this)' class="fa-solid fa-pen-to-square"></i>
                        <i onClick='deletePost(this)' class="fa-solid fa-trash-can"></i>
                        </span>  </div>`;
    input.value = '';
}

let deletePost = (e) =>{
    // e is the trash icon
    e.parentElement.parentElement.remove();
}
 
let editPost = (e) => {
    input.value = e.parentElement.previousElementSibling.innerHTML;
    e.parentElement.parentElement.remove();
}