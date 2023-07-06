function submitData(wahyu) {
    wahyu.preventDefault()
    // DOM -> Document Object Model (untuk memanipulasi element HTML melalui javascript)

    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let phone = document.getElementById("phone").value
    let subject = document.getElementById("subject").value
    let message = document.getElementById("message").value

    let objectData = {
        name: name,
        email,
        phone,
        subject,
        message
    }

    let arrayData = [name, email, phone, subject, message]

    console.log(objectData)

    if (name === "") {
        return alert('Name harus diisi!')
    } else if (email === "") {
        return alert('Email harus diisi!')
    } else if (phone === "") {
        return alert('Phone harus diisi!')
    } else if (subject === "") {
        return alert('Subject harus diisi!')
    } else if (message === "") {
        return alert('Message harus diisi!')
    }

    const emailReceiver = "mrwahyudiyanto@gmail.com"

    let a = document.createElement('a')
    a.href = `mailto:${emailReceiver}?subject=${subject}&body=Halo nama saya ${name},\n${message}, silahkan kontak saya di nomor berikut : ${phone}`
    a.click()
    
}