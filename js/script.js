// Toggle class active untuk menu
const navbarNav = document.querySelector('.navbar-nav');

//ketika menu di klik
document.querySelector('#menu').onclick = () => {
  navbarNav.classList.toggle('active');
};

//klik diluar elemen
const menu = document.querySelector('#menu');
const sb = document.querySelector('#search-button');
const sc = document.querySelector('#shopping-cart-button');
document.addEventListener('click', function (e) {
  if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }

  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove('active');
  }
  if (!sc.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove('active');
  }
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const offset = 100; // Sesuaikan offset sesuai kebutuhan Anda
      const targetOffset = targetElement.offsetTop - offset;

      window.scrollTo({
        top: targetOffset,
        behavior: 'smooth',
      });
    }
  });
});

// Modal Box
const itemDetailModal = document.querySelector('#item-detail-modal');
const itemDetailButtons = document.querySelectorAll('.item-detail-button');

itemDetailButtons.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal.style.display = 'flex';
    e.preventDefault();
  };
});

const itemDetailModal2 = document.querySelector('#item-detail-modal2');
const itemDetailButton2 = document.querySelectorAll('.item-detail-button2');

itemDetailButton2.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal2.style.display = 'flex';
    e.preventDefault();
  };
});

const itemDetailModal3 = document.querySelector('#item-detail-modal3');
const itemDetailButton3 = document.querySelectorAll('.item-detail-button3');

itemDetailButton3.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal3.style.display = 'flex';
    e.preventDefault();
  };
});

const itemDetailModal4 = document.querySelector('#item-detail-modal4');
const itemDetailButton4 = document.querySelectorAll('.item-detail-button4');

itemDetailButton4.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal4.style.display = 'flex';
    e.preventDefault();
  };
});

const itemDetailModal5 = document.querySelector('#item-detail-modal5');
const itemDetailButton5 = document.querySelectorAll('.item-detail-button5');

itemDetailButton5.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal5.style.display = 'flex';
    e.preventDefault();
  };
});

const itemDetailModal6 = document.querySelector('#item-detail-modal6');
const itemDetailButton6 = document.querySelectorAll('.item-detail-button6');

itemDetailButton6.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal6.style.display = 'flex';
    e.preventDefault();
  };
});

// klik tombol close modal
document.querySelector('.modal .close-icon').onclick = (e) => {
  itemDetailModal.style.display = 'none';
  e.preventDefault();
};

document.querySelector('.modal .close-icon2').onclick = (e) => {
  itemDetailModal2.style.display = 'none';
  e.preventDefault();
};

document.querySelector('.modal .close-icon3').onclick = (e) => {
  itemDetailModal3.style.display = 'none';
  e.preventDefault();
};

document.querySelector('.modal .close-icon4').onclick = (e) => {
  itemDetailModal4.style.display = 'none';
  e.preventDefault();
};

document.querySelector('.modal .close-icon5').onclick = (e) => {
  itemDetailModal5.style.display = 'none';
  e.preventDefault();
};

document.querySelector('.modal .close-icon6').onclick = (e) => {
  itemDetailModal6.style.display = 'none';
  e.preventDefault();
};
