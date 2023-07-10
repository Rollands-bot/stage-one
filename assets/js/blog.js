// Fungsi getProject(event) berpengaruh pada elemen HTML dengan id "project-list". Fungsi ini dipanggil saat pengguna mengirimkan formulir proyek melalui event "submit". Fungsi ini mengumpulkan nilai-nilai input dari elemen HTML seperti nama proyek, tanggal mulai, tanggal selesai, deskripsi, file gambar, dan pilihan-pilihan teknologi yang digunakan.

let listproject = [];

function getProject(event){
    event.preventDefault()

    let project = document.getElementById("project-name").value;
    let start = new Date(document.getElementById("project-start").value);
    let end = new Date(document.getElementById("project-end").value);
    let description = document.getElementById("project-desc").value;
    let img = document.getElementById("img-file").files;
    let javascript = document.getElementById("javascript").checked;
    let bootstrap = document.getElementById("bootstrap").checked;
    let react = document.getElementById("react").checked;
    let golang = document.getElementById("golang").checked;

    let distance = end.getTime() - start.getTime();
    // by default the value is second

  let miliSecond = 1000;
  let secondInHour = 3600; // convert to second
  let hourInDay = 24;
  let dayInWeek = 7;
  let dayInMonth = 30;
  let monthInYear = 12;

  let distanceDay = Math.floor(
    distance / (miliSecond * secondInHour * hourInDay)
  ); // fungsi floor() untuk membulatkan hasil bilangan
  // let distanceWeek = Math.floor(
  //   distance / (miliSecond * secondInHour * hourInDay * dayInWeek)
  // );
  let distanceMonth = Math.floor(
    distance / (miliSecond * secondInHour * hourInDay * dayInMonth)
  );
  let distanceYear = Math.floor(
    distance /
      (miliSecond * secondInHour * hourInDay * dayInMonth * monthInYear)
  );

  duration = "";

  if (distanceDay <= 30 && distanceDay > 1) {
    duration = `${distanceDay} Days`;
  } else if (distanceDay == 1) {
    duration = `${distanceDay} Day`;
  // } else if (distanceMonth % 7) {
  //   duration = `${distanceWeek} Week`;
  } else if (distanceDay > 30 && distanceMonth >= 1) {
    duration = `${distanceMonth} Month ${distanceDay % 30} Days`;
  } else if (distanceDay > 30 && distanceMonth > 1) {
    duration = `${distanceMonth} Months ${distanceDay % 30} Days`;
  } else if (distanceYear == 1) {
    duration = `${distanceYear} Year`;
  } else if (distanceMonth > 12 && distanceYear > 1) {
    duration = `${distanceYear} Years ${distanceMonth % 12} Months ${
      distanceDay % 30
    } Days`;
  }

  console.log(duration);


    img = URL.createObjectURL(img[0])

    let blog = {
        project,
        duration,
        start,
        end,
        description,
        img,
        javascript,
        bootstrap,
        react,
        golang,
        author: "Wahyudiyanto",
        durationPost : new Date(),
    };

    listproject.push(blog);
    console.log(listproject);
    renderProject();
}

function resetForm(){
    document.getElementById("project-name").value = ""
    document.getElementById("project-start").value = ""
    document.getElementById("project-end").value = ""
    document.getElementById("project-desc").value = ""
    document.getElementById("img-file").value = ""
    document.getElementById("javascript").checked = false
    document.getElementById("bootstrap").checked = false
    document.getElementById("react").checked = false
    document.getElementById("golang").checked = false 
}
// Setelah mengumpulkan nilai-nilai tersebut, fungsi membuat sebuah objek blog yang berisi semua informasi proyek. Objek ini kemudian ditambahkan ke dalam array listproject. Fungsi renderProject() kemudian dipanggil untuk menampilkan semua proyek yang ada dalam array listproject ke dalam elemen HTML dengan id "project-list".

// Fungsi renderProject() akan mengubah isi dari elemen HTML dengan id "project-list". Dalam loop for, fungsi ini akan menghasilkan tampilan untuk setiap proyek dalam array listproject. Setiap proyek akan ditampilkan dalam elemen HTML yang mengandung gambar proyek, judul proyek, durasi, deskripsi, teknologi yang digunakan, dan tombol aksi seperti edit dan hapus.

function renderProject(){
    document.getElementById("project-list").innerHTML = ""

    for(let i = 0 ; i < listproject.length; i++) {
        document.getElementById("project-list").innerHTML += 
        `<div class="myproject-card">
            <img src="${listproject[i].img}" style="height: 200px;" alt="posted">
            <div class="kotak">

            <div class="judul">
            <h3>Dumbways Mobile App - 2023</h3>
            <span>Duration : ${listproject[i].duration}</span>
            <p>${listproject[i].author}</p>
            </div>
            
            <div class="desc-project">

            <article>${listproject[i].description}</article>
            </div>

            <div class="tech-used">
            ${listproject[i].javascript ? "<i class='fab fa-js'></i>" : ""}
            ${listproject[i].react ? "<i class='fab fa-react'></i>" : ""}
            ${listproject[i].bootstrap ? "<i class='fab fa-bootstrap'></i>" : ""}
            ${listproject[i].golang ? "<i class='fab fa-golang'></i>" : ""}
            </div>
            <p style="color: #8d8d8d;"> ${getDurationPost(listproject[i].durationPost)}</p>
            <div style="display: flex;">
                <button class="action">edit</button>
                <button class="action">delete</button>
            </div>
        </div>  
    </div>`
    }
}

// Dengan demikian, ketika fungsi getProject(event) dijalankan, hasilnya akan mempengaruhi tampilan HTML di elemen dengan id "project-list". Proyek baru akan ditambahkan ke dalam daftar proyek yang ditampilkan di halaman web.

function getDurationPost(time) {
    let timeNow = new Date();
    let timePost = time;
  
    let durationPost = timeNow - timePost;
    console.log(durationPost);
  
    //declaration
  
    let miliSecond = 1000;
    let secondInHour = 3600; // converted to second
    let minutesInHour = 60;
    let hourInDay = 24;
  
    let durationPostDay = Math.floor(
      durationPost / (miliSecond * secondInHour * hourInDay)
    );
    let durationPostHour = Math.floor(durationPost / (miliSecond * secondInHour));
    let durationPostMinute = Math.floor(
      durationPost / (miliSecond * minutesInHour)
    );
    let durationPostSecond = Math.floor(durationPost / miliSecond);
  
    if (durationPostSecond == 1) {
      return `${durationPostSecond} second ago`;
    } else if (durationPostSecond <= 60) {
      return `${durationPostSecond} seconds ago`;
    } else if (durationPostMinute == 1) {
      return `${durationPostMinute} minute ago`;
    } else if (durationPostMinute <= 60) {
      return `${durationPostMinute} minutes ago`;
    } else if (durationPostHour == 1) {
      return `${durationPostHour} hour Ago`;
    } else if (durationPostHour <= 24) {
      return `${durationPostHour} hours ago`;
    } else if (durationPostDay == 1) {
      return `${durationPostDay} day ago`;
    } else if (durationPostDay <= 30) {
      return `${durationPostDay} days ago`;
    } 
  }
  
  setInterval(function () {
    renderProject();
  }, 1000);