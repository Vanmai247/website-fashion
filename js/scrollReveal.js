function revealOnScroll() {
    const elements = document.querySelectorAll('.reveal');
    const windowHeight = window.innerHeight;

    elements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        const elementBottom = el.getBoundingClientRect().bottom;

        // Kiểm tra xem phần tử đã nằm trong khung nhìn hay chưa
        if (elementTop < windowHeight - 100 && elementBottom > 0) {
            el.classList.add('active');
        } else {
            el.classList.remove('active'); // bỏ hiệu ứng nếu cuộn ra ngoài (tuỳ chọn)
        }
    });
}

// Gắn sự kiện cuộn và tải trang
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);
