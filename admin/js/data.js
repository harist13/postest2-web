const dataForm = sessionStorage.getItem('dataUserKey')
const userForm = JSON.parse(dataForm)

const form = document.getElementById('frm')
const nama = document.getElementById('nama')
const email = document.getElementById('email')
const st = document.getElementById('status')
const telp = document.getElementById('telp')
const alamat = document.getElementById('alamat')
const gambar = document.getElementById('gambar')
const jk = document.getElementById('jk')
const hobi = document.getElementById('hobi')

nama.innerHTML = " " + userForm[0]["Nama"]
email.innerHTML = " " + userForm[0]["email"]
st.innerHTML = " " + userForm[0]["status"]
telp.innerHTML = " " + userForm[0]["telp"]
alamat.innerHTML = " " + userForm[0]["alamat"]
jk.innerHTML = "   " + userForm[0]["dot-1"]
jk.innerHTML = "   " + userForm[0]["dot-2"]
let hobiValue = ""
if (userForm[0]["hll"]) {
  hobiValue += userForm[0]["hll"] + " , "
}
if (userForm[0]["sosmas"]) {
  hobiValue += userForm[0]["sosmas"] + " "
}

hobi.innerHTML = " " + hobiValue
