window.addEventListener('load', function(){ // 웹 페이지의 모든 리소스가 로드되면 실행되는 이벤트 리스너를 등록한다. 웹 페이지의 모든 HTML,CSS, 이미지 및 기타 리소스가 로드된 후에 코드 블록 내의 작업이 수행된다.
  // canvas setup
  const canvas = document.getElementById('canvas1'); // 문서 내에 고유한 'id'로 식별된 요소를 검색하고 변수에 저장한다.
  const ctx = canvas.getContext('2d'); // canvas 요소의 컨텍스트를 가져온다.
  canvas.width = 500; // px
  canvas.height = 500; // px

  class InputHandler {
    constructor(game){
      this.game = game;
      window.addEventListener('keydown', e => { // custom variable name "e" for event
        if ((e.key === 'ArrowUp') ||
            ((e.key === 'ArrowDown')
        )&& this.game.keys.indexOf(e.key) === -1){
          this.game.keys.push(e.key);
        }
        console.log(this.game.keys);
      });
      window.addEventListener('keyup', e =>{
        if (this.game.keys.indexOf(e.key) > -1){
          this.game.keys.splice(this.game.keys.indexOf(e.key), 1);
        }
        console.log(this.game.keys);
        });
    }
  }
  class Projectile {

  }
  class Particle {

  }
  class Player {
    constructor(game){
      this.game = game; // this.game의 game은 객체의 속성(property) 이름.
      // = 우측의 game은 생성자 함수의 매개변수(parameter) 이름.
      this.width = 120;
      this.height = 190;
      this.x = 20;
      this.y = 100;
      this.speedY = 0; // +는 아래로, -는 위로
      this.maxSpeed = 3;
    }
    update(){
      if (this.game.keys.includes('ArrowUp')) this.speedY = -this.maxSpeed;
      else if (this.game.keys.includes('ArrowDown')) this.speedY = this.maxSpeed ;
      else this.speedY = 0;
      this.y += this.speedY;
    }
    draw(context){
      context.fillRect(this.x, this.y, this.width, this.height); // context를 ctx로 바꿨음. 은 매개변수에 아무것도 없을 때. by chatgpt.
    }
  }
  class Enemy {

  }
  class Layer {

  }
  class Background {

  }
  class UI {

  }
  class Game { // brain of entire project
    constructor(width, height){
      this.width = width;
      this.height = height;
      this.player = new Player(this);
      this.input = new InputHandler(this);
      this.keys = []; 
    }
    update(){
      this.player.update();
    }
    draw(context){
      this.player.draw(context);
    }
  }

  const game = new Game(canvas.width, canvas.height);
  // animation loop
  function animate(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);    
    game.update();
    game.draw(ctx);
    requestAnimationFrame(animate);
  }
  animate();
})  