// Tema Değiştirme İşlemi
const temaButonu = document.getElementById("temaButonu");

temaButonu.addEventListener("click", function () {
    // classList.toggle ile body'e özel bir sınıf ekleyip çıkarıyoruz (Gereksinim kuralı)
    document.body.classList.toggle("dark-mode-active");
    
    // Bootstrap 5.3'ün yerleşik tema özelliğini (data-bs-theme) güncelliyoruz
    if (document.body.classList.contains("dark-mode-active")) {
        document.documentElement.setAttribute("data-bs-theme", "dark");
        temaButonu.textContent = "Açık Temaya Geç";
        temaButonu.classList.replace("btn-outline-dark", "btn-light");
    } else {
        document.documentElement.setAttribute("data-bs-theme", "light");
        temaButonu.textContent = "Koyu Temaya Geç";
        temaButonu.classList.replace("btn-light", "btn-outline-dark");
    }
});

// Form İşlemleri
const form = document.getElementById("etkinlikFormu");
const mesajAlani = document.getElementById("mesajAlani");

form.addEventListener("submit", function (event) {
    // Sayfanın yenilenmesini engelliyoruz
    event.preventDefault();

    // Input değerlerini alıyoruz
    const adSoyad = document.getElementById("adSoyad").value.trim();
    const eposta = document.getElementById("eposta").value.trim();
    const atolyeSecimi = document.getElementById("atolyeSecimi").value;
    const onayKutusu = document.getElementById("onayKutusu").checked;

    // Eksik alan kontrolü
    if (!adSoyad || !eposta || !atolyeSecimi || !onayKutusu) {
        mesajAlani.innerHTML = `
            <div class="alert alert-danger alert-dismissible fade show" role="alert">
                <strong>Hata!</strong> Lütfen tüm alanları doldurun ve onay kutusunu işaretleyin.
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Kapat"></button>
            </div>
        `;
        return; // Hata varsa işlemi durdur
    }

    // Başarılı durum: Dinamik özet kartı oluşturma
    mesajAlani.innerHTML = `
        <div class="card bg-success bg-opacity-10 border-success border-opacity-50 mt-3">
            <div class="card-body text-success">
                <h5 class="card-title fw-bold"><i class="bi bi-check-circle"></i> Başvuru Başarılı!</h5>
                <hr class="border-success opacity-25">
                <p class="mb-1"><strong>Ad Soyad:</strong> ${adSoyad}</p>
                <p class="mb-1"><strong>E-posta:</strong> ${eposta}</p>
                <p class="mb-0"><strong>Seçilen Atölye:</strong> ${atolyeSecimi}</p>
            </div>
        </div>
    `;

    // Formu sıfırlama
    form.reset();
});