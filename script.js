function toggleMenu(){document.getElementById('navMenu').classList.toggle('nav-open')}
function submitComplaint(e){
 e.preventDefault();
 const toast=document.getElementById('toast');
 const ticket='HUMAS-'+new Date().getFullYear()+'-'+String(Math.floor(Math.random()*90000)+10000);
 toast.innerHTML='✓ Pengaduan berhasil dikirim.<br><b>Nomor tiket: '+ticket+'</b>';
 toast.classList.add('show');
 e.target.reset();
 setTimeout(()=>toast.classList.remove('show'),6000);
}
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>document.getElementById('navMenu').classList.remove('nav-open')));
