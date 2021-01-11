class Product {
  constructor(data) {
    this.soldYet = data ? data.soldYet : false;
    this.specialToWeb = data ? data.specialToWeb : false;
    this.img = data ? data.img : '';
    this.rating = data ? data.rating : '';
    this.comment = data ? data.comment : '';
    this.code = data ? data.code : '';
    this.title = data ? data.title : ''; 
    this.cur = data ? data.cur : '';
    this.dprice = data ? data.dprice : '';
    this.stock = data ? data.stock : '';
    this.sameDayShipping = data ? data.samedayshipping : '';
  }

  generateHtml() {
    return `<div class="swiper-slide">
      <div class="product-card">
        <p class="sold ${!this.soldYet && 'hidden'}">AZ ÖNCE 1 ADET SATILDI</p>
        <p class="web ${!this.specialToWeb && 'hidden'}">WEB' E ÖZEL</p>
        <img src="${this.img}">
        <div class="info d-flex a-center mt-20">
          <i class="fas fa-star text-orange text-sm mr-5"></i>
          <span class="rating">${this.rating}</span>
          <span class="comment">(${this.comment} yorum)</span>
        </div>
        <p class="code">${this.code}</p>
        <p class="title">${this.title}</p>
        <p class="price">${this.cur === 'TL' && '₺'} ${this.dprice.toString().toLocaleString()}</p>
        <p class="stock ${this.stock && this.stock <= 2 ? '' : 'hidden'}">YALNIZCA ${this.stock || 0} ÜRÜN KALDI</p>
        <p class="samedayshipping ${!this.sameDayShipping && 'hidden'}">BUGÜN KARGODA</p>
        <button class="btn-add-basket" onclick="addToBasket()">
          <i class="fas fa-exchange-alt"></i>
          <span class="ml-40">Sepete Ekle</span>
        </button>
      </div>
    </div>`
  }
};