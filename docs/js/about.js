const boxes = document.querySelectorAll(".lettersAB");

window.addEventListener('scroll', checkBoxes);

checkBoxes();

function checkBoxes(){
  
  const triggerButtom = window.innerHeight / 5 * 4;

  boxes.forEach( box => {
    
    const boxTop = box.getBoundingClientRect().top;  
  
    if(boxTop < triggerButtom){
      box.classList.add('show');
    }else{
      box.classList.remove('show');
    }
  
  
  });

}