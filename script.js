// small interactive helpers: menu toggle, smooth scrolling, set year, copy email
(function(){
  // set footer year
  var yEls = [document.getElementById('year')];
  yEls.forEach(function(el){ if(el) el.innerText = new Date().getFullYear(); });

  // menu toggle (mobile)
  var menuBtn = document.getElementById('menu-toggle');
  var nav = document.getElementById('nav');
  if(menuBtn && nav){
    menuBtn.addEventListener('click', function(){
      nav.classList.toggle('visible');
      if(nav.classList.contains('visible')){
        nav.style.display = 'flex';
        nav.style.flexDirection = 'column';
        nav.style.position = 'absolute';
        nav.style.right = '28px';
        nav.style.top = '64px';
        nav.style.background = 'rgba(255,255,255,0.95)';
        nav.style.padding = '12px';
        nav.style.borderRadius = '8px';
        nav.style.boxShadow = '0 12px 30px rgba(2,6,23,0.08)';
      } else {
        nav.style.display = '';
        nav.style.position = '';
        nav.style.right = '';
        nav.style.top = '';
        nav.style.background = '';
        nav.style.padding = '';
        nav.style.borderRadius = '';
        nav.style.boxShadow = '';
      }
    });
    // close when clicking a link
    nav.querySelectorAll('a').forEach(function(a){
      a.addEventListener('click', function(){ if(window.innerWidth < 960){ nav.classList.remove('visible'); nav.style.display=''; } });
    });
  }

  // smooth scrolling for internal links
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor){
    anchor.addEventListener('click', function(e){
      var target = document.querySelector(this.getAttribute('href'));
      if(target){
        e.preventDefault();
        target.scrollIntoView({behavior:'smooth', block:'start'});
      }
    });
  });

  // copy email to clipboard when clicking email in profile-card
  var emailBtn = document.getElementById('email-btn');
  if(emailBtn){
    emailBtn.addEventListener('click', function(e){
      // allow mailto links to still open — but also copy to clipboard
      var email = this.textContent.trim();
      try{
        navigator.clipboard.writeText(email);
      }catch(err){}
      // small visual feedback
      var old = this.textContent;
      this.textContent = 'Copied ✓';
      setTimeout(()=> this.textContent = old, 1400);
    });
  }

})();
