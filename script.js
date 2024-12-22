const outputElement = document.getElementById('output');
const inputElement = document.getElementById('input');

const messages = [
    "analyzing phone...",
    "System rebooting, Please wait...",
    "Your device: ANDROID",
    "Testing network connection and stability...",
    "Network connection: Wi-Fi (Strong)",
    "IP ADRESS: 209.332.108.908",
    "NUMBER PHONE : +62-878-1962-****",
    "Warning: Unknown app detected on your device.",
    "Scanning for unauthorized access attempts...",
    "Warning: Root access detected on this device.",
    "Alert: System integrity compromised.",
];

let messageIndex = 0;

// Fungsi untuk mengetikkan teks dengan efek seperti mesin ketik
function typeText(text, callback) {
    let i = 0;
    inputElement.textContent = ''; // Pastikan sebelumnya kosong
    const interval = setInterval(() => {
        inputElement.textContent += text[i];
        i++;
        if (i === text.length) {
            clearInterval(interval);
            setTimeout(callback, 500); // Callback setelah selesai mengetik
        }
    }, 50);
}

// Fungsi untuk menampilkan pesan ke layar
function printMessage(message) {
    const line = document.createElement('div');
    line.textContent = `> ${message}`;
    outputElement.appendChild(line);
    outputElement.scrollTop = outputElement.scrollHeight;
}

// Fungsi utama untuk menjalankan efek prank
function hackerEffect() {
    if (messageIndex === 0) {
        // Tampilkan pesan pertama (menganalisis hp.....) selama 3 detik
        printMessage(messages[messageIndex]);
        messageIndex++;
        setTimeout(hackerEffect, 8000); // Delay 3 detik
    } else if (messageIndex < messages.length) {
        // Tampilkan pesan berikutnya dengan delay 1,5 detik antar pesan
        printMessage(messages[messageIndex]);
        messageIndex++;
        setTimeout(hackerEffect, 5500); // Delay 1,5 detik antar pesan
    } else {
        typeText("succes", () => {});
    }
}

// Menjalankan efek setelah halaman dimuat
document.addEventListener('DOMContentLoaded', () => {
    hackerEffect();
});