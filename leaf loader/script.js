const leaves=document.querySelectorAll(".leaf") ;

function startLoader() {
    oneTurn()

    setInterval(() =>{
        oneTurn() ;
        leaves[leaves.length-1].getElementsByClassName.fill ="#b0b6b1" ;
    },1800) ;
}

function oneTurn() {
    for (let i = 0; i < leaves.length; i += 1) {
      setTimeout(() => {
        if (i > 0) {
          leaves[i - 1].style.fill = '#b0b6b1';
        };
  
        leaves[i].style.fill = '#528d5c';
      }, i * 300);
    };
  }
  
  startLoader();