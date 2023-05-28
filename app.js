//   Set Variable 

const htmlElement = document.documentElement;
const containerToggle= document.querySelector('.toggle-container')
const toggle= document.querySelector('.toggle')


toggle.addEventListener('click',changeMe)

function changeMe (){
  let themeColor= htmlElement.getAttribute('data-theme');
if(themeColor === 'light'){
  htmlElement.setAttribute('data-theme',"dark")
  htmlElement.classList.toggle('transition')
  toggle.classList.add('move-rigth')
}else{
  htmlElement.setAttribute('data-theme',"light");
  toggle.classList.remove('move-rigth')
}

}
























