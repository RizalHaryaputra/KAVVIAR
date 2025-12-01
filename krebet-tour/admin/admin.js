import { auth, db, collection, addDoc, signOut, onAuthStateChanged } 
    from '../js/firebase-config.js';

// --- 1. KONFIGURASI CLOUDINARY (WAJIB DIGANTI) ---
const CLOUD_NAME = "dothvi6d9"; 
const UPLOAD_PRESET = "kavviar-preset"; 
// --------------------------------------------------

// --- 2. CEK STATUS LOGIN (PROTEKSI HALAMAN) ---
onAuthStateChanged(auth, (user) => {
    if (!user) {
        // Kalau belum login, tendang balik ke halaman login
        window.location.href = "index.html"; 
    } else {
        console.log("Admin aktif:", user.email);
    }
});

// --- 3. FUNGSI LOGOUT ---
document.getElementById('btnLogout').addEventListener('click', () => {
    signOut(auth).then(() => {
        alert("Berhasil keluar!");
        window.location.href = "index.html";
    });
});

// --- 4. FUNGSI UPLOAD GAMBAR KE CLOUDINARY ---
async function uploadToCloudinary(file) {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", UPLOAD_PRESET);

    try {
        const response = await fetch(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`, {
            method: "POST",
            body: formData
        });
        const data = await response.json();
        return data.secure_url; // Kembalikan Link Gambar Online
    } catch (error) {
        console.error("Upload Gagal:", error);
        throw new Error("Gagal upload gambar");
    }
}

// --- 5. LOGIKA SIMPAN PRODUK ---
document.getElementById('formProduk').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const btn = document.getElementById('btnSaveProd');
    btn.innerHTML = "Sedang Mengupload...";
    btn.disabled = true;

    try {
        // A. Ambil File Gambar
        const fileInput = document.getElementById('prodFoto').files[0];
        
        // B. Upload dulu ke Cloudinary
        const imageUrl = await uploadToCloudinary(fileInput);
        console.log("Gambar terupload:", imageUrl);

        // C. Simpan Data ke Firebase Firestore
        await addDoc(collection(db, "products"), {
            nama: document.getElementById('prodNama').value,
            harga: document.getElementById('prodHarga').value,
            wa: document.getElementById('prodWA').value,
            foto: imageUrl,
            createdAt: new Date()
        });

        alert("Produk Berhasil Disimpan!");
        document.getElementById('formProduk').reset();

    } catch (error) {
        console.error("Error:", error);
        alert("Gagal menyimpan produk: " + error.message);
    } finally {
        btn.innerHTML = '<i class="fa-solid fa-save"></i> Simpan Produk';
        btn.disabled = false;
    }
});

// --- 6. LOGIKA SIMPAN BERITA ---
document.getElementById('formBerita').addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = document.getElementById('btnSaveNews');
    btn.innerHTML = "Sedang Mengupload...";
    btn.disabled = true;

    try {
        const fileInput = document.getElementById('newsFoto').files[0];
        const imageUrl = await uploadToCloudinary(fileInput);

        await addDoc(collection(db, "news"), {
            judul: document.getElementById('newsJudul').value,
            isi: document.getElementById('newsIsi').value,
            foto: imageUrl,
            tanggal: new Date().toLocaleDateString('id-ID'),
            createdAt: new Date()
        });

        alert("Berita Berhasil Diterbitkan!");
        document.getElementById('formBerita').reset();

    } catch (error) {
        console.error("Error:", error);
        alert("Gagal terbit berita");
    } finally {
        btn.innerHTML = 'Terbitkan Berita';
        btn.disabled = false;
    }
});

// --- 7. LOGIKA SIMPAN KESENIAN (Youtube) ---
document.getElementById('formKesenian').addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = document.getElementById('btnSaveArts');
    btn.disabled = true;
    btn.innerHTML = "Menyimpan...";

    try {
        await addDoc(collection(db, "galleries"), {
            nama: document.getElementById('artsNama').value,
            link: document.getElementById('artsLink').value, // Pastikan user input link embed
            createdAt: new Date()
        });

        alert("Data Kesenian Berhasil Disimpan!");
        document.getElementById('formKesenian').reset();
    } catch (error) {
        console.error("Error:", error);
        alert("Gagal menyimpan: " + error.message);
    } finally {
        btn.disabled = false;
        btn.innerHTML = "Simpan";
    }
});

// --- 8. LOGIKA SIMPAN KELOMPOK SENI ---
document.getElementById('formKelompok').addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = document.getElementById('btnSaveGroup');
    btn.disabled = true;
    btn.innerHTML = "Menyimpan...";

    try {
        await addDoc(collection(db, "groups"), {
            nama: document.getElementById('groupNama').value,
            deskripsi: document.getElementById('groupDesc').value,
            createdAt: new Date()
        });

        alert("Kelompok Seni Berhasil Ditambahkan!");
        document.getElementById('formKelompok').reset();
    } catch (error) {
        console.error("Error:", error);
        alert("Gagal menyimpan: " + error.message);
    } finally {
        btn.disabled = false;
        btn.innerHTML = "Simpan Kelompok";
    }
});