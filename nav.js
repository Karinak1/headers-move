const sections=document.querySelectorAll('section');
const new1=document.querySelector('.new1');
const gradients= [
'linear-gradient(to right top,rgb(91, 114, 108),rgb(138, 138, 192)',
'linear-gradient(to right top,rgb(114, 99, 111),rgb(179, 179, 153)',
'linear-gradient(to right top, rgb(16, 16, 66), rgb(88, 88, 122))',
];


const options={
  threshold:0.7
}
let observer= new IntersectionObserver( navCheck, options);

function navCheck(entries){
entries.forEach(entry=>{
  const className= entry.target.className;
  const activeAnchor=document.querySelector(`[data-page=${className}]`);
  const gradientsIndex= entry.target.getAttribute('data-index');
  const coords=activeAnchor.getBoundingClientRect();
  const directions={
    height:coords.height,
    width:coords.width,
    top:coords.top,
    left:coords.left
  };
  if(entry.isIntersecting){
    new1.style.setProperty('left', `${directions.left}px`);
    new1.style.setProperty('top', `${directions.top}px`);
    new1.style.setProperty('height', `${directions.height}px`);
    new1.style.setProperty('width', `${directions.width}px`);
    new1.style.background= gradients[gradientsIndex];
  }
});

}

sections.forEach(section=>{
  observer.observe(section);
});