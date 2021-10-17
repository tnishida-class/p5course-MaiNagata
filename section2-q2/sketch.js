// チェッカー
function setup() {
  createCanvas(200, 200);
  let size = width / 8;
  noStroke();
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
    if((i+j)%2==1){
      fill(150);
    }
    else{
      fill(255);
    }
    rect(size*i,size*j,size,size);
    if(j<3 && (i+j)%2==1){
      fill(255,0,0);
    }
    else if(j>4 && (i+j)%2==1){
      fill(0);
    }
    ellipse(size/2*(2*(i+1)-1),size/2*(2*(j+1)-1),22);
  }
  }
}
