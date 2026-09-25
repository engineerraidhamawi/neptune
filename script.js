// 1. Splash Screen Logic (Backup)
function enterSite() {
    document.getElementById('splash-screen').classList.add('hidden');
}

// 2. Language Toggle Logic
function toggleLanguage() {
    const html = document.documentElement;
    const langBtn = document.getElementById('lang-toggle');
    
    let currentLang = html.getAttribute('lang');

    if (currentLang === 'en') {
        // Switch to Arabic
        html.setAttribute('lang', 'ar');
        html.setAttribute('dir', 'rtl');
        langBtn.innerText = 'English';
        
        document.querySelectorAll('[data-ar]').forEach(el => {
            el.innerText = el.getAttribute('data-ar');
        });
    } else {
        // Switch to English
        html.setAttribute('lang', 'en');
        html.setAttribute('dir', 'ltr');
        langBtn.innerText = 'عربي';
        
        document.querySelectorAll('[data-en]').forEach(el => {
            el.innerText = el.getAttribute('data-en');
        });
    }
}
