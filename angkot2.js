var jmlhAngkot = 10
var angkotBeroprasi = 6
var noAngkot = 1
while(noAngkot <= angkotBeroprasi ) {
    console.log('Angkot No ' + noAngkot + ' Beroprasi Dengan Baik')
    noAngkot++
}

for(noAngkot = angkotBeroprasi + 1; noAngkot <= jmlhAngkot ; noAngkot++) {
    console.log('Angkot No ' + noAngkot + ' Sedang Tidak Beroprasi')
}