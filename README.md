# KAVVIAR - Krebet Arts Village Virtual Reality 🎭🌿

**KAVVIAR** adalah platform wisata virtual berbasis web yang menghadirkan keindahan dan keunikan **Desa Wisata Krebet** di Bantul, Yogyakarta, langsung ke layar Anda. Proyek ini memungkinkan pengguna untuk menjelajahi sentra kerajinan Batik Kayu secara interaktif melalui panorama 360 derajat.

---

## ✨ Fitur Utama

### 🏠 Halaman Depan (Landing Page)
- **Cinematic Intro:** Latar belakang video *full-screen* dengan overlay gelap yang elegan.
- **Smooth Animation:** Animasi masuk (*fade-in*) pada judul dan tombol aksi.
- **Navigasi:** Tombol "Mulai Jelajah" yang mengarahkan pengguna masuk ke area Virtual Tour.

### 🔄 Virtual Tour 360°
- **Interaksi Penuh:** Pengguna dapat melihat sekeliling (360 derajat) menggunakan mouse (PC) atau sentuhan jari (HP).
- **Hotspot Navigasi:** Ikon panah interaktif dengan animasi *bouncing* untuk berpindah lokasi.
- **Efek Transisi:** Perpindahan antar lokasi (*scene*) yang halus dengan efek *fading*.
- **Smart Zoom:** Efek *Zoom-Out* sinematik saat pertama kali masuk ke lokasi.

### 💡 Fitur Interaktif & Multimedia
- **Menu Overlay Modern:** Navbar transparan (*Glassmorphism*) yang berisi menu Profil, Galeri, dan Produk.
- **Modal Informasi:**
  - **Profil:** Info pengurus dan kelompok seni menggunakan sistem *Tab*.
  - **Galeri Kesenian:** Slider video YouTube/Lokal yang bisa digeser (*Swipe*).
  - **Katalog Produk:** Tampilan produk dengan gambar besar dan tombol **"Pesan via WhatsApp"**.
- **Multimedia Pop-up:** Hotspot khusus yang dapat menampilkan gambar dan audio narasi bersamaan.
- **Audio Cerdas:** Musik latar (Gamelan) otomatis mengecil/berhenti saat video/narasi diputar dan menyala kembali setelah selesai.

### 🛠️ Kontrol Pengguna
- Tombol Zoom In/Out  
- Auto-Rotate  
- Fullscreen  
- **Peta Lokasi:** Tombol untuk menampilkan/menyembunyikan peta Google Maps.  
- **Kontrol Audio:** Tombol *Mute/Unmute* musik latar.

---

## 🔧 Teknologi yang Digunakan

- **Core:** HTML5, CSS3, JavaScript (Vanilla)  
- **3D Engine:** [Three.js](https://threejs.org/)  
- **UI Framework:** [Bootstrap 5](https://getbootstrap.com/)  
- **Sliders:** [Swiper.js](https://swiperjs.com/)  
- **Icons:** [FontAwesome 6](https://fontawesome.com/)  
- **Animations:** [Animate.css](https://animate.style/)

---

## 📂 Struktur Folder

```text
KAVVIAR/
├── index.html              # Landing Page (Halaman Sambutan)
├── videos/                 # Aset video background Landing Page
│   └── videoplayback.mp4
├── krebet-tour/            # Aplikasi Utama Virtual Tour
│   ├── index.html          # Kode Utama Tour 360
│   ├── style.css           # Kustomisasi Tampilan
│   ├── js/                 # Logika JavaScript (Three.js, OrbitControls, dll)
│   ├── css/                # Library CSS tambahan
│   ├── panoramas/          # Gambar-gambar 360 (JPG Equirectangular)
│   ├── images/             # Aset gambar produk, ikon hotspot, dll
│   └── audio/              # Musik latar & narasi
└── README.md               # Dokumentasi Proyek
```

---

## 🚀 Cara Menjalankan (Local)

1.  **Clone atau Download** repository ini.
2.  Buka folder proyek menggunakan **VS Code**.
3.  Pastikan ekstensi **Live Server** sudah terinstal di VS Code.
4.  Klik kanan pada file `index.html` (yang berada di folder terluar/root), lalu pilih **"Open with Live Server"**.
5.  Website akan otomatis terbuka di browser (biasanya di alamat `http://127.0.0.1:5500`).

## 🌐 Deployment

Proyek ini sudah dioptimasi untuk layanan hosting statis seperti **Netlify** dan **GitHub Pages**.

**Pengaturan Penting saat Deploy:**
* **Root Directory:** Biarkan kosong (`./`) atau set ke *root project* agar Landing Page (halaman sambutan) terbaca pertama kali.
* **Case Sensitivity:** Server hosting (Linux) sangat sensitif terhadap huruf besar/kecil. Pastikan penulisan nama file di kode (misal `src="js/three.min.js"`) sama persis dengan nama file aslinya.

---

## 📝 Kredit

* **Lokasi:** Desa Wisata Krebet, Bantul, Yogyakarta.
* **Pengembang:** Rizal Haryaputra
* **Sumber Aset:**
    * Panorama: Google Street View / Dokumentasi Pribadi.
    * Musik: Gamelan Jawa (Royalty Free / Izin Khusus).

---
*Dibuat sebagai bagian dari upaya digitalisasi pariwisata Indonesia.*
