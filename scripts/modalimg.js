// Ambil modal dan gambar
var modal1 = document.getElementById("modal1");
var modal2 = document.getElementById("modal2");
var img1 = document.getElementById("img1");
var img2 = document.getElementById("img2");
var span1 = modal1.getElementsByClassName("close")[0];
var span2 = modal2.getElementsByClassName("close")[0];

// Ketika gambar pertama diklik, tampilkan modal1
img1.onclick = function() {
  modal1.style.display = "flex";
}

// Ketika gambar kedua diklik, tampilkan modal2
img2.onclick = function() {
  modal2.style.display = "flex";
}

// Ketika tombol close diklik, sembunyikan modals
span1.onclick = function() {
  modal1.style.display = "none";
}

span2.onclick = function() {
  modal2.style.display = "none";
}

// Ketika klik di luar modal, sembunyikan modal
window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  } else if (event.target == modal2) {
    modal2.style.display = "none";
  }
}
