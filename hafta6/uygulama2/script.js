const donusumSecenekleri = {
    uzunluk: [
        { deger: "m_km", metin: "Metre -> Kilometre" },
        { deger: "km_m", metin: "Kilometre -> Metre" },
       
        
    ],
    sicaklik: [
        { deger: "c_f", metin: "Celsius -> Fahrenheit" },
        { deger: "f_c", metin: "Fahrenheit -> Celsius" },
        
    ],
    agirlik: [
        { deger: "kg_g", metin: "Kilogram -> Gram" },
        { deger: "g_kg", metin: "Gram -> Kilogram" }
    ]
};


window.onload = function() {
    kategoriDegisti();
};


function kategoriDegisti() {
    const secilenKategori = document.getElementById("kategori").value;
    const secenekler = donusumSecenekleri[secilenKategori];
    const donusumSelect = document.getElementById("donusumTipi");


    donusumSelect.innerHTML = "";

    secenekler.forEach(secenek => {
        const option = document.createElement("option");
        option.value = secenek.deger;
        option.text = secenek.metin;
        donusumSelect.appendChild(option);
    });
}


function hesapla() {
    const miktar = parseFloat(document.getElementById("deger").value);
    const donusumTipi = document.getElementById("donusumTipi").value;
    const sonucDegeri = document.getElementById("sonucDegeri");

    if (isNaN(miktar)) {
        sonucDegeri.innerText = "Lütfen sayı girin!";
        return;
    }

    let sonuc = 0;

    switch (donusumTipi) {
    
        case "m_km": sonuc = miktar / 1000; break;
        case "km_m": sonuc = miktar * 1000; break;
        
       
        case "c_f": sonuc = (miktar * 1.8) + 32; break;
        case "f_c": sonuc = (miktar - 32) / 1.8; break;
       
        
     
        case "kg_g": sonuc = miktar * 1000; break;
        case "g_kg": sonuc = miktar / 1000; break;
        
        default: sonuc = 0; break;
    }

    sonucDegeri.innerText = sonuc.toLocaleString('tr-TR', { maximumFractionDigits: 4 });
}