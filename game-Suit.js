// input dari user
var tanya = true;
while(tanya){
    var player = prompt('Masukan Pilihan Anda: Batu, Gunting , Kertas');

    // input pilihan komputer
    var computer = Math.random();

    if( computer < 0.34 ){
        computer = 'Batu';

    }else if (computer >= 0.34 && computer <= 0.67){
        computer = 'Gunting';
    }else {
        computer = 'Kertas';
    }
    // menentukan rules
    var hasil = '';

    if(player == computer){
        hasil = 'Seri'
    } else if(player == 'Batu'){
    //     if(computer == 'Orang'){
    //         hasil = 'Menang';
    //     }else{
    //         hasil = 'Kalah';
    //     }
            hasil = ( computer == 'Kertas') ? 'Kalah' : 'Gunting';    

    } else if( player == 'Kertas'){
        hasil = ( computer == 'Batu') ? 'Menang' : 'Kalah';
        
    } else if( player == 'Gunting'){
        hasil = ( computer == 'Kertas') ? 'Menang' : 'Kalah';
    } else {
        hasil = 'Anda Memasukan Pilihan Yang Salah'
    }
      
 
// tampilkan hasilnya

alert(' Kamu Memilih ' + player + ' Dan Computer Memilih ' + computer + ' \n Maka Hasilnya Kamu ' + hasil );

    tanya = confirm('Lagi?')
}

alert(' Terimakasih Sudah Bermain')