

window.onload=()=>{
    let velocidad=150;
    let PosicionarComida=()=>{
        comida.x=Math.floor(Math.random()*10)
        comida.y=Math.floor(Math.random()*10)
    }

    let direccionar=(e)=>{
        let botonOprimido=e.keyCode
        if(botonOprimido==37){
            currentDirX=-1
            currentDirY=0
        }
          
        if(botonOprimido==39){
       
            currentDirX=1
            currentDirY=0
         
        }
        if(botonOprimido==38){
       
            currentDirX=0
            currentDirY=-1
            
        }
        if(botonOprimido==40){
           currentDirX=0
           currentDirY=1     
        }
      
    }
    
    let Jugar=()=>{
        let posicionSiguienteEnX=snake[0].x+currentDirX
        let posicionSiguienteEnY=snake[0].y+currentDirY
        //logica de paredes
        if(posicionSiguienteEnX>9)
           posicionSiguienteEnX=0
        if(posicionSiguienteEnX<0)
           posicionSiguienteEnX=9
        
        if(posicionSiguienteEnY>9)
         posicionSiguienteEnY=0
        if(posicionSiguienteEnY<0)
         posicionSiguienteEnY=9
        snake.unshift({x:posicionSiguienteEnX,y:posicionSiguienteEnY})
       
        //Game over
       for (let i = 1; i < logitudSnake; i++) {
           if(posicionSiguienteEnX==snake[i].x &&
            posicionSiguienteEnY==snake[i].y) {
                alert('Game Over')
                logitudSnake=1
                snake=[{x:0,y:0}]
            }
       }
       
       
        if(posicionSiguienteEnX==comida.x &&
           posicionSiguienteEnY==comida.y){
           PosicionarComida()    
           logitudSnake++
        }
        dibujar()
    }   
   
    
    let dibujar=()=>{
        ctx.clearRect(0,0,500,500)
        ctx.strokeRect(0,0,500,500)
        for (let i = 0; i < logitudSnake; i++) {
            ctx.fillRect(snake[i].x*50,snake[i].y*50,50,50)    
        }
        dibujarComida()
    }    
    
    
    let dibujarComida=()=>{
        ctx.fillRect(comida.x*50,comida.y*50,50,50)
    }

    let canvas =document.getElementById('Lienzo')
    let ctx=canvas.getContext('2d')
    ctx.strokeRect(0,0,500,500)
    let snake=[{x:0,y:0}]
    const comida={x:0,y:0}
    let logitudSnake=1
    let currentDirX=0;
    let currentDirY=0;
    PosicionarComida()
    ctx.fillRect(snake[0].x*50,snake[0].y*50,50,50)
    document.addEventListener('keydown',
                               direccionar)
  
    
    setInterval(Jugar,velocidad)
}

