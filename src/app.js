document.addEventListener('alpine:init', () => {
  Alpine.data('products', () => ({
    items: [
      { id: 1, name: 'Fungi Culture', img: 'jamur.jpg', price: 27000 },
      { id: 2, name: 'Organic Mushroom Farm', img: 'jamur2.jpg', price: 30000 },
      { id: 3, name: 'Mushroom Mini Grown', img: 'jamur3.jpg', price: 29000 },
      { id: 4, name: 'Jolly Mushroom Whole', img: 'jamur4.jpg', price: 32000 },
      { id: 5, name: 'King Oyster', img: 'jamur5.jpg', price: 38000 },
    ],
  }));

  Alpine.store('cart', {
    items: [],
    total: 0,
    quantity: 0,
    add(newItem) {
      // cek apakah ada barang yang sama di cart
      const cartItem = this.items.find((item) => item.id === newItem.id);

      // jika belum ada/cart kosong
      if (!cartItem) {
        this.items.push({ ...newItem, quantity: 1, total: newItem.price });
        this.quantity++;
        this.total += newItem.price;
      } else {
        // jika barang sudah ada, cek apakah barang beda atau sama dengan yang ada di cart
        this.items = this.items.map((item) => {
          // Jika barang berbeda
          if (item.id !== newItem.id) {
            return item;
          } else {
            // jika barang sudah ada, tambah quantity dan subtotal
            item.quantity++;
            item.total = item.price * item.quantity;
            this.quantity++;
            this.total += item.price;
            return item;
          }
        });
      }
    },

    remove(id) {
      // ambil item yang mau di remove berdasarkan id nya
      const cartItem = this.items.find((item) => item.id === id);

      // jika item lebih dari 1
      if (cartItem.quantity > 1) {
        // telusuri 1 1
        this.items = this.items.map((item) => {
          //  jika bukan barang yang diklik
          if (item.id !== id) {
            return item;
          } else {
            item.quantity--;
            item.total = item.price * item.quantity;
            this.quantity--;
            this.total -= item.price;
            return item;
          }
        });
      } else if (cartItem.quantity === 1) {
        // jika barangnya sisa 1
        this.items = this.items.filter((item) => item.id !== id);
        this.quantity--;
        this.total -= cartItem.price;
      }
    },
  });
});

// Form Validation
const checkoutButton = document.querySelector('#messageButton');
// checkoutButton.disabled = true;

const form = document.querySelector('#formPesan');

// form.addEventListener('keyup', function () {
//   for (let i = 0; i < form.elements.length; i++) {
//     if (form.elements[i].value.length !== 0) {
//       checkoutButton.classList.remove('disabled');
//       checkoutButton.classList.add('disabled');
//     } else {
//       return false;
//     }
//   }
//   checkoutButton.disabled = false;
//   checkoutButton.classList.remove('disabled');
// });

// kirim data
checkoutButton.addEventListener('click', function (e) {
  e.preventDefault();
  const formData = new FormData(form);
  const data = new URLSearchParams(formData);
  const objData = Object.fromEntries(data);
  const message = formatMessage(objData);
  window.open('http://wa.me/6281263769470?text=' + encodeURIComponent(message));
});

// format pesan wa
const formatMessage = (obj) => {
  return `Data Customer
  Nama  : ${obj.name}
  Email : ${obj.email}
  No Hp : ${obj.phone}
  Produk : ${obj.product}
  Saya ingin memesan produk ini, apakah kita bisa membicarakan tentang harganya?
  Terima kasih.`;
};

// Konversi ke rupiah
const rupiah = (number) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(number);
};
