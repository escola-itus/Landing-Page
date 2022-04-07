class Header {
  constructor(header) {
    this.header = document.querySelector(header);
    this.activeClass = "active";
    this.handleScroll = this.handleScroll.bind(this);
  }

  changeClass() {
    if(window.scrollY > 0) {
      this.header.classList.add(this.activeClass);
    } else {
      this.header.classList.remove(this.activeClass);
    }
  }

  handleScroll() {
    this.changeClass();
  }

  addScrollEvent() {
    window.addEventListener("scroll", this.handleScroll);
  }

  init() {
    this.addScrollEvent();
    return this;
  }
}

const header = new Header(
  "#header",
);

export default header;