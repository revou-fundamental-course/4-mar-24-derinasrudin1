// Mengambil Element HTML agar dapat dimanipulasi
const resultStatus = document.getElementById("result-status");
const resultNumber = document.getElementById("result-number");
const resultText = document.getElementById("result-text");
const resultKetNumber = document.getElementById("result-ket-number");
const resultKetText = document.getElementById("result-ket-text");
const resultKetSaran = document.getElementById("result-ket-saran");
const resultPenyakit = document.getElementById("result-penyakit");
const hitung = document.getElementById("hitung");
const resetButton = document.getElementById("resetButton");

// Mengambil Value Gender dari Radio
function getGender(name) {
  const gender = document.getElementsByName(name);
  for (let i = 0; i < gender.length; i++) {
    if (gender[i].checked) {
      return gender[i].value;
    }
  }
}

// Menghitung BMI
hitung.addEventListener("click", () => {
  const usia = document.getElementById("usia").value;
  const gender = getGender("gender");
  const beratBadan = document.getElementById("berat-badan").value;
  const tinggiBadan = document.getElementById("tinggi-badan").value;
  const bmi = beratBadan / (tinggiBadan / 100) ** 2;
  if (bmi < 18.5) {
    resultStatus.innerHTML = "Kekurangan Berat Badan";
    resultNumber.innerHTML = bmi.toFixed(2);
    resultText.innerHTML = "Berat Badan Kamu Kurang ☹";
    resultKetNumber.innerHTML = "Hasil BMI Kamu kurang dari 18.5";
    resultKetText.innerHTML = `Kamu seorang ${gender} dengan umur ${usia} Tahun, saat ini Kamu berada dalam kategori kekurangan berat badan. Kamu harus meningkatkan berat badan sebaik mungkin.`;
    resultKetSaran.innerHTML = "Salah satu kunci untuk menaikkan berat badan dengan cepat adalah surplus kalori, artinya asupan kalori harus lebih banyak daripada kebutuhan kalori sebenarnya.";
    resultPenyakit.innerHTML = `Bahaya kekurangan berat badan bagi kesehatan.<br/> Kekurangan Gizi <br/> Rentan Sakit <br/> Osteoporosis <br/> Perubahan Hormon <br/> Rambut Rontok`;
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    resultStatus.innerHTML = "Berat Badan Normal (Ideal)";
    resultNumber.innerHTML = bmi.toFixed(2);
    resultText.innerHTML = "Berat Badan Kamu Normal atau Ideal 😊";
    resultKetNumber.innerHTML = "Hasil BMI Kamu berada diantara 18.5 dan 24.9";
    resultKetText.innerHTML = `Kamu seorang ${gender} dengan usia ${usia} Tahun, saat ini Kamu berada dalam kategori yang Ideal . Tetap jaga pola makan dan gaya hidup sehat.`;
    resultKetSaran.innerHTML = "Menjaga pola makan yang seimbang, mengonsumsi makanan bergizi, dan melakukan aktivitas fisik secara teratur. Ini dapat  dilakukan agar kamu tetap sehat.";
    resultPenyakit.innerHTML = `Walaupun Berat Badan Kamu Ideal alias Normal, Kamu juga tetap berpotensi <br/> Kekurangan Berat Badan<br/> Kelebihan Berat Badan (Obesitas) <br/> Tekanan Darah Tinggi <br/> Apabila Kamu tidak menjaga pola makan dan gaya hidup sehat.`;
  } else if (bmi >= 25.0 && bmi <= 29.9) {
    resultStatus.innerHTML = "Kelebihan Berat Badan";
    resultNumber.innerHTML = bmi.toFixed(2);
    resultText.innerHTML = "Kamu memiliki berat badan lebih 🙁";
    resultKetNumber.innerHTML = "Hasil BMI Kamu berada diantara 25.0 dan 29.9";
    resultKetText.innerHTML = `Kamu seorang ${gender} dengan usia ${usia} Tahun, saat ini Kamu berada dalam kategori kelebihan  berat badan. Kamu dapat menurunkan berat badan agar Ideal`;
    resultKetSaran.innerHTML = "Cara terbaik untuk menurunkan berat badan adalah dengan mangatur kalor makanan yang dikonsumsi dan berolahraga.";
    resultPenyakit.innerHTML = `Beberapa penyakit yang berasal dari kelebihan berat badan <br/> Diabetes <br/> Hipertensi <br/> Kolesterol<br/> Osteoarthritis <br/> Tekanan Darah Tinggi <br/> Sakit Jantung`;
  } else if (bmi >= 30.0) {
    resultStatus.innerHTML = "Kegemukan (Obesitas)";
    resultNumber.innerHTML = bmi.toFixed(2);
    resultText.innerHTML = "Kamu memiliki berat badan sangat besar 😭";
    resultKetNumber.innerHTML = "Hasil BMI Kamu berada diatas 30.0";
    resultKetText.innerHTML = `Kamu seorang ${gender} dengan usia ${usia} Tahun, saat ini Kamu berada dalam kategori Kegemukan / Obesitas . Kamu harus segera menurunkan berat badan.`;
    resultKetSaran.innerHTML = "Cara terbaik untuk menurunkan berat badan adalah dengan mangatur kalor makanan yang dikonsumsi, meningkatkan aktifitas fisik dan berolahraga secara konsisten.";
    resultPenyakit.innerHTML = `Beberapa penyakit yang berasal dari Kegemukan <br/> Diabetes <br/> Hipertensi <br/> Kolesterol<br/> Osteoarthritis <br/> Tekanan Darah Tinggi <br/> Sakit Jantung`;
  }

  // Reset Form setelah hitung di click
  // document.getElementById("myForm").reset();
});

// Function Reset
resetButton.addEventListener("click", (event) => {
  event.preventDefault();
  document.getElementById("myForm").reset();
});

// Function Download PDF
window.onload = function () {
  document.getElementById("button-download").addEventListener("click", () => {
    const downResult = this.document.getElementById("result");

    // let opt = {
    //   margin: 0,
    //   filename: "bmi-file.pdf",
    //   enableLinks: true,
    //   image: { type: "png", quality: 0.98 },
    //   html2canvas: { scale: 2 },
    //   jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
    // };
    // html2pdf().from(downResult).set(opt).save();

    html2pdf().from(downResult).save();
  });
};
