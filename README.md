# read-xlsx-file-in-nodejs
Read .xlsx file in Node.js  with modules excel 

Terkadang kita memerlukan untuk memindah data dalam file excel kedalam database,
tentunya hal ini akan sangat merepotkan jika data dalam file excel mencapai ribuan data,
format file excel dalam repo ini hanya bisa membaca file excel dengan extensi .xlsx.
contoh data dalam excel dapat di lihat pada file excel di folder public/file/employees.xlsx.
Baris pertama dalam file excel sebagai key, sedangkan bari ke-2 dan seterusnya akan dijadika value (dalam database MongoDB)

contoh :
excel file :
 row1 : nip    name gender salary
 row2 : AADJ12 oman male  3.000.000
 
 kemudian format data dalam file excel akan di convert ke bentuk JSON menjadi seperti berikut :
 [ { 
     nip: 'AADJ12',
     name: 'Oman',
     gender: 'male',
     salary: '3.000.000' 
 } ]
 
 jika sudah dalam bentuk JSON tinggal bagaimana data akan diolah, akan di tampilkan datanya pada halaman web kemudian
 di pilih satu persatu dan disimpan dalam database atau langsung di simpan kedatabase.
 
 