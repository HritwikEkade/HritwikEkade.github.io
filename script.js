// script.js
document.getElementById && (document.getElementById('year') || true);

(function(){
  // set year in footer(s)
  var y = new Date().getFullYear();
  var el = document.getElementById('year');
  if(el) el.innerText = y;
  var el2 = document.getElementById('year2');
  if(el2) el2.innerText = y;
  var el3 = document.getElementById('year3');
  if(el3) el3.innerText = y;
})();
