document.addEventListener('DOMContentLoaded', ()=>{
  // Speech rotation
  const texts = ["歡迎來到Jonas的營地","朋友們都在這裡"];
  let i=0;
  const speech = document.getElementById('speech');
  setInterval(()=>{
    i = (i+1) % texts.length;
    if(speech){
      speech.textContent = texts[i];
    }
  },3500);

  // Stickman animation: slide across timeline using CSS left based on keyframes via JS
  const stick = document.getElementById('stickman');
  if(stick){
    // animate from left 5% to 85% over 6s, repeat when visible
    const animate = () => {
      stick.style.transition = 'transform 4s linear';
      stick.style.transform = 'translateX(calc(55rem))';
      setTimeout(()=>{
        stick.style.transition = 'none';
        stick.style.transform = 'translateX(calc(55rem))';
      },6100);
    };

    // Trigger animation when timeline in viewport
    const timeline = document.querySelector('.timeline');
    const obs = new IntersectionObserver(entries=>{
      entries.forEach(e=>{
        if(entries[0].isIntersecting){
          animate();
        }
      });
    },{threshold:0.5});
    if(timeline) obs.observe(timeline);
  }

  // Smooth internal link behavior already via CSS - fallback for older browsers
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', (e)=>{
      const target = document.querySelector(a.getAttribute('href'));
      if(target){e.preventDefault(); target.scrollIntoView({behavior:'smooth'});}    
    });
  });
});
