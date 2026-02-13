// ===================================
// قاعدة البيانات - مصفوفة الأطباق
// ===================================

const menuItems = [
    // ========== البيتزا ==========
    {
        id: 1,
        name: "بيتزا مارجريتا",
        description: "بيتزا إيطالية كلاسيكية مع جبنة موزاريلا طازجة وصلصة طماطم وريحان",
        price: 45,
        category: "pizza",
        image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&q=80",
        rating: 5,
        isFavorite: false
    },
    {
        id: 2,
        name: "بيتزا بيبروني",
        description: "بيتزا لذيذة محملة بشرائح البيبروني الفاخرة وجبنة موزاريلا ذائبة",
        price: 52,
        category: "pizza",
        image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=800&q=80",
        rating: 5,
        isFavorite: false
    },
    {
        id: 3,
        name: "بيتزا أربع أجبان",
        description: "مزيج فاخر من أربعة أنواع من الأجبان الإيطالية الأصيلة",
        price: 58,
        category: "pizza",
        image: "https://images.unsplash.com/photo-1571407970349-bc81e7e96a47?w=800&q=80",
        rating: 4,
        isFavorite: false
    },
    {
        id: 4,
        name: "بيتزا الكمأة والفطر",
        description: "بيتزا فاخرة مع فطر بري وزيت الكمأة الأسود والجرجير",
        price: 75,
        category: "pizza",
        image: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=800&q=80",
        rating: 5,
        isFavorite: false
    },

    // ========== البرجر ==========
    {
        id: 5,
        name: "برجر كلاسيك",
        description: "لحم بقري فاخر مع خس وطماطم وبصل وصلصة خاصة",
        price: 38,
        category: "burger",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80",
        rating: 5,
        isFavorite: false
    },
    {
        id: 6,
        name: "برجر دبل تشيز",
        description: "قطعتان من اللحم البقري مع جبن شيدر وأمريكان ومخلل وبصل مكرمل",
        price: 48,
        category: "burger",
        image: "https://images.unsplash.com/photo-1551782450-17144efb9c50?w=800&q=80",
        rating: 5,
        isFavorite: false
    },
    {
        id: 7,
        name: "برجر الدجاج",
        description: "صدر دجاج مقرمش مع كول سلو ومايونيز سريراتشا وخبز بريوش",
        price: 35,
        category: "burger",
        image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=800&q=80",
        rating: 4,
        isFavorite: false
    },
    {
        id: 8,
        name: "برجر بي بي كيو بيكون",
        description: "لحم بقري فاخر مع بيكون مقرمش وصلصة باربيكيو وحلقات بصل مقلية",
        price: 55,
        category: "burger",
        image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=800&q=80",
        rating: 5,
        isFavorite: false
    },

    // ========== الباستا ==========
    {
        id: 9,
        name: "فيتوتشيني ألفريدو",
        description: "معكرونة فيتوتشيني بصلصة البارميزان الكريمية الغنية",
        price: 42,
        category: "pasta",
        image: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?w=800&q=80",
        rating: 5,
        isFavorite: false
    },
    {
        id: 10,
        name: "سباغيتي كربونارا",
        description: "معكرونة رومانية تقليدية مع لحم خنزير إيطالي وصفار البيض وجبن بيكورينو",
        price: 48,
        category: "pasta",
        image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=800&q=80",
        rating: 5,
        isFavorite: false
    },
    {
        id: 11,
        name: "بيني أرابياتا",
        description: "معكرونة حارة بصلصة الطماطم مع الثوم والفلفل الأحمر والريحان",
        price: 38,
        category: "pasta",
        image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=800&q=80",
        rating: 4,
        isFavorite: false
    },
    {
        id: 12,
        name: "لينجويني بالمأكولات البحرية",
        description: "معكرونة طازجة مع جمبري وبلح البحر والحبار بصلصة النبيذ الأبيض",
        price: 65,
        category: "pasta",
        image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=800&q=80",
        rating: 5,
        isFavorite: false
    },

    // ========== السلطات ==========
    {
        id: 13,
        name: "سلطة سيزر",
        description: "خس روماني مقرمش مع رقائق البارميزان والخبز المحمص وصلصة سيزر الكلاسيكية",
        price: 32,
        category: "salad",
        image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=800&q=80",
        rating: 4,
        isFavorite: false
    },
    {
        id: 14,
        name: "سلطة يونانية",
        description: "خضروات طازجة مع جبن فيتا وزيتون وخل الأوريجانو",
        price: 35,
        category: "salad",
        image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800&q=80",
        rating: 5,
        isFavorite: false
    },
    {
        id: 15,
        name: "بول الكينوا الصحي",
        description: "كينوا مع أفوكادو وحمص وكالي وصلصة الطحينة",
        price: 38,
        category: "salad",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80",
        rating: 5,
        isFavorite: false
    },
    {
        id: 16,
        name: "سلطة كابريزي",
        description: "جبن موزاريلا طازجة مع طماطم وريحان وتتبيلة البلسميك",
        price: 40,
        category: "salad",
        image: "https://images.unsplash.com/photo-1592417817038-d13fd7342605?w=800&q=80",
        rating: 5,
        isFavorite: false
    },

    // ========== الحلويات ==========
    {
        id: 17,
        name: "كيك الشوكولاتة البركانية",
        description: "كيك شوكولاتة دافئة بمركز سائل، تقدم مع آيس كريم الفانيليا",
        price: 28,
        category: "dessert",
        image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=800&q=80",
        rating: 5,
        isFavorite: false
    },
    {
        id: 18,
        name: "تيراميسو",
        description: "حلوى إيطالية كلاسيكية بأصابع السافوياردي المنقوعة بالإسبريسو والماسكاربوني",
        price: 32,
        category: "dessert",
        image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=800&q=80",
        rating: 5,
        isFavorite: false
    },
    {
        id: 19,
        name: "تشيز كيك نيويورك",
        description: "تشيز كيك غني وكريمي مع صلصة التوت الطازج",
        price: 30,
        category: "dessert",
        image: "https://images.unsplash.com/photo-1533134242443-d4bced8b6a82?w=800&q=80",
        rating: 4,
        isFavorite: false
    },
    {
        id: 20,
        name: "كريم بروليه",
        description: "كاسترد الفانيليا الحريري مع قشرة سكر مكرملة",
        price: 26,
        category: "dessert",
        image: "https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?w=800&q=80",
        rating: 5,
        isFavorite: false
    },

    // ========== المشروبات ==========
    {
        id: 21,
        name: "موهيتو طازج",
        description: "مزيج منعش من النعناع والليمون والسكر والماء الفوار",
        price: 22,
        category: "drink",
        image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=800&q=80",
        rating: 5,
        isFavorite: false
    },
    {
        id: 22,
        name: "قهوة مثلجة",
        description: "قهوة باردة مع ثلج وكريمة",
        price: 18,
        category: "drink",
        image: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=800&q=80",
        rating: 4,
        isFavorite: false
    },
    {
        id: 23,
        name: "سموذي الفراولة",
        description: "فراولة طازجة مع موز وزبادي وعسل",
        price: 24,
        category: "drink",
        image: "https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=800&q=80",
        rating: 5,
        isFavorite: false
    },
    {
        id: 24,
        name: "ليموناضة كلاسيكية",
        description: "عصير ليمون طازج مع لمسة من النعناع",
        price: 15,
        category: "drink",
        image: "https://images.unsplash.com/photo-1523677011781-c91d1bbe2f0d?w=800&q=80",
        rating: 4,
        isFavorite: false
    }
];

// ===================================
// المتغيرات العامة (State)
// ===================================

let cart = []; // سلة المشتريات
let currentCategory = 'all'; // الفئة الحالية
let currentSort = 'default'; // نوع الترتيب الحالي
let searchQuery = ''; // نص البحث

// ===================================
// الوصول إلى عناصر HTML
// ===================================

const menuGrid = document.getElementById('menuGrid');
const searchInput = document.getElementById('searchInput');
const categoryButtons = document.querySelectorAll('.category-btn');
const sortSelect = document.getElementById('sortSelect');
const noResults = document.getElementById('noResults');

// ===================================
// دالة توليد نجوم التقييم
// ===================================

function generateStars(rating) {
    let stars = '';
    // حلقة من 1 إلى 5 لإنشاء 5 نجوم
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            // نجمة ممتلئة
            stars += '<span class="star">★</span>';
        } else {
            // نجمة فارغة
            stars += '<span class="star empty">★</span>';
        }
    }
    return stars;
}

// ===================================
// دالة إنشاء بطاقة طعام واحدة
// ===================================

function createMenuCard(item, index) {
    // إنشاء div للبطاقة
    const card = document.createElement('div');
    card.className = 'menu-card';
    // تأخير الظهور لكل بطاقة لإنشاء تأثير متتالي
    card.style.animationDelay = `${index * 0.05}s`;
    
    // توليد نجوم التقييم
    const stars = generateStars(item.rating);
    
    // بناء محتوى البطاقة باستخدام Template Literals
    card.innerHTML = `
        <div class="card-image-container">
            <img src="${item.image}" alt="${item.name}" class="card-image">
            <button class="favorite-btn ${item.isFavorite ? 'active' : ''}" data-id="${item.id}">
                ${item.isFavorite ? '❤️' : '🤍'}
            </button>
        </div>
        <div class="card-content">
            <h3 class="card-title">${item.name}</h3>
            <div class="card-rating">
                ${stars}
            </div>
            <p class="card-description">${item.description}</p>
            <div class="card-footer">
                <span class="card-price">${item.price} ر.س</span>
                <button class="add-to-cart-btn" data-id="${item.id}">
                    أضف للسلة
                </button>
            </div>
        </div>
    `;
    
    // إضافة مستمعات الأحداث (Event Listeners)
    const favoriteBtn = card.querySelector('.favorite-btn');
    const addToCartBtn = card.querySelector('.add-to-cart-btn');
    
    // عند الضغط على زر المفضلة
    favoriteBtn.addEventListener('click', () => toggleFavorite(item.id));
    
    // عند الضغط على زر إضافة للسلة
    addToCartBtn.addEventListener('click', () => addToCart(item.id));
    
    return card;
}

// ===================================
// دالة عرض البطاقات على الشاشة
// ===================================

function displayMenuItems(items) {
    // مسح المحتوى الحالي
    menuGrid.innerHTML = '';
    
    // إذا لم تكن هناك نتائج
    if (items.length === 0) {
        noResults.classList.add('show');
        return;
    }
    
    // إخفاء رسالة "لا توجد نتائج"
    noResults.classList.remove('show');
    
    // المرور على كل عنصر وإنشاء بطاقته
    items.forEach((item, index) => {
        const card = createMenuCard(item, index);
        menuGrid.appendChild(card);
    });
}

// ===================================
// دالة تبديل المفضلة (مؤقتة - سنكملها لاحقاً)
// ===================================

function toggleFavorite(itemId) {
    // البحث عن العنصر في المصفوفة
    const item = menuItems.find(item => item.id === itemId);
    if (item) {
        // عكس حالة المفضلة
        item.isFavorite = !item.isFavorite;
        // إعادة عرض البطاقات لتحديث الواجهة
        applyFilters();
    }
}

// ===================================
// دالة إضافة للسلة (مؤقتة - سنكملها لاحقاً)
// ===================================

function addToCart(itemId) {
    console.log('تمت إضافة العنصر رقم:', itemId);
    // سنكمل هذه الدالة في الخطوة القادمة
}

// ===================================
// دالة تطبيق الفلاتر (مؤقتة)
// ===================================

function applyFilters() {
    // في الوقت الحالي، نعرض جميع العناصر
    displayMenuItems(menuItems);
}

// ===================================
// تشغيل التطبيق عند تحميل الصفحة
// ===================================

document.addEventListener('DOMContentLoaded', () => {
    // عرض جميع الأطباق عند تحميل الصفحة
    displayMenuItems(menuItems);
});

// ===================================
// دالة التعامل مع فلتر الفئات
// ===================================

function handleCategoryFilter(e) {
    // إزالة الكلاس "active" من جميع الأزرار
    categoryButtons.forEach(btn => btn.classList.remove('active'));
    
    // إضافة الكلاس "active" للزر المضغوط
    e.target.classList.add('active');
    
    // تحديث الفئة الحالية
    currentCategory = e.target.dataset.category;
    
    // تطبيق الفلاتر
    applyFilters();
}

// ===================================
// دالة التعامل مع البحث
// ===================================

function handleSearch(e) {
    // الحصول على نص البحث وتحويله لأحرف صغيرة
    searchQuery = e.target.value.toLowerCase();
    
    // تطبيق الفلاتر
    applyFilters();
}

// ===================================
// دالة التعامل مع الترتيب
// ===================================

function handleSort(e) {
    // تحديث نوع الترتيب الحالي
    currentSort = e.target.value;
    
    // تطبيق الفلاتر
    applyFilters();
}

// ===================================
// دالة تطبيق جميع الفلاتر (الرئيسية)
// ===================================

function applyFilters() {
    // نسخ المصفوفة الأصلية (حتى لا نعدل عليها)
    let filteredItems = [...menuItems];
    
    // ----- 1. فلتر الفئات -----
    if (currentCategory !== 'all') {
        filteredItems = filteredItems.filter(item => item.category === currentCategory);
    }
    
    // ----- 2. فلتر البحث -----
    if (searchQuery) {
        filteredItems = filteredItems.filter(item => {
            // البحث في الاسم أو الوصف أو الفئة
            return (
                item.name.toLowerCase().includes(searchQuery) ||
                item.description.toLowerCase().includes(searchQuery) ||
                item.category.toLowerCase().includes(searchQuery)
            );
        });
    }
    
    // ----- 3. الترتيب -----
    switch(currentSort) {
        case 'price-low':
            // ترتيب من الأقل للأعلى
            filteredItems.sort((a, b) => a.price - b.price);
            break;
            
        case 'price-high':
            // ترتيب من الأعلى للأقل
            filteredItems.sort((a, b) => b.price - a.price);
            break;
            
        case 'rating':
            // ترتيب حسب التقييم (الأعلى أولاً)
            filteredItems.sort((a, b) => b.rating - a.rating);
            break;
            
        default:
            // الترتيب الافتراضي (حسب ID)
            break;
    }
    
    // ----- 4. عرض النتائج مع تأثير بصري -----
    // إخفاء البطاقات الحالية
    menuGrid.style.opacity = '0';
    
    setTimeout(() => {
        // عرض البطاقات المفلترة
        displayMenuItems(filteredItems);
        // إظهارها مرة أخرى
        menuGrid.style.opacity = '1';
    }, 200);
}

// ===================================
// إضافة مستمعات الأحداث (Event Listeners)
// ===================================

function setupEventListeners() {
    // 1. الاستماع لأزرار الفئات
    categoryButtons.forEach(btn => {
        btn.addEventListener('click', handleCategoryFilter);
    });
    
    // 2. الاستماع لشريط البحث (كتابة مباشرة)
    searchInput.addEventListener('input', handleSearch);
    
    // 3. الاستماع لقائمة الترتيب
    sortSelect.addEventListener('change', handleSort);
}

// ===================================
// تحديث دالة التشغيل الرئيسية
// ===================================

// احذف الكود القديم واستبدله بهذا:
document.addEventListener('DOMContentLoaded', () => {
    // عرض جميع الأطباق عند تحميل الصفحة
    displayMenuItems(menuItems);
    
    // تفعيل مستمعات الأحداث
    setupEventListeners();
});

// ===================================
// عناصر HTML الخاصة بالسلة
// ===================================

const cartBtn = document.getElementById('cartBtn');
const cartSidebar = document.getElementById('cartSidebar');
const cartOverlay = document.getElementById('cartOverlay');
const cartClose = document.getElementById('cartClose');
const cartItems = document.getElementById('cartItems');
const cartEmpty = document.getElementById('cartEmpty');
const cartCount = document.getElementById('cartCount');
const totalPrice = document.getElementById('totalPrice');
const clearCartBtn = document.getElementById('clearCart');

// ===================================
// دالة فتح السلة
// ===================================

function openCart() {
    cartSidebar.classList.add('active');
    cartOverlay.classList.add('active');
    document.body.style.overflow = 'hidden'; // منع التمرير في الخلفية
}

// ===================================
// دالة إغلاق السلة
// ===================================

function closeCart() {
    cartSidebar.classList.remove('active');
    cartOverlay.classList.remove('active');
    document.body.style.overflow = ''; // إعادة التمرير
}

// ===================================
// دالة إضافة منتج للسلة
// ===================================

function addToCart(itemId) {
    // البحث عن المنتج في قاعدة البيانات
    const item = menuItems.find(item => item.id === itemId);
    
    // إذا لم نجد المنتج، توقف
    if (!item) return;
    
    // البحث هل المنتج موجود مسبقاً في السلة
    const existingItem = cart.find(cartItem => cartItem.id === itemId);
    
    if (existingItem) {
        // إذا كان موجوداً، زد الكمية فقط
        existingItem.quantity++;
    } else {
        // إذا لم يكن موجوداً، أضفه للسلة
        cart.push({
            ...item, // نسخ كل خصائص المنتج
            quantity: 1 // إضافة خاصية الكمية
        });
    }
    
    // تحديث واجهة السلة
    updateCart();
    
    // تأثير بصري لزر السلة
    animateCartButton();
}

// ===================================
// دالة حذف منتج من السلة
// ===================================

function removeFromCart(itemId) {
    // فلترة السلة (إزالة المنتج)
    cart = cart.filter(item => item.id !== itemId);
    
    // تحديث الواجهة
    updateCart();
}

// ===================================
// دالة تعديل الكمية (زيادة أو نقصان)
// ===================================

function updateQuantity(itemId, change) {
    // البحث عن المنتج في السلة
    const item = cart.find(item => item.id === itemId);
    
    // إذا لم نجده، توقف
    if (!item) return;
    
    // تعديل الكمية
    item.quantity += change;
    
    // إذا أصبحت الكمية صفر أو أقل، احذف المنتج
    if (item.quantity <= 0) {
        removeFromCart(itemId);
    } else {
        // وإلا، حدث الواجهة
        updateCart();
    }
}

// ===================================
// دالة مسح السلة بالكامل
// ===================================

function clearCart() {
    // إذا كانت السلة فارغة أصلاً، لا تفعل شيء
    if (cart.length === 0) return;
    
    // طلب تأكيد من المستخدم
    if (confirm('هل أنت متأكد من مسح السلة بالكامل؟')) {
        // إفراغ السلة
        cart = [];
        // تحديث الواجهة
        updateCart();
    }
}

// ===================================
// دالة تحديث واجهة السلة (الرئيسية)
// ===================================

function updateCart() {
    // ----- 1. تحديث عداد السلة في الزر -----
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    // ----- 2. عرض/إخفاء السلة الفارغة -----
    if (cart.length === 0) {
        cartItems.innerHTML = ''; // مسح المحتوى
        cartEmpty.classList.add('show'); // إظهار رسالة السلة الفارغة
    } else {
        cartEmpty.classList.remove('show'); // إخفاء الرسالة
        renderCartItems(); // عرض المنتجات
    }
    
    // ----- 3. حساب وعرض السعر الإجمالي -----
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    totalPrice.textContent = `${total.toFixed(2)} dhs`;
}

// ===================================
// دالة عرض منتجات السلة
// ===================================

function renderCartItems() {
    // مسح المحتوى الحالي
    cartItems.innerHTML = '';
    
    // المرور على كل منتج في السلة
    cart.forEach(item => {
        // إنشاء عنصر div للمنتج
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        
        // بناء محتوى المنتج
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            <div class="cart-item-details">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">${item.price} ر.س</div>
                <div class="cart-item-controls">
                    <button class="quantity-btn" data-id="${item.id}" data-action="decrease">
                        −
                    </button>
                    <span class="quantity-display">${item.quantity}</span>
                    <button class="quantity-btn" data-id="${item.id}" data-action="increase">
                        +
                    </button>
                    <button class="remove-btn" data-id="${item.id}">
                        🗑️
                    </button>
                </div>
            </div>
        `;
        
        // إضافة مستمعات الأحداث
        const decreaseBtn = cartItem.querySelector('[data-action="decrease"]');
        const increaseBtn = cartItem.querySelector('[data-action="increase"]');
        const removeBtn = cartItem.querySelector('.remove-btn');
        
        // زر النقصان
        decreaseBtn.addEventListener('click', () => updateQuantity(item.id, -1));
        
        // زر الزيادة
        increaseBtn.addEventListener('click', () => updateQuantity(item.id, 1));
        
        // زر الحذف
        removeBtn.addEventListener('click', () => removeFromCart(item.id));
        
        // إضافة المنتج لواجهة السلة
        cartItems.appendChild(cartItem);
    });
}

// ===================================
// تأثير بصري لزر السلة عند الإضافة
// ===================================

function animateCartButton() {
    // تكبير الزر قليلاً
    cartBtn.style.transform = 'scale(1.2)';
    
    // إعادته لحجمه الطبيعي بعد 200ms
    setTimeout(() => {
        cartBtn.style.transform = 'scale(1)';
    }, 200);
}

// ===================================
// تحديث دالة setupEventListeners
// ===================================

// ابحث عن دالة setupEventListeners القديمة واستبدلها بهذه:

function setupEventListeners() {
    // 1. الاستماع لأزرار الفئات
    categoryButtons.forEach(btn => {
        btn.addEventListener('click', handleCategoryFilter);
    });
    
    // 2. الاستماع لشريط البحث
    searchInput.addEventListener('input', handleSearch);
    
    // 3. الاستماع لقائمة الترتيب
    sortSelect.addEventListener('change', handleSort);
    
    // ===== أحداث السلة الجديدة =====
    
    // 4. فتح السلة
    cartBtn.addEventListener('click', openCart);
    
    // 5. إغلاق السلة (زر X)
    cartClose.addEventListener('click', closeCart);
    
    // 6. إغلاق السلة (الضغط على الخلفية المعتمة)
    cartOverlay.addEventListener('click', closeCart);
    
    // 7. مسح السلة
    clearCartBtn.addEventListener('click', clearCart);
}


// ===================================
// نظام الوضع الليلي/النهاري
// ===================================

const themeToggle = document.getElementById('themeToggle');

// ===================================
// دالة تحميل الوضع المحفوظ عند فتح الصفحة
// ===================================

function initializeTheme() {
    // محاولة استرجاع الوضع المحفوظ
    const savedTheme = localStorage.getItem('theme') || 'light';
    
    // تطبيق الوضع على الصفحة
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    console.log('تم تحميل الوضع:', savedTheme);
}

// ===================================
// دالة تبديل الوضع (ليلي/نهاري)
// ===================================

function toggleTheme() {
    // الحصول على الوضع الحالي
    const currentTheme = document.documentElement.getAttribute('data-theme');
    
    // تحديد الوضع الجديد (عكس الحالي)
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    // تطبيق الوضع الجديد
    document.documentElement.setAttribute('data-theme', newTheme);
    
    // حفظ الوضع في localStorage
    localStorage.setItem('theme', newTheme);
    
    console.log('تم التبديل إلى الوضع:', newTheme);
}

// ===================================
// حفظ السلة في localStorage تلقائياً
// ===================================

function saveCartToLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function loadCartFromLocalStorage() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCart();
        console.log('تم تحميل السلة المحفوظة');
    }
}

// ===================================
// تحديث دالة updateCart لحفظ السلة
// ===================================

// ابحث عن دالة updateCart واستبدلها بهذه النسخة المحدثة:

function updateCart() {
    // ----- 1. تحديث عداد السلة في الزر -----
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    // ----- 2. عرض/إخفاء السلة الفارغة -----
    if (cart.length === 0) {
        cartItems.innerHTML = '';
        cartEmpty.classList.add('show');
    } else {
        cartEmpty.classList.remove('show');
        renderCartItems();
    }
    
    // ----- 3. حساب وعرض السعر الإجمالي -----
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    totalPrice.textContent = `${total.toFixed(2)} ر.س`;
    
    // ----- 4. حفظ السلة في localStorage -----
    saveCartToLocalStorage();
}

// ===================================
// إضافة Smooth Scroll للصفحة
// ===================================

function initSmoothScroll() {
    // إضافة سلوك التمرير السلس
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ===================================
// تأثير رصد ظهور العناصر (Intersection Observer)
// ===================================

function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // رصد جميع بطاقات القائمة
    document.querySelectorAll('.menu-card').forEach(card => {
        observer.observe(card);
    });
}

// ===================================
// دالة إظهار إشعار بسيط (Toast Notification)
// ===================================

function showToast(message) {
    // إنشاء عنصر الإشعار
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    
    // إضافته للصفحة
    document.body.appendChild(toast);
    
    // إظهاره بعد delay صغير
    setTimeout(() => {
        toast.classList.add('show');
    }, 10);
    
    // إخفاؤه وحذفه بعد 3 ثواني
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 3000);
}

// ===================================
// تحديث دالة addToCart لإظهار إشعار
// ===================================

// ابحث عن دالة addToCart واستبدلها بهذه:

function addToCart(itemId) {
    const item = menuItems.find(item => item.id === itemId);
    if (!item) return;
    
    const existingItem = cart.find(cartItem => cartItem.id === itemId);
    
    if (existingItem) {
        existingItem.quantity++;
        showToast(`تم زيادة الكمية: ${item.name} ✅`);
    } else {
        cart.push({
            ...item,
            quantity: 1
        });
        showToast(`تمت الإضافة للسلة: ${item.name} 🛒`);
    }
    
    updateCart();
    animateCartButton();
}

// ===================================
// تحديث دالة toggleFavorite لحفظ المفضلات
// ===================================

// ابحث عن دالة toggleFavorite واستبدلها بهذه:

function toggleFavorite(itemId) {
    const item = menuItems.find(item => item.id === itemId);
    if (item) {
        item.isFavorite = !item.isFavorite;
        
        // إظهار إشعار
        if (item.isFavorite) {
            showToast(`تمت الإضافة للمفضلة: ${item.name} ❤️`);
        } else {
            showToast(`تمت الإزالة من المفضلة: ${item.name}`);
        }
        
        // حفظ المفضلات
        saveFavoritesToLocalStorage();
        
        // إعادة عرض البطاقات
        applyFilters();
    }
}

// ===================================
// حفظ واسترجاع المفضلات
// ===================================

function saveFavoritesToLocalStorage() {
    const favorites = menuItems
        .filter(item => item.isFavorite)
        .map(item => item.id);
    localStorage.setItem('favorites', JSON.stringify(favorites));
}

function loadFavoritesFromLocalStorage() {
    const savedFavorites = localStorage.getItem('favorites');
    if (savedFavorites) {
        const favoriteIds = JSON.parse(savedFavorites);
        favoriteIds.forEach(id => {
            const item = menuItems.find(item => item.id === id);
            if (item) {
                item.isFavorite = true;
            }
        });
        console.log('تم تحميل المفضلات');
    }
}

// ===================================
// دالة التعامل مع زر Checkout
// ===================================

function handleCheckout() {
    if (cart.length === 0) {
        alert('السلة فارغة! أضف بعض الأطباق أولاً 🍕');
        return;
    }
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    const message = `
🛒 ملخص الطلب:
━━━━━━━━━━━━━━━
📦 عدد الأصناف: ${itemCount}
💰 الإجمالي: ${total.toFixed(2)} ر.س
━━━━━━━━━━━━━━━

هل تريد إتمام الطلب؟
    `;
    
    if (confirm(message)) {
        showToast('شكراً لطلبك! سيتم التواصل معك قريباً 🎉');
        cart = [];
        updateCart();
        closeCart();
    }
}

// ===================================
// تحديث setupEventListeners النهائي
// ===================================

// ابحث عن دالة setupEventListeners واستبدلها بهذه النسخة الكاملة:

function setupEventListeners() {
    // 1. الاستماع لأزرار الفئات
    categoryButtons.forEach(btn => {
        btn.addEventListener('click', handleCategoryFilter);
    });
    
    // 2. الاستماع لشريط البحث
    searchInput.addEventListener('input', handleSearch);
    
    // 3. الاستماع لقائمة الترتيب
    sortSelect.addEventListener('change', handleSort);
    
    // 4. فتح السلة
    cartBtn.addEventListener('click', openCart);
    
    // 5. إغلاق السلة (زر X)
    cartClose.addEventListener('click', closeCart);
    
    // 6. إغلاق السلة (الخلفية المعتمة)
    cartOverlay.addEventListener('click', closeCart);
    
    // 7. مسح السلة
    clearCartBtn.addEventListener('click', clearCart);
    
    // ===== الأحداث الجديدة =====
    
    // 8. تبديل الوضع الليلي/النهاري
    themeToggle.addEventListener('click', toggleTheme);
    
    // 9. زر إتمام الطلب
    const checkoutBtn = document.querySelector('.btn-checkout');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', handleCheckout);
    }
    
    // 10. إغلاق السلة بزر ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && cartSidebar.classList.contains('active')) {
            closeCart();
        }
    });
}

// ===================================
// دالة التشغيل الرئيسية المحدثة
// ===================================

// ابحث عن DOMContentLoaded واستبدله بهذا:

document.addEventListener('DOMContentLoaded', () => {
    // 1. تحميل الوضع (ليلي/نهاري)
    initializeTheme();
    
    // 2. تحميل السلة المحفوظة
    loadCartFromLocalStorage();
    
    // 3. تحميل المفضلات المحفوظة
    loadFavoritesFromLocalStorage();
    
    // 4. عرض جميع الأطباق
    displayMenuItems(menuItems);
    
    // 5. تفعيل مستمعات الأحداث
    setupEventListeners();
    
    // 6. تفعيل التمرير السلس
    initSmoothScroll();
    
    // 7. رصد الحركات عند التمرير
    setTimeout(initScrollAnimations, 100);
    
    console.log('✅ تم تحميل التطبيق بنجاح!');
});