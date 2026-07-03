// 1. نسوي متغير يحسب عدد القطع في السلة ويبدأ من الصفر
let totalItems = 0;

// 2. نمسك عنصر العداد الموجود في الهيدر
const cartCountElement = document.getElementById('cart-count');

// 3. نبحث عن كل أزرار الشراء
const buyButtons = document.querySelectorAll('.product-card button');

// 4. نشغل التفاعل عند الضغط
buyButtons.forEach(button => {
    button.addEventListener('click', () => {

        // نزيد العداد بمقدار 1 في كل ضغطة
        totalItems = totalItems + 1;

        // نحدث الرقم المكتوب في الصفحة بالرقم الجديد
        cartCountElement.innerText = totalItems;

        // حركة اختيارية: نغير نص الزر مؤقتاً عشان الزبون يعرف إنه انضاف
        button.innerText = "تم الإضافة! ✓";
        button.style.backgroundColor = "#10b981"; // يتحول للأخضر

        setTimeout(() => {
            button.innerText = "شراء الآن";
            button.style.backgroundColor = "#2563eb"; // يرجع للأزرق بعد ثانية
        }, 1000);
    });
});