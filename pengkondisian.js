var angka = prompt('Masukan Nilai')

// Pengkondisian if
if (angka % 2 == 0){
    alert(angka + ' adalah bilangan Genap')
}else if( angka % 2 == 1){
    alert(angka + ' adalah bilangan Ganjil')
}
else {
    alert('Yang Anda Masukan Bukan Angka')
}