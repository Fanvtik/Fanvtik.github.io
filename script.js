class Page {

  #navElPrev = null;
  constructor() {
    this.#addEvents();
    this.#addRight();
  }
  #addEvents() {
    document.addEventListener("click", this.#onClick.bind(this));
  }
  #onClick(e) {
    const el = e.target.closest(".navBar>div");

    if (el) {
      this.#swapClasses(el, 'open', 'close');
      if (this.#navElPrev && this.#navElPrev !== el) {
        this.#navElPrev.classList.add('close');
        this.#navElPrev.classList.remove('open');

      }
        this.#navElPrev = el;
    }
  }
  #addRight() {
    let arr = Array.from(document.body.querySelectorAll('.navWin'));

    arr.forEach((i, index) => {
      if (index + 1 > Math.floor(arr.length / 2)) {
        i.classList.add("right");
       
      }
    });
  }
  #swapClasses(el, cl1, cl2) {
    el.classList.toggle(cl1);
    el.classList.toggle(cl2);
  }
}