(function(d, b, w) {
    const q = d.createElement('div');
    q.innerHTML = `<style>
    html,body{overflow-x:hidden;}
    .bubble{
      position:absolute;
      background:rgba(255,255,255,0.1);
      border:thin solid rgba(255,255,225,0.3);
      border-radius:8px;
      box-shadow: 0 0 1px 1px rgba(255,255,225,0.2);
    }
    .bubble::after{
      content:"";
      display:block;
      height:3px;
      width:3px;b
      order-radius:2px;
      background:rgba(255,255,255,0.2);
    }</style>`;
    q.id = 'bubbleparticle';
    b.appendChild(q);

    const h = w.innerHeight;
    let u = d.documentElement.scrollTop || b.scrollTop;
    const z = 9999;
    const top = new Array();
    const left = new Array();
    const velocityY = new Array();
    const g = new Array();

    d.addEventListener('scroll', () => { u = d.documentElement.scrollTop || b.scrollTop; }, false);
    for (let i = 0; i < 50; i++) { //【1】泡の量を指定
        const m = d.createElement('div');
        q.appendChild(m);
        const p = Math.random() * 8 + 6;
        m.setAttribute('style', 'z-index:' + (z + i) + ';top:' + top[i] + 'px;width:' + p + 'px;height:' + p + 'px;left:' + left[i] + 'px;');
        m.setAttribute('class', 'bubble');

        top[i] = Math.random() * h + u;
        left[i] = Math.random() * w.innerWidth;
        velocityY[i] = Math.random() * 5 + 1; //【2】泡の上昇速度
        g[i] = m;
    }
    setInterval(function() {
        for (let i = 0; i < g.length; i++) { //【1】泡の量を指定
            left[i] += (Math.random() - 0.5) * 2;
            top[i] -= velocityY[i];

            if (top[i] < u) {
                top[i] = u + h - 10;
            }
            if (left[i] < 0) {
                left[i] = Math.random() + w.innerWidth;
            }
            if (left[i] > w.innerWidth) {
                left[i] = Math.random()
            }

            g[i].style.top = top[i] + 'px';
            g[i].style.left = left[i] + 'px';
        }
    }, 45); //【3】繰り返しまでの数値
})(document, document.body, window);