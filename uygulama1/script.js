function hesapla() {
   
    const adSoyad = document.getElementById("adSoyad").value;
    const vize = parseFloat(document.getElementById("vize").value);
    const final = parseFloat(document.getElementById("final").value);

 
    if (adSoyad === "" || isNaN(vize) || isNaN(final)) {
        alert("Lütfen tüm alanları eksiksiz ve sayısal değerlerle doldurunuz.");
        return;
    }

 
    const ortalama = (vize * 0.4) + (final * 0.6);

    const durum = ortalama >= 50 ? "Geçti" : "Kaldı";

    let harfNotu = "";
    if (ortalama >= 90) {
        harfNotu = "AA";
    } else if (ortalama >= 80) {
        harfNotu = "BA";
    } else if (ortalama >= 70) {
        harfNotu = "BB";
    } else if (ortalama >= 60) {
        harfNotu = "CB";
    } else if (ortalama >= 50) {
        harfNotu = "CC";
    } else if (ortalama >= 40) {
        harfNotu = "DC";
    } else if (ortalama >= 30) {
        harfNotu = "DD";
    } else {
        harfNotu = "FF";
    }

    document.getElementById("sonucAd").innerText = adSoyad;
    document.getElementById("sonucOrtalama").innerText = "Ortalama: " + ortalama.toFixed(2);
    document.getElementById("sonucHarf").innerText = "Harf Notu: " + harfNotu;
    document.getElementById("sonucDurum").innerText = "Durum: " + durum;

    document.getElementById("sonucAlani").style.display = "block";
}