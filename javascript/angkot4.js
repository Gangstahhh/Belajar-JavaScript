//  Mengubah Angkot Nomor 8 Menjadi Sedang Lembur

var jmlhAngkot = 10;
var angkotBeroprasi = 6;


for(var noAngkot = 1; noAngkot <= jmlhAngkot ; noAngkot++){

    if( noAngkot <= 6 ) {
        console.log('Angkot No ' + noAngkot + ' Beroprasi Dengan Baik')

    } else if( noAngkot == 8 ){
        console.log('Angkot No ' + noAngkot + ' Sedang Lembur')

    }else {
        console.log('Angkot No ' + noAngkot + ' Tidak Sedang Beroprasi')
    }

}