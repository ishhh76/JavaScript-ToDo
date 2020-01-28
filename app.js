const addTo = document.querySelector(".add");
const list=document.querySelector(".todos");
const search=document.querySelector(".search input")

function inputText(text){
    const addToHtml= `
    <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${text}</span>
            <i class="far fa-trash-alt delete"></i>
    </li> `;
    list.innerHTML += addToHtml;

};

addTo.addEventListener("submit", (e)=>{
    e.preventDefault();
    const text= addTo.add.value.trim();
    console.log(text);
    inputText(text);
})

// Delete function
list.addEventListener("click", (e) =>{
    if(e.target.classList.contains("delete")){
        e.target.parentElement.remove()  
        console.log(e.target.parentElement)  
    };

})
const filterTodos =(term)=>{
    Array.from(list.children)
        .filter((x)=>!x.textContent.includes(term))
        .forEach((element) => element.classList.add ("filtered"));

        Array.from(list.children)
        .filter((x)=>x.textContent.includes(term))
        .forEach((element) => element.classList.remove ("filtered"));
      
    };


// Search function
search.addEventListener("keyup", e=>{
    const term = search.value.trim();
    filterTodos(term);

});
const tick =()=>{
const now = new Date();
const hr= now.getHours();
const min= now.getMinutes();
const sec=now.getSeconds();
//console.log(hr, min, sec)
const clock= document.querySelector(".clock");
const html = ` <span> ${hr} </span> :
               <span> ${min} </span> :
               <span> ${sec} </span>  `;
clock.innerHTML=html;


}
setInterval(tick, 1000);

