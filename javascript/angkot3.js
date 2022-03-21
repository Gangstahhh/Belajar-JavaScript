// membuat dengan for

var jmlhAngkot = 10;
var angkotBeroprasi = 6;


for(var noAngkot = 1; noAngkot <= jmlhAngkot ; noAngkot++){

    if( noAngkot <= 6 ) {
        console.log('Angkot No ' + noAngkot + ' Beroprasi Dengan Baik')
    }else {
        console.log('Angkot No ' + noAngkot + ' Tidak Sedang Beroprasi')
    }

}