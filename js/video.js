// Lädt YouTube erst nach Klick (schneller, datenschutzfreundlich). Ohne JS: Link zu YouTube.
document.querySelectorAll('a[data-yt]').forEach(function(a){
  a.addEventListener('click',function(e){
    e.preventDefault();
    var f=document.createElement('iframe');
    f.src='https://www.youtube-nocookie.com/embed/'+a.dataset.yt+'?autoplay=1';
    f.title=a.querySelector('.vtitle').textContent;
    f.allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture';
    f.allowFullscreen=true;
    var d=document.createElement('div'); d.className='video'; d.appendChild(f);
    a.replaceWith(d); f.focus();
  });
});
