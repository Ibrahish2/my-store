// 1. مصفوفة لحفظ المنتجات التي يختارها الزبون
let cart = [];

// 2. تمسيك عناصر واجهة السلة
const cartCountElement = document.getElementById('cart-count');
const cartItemsContainer = document.getElementById('cart-items-container');
const cartTotalPriceElement = document.getElementById('cart-total-price');
const cartModal = document.getElementById('cartModal');

const openCartBtn = document.getElementById('open-cart-btn');
const closeCartBtn = document.getElementById('close-cart-btn');

// 3. فتح وإغلاق نافذة السلة عند الضغط عليها
openCartBtn.addEventListener('click', () => {
    cartModal.style.display = 'block';
    renderCart(); // تحديث القائمة المكتوبة داخل السلة
});

closeCartBtn.addEventListener('click', () => {
    cartModal.style.display = 'none';
});

// 4. التقاط أزرار الإضافة للسلة
const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        // جلب اسم المنتج وسعره من خواص الزر (data attributes)
        const name = button.getAttribute('data-name');
        const price = parseInt(button.getAttribute('data-price'));

        // إضافة المنتج ككائن (Object) داخل مصفوفة السلة
        cart.push({ name: name, price: price });

        // تحديث الرقم الظاهر في الهيدر
        cartCountElement.innerText = cart.length;

        // حركة حركية للزر ليعرف الزبون أنه تم الإضافة
        button.innerText = "تمت الإضافة! ✓";
        button.style.backgroundColor = "#10b981";
        setTimeout(() => {
            button.innerText = "إضافة إلى السلة";
            button.style.backgroundColor = "#2563eb";
        }, 800);
    });
});

// 5. دالة تقوم بطباعة المنتجات المضافة داخل نافذة السلة وحساب المجموع
function renderCart() {
    // تنظيف السلة أولاً
    cartItemsContainer.innerHTML = '';

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p style="color: #64748b; text-align: center;">السلة فارغة حالياً...</p>';
        cartTotalPriceElement.innerText = '0';
        return;
    }

    let total = 0;

    // الدوران حول المنتجات المضافة وطباعتها
    cart.forEach((item, index) => {
        total += item.price;

        const itemHTML = `
            <div class="cart-item">
                <span>${item.name}</span>
                <strong>${item.price.toLocaleString()} دينار</strong>
            </div>
        `;
        cartItemsContainer.innerHTML += itemHTML;
    });

    // تحديث المجموع النهائي في أسفل السلة
    cartTotalPriceElement.innerText = total.toLocaleString();
}