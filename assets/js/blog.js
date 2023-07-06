// Fungsi getProject(event) berpengaruh pada elemen HTML dengan id "project-list". Fungsi ini dipanggil saat pengguna mengirimkan formulir proyek melalui event "submit". Fungsi ini mengumpulkan nilai-nilai input dari elemen HTML seperti nama proyek, tanggal mulai, tanggal selesai, deskripsi, file gambar, dan pilihan-pilihan teknologi yang digunakan.

const listproject = []

function getProject(event){
    event.preventDefault()

    let project = document.getElementById("project-name").value
    let start = document.getElementById("project-start").value
    let end = document.getElementById("project-end").value
    let description = document.getElementById("project-desc").value
    let img = document.getElementById("img-file").files
    let javascript = document.getElementById("javascript").checked
    let bootstrap = document.getElementById("bootstrap").checked
    let react = document.getElementById("react").checked
    let golang = document.getElementById("golang").checked

    img = URL.createObjectURL(img[0])
    
    let blog = {
        project,
        start,
        end,
        description,
        img,
        javascript,
        bootstrap,
        react,
        golang
    }
    listproject.push(blog);
    console.log(listproject);
    renderProject();
}
// Setelah mengumpulkan nilai-nilai tersebut, fungsi membuat sebuah objek blog yang berisi semua informasi proyek. Objek ini kemudian ditambahkan ke dalam array listproject. Fungsi renderProject() kemudian dipanggil untuk menampilkan semua proyek yang ada dalam array listproject ke dalam elemen HTML dengan id "project-list".

// Fungsi renderProject() akan mengubah isi dari elemen HTML dengan id "project-list". Dalam loop for, fungsi ini akan menghasilkan tampilan untuk setiap proyek dalam array listproject. Setiap proyek akan ditampilkan dalam elemen HTML yang mengandung gambar proyek, judul proyek, durasi, deskripsi, teknologi yang digunakan, dan tombol aksi seperti edit dan hapus.

function renderProject(){
    document.getElementById("project-list").innerHTML = ""
    for(let i = 0 ; i < listproject.length; i++) {
        document.getElementById("project-list").innerHTML += 
        `<div class="myproject-card">
            <img src="${listproject[i].img}" style="height: 200px;" alt="posted">
            <a style="font-weight: bold; cursor: pointer; text-decoratui" href="detail-project.html">${listproject[i].project}</a>
            <p>durasi : 3 bulan</p>
            <div class="desc-project">
            <article>${listproject[i].description}</article>
            </div>

            <div class="tech-used">
            ${listproject[i].javascript ? "<i class='fab fa-js'></i>" : ""}
            ${listproject[i].react ? "<i class='fab fa-react'></i>" : ""}
            ${listproject[i].bootstrap ? "<i class='fab fa-bootstrap'></i>" : ""}
            ${listproject[i].golang ? "<i class='fab fa-golang'></i>" : ""}
            </div>

            <div style="display: flex;">
                <button class="action">edit</button>
                <button class="action">delete</button>
            </div>
        </div>  
    </div>`
    }
}

// Dengan demikian, ketika fungsi getProject(event) dijalankan, hasilnya akan mempengaruhi tampilan HTML di elemen dengan id "project-list". Proyek baru akan ditambahkan ke dalam daftar proyek yang ditampilkan di halaman web.