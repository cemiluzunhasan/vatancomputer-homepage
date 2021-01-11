const fetchRelatedProducts = () => {
  fetch('../data/relatedProducts.json')
    .then(res => res.json())
    .then(data => {
      const html = data.map(x => new Product(x).generateHtml());
      $('.related-products').html(html);
    });
};

const fetchBestSellers = () => {
  fetch('../data/bestSeller.json')
    .then(res => res.json())
    .then(data => {
      data.forEach(x => {
        const product = new Product(x);
        bestSellerSwiper.appendSlide(product.generateHtml());
      });
    });
}

const addToBasket = () => {
  const count = localStorage.getItem('basket-count') || 0;
  localStorage.setItem('basket-count', parseInt(count) + 1);
  $('#basket-count').html(localStorage.getItem('basket-count'));
}


$(document).ready(() => {
  fetchRelatedProducts();
  fetchBestSellers();
  $('#basket-count').html(localStorage.getItem('basket-count'));
});


