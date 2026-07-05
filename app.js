// 1. قاعدة بيانات المنتجات والحسابات - (تم الإبقاء على حساب كلاش فقط)
const products = [
    {
        id: 1,
        title: "حساب كلاش اوف كلانس لفل 125",
        price: 18000,
        mainImg: "clash.png.png",
        images: ["clash.png.png", "army.png", "hero.png"],
        details: [
            "🏰 لفل القرية الرئيسي: 165",
            "⭐ لفل قاعة المدينة (Town Hall): 16",
            "💎 الجواهر المتاحة: 600",
            "⚡ تسليم تلقائي: نعم، فوري بعد الدفع"
        ]
    }
];

// 2. كود إدارة السلة (شغال تمام وبدون أي تغيير)
let cart = JSON.parse(localStorage.getItem('gameflix_cart')) || [];

function updateCartCount() {
    const countSpan = document.getElementById('cart-count');
    if (countSpan) {
        countSpan.innerText = cart.length;
    }
}

// تحديث العداد عند تحميل الصفحة فوراً
document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
});