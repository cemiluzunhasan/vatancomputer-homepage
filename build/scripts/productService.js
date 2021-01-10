const fetchRelatedProducts = () => {
  fetch('../data/relatedProducts.json')
    .then(res => res.json())
    .then(data => {
      const html = data.map(x => new Product(x).generateHtml());
      $('.related-products').html(html);
    });
};

$(document).ready(() => {
  fetchRelatedProducts();
});


