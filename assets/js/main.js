/**
 * KAVIRA - Indian Khadi & Handloom Lifestyle Store
 * Core JavaScript Engine: Cart, Wishlist, Quick View, Search, Theme, RTL, Mega Menu & Filters
 */

// State
let cart = JSON.parse(localStorage.getItem('kavira_cart') || '[]');
let wishlist = JSON.parse(localStorage.getItem('kavira_wishlist') || '[]');
let currentQuickViewProduct = null;

// Currency Formatter
function formatINR(amount) {
  return '₹' + Number(amount).toLocaleString('en-IN');
}

// --------------------------------------------------------------------------
// Initialization on DOMContentLoaded
// --------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  initThemeAndRTL();
  initLucide();
  initAOS();
  initCartAndWishlistBadges();
  bindGlobalEvents();
  renderCartDrawer();
  renderWishlistDrawer();

  // If on products page
  if (document.getElementById('products-catalog-grid')) {
    initProductsPage();
  }

  // If on contact page
  if (document.getElementById('contact-form')) {
    initContactForm();
  }

  // If on auth pages
  initAuthPages();
});

// Re-initialize Lucide icons
function initLucide() {
  if (window.lucide && typeof lucide.createIcons === 'function') {
    lucide.createIcons();
  }
}

// Re-initialize AOS
function initAOS() {
  if (window.AOS) {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 50
    });
  }
}

// --------------------------------------------------------------------------
// Theme (Light/Dark) & RTL Persistence
// --------------------------------------------------------------------------
function initThemeAndRTL() {
  const savedTheme = localStorage.getItem('kavira_theme') || 'light';
  const savedRTL = localStorage.getItem('kavira_rtl') || 'ltr';

  applyTheme(savedTheme);
  applyRTL(savedRTL);

  // Bind toggles
  document.querySelectorAll('.theme-toggle-btn').forEach(btn => {
    btn.addEventListener('click', toggleTheme);
  });

  document.querySelectorAll('.rtl-toggle-btn').forEach(btn => {
    btn.addEventListener('click', toggleRTL);
  });
}

function applyTheme(theme) {
  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
  localStorage.setItem('kavira_theme', theme);

  // Update theme toggle icons
  document.querySelectorAll('.theme-icon-sun').forEach(el => {
    el.classList.toggle('hidden', theme !== 'dark');
  });
  document.querySelectorAll('.theme-icon-moon').forEach(el => {
    el.classList.toggle('hidden', theme === 'dark');
  });
}

function toggleTheme() {
  const isDark = document.documentElement.classList.contains('dark');
  applyTheme(isDark ? 'light' : 'dark');
  initLucide();
}

function applyRTL(dir) {
  document.documentElement.setAttribute('dir', dir);
  localStorage.setItem('kavira_rtl', dir);
  document.querySelectorAll('.rtl-status-badge').forEach(el => {
    el.textContent = dir.toUpperCase();
  });
}

function toggleRTL() {
  const current = document.documentElement.getAttribute('dir') || 'ltr';
  const next = current === 'ltr' ? 'rtl' : 'ltr';
  applyRTL(next);
  showToast(`Language Direction: ${next.toUpperCase()}`, 'info');
}

// --------------------------------------------------------------------------
// Toast Notification System
// --------------------------------------------------------------------------
function showToast(message, type = 'success') {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.className = 'fixed bottom-6 right-6 z-[9999] flex flex-col space-y-3 pointer-events-none';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `pointer-events-auto flex items-center gap-3 px-4 py-3 rounded-lg shadow-xl text-sm font-medium transition-all duration-300 transform translate-y-4 opacity-0 ${
    type === 'success' 
      ? 'bg-[#344C3B] text-white border border-[#B89A5A]' 
      : type === 'info' 
      ? 'bg-[#49372C] text-white border border-[#E6D8C3]' 
      : 'bg-[#B96B4B] text-white'
  }`;

  const iconName = type === 'success' ? 'check-circle' : type === 'info' ? 'info' : 'alert-circle';
  toast.innerHTML = `
    <i data-lucide="${iconName}" class="w-5 h-5 flex-shrink-0 text-[#D4BC84]"></i>
    <span>${message}</span>
  `;

  container.appendChild(toast);
  initLucide();

  // Animate in
  requestAnimationFrame(() => {
    toast.classList.remove('translate-y-4', 'opacity-0');
    toast.classList.add('translate-y-0', 'opacity-100');
  });

  // Remove after 3.2s
  setTimeout(() => {
    toast.classList.remove('translate-y-0', 'opacity-100');
    toast.classList.add('translate-y-4', 'opacity-0');
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

// --------------------------------------------------------------------------
// Cart & Wishlist Logic
// --------------------------------------------------------------------------
function initCartAndWishlistBadges() {
  const cartCounts = document.querySelectorAll('.cart-count-badge');
  const wishlistCounts = document.querySelectorAll('.wishlist-count-badge');
  const totalCartItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  cartCounts.forEach(b => {
    b.textContent = totalCartItems;
    b.classList.toggle('hidden', totalCartItems === 0);
  });

  wishlistCounts.forEach(b => {
    b.textContent = wishlist.length;
    b.classList.toggle('hidden', wishlist.length === 0);
  });

  // Highlight heart buttons on page
  document.querySelectorAll('[data-wishlist-id]').forEach(btn => {
    const id = btn.getAttribute('data-wishlist-id');
    const isWished = wishlist.includes(id);
    const icon = btn.querySelector('i, svg');
    if (icon) {
      if (isWished) {
        btn.classList.add('text-[#B96B4B]');
        btn.classList.remove('text-[#6B5E55]', 'text-gray-400');
      } else {
        btn.classList.remove('text-[#B96B4B]');
      }
    }
  });
}

function addToCart(productId, quantity = 1, selectedSize = null, selectedColor = null) {
  const product = KAVIRA_PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const existing = cart.find(item => item.id === productId && item.size === selectedSize && item.color === selectedColor);
  if (existing) {
    existing.quantity += quantity;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.categoryName,
      fabric: product.fabric,
      size: selectedSize || (product.sizes ? product.sizes[0] : null) || (product.dimensions || null),
      color: selectedColor || (product.colors ? product.colors[0] : null),
      quantity: quantity
    });
  }

  localStorage.setItem('kavira_cart', JSON.stringify(cart));
  initCartAndWishlistBadges();
  renderCartDrawer();
  showToast(`Added "${product.name.slice(0, 28)}..." to Bag`);
  openCartDrawer();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  localStorage.setItem('kavira_cart', JSON.stringify(cart));
  initCartAndWishlistBadges();
  renderCartDrawer();
  showToast('Item removed from Bag', 'info');
}

function updateCartQuantity(index, delta) {
  if (!cart[index]) return;
  cart[index].quantity += delta;
  if (cart[index].quantity <= 0) {
    removeFromCart(index);
    return;
  }
  localStorage.setItem('kavira_cart', JSON.stringify(cart));
  initCartAndWishlistBadges();
  renderCartDrawer();
}

function toggleWishlist(productId) {
  const idx = wishlist.indexOf(productId);
  const product = KAVIRA_PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  if (idx > -1) {
    wishlist.splice(idx, 1);
    showToast(`Removed from Wishlist`, 'info');
  } else {
    wishlist.push(productId);
    showToast(`Saved to Wishlist: "${product.name.slice(0, 24)}..."`);
  }

  localStorage.setItem('kavira_wishlist', JSON.stringify(wishlist));
  initCartAndWishlistBadges();
  renderWishlistDrawer();
}

// --------------------------------------------------------------------------
// Drawer Renderers (Cart & Wishlist)
// --------------------------------------------------------------------------
function renderCartDrawer() {
  const container = document.getElementById('cart-drawer-items');
  const subtotalEl = document.getElementById('cart-subtotal-price');
  const shippingEl = document.getElementById('cart-shipping-notice');
  const emptyState = document.getElementById('cart-empty-state');
  const footerEl = document.getElementById('cart-drawer-footer');

  if (!container) return;

  if (cart.length === 0) {
    container.innerHTML = '';
    if (emptyState) emptyState.classList.remove('hidden');
    if (footerEl) footerEl.classList.add('hidden');
    return;
  }

  if (emptyState) emptyState.classList.add('hidden');
  if (footerEl) footerEl.classList.remove('hidden');

  let subtotal = 0;
  container.innerHTML = cart.map((item, index) => {
    const itemTotal = item.price * item.quantity;
    subtotal += itemTotal;
    return `
      <div class="flex items-center gap-4 p-3 bg-[#FAF8F5] dark:bg-[#251F1B] rounded-lg border border-[#E6D8C3] dark:border-[#382C24]">
        <img src="${item.image}" alt="${item.name}" class="w-16 h-20 object-cover rounded-md flex-shrink-0" />
        <div class="flex-1 min-w-0">
          <h4 class="text-xs uppercase tracking-wider text-[#B89A5A] font-semibold">${item.category}</h4>
          <h3 class="text-sm font-serif font-bold text-[#2C221D] dark:text-[#F5EFE6] truncate">${item.name}</h3>
          <div class="text-xs text-[#6B5E55] dark:text-[#A89A90] mt-0.5 flex flex-wrap items-center gap-2">
            ${item.size ? `<span>Size: <strong class="text-[#2C221D] dark:text-[#F5EFE6]">${item.size}</strong></span>` : ''}
            ${item.color ? `<span>Color: <strong class="text-[#2C221D] dark:text-[#F5EFE6]">${item.color}</strong></span>` : ''}
          </div>
          <div class="flex items-center justify-between mt-2">
            <span class="text-sm font-bold text-[#B96B4B]">${formatINR(item.price)}</span>
            <div class="flex items-center border border-[#E6D8C3] dark:border-[#4A3C32] rounded">
              <button onclick="updateCartQuantity(${index}, -1)" class="px-2 py-0.5 text-xs text-[#49372C] dark:text-[#F5EFE6] hover:bg-[#E6D8C3] dark:hover:bg-[#382C24] transition">-</button>
              <span class="px-2 text-xs font-semibold">${item.quantity}</span>
              <button onclick="updateCartQuantity(${index}, 1)" class="px-2 py-0.5 text-xs text-[#49372C] dark:text-[#F5EFE6] hover:bg-[#E6D8C3] dark:hover:bg-[#382C24] transition">+</button>
            </div>
          </div>
        </div>
        <button onclick="removeFromCart(${index})" class="text-gray-400 hover:text-red-500 p-1 transition" title="Remove item">
          <i data-lucide="trash-2" class="w-4 h-4"></i>
        </button>
      </div>
    `;
  }).join('');

  if (subtotalEl) subtotalEl.textContent = formatINR(subtotal);
  if (shippingEl) {
    if (subtotal >= 1999) {
      shippingEl.innerHTML = `<span class="text-emerald-700 dark:text-emerald-400 font-semibold flex items-center gap-1.5"><i data-lucide="sparkles" class="w-3.5 h-3.5"></i> Congratulations! You've unlocked FREE Insured Shipping across India.</span>`;
    } else {
      const remaining = 1999 - subtotal;
      shippingEl.innerHTML = `Add <strong>${formatINR(remaining)}</strong> more to unlock <strong>FREE Shipping</strong>.`;
    }
  }

  initLucide();
}

function renderWishlistDrawer() {
  const container = document.getElementById('wishlist-drawer-items');
  const emptyState = document.getElementById('wishlist-empty-state');
  if (!container) return;

  const wishedProducts = KAVIRA_PRODUCTS.filter(p => wishlist.includes(p.id));

  if (wishedProducts.length === 0) {
    container.innerHTML = '';
    if (emptyState) emptyState.classList.remove('hidden');
    return;
  }

  if (emptyState) emptyState.classList.add('hidden');

  container.innerHTML = wishedProducts.map(p => `
    <div class="flex items-center gap-4 p-3 bg-[#FAF8F5] dark:bg-[#251F1B] rounded-lg border border-[#E6D8C3] dark:border-[#382C24]">
      <img src="${p.image}" alt="${p.name}" class="w-16 h-20 object-cover rounded-md flex-shrink-0" />
      <div class="flex-1 min-w-0">
        <h4 class="text-xs uppercase tracking-wider text-[#B89A5A] font-semibold">${p.categoryName}</h4>
        <h3 class="text-sm font-serif font-bold text-[#2C221D] dark:text-[#F5EFE6] truncate">${p.name}</h3>
        <p class="text-xs text-[#6B5E55] dark:text-[#A89A90] truncate">${p.origin}</p>
        <div class="flex items-center justify-between mt-2">
          <span class="text-sm font-bold text-[#B96B4B]">${formatINR(p.price)}</span>
          <button onclick="addToCart('${p.id}'); toggleWishlist('${p.id}');" class="px-3 py-1 bg-[#344C3B] hover:bg-[#26382B] text-white text-xs rounded transition flex items-center gap-1">
            <i data-lucide="shopping-bag" class="w-3 h-3"></i>
            <span>Move to Bag</span>
          </button>
        </div>
      </div>
      <button onclick="toggleWishlist('${p.id}')" class="text-gray-400 hover:text-red-500 p-1 transition" title="Remove from wishlist">
        <i data-lucide="x" class="w-4 h-4"></i>
      </button>
    </div>
  `).join('');

  initLucide();
}

// --------------------------------------------------------------------------
// Quick View & Detail Experience
// --------------------------------------------------------------------------
function openQuickView(productId) {
  const product = KAVIRA_PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  currentQuickViewProduct = product;
  const modal = document.getElementById('quick-view-modal');
  if (!modal) return;

  // Populate data
  document.getElementById('qv-title').textContent = product.name;
  document.getElementById('qv-category').textContent = `${product.categoryName} • ${product.subcategory}`;
  document.getElementById('qv-price').textContent = formatINR(product.price);
  document.getElementById('qv-original-price').textContent = formatINR(product.originalPrice);
  document.getElementById('qv-discount').textContent = `${Math.round((1 - product.price / product.originalPrice) * 100)}% OFF`;
  document.getElementById('qv-origin').textContent = product.origin;
  document.getElementById('qv-fabric').textContent = product.fabric;
  document.getElementById('qv-weave').textContent = product.weave;
  document.getElementById('qv-description').textContent = product.description;
  document.getElementById('qv-main-image').src = product.image;

  // Custom dimension or saree specs
  const specEl = document.getElementById('qv-specific-spec');
  if (product.sareeLength) {
    specEl.innerHTML = `<span class="text-xs text-[#B89A5A] font-semibold uppercase">Length & Blouse:</span> <span class="text-xs text-[#49372C] dark:text-[#D1C7BD]">${product.sareeLength}</span>`;
    specEl.classList.remove('hidden');
  } else if (product.dimensions) {
    specEl.innerHTML = `<span class="text-xs text-[#B89A5A] font-semibold uppercase">Dimensions / Width:</span> <span class="text-xs text-[#49372C] dark:text-[#D1C7BD]">${product.dimensions}</span>`;
    specEl.classList.remove('hidden');
  } else {
    specEl.classList.add('hidden');
  }

  // Sizes
  const sizeWrapper = document.getElementById('qv-sizes-container');
  if (product.sizes && product.sizes.length > 0) {
    sizeWrapper.classList.remove('hidden');
    const sizeList = document.getElementById('qv-sizes-list');
    sizeList.innerHTML = product.sizes.map((s, idx) => `
      <button type="button" class="qv-size-btn px-3 py-1 text-xs border rounded transition ${idx === 0 ? 'border-[#B96B4B] bg-[#B96B4B] text-white' : 'border-[#E6D8C3] dark:border-[#4A3C32] text-[#49372C] dark:text-[#D1C7BD] hover:border-[#B96B4B]'}" data-size="${s}">
        ${s}
      </button>
    `).join('');
    // Bind size selectors
    sizeList.querySelectorAll('.qv-size-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        sizeList.querySelectorAll('.qv-size-btn').forEach(b => {
          b.className = 'qv-size-btn px-3 py-1 text-xs border rounded transition border-[#E6D8C3] dark:border-[#4A3C32] text-[#49372C] dark:text-[#D1C7BD] hover:border-[#B96B4B]';
        });
        e.currentTarget.className = 'qv-size-btn px-3 py-1 text-xs border rounded transition border-[#B96B4B] bg-[#B96B4B] text-white';
      });
    });
  } else {
    sizeWrapper.classList.add('hidden');
  }

  // Colors
  const colorWrapper = document.getElementById('qv-colors-container');
  if (product.colors && product.colors.length > 0) {
    colorWrapper.classList.remove('hidden');
    const colorList = document.getElementById('qv-colors-list');
    colorList.innerHTML = product.colors.map((c, idx) => `
      <span class="inline-flex items-center text-xs px-2.5 py-1 rounded-full bg-[#E6D8C3]/40 dark:bg-[#382C24] text-[#49372C] dark:text-[#E6D8C3] border border-[#B89A5A]/30">
        ${c}
      </span>
    `).join('');
  } else {
    colorWrapper.classList.add('hidden');
  }

  // Reset quantity
  const qvQty = document.getElementById('qv-qty-input');
  if (qvQty) qvQty.value = 1;

  // Open modal
  modal.scrollTop = 0;
  modal.classList.remove('hidden');
  modal.classList.add('flex');
  document.body.style.overflow = 'hidden';
  initLucide();
}

function closeQuickView() {
  const modal = document.getElementById('quick-view-modal');
  if (!modal) return;
  modal.classList.add('hidden');
  modal.classList.remove('flex');
  document.body.style.overflow = '';
  currentQuickViewProduct = null;
}

function decreaseQty() {
  const input = document.getElementById('qv-qty-input');
  if (input && Number(input.value) > 1) {
    input.value = Number(input.value) - 1;
  }
}

function increaseQty() {
  const input = document.getElementById('qv-qty-input');
  if (input && Number(input.value) < 10) {
    input.value = Number(input.value) + 1;
  }
}

// Floating Back to Top Button visibility handler
window.addEventListener('scroll', () => {
  const btn = document.getElementById('floating-back-to-top');
  if (btn) {
    if (window.scrollY > 350) {
      btn.classList.remove('opacity-0', 'pointer-events-none');
      btn.classList.add('opacity-100', 'pointer-events-auto');
    } else {
      btn.classList.add('opacity-0', 'pointer-events-none');
      btn.classList.remove('opacity-100', 'pointer-events-auto');
    }
  }
});

// --------------------------------------------------------------------------
// Global Event Listeners & Drawers
// --------------------------------------------------------------------------
function bindGlobalEvents() {
  // Cart drawer open/close
  document.querySelectorAll('.cart-open-btn').forEach(btn => btn.addEventListener('click', openCartDrawer));
  document.querySelectorAll('.cart-close-btn').forEach(btn => btn.addEventListener('click', closeCartDrawer));

  // Wishlist drawer open/close
  document.querySelectorAll('.wishlist-open-btn').forEach(btn => btn.addEventListener('click', openWishlistDrawer));
  document.querySelectorAll('.wishlist-close-btn').forEach(btn => btn.addEventListener('click', closeWishlistDrawer));

  // Search modal open/close
  document.querySelectorAll('.search-open-btn').forEach(btn => btn.addEventListener('click', openSearchModal));
  document.querySelectorAll('.search-close-btn').forEach(btn => btn.addEventListener('click', closeSearchModal));

  // Live search input
  const searchInput = document.getElementById('global-search-input');
  if (searchInput) {
    searchInput.addEventListener('input', handleGlobalSearch);
  }

  // Mobile menu drawer
  const mobileMenuBtn = document.getElementById('mobile-menu-toggle');
  const mobileClose = document.getElementById('mobile-nav-close');
  let mobileBackdrop = document.getElementById('mobile-nav-backdrop');

  if (!mobileBackdrop) {
    mobileBackdrop = document.createElement('div');
    mobileBackdrop.id = 'mobile-nav-backdrop';
    document.body.appendChild(mobileBackdrop);
  }
  mobileBackdrop.addEventListener('click', closeMobileNav);

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const drawer = document.getElementById('mobile-nav-drawer');
      if (drawer && drawer.classList.contains('active')) {
        closeMobileNav();
      } else {
        openMobileNav();
      }
    });
  }
  if (mobileClose) {
    mobileClose.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      closeMobileNav();
    });
  }

  // Close mobile drawer on escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const drawer = document.getElementById('mobile-nav-drawer');
      if (drawer && drawer.classList.contains('active')) {
        closeMobileNav();
      }
    }
  });

  // Close drawer when clicking links inside
  const mobileDrawer = document.getElementById('mobile-nav-drawer');
  if (mobileDrawer) {
    mobileDrawer.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        closeMobileNav();
      });
    });
  }

  // Quick view add to cart
  const qvAddBtn = document.getElementById('qv-add-cart-btn');
  if (qvAddBtn) {
    qvAddBtn.addEventListener('click', () => {
      if (!currentQuickViewProduct) return;
      const qty = parseInt(document.getElementById('qv-qty-input')?.value || '1', 10);
      const activeSizeBtn = document.querySelector('#qv-sizes-list .qv-size-btn.bg-\\[\\#B96B4B\\]');
      const selectedSize = activeSizeBtn ? activeSizeBtn.getAttribute('data-size') : null;
      addToCart(currentQuickViewProduct.id, qty, selectedSize);
      closeQuickView();
    });
  }

  // Quick view wishlist button
  const qvWishBtn = document.getElementById('qv-wishlist-btn');
  if (qvWishBtn) {
    qvWishBtn.addEventListener('click', () => {
      if (!currentQuickViewProduct) return;
      toggleWishlist(currentQuickViewProduct.id);
    });
  }

  // Quick view backdrop click to close
  const qvModal = document.getElementById('quick-view-modal');
  if (qvModal) {
    qvModal.addEventListener('click', (e) => {
      if (e.target === qvModal) {
        closeQuickView();
      }
    });
  }

  // Checkout demo button
  const checkoutBtn = document.getElementById('cart-checkout-btn');
  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
      if (cart.length === 0) return;
      showToast('Proceeding to Demo Gateway: Order placed successfully with Artisan Guild verification!', 'success');
      cart = [];
      localStorage.setItem('kavira_cart', JSON.stringify(cart));
      initCartAndWishlistBadges();
      renderCartDrawer();
      setTimeout(closeCartDrawer, 1200);
    });
  }

  // Close modals on Escape
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeCartDrawer();
      closeWishlistDrawer();
      closeSearchModal();
      closeQuickView();
      closeDashboardModal();
    }
  });
}

function openCartDrawer() {
  closeMobileNav();
  const drawer = document.getElementById('cart-drawer');
  const backdrop = document.getElementById('cart-drawer-backdrop');
  if (drawer && backdrop) {
    backdrop.classList.add('active');
    drawer.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeCartDrawer() {
  const drawer = document.getElementById('cart-drawer');
  const backdrop = document.getElementById('cart-drawer-backdrop');
  if (drawer && backdrop) {
    backdrop.classList.remove('active');
    drawer.classList.remove('active');
    document.body.style.overflow = '';
  }
}

function openWishlistDrawer() {
  closeMobileNav();
  const drawer = document.getElementById('wishlist-drawer');
  const backdrop = document.getElementById('wishlist-drawer-backdrop');
  if (drawer && backdrop) {
    backdrop.classList.add('active');
    drawer.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeWishlistDrawer() {
  const drawer = document.getElementById('wishlist-drawer');
  const backdrop = document.getElementById('wishlist-drawer-backdrop');
  if (drawer && backdrop) {
    backdrop.classList.remove('active');
    drawer.classList.remove('active');
    document.body.style.overflow = '';
  }
}

function openSearchModal() {
  closeMobileNav();
  const modal = document.getElementById('search-modal');
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    const input = document.getElementById('global-search-input');
    if (input) setTimeout(() => input.focus(), 150);
  }
}

function closeSearchModal() {
  const modal = document.getElementById('search-modal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

function handleGlobalSearch(e) {
  const query = e.target.value.toLowerCase().trim();
  const resultsContainer = document.getElementById('search-results-list');
  if (!resultsContainer) return;

  if (query.length < 2) {
    resultsContainer.innerHTML = `<p class="text-sm text-center text-[#6B5E55] dark:text-[#A89A90] py-8">Type at least 2 characters to discover handloom treasures...</p>`;
    return;
  }

  const matches = KAVIRA_PRODUCTS.filter(p => 
    p.name.toLowerCase().includes(query) ||
    p.categoryName.toLowerCase().includes(query) ||
    p.subcategory.toLowerCase().includes(query) ||
    p.fabric.toLowerCase().includes(query) ||
    p.origin.toLowerCase().includes(query) ||
    p.description.toLowerCase().includes(query)
  );

  if (matches.length === 0) {
    resultsContainer.innerHTML = `
      <div class="text-center py-8">
        <i data-lucide="package-search" class="w-10 h-10 mx-auto text-[#B89A5A] mb-2 opacity-50"></i>
        <p class="text-sm text-[#49372C] dark:text-[#E6D8C3] font-medium">No handloom treasures found matching "${query}"</p>
        <p class="text-xs text-[#6B5E55] dark:text-[#A89A90] mt-1">Try exploring Sarees, Khadi, Linen, Ajrakh, or Home furnishings.</p>
      </div>
    `;
    initLucide();
    return;
  }

  resultsContainer.innerHTML = matches.map(p => `
    <div class="flex items-center gap-3 p-2.5 rounded-lg hover:bg-[#FAF8F5] dark:hover:bg-[#251F1B] transition cursor-pointer border-b border-[#E6D8C3]/30 dark:border-[#382C24]" onclick="closeSearchModal(); openQuickView('${p.id}');">
      <img src="${p.image}" alt="${p.name}" class="w-12 h-14 object-cover rounded flex-shrink-0" />
      <div class="flex-1 min-w-0">
        <div class="flex items-center gap-2">
          <span class="text-[10px] uppercase font-bold text-[#B89A5A] tracking-wider">${p.categoryName}</span>
          <span class="text-[10px] text-gray-400">• ${p.origin}</span>
        </div>
        <h4 class="text-xs font-serif font-bold text-[#2C221D] dark:text-[#F5EFE6] truncate">${p.name}</h4>
        <span class="text-xs font-bold text-[#B96B4B]">${formatINR(p.price)}</span>
      </div>
      <i data-lucide="arrow-right" class="w-4 h-4 text-gray-400"></i>
    </div>
  `).join('');

  initLucide();
}

// --------------------------------------------------------------------------
// Products Page Catalog Engine
// --------------------------------------------------------------------------
function initProductsPage() {
  const urlParams = new URLSearchParams(window.location.search);
  const initialCategory = urlParams.get('category') || 'all';

  let currentCategory = initialCategory;
  let currentSort = 'featured';
  let maxPrice = 30000;
  let selectedFabric = 'all';

  const categoryButtons = document.querySelectorAll('.category-filter-btn');
  const sortSelect = document.getElementById('catalog-sort-select');
  const priceSlider = document.getElementById('catalog-price-slider');
  const priceDisplay = document.getElementById('catalog-price-val');
  const fabricSelect = document.getElementById('catalog-fabric-select');
  const resetBtn = document.getElementById('catalog-reset-filters');

  // Mark initial active button
  categoryButtons.forEach(btn => {
    const cat = btn.getAttribute('data-category');
    if (cat === currentCategory) {
      btn.classList.add('bg-[#B96B4B]', 'text-white');
      btn.classList.remove('bg-white', 'dark:bg-[#251F1B]', 'text-[#49372C]', 'dark:text-[#E6D8C3]');
    }
    btn.addEventListener('click', (e) => {
      categoryButtons.forEach(b => {
        b.classList.remove('bg-[#B96B4B]', 'text-white');
        b.classList.add('bg-white', 'dark:bg-[#251F1B]', 'text-[#49372C]', 'dark:text-[#E6D8C3]');
      });
      btn.classList.add('bg-[#B96B4B]', 'text-white');
      btn.classList.remove('bg-white', 'dark:bg-[#251F1B]', 'text-[#49372C]', 'dark:text-[#E6D8C3]');
      currentCategory = btn.getAttribute('data-category');
      renderCatalog();
    });
  });

  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      currentSort = e.target.value;
      renderCatalog();
    });
  }

  if (priceSlider && priceDisplay) {
    priceSlider.addEventListener('input', (e) => {
      maxPrice = parseInt(e.target.value, 10);
      priceDisplay.textContent = formatINR(maxPrice);
      renderCatalog();
    });
  }

  if (fabricSelect) {
    fabricSelect.addEventListener('change', (e) => {
      selectedFabric = e.target.value;
      renderCatalog();
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      currentCategory = 'all';
      currentSort = 'featured';
      maxPrice = 30000;
      selectedFabric = 'all';
      if (priceSlider) priceSlider.value = 30000;
      if (priceDisplay) priceDisplay.textContent = formatINR(30000);
      if (sortSelect) sortSelect.value = 'featured';
      if (fabricSelect) fabricSelect.value = 'all';
      categoryButtons.forEach(b => {
        const isAll = b.getAttribute('data-category') === 'all';
        b.classList.toggle('bg-[#B96B4B]', isAll);
        b.classList.toggle('text-white', isAll);
        b.classList.toggle('bg-white', !isAll);
        b.classList.toggle('dark:bg-[#251F1B]', !isAll);
        b.classList.toggle('text-[#49372C]', !isAll);
        b.classList.toggle('dark:text-[#E6D8C3]', !isAll);
      });
      renderCatalog();
    });
  }

  function renderCatalog() {
    const grid = document.getElementById('products-catalog-grid');
    const countEl = document.getElementById('catalog-results-count');
    if (!grid) return;

    let filtered = KAVIRA_PRODUCTS.filter(p => {
      // Category filter
      if (currentCategory !== 'all') {
        if (currentCategory === 'new-arrivals') {
          if (!p.isNew) return false;
        } else if (currentCategory === 'best-sellers') {
          if (!p.isBestSeller) return false;
        } else if (currentCategory === 'festive-gifting') {
          if (!p.isFestive) return false;
        } else if (p.category !== currentCategory) {
          return false;
        }
      }
      // Price filter
      if (p.price > maxPrice) return false;
      // Fabric filter
      if (selectedFabric !== 'all') {
        if (!p.fabric.toLowerCase().includes(selectedFabric.toLowerCase())) return false;
      }
      return true;
    });

    // Sorting
    if (currentSort === 'price-low') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (currentSort === 'price-high') {
      filtered.sort((a, b) => b.price - a.price);
    } else if (currentSort === 'rating') {
      filtered.sort((a, b) => b.rating - a.rating);
    } else if (currentSort === 'newest') {
      filtered.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
    }

    if (countEl) countEl.textContent = `${filtered.length} Authentic Products`;

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div class="col-span-full py-16 text-center">
          <i data-lucide="sparkle" class="w-12 h-12 mx-auto text-[#B89A5A] mb-3 opacity-60"></i>
          <h3 class="text-xl font-serif font-bold text-[#49372C] dark:text-[#E6D8C3]">No products match these specific filters</h3>
          <p class="text-sm text-[#6B5E55] dark:text-[#A89A90] mt-1 mb-4">Try clearing some filters or exploring another craft category.</p>
          <button onclick="document.getElementById('catalog-reset-filters').click()" class="px-5 py-2 btn-terracotta rounded text-sm font-semibold">
            Reset Filters
          </button>
        </div>
      `;
      initLucide();
      return;
    }

    grid.innerHTML = filtered.map(p => createProductCardHtml(p)).join('');
    initLucide();
    initCartAndWishlistBadges();
  }

  // Initial render
  renderCatalog();
}

// --------------------------------------------------------------------------
// Standard Product Card HTML Generator
// --------------------------------------------------------------------------
function createProductCardHtml(product) {
  const discount = Math.round((1 - product.price / product.originalPrice) * 100);
  const isWished = wishlist.includes(product.id);

  return `
    <div class="kavira-card group bg-white dark:bg-[#1E1916] rounded-xl overflow-hidden border border-[#E6D8C3] dark:border-[#382C24] flex flex-col justify-between" data-product-id="${product.id}">
      <div class="relative overflow-hidden aspect-[3/4] bg-[#F7F3E9] dark:bg-[#251F1B]">
        <!-- Badges -->
        <div class="absolute top-3 left-3 z-10 flex flex-col space-y-1">
          ${product.isNew ? `<span class="px-2 py-0.5 text-[10px] font-bold tracking-wider uppercase bg-[#344C3B] text-white rounded">NEW</span>` : ''}
          ${product.isBestSeller ? `<span class="px-2 py-0.5 text-[10px] font-bold tracking-wider uppercase bg-[#B89A5A] text-white rounded">BEST SELLER</span>` : ''}
          ${discount > 0 ? `<span class="px-2 py-0.5 text-[10px] font-bold tracking-wider uppercase bg-[#B96B4B] text-white rounded">-${discount}%</span>` : ''}
        </div>

        <!-- Wishlist Button -->
        <button onclick="toggleWishlist('${product.id}')" data-wishlist-id="${product.id}" class="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-white/80 dark:bg-black/60 backdrop-blur-sm flex items-center justify-center text-gray-500 hover:text-[#B96B4B] transition shadow-sm ${isWished ? 'text-[#B96B4B]' : ''}" title="Add to Wishlist">
          <i data-lucide="heart" class="w-4 h-4 ${isWished ? 'fill-current' : ''}"></i>
        </button>

        <!-- Product Image -->
        <img src="${product.image}" alt="${product.name}" class="product-img-zoom w-full h-full object-cover cursor-pointer" onclick="openQuickView('${product.id}')" loading="lazy" />

        <!-- Quick View Overlay on Hover -->
        <div class="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2">
          <button onclick="openQuickView('${product.id}')" class="flex-1 h-9 bg-white/90 dark:bg-[#1E1916]/90 hover:bg-white text-[#2C221D] dark:text-white text-xs font-semibold rounded shadow backdrop-blur transition flex items-center justify-center gap-1.5">
            <i data-lucide="eye" class="w-3.5 h-3.5"></i>
            <span>Quick View</span>
          </button>
          <button onclick="addToCart('${product.id}')" class="w-9 h-9 shrink-0 bg-[#B96B4B] hover:bg-[#9C5335] text-white rounded flex items-center justify-center shadow transition" title="Add to Bag">
            <i data-lucide="shopping-bag" class="w-4 h-4"></i>
          </button>
        </div>
      </div>

      <!-- Card Body -->
      <div class="p-4 flex flex-col flex-1 justify-between">
        <div>
          <div class="flex items-center justify-between text-[11px] uppercase tracking-wider text-[#B89A5A] font-semibold mb-1">
            <span>${product.categoryName}</span>
            <span class="text-gray-400 dark:text-gray-500 font-normal lowercase">${product.origin}</span>
          </div>
          <h3 class="font-serif font-bold text-sm text-[#2C221D] dark:text-[#F5EFE6] line-clamp-1 hover:text-[#B96B4B] cursor-pointer" onclick="openQuickView('${product.id}')">
            ${product.name}
          </h3>
          <p class="text-xs text-[#6B5E55] dark:text-[#A89A90] mt-1 line-clamp-1">
            ${product.fabric}
          </p>
        </div>

        <div class="pt-3 mt-3 border-t border-[#E6D8C3]/50 dark:border-[#382C24] flex items-center justify-between">
          <div class="flex items-baseline gap-2">
            <span class="text-base font-bold text-[#B96B4B]">${formatINR(product.price)}</span>
            <span class="text-xs text-gray-400 line-through">${formatINR(product.originalPrice)}</span>
          </div>
          <div class="flex items-center gap-1 text-amber-500 text-xs font-semibold">
            <i data-lucide="star" class="w-3.5 h-3.5 fill-current"></i>
            <span>${product.rating}</span>
          </div>
        </div>
      </div>
    </div>
  `;
}

// --------------------------------------------------------------------------
// Contact Form & FAQs
// --------------------------------------------------------------------------
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('contact-name')?.value;
      const email = document.getElementById('contact-email')?.value;
      const subject = document.getElementById('contact-subject')?.value;
      const message = document.getElementById('contact-message')?.value;

      if (!name || !email || !message) {
        showToast('Please fill in all required fields.', 'info');
        return;
      }

      showToast(`Thank you, ${name}! Your enquiry has been forwarded to our artisan relations team.`, 'success');
      form.reset();
    });
  }

  // FAQ Accordion
  document.querySelectorAll('.faq-toggle-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const content = btn.nextElementSibling;
      const icon = btn.querySelector('.faq-icon');
      const isExpanded = btn.getAttribute('aria-expanded') === 'true';

      // Close other accordions
      document.querySelectorAll('.faq-content').forEach(c => c.classList.add('hidden'));
      document.querySelectorAll('.faq-toggle-btn').forEach(b => {
        b.setAttribute('aria-expanded', 'false');
        const ic = b.querySelector('.faq-icon');
        if (ic) ic.style.transform = 'rotate(0deg)';
      });

      if (!isExpanded) {
        content.classList.remove('hidden');
        btn.setAttribute('aria-expanded', 'true');
        if (icon) icon.style.transform = 'rotate(180deg)';
      }
    });
  });
}

// --------------------------------------------------------------------------
// Auth Pages (Login & Sign Up)
// --------------------------------------------------------------------------
function initAuthPages() {
  const loginForm = document.getElementById('login-form');
  const signupForm = document.getElementById('signup-form');

  // Password toggle
  document.querySelectorAll('.password-toggle-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target');
      const input = document.getElementById(targetId);
      if (input) {
        const isPassword = input.type === 'password';
        input.type = isPassword ? 'text' : 'password';
        const icon = btn.querySelector('i');
        if (icon) {
          icon.setAttribute('data-lucide', isPassword ? 'eye-off' : 'eye');
          initLucide();
        }
      }
    });
  });

  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      showToast('Login successful! Welcome to the KAVIRA Handloom Circle.', 'success');
      setTimeout(() => {
        window.location.href = 'index.html';
      }, 1500);
    });
  }

  if (signupForm) {
    signupForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const pwd = document.getElementById('signup-password')?.value;
      const confirmPwd = document.getElementById('signup-confirm-password')?.value;

      if (pwd !== confirmPwd) {
        showToast('Passwords do not match. Please re-enter.', 'info');
        return;
      }

      showToast('Account created successfully! Welcome to KAVIRA.', 'success');
      setTimeout(() => {
        window.location.href = 'index.html';
      }, 1500);
    });
  }
}

// --------------------------------------------------------------------------
// Patron Dashboard Modal & Mobile Nav Helpers
// --------------------------------------------------------------------------
function openMobileNav() {
  const drawer = document.getElementById('mobile-nav-drawer');
  let backdrop = document.getElementById('mobile-nav-backdrop');
  if (!backdrop) {
    backdrop = document.createElement('div');
    backdrop.id = 'mobile-nav-backdrop';
    document.body.appendChild(backdrop);
    backdrop.addEventListener('click', closeMobileNav);
  }
  if (drawer) {
    drawer.classList.add('active');
    drawer.classList.remove('-translate-x-full');
    drawer.classList.add('translate-x-0');
  }
  backdrop.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeMobileNav() {
  const drawer = document.getElementById('mobile-nav-drawer');
  const backdrop = document.getElementById('mobile-nav-backdrop');
  if (drawer) {
    drawer.classList.remove('active');
    drawer.classList.remove('translate-x-0');
    drawer.classList.add('-translate-x-full');
  }
  if (backdrop) {
    backdrop.classList.remove('active');
  }
  document.body.style.overflow = '';
}

window.openMobileNav = openMobileNav;
window.closeMobileNav = closeMobileNav;

function openDashboardModal() {
  let modal = document.getElementById('patron-dashboard-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'patron-dashboard-modal';
    modal.className = 'fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity duration-300';
    modal.innerHTML = `
      <div class="relative w-full max-w-2xl bg-[#FAF8F5] dark:bg-[#1C1613] rounded-2xl shadow-2xl border border-[#E6D8C3] dark:border-[#382C24] overflow-hidden max-h-[90vh] flex flex-col transform transition-all duration-300">
        <!-- Header -->
        <div class="px-6 py-5 bg-[#F4EFEA] dark:bg-[#251F1B] border-b border-[#E6D8C3] dark:border-[#382C24] flex items-center justify-between">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-full bg-[#B96B4B]/15 dark:bg-[#B96B4B]/30 flex items-center justify-center text-[#B96B4B]">
              <i data-lucide="user" class="w-5 h-5"></i>
            </div>
            <div>
              <div class="flex items-center gap-2">
                <h3 class="font-serif font-bold text-lg text-[#2C221D] dark:text-[#F5EFE6]">Patron Dashboard</h3>
                <span class="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-[#B89A5A]/15 text-[#B89A5A] border border-[#B89A5A]/30">Gold Patron</span>
              </div>
              <p class="text-xs text-[#6B5E55] dark:text-[#9E8E81]">Welcome back, Aarav Sharma • ID: KV-2026-8942</p>
            </div>
          </div>
          <button onclick="closeDashboardModal()" class="w-8 h-8 rounded-full flex items-center justify-center hover:bg-[#E6D8C3]/50 dark:hover:bg-[#382C24] text-[#6B5E55] hover:text-[#2C221D] dark:text-[#9E8E81] dark:hover:text-[#F5EFE6] transition">
            <i data-lucide="x" class="w-5 h-5"></i>
          </button>
        </div>

        <!-- Scrollable Content -->
        <div class="p-6 overflow-y-auto space-y-6">
          <!-- Metric Badges -->
          <div class="grid grid-cols-3 gap-3">
            <div class="p-3.5 rounded-xl bg-white dark:bg-[#251F1B] border border-[#E6D8C3]/60 dark:border-[#382C24] text-center">
              <span class="block text-2xl font-serif font-bold text-[#B96B4B]">14</span>
              <span class="text-[11px] text-[#6B5E55] dark:text-[#9E8E81]">Weaver Days Supported</span>
            </div>
            <div class="p-3.5 rounded-xl bg-white dark:bg-[#251F1B] border border-[#E6D8C3]/60 dark:border-[#382C24] text-center">
              <span class="block text-2xl font-serif font-bold text-[#2E5A44] dark:text-[#4EA67B]">1,850</span>
              <span class="text-[11px] text-[#6B5E55] dark:text-[#9E8E81]">Craft Legacy Points</span>
            </div>
            <div class="p-3.5 rounded-xl bg-white dark:bg-[#251F1B] border border-[#E6D8C3]/60 dark:border-[#382C24] text-center">
              <span class="block text-2xl font-serif font-bold text-[#B89A5A]">03</span>
              <span class="text-[11px] text-[#6B5E55] dark:text-[#9E8E81]">Active Handloom Orders</span>
            </div>
          </div>

          <!-- Recent Orders -->
          <div>
            <div class="flex items-center justify-between mb-3">
              <h4 class="text-xs uppercase font-bold tracking-wider text-[#6B5E55] dark:text-[#9E8E81]">Recent Handloom Orders</h4>
              <a href="products.html" class="text-xs text-[#B96B4B] hover:underline">Explore More Weaves →</a>
            </div>
            <div class="space-y-2.5">
              <div class="p-3 rounded-xl bg-white dark:bg-[#251F1B] border border-[#E6D8C3]/60 dark:border-[#382C24] flex items-center justify-between">
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 rounded-lg bg-[#E6D8C3]/40 dark:bg-[#382C24] flex items-center justify-center text-[#B96B4B]">
                    <i data-lucide="package-check" class="w-5 h-5"></i>
                  </div>
                  <div>
                    <p class="font-medium text-sm text-[#2C221D] dark:text-[#F5EFE6]">Pure Chanderi Zari Saree</p>
                    <p class="text-xs text-[#6B5E55] dark:text-[#9E8E81]">#KV-9842 • Delivered Nov 04 • Eco-Boxed</p>
                  </div>
                </div>
                <div class="text-right">
                  <span class="font-bold text-sm text-[#2C221D] dark:text-[#F5EFE6]">₹9,400</span>
                  <span class="block text-[10px] font-semibold text-emerald-600 dark:text-emerald-400">Delivered</span>
                </div>
              </div>
              <div class="p-3 rounded-xl bg-white dark:bg-[#251F1B] border border-[#E6D8C3]/60 dark:border-[#382C24] flex items-center justify-between">
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 rounded-lg bg-[#E6D8C3]/40 dark:bg-[#382C24] flex items-center justify-center text-[#B89A5A]">
                    <i data-lucide="truck" class="w-5 h-5"></i>
                  </div>
                  <div>
                    <p class="font-medium text-sm text-[#2C221D] dark:text-[#F5EFE6]">Khadi Muslin Summer Kurta</p>
                    <p class="text-xs text-[#6B5E55] dark:text-[#9E8E81]">#KV-8721 • Dispatched from Varanasi Loom</p>
                  </div>
                </div>
                <div class="text-right">
                  <span class="font-bold text-sm text-[#2C221D] dark:text-[#F5EFE6]">₹3,800</span>
                  <span class="block text-[10px] font-semibold text-amber-600 dark:text-amber-400">In Transit</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Artisan Subscriptions & Bookmarked Guilds -->
          <div>
            <h4 class="text-xs uppercase font-bold tracking-wider text-[#6B5E55] dark:text-[#9E8E81] mb-3">Patron Guild Connections</h4>
            <div class="grid grid-cols-2 gap-3">
              <a href="weaver-stories.html" class="p-3 rounded-xl bg-white dark:bg-[#251F1B] border border-[#E6D8C3]/60 dark:border-[#382C24] hover:border-[#B96B4B] transition flex items-center gap-3 group">
                <div class="w-8 h-8 rounded-full bg-[#B96B4B]/10 text-[#B96B4B] flex items-center justify-center font-bold text-xs">DK</div>
                <div class="min-w-0">
                  <p class="text-xs font-semibold text-[#2C221D] dark:text-[#F5EFE6] truncate group-hover:text-[#B96B4B] transition">Devaki & Ramaswamy</p>
                  <p class="text-[10px] text-[#6B5E55] dark:text-[#9E8E81]">Kanchipuram Silk Guild</p>
                </div>
              </a>
              <a href="weaver-stories.html" class="p-3 rounded-xl bg-white dark:bg-[#251F1B] border border-[#E6D8C3]/60 dark:border-[#382C24] hover:border-[#B96B4B] transition flex items-center gap-3 group">
                <div class="w-8 h-8 rounded-full bg-[#2E5A44]/10 text-[#2E5A44] flex items-center justify-center font-bold text-xs">SC</div>
                <div class="min-w-0">
                  <p class="text-xs font-semibold text-[#2C221D] dark:text-[#F5EFE6] truncate group-hover:text-[#B96B4B] transition">Santosh Chitrakar</p>
                  <p class="text-[10px] text-[#6B5E55] dark:text-[#9E8E81]">Kalamkari Natural Dyes</p>
                </div>
              </a>
            </div>
          </div>
        </div>

        <!-- Footer Actions -->
        <div class="px-6 py-4 bg-[#F4EFEA] dark:bg-[#251F1B] border-t border-[#E6D8C3] dark:border-[#382C24] flex items-center justify-between">
          <a href="login.html" class="text-xs text-[#6B5E55] dark:text-[#9E8E81] hover:text-[#B96B4B] transition flex items-center gap-1.5">
            <i data-lucide="log-out" class="w-3.5 h-3.5"></i>
            <span>Switch Account / Sign Out</span>
          </a>
          <button onclick="closeDashboardModal()" class="px-4 py-2 rounded-lg btn-terracotta text-xs font-semibold uppercase tracking-wider">
            Close Dashboard
          </button>
        </div>
      </div>
    `;
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeDashboardModal();
    });
    document.body.appendChild(modal);
  }
  modal.classList.remove('hidden');
  modal.classList.add('flex');
  document.body.style.overflow = 'hidden';
  initLucide();
}

function closeDashboardModal() {
  const modal = document.getElementById('patron-dashboard-modal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = '';
  }
}


