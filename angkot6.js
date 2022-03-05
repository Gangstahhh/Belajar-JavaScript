//  Membuat Angkot No 5 Menjadi Lembur

var jmlhAngkot = 10;
var angkotBeroprasi = 6;


for (noAngkot = 1 ; noAngkot <=jmlhAngkot ; noAngkot++) {
    
    if(noAngkot <=6  && noAngkot !== 5){
        console.log('Angkot No ' + noAngkot + ' Beroprasi Dengan Baik')
    }else if (noAngkot === 8 || noAngkot === 10 || noAngkot === 5){
        console.log('Angkot No ' + noAngkot + ' Sudah Beroprasi Dan Sedang Lembur')

    } else {
        console.log('Angkot No ' + noAngkot + ' Tidak Sedang Beroprasi')
    }
}