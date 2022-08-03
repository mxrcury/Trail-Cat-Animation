const containerEl = document.querySelector('.container');

containerEl.addEventListener('mousemove',(event)=>{
    const xPos = event.offsetX;
    const yPos = event.offsetY;
    const spanEl = document.createElement('span')
    spanEl.style.left = xPos + 'px';
    spanEl.style.top = yPos +'px';
    containerEl.appendChild(spanEl)
    setTimeout(()=> spanEl.remove() ,1000)
})