
    window.onload = function () {
		window.setTimeout(fadeout, 500);
	}

	function fadeout() {
		document.querySelector('.preloader').style.opacity = '0';
		document.querySelector('.preloader').style.display = 'none';
	}


function myskill(){
  var divele = document.getElementById('skilldiv');
  if(divele.style.display == 'block'){
    divele.style.display = 'none';
  }
  else{
    divele.style.display = 'block';
  }
}
function funintrest(){
  var intr = document.getElementById('bottom');
  if(intr.style.display == 'flex'){
    intr.style.display = 'none';
  }
  else{
    intr.style.display = 'flex';
  }
}

function contact(){
  var con = document.getElementById('footer');
  if (con.style.display == 'flex') {
    con.style.display = 'none';
  }
  else {
    con.style.display = 'flex';
  }
}
