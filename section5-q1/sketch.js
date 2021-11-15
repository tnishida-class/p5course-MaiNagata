// 練習問題：吹き出し
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
// 吹き出しにしっぽを付けてみよう
function setup(){
  createCanvas(400, 400);
  background(255);
  balloon("推ししか勝たん！", 212, 143, 150, 0, 0, 0, 100, 100, 32);
}

function balloon(t, a, b, c, d, e, f, px, py, s){
  textSize(s);
  let w = textWidth(t);
  let h = textAscent() + textDescent();
  let p = 2;
  fill(a, b, c);
  stroke(a, b, c);
  rect(px, py, w + p * 2, h + p * 2);
  triangle(px + w + p * 2, py + h + p * 2, px + w - p * 2, py + h + p * 2, px + w , py + h + p * 6);
  fill(d, e, f);
  text(t, p + px, h + p +　py);
}
