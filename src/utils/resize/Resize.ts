/*
 * Утилита для адаптивной верстки на rem,
 * работающая благодаря правилу,
 * что 1rem = размеру шрифта тега html
 */
export default class Resize {
  /* Размеры девайса, под который ориентированы макеты */
  private readonly DEFAULT_SCREEN_SIZE = {
    width: 375,
    height: 812,
  };

  /* По умолчанию задаем 1rem = 10px  */
  private readonly DEFAULT_HTML_FONT_SIZE = 10;

  /* Минимальный размер шрифта html,
   * чтобы содержимое страницы не было слишком мелким */
  private readonly MIN_HTML_FONT_SIZE = 5;

  /* Пересчитывать ли размер шрифта при ресайзе экрана */
  private readonly FIT_ON_RESIZE = true;

  /* Текущий размер экрана на момент ресайза */
  currentScreenSize = {
    height: window.innerHeight,
    width: window.innerWidth,
  };

  /* Текущий размер шрифта тега html */
  currentHtmlFontSize: number;

  constructor() {
    this.resize();

    if (this.FIT_ON_RESIZE) {
      window.addEventListener('resize', this.resize.bind(this));
    }
  }

  resize() {
    this.currentScreenSize = {
      height: window.innerHeight,
      width: window.innerWidth,
    };

    let scaleX = this.currentScreenSize.width / this.DEFAULT_SCREEN_SIZE.width,
      scaleY = this.currentScreenSize.height / this.DEFAULT_SCREEN_SIZE.height;

    if (scaleX * this.DEFAULT_SCREEN_SIZE.height > this.currentScreenSize.height) {
      scaleX = this.currentScreenSize.height / this.DEFAULT_SCREEN_SIZE.height;
    }

    if (scaleY * this.DEFAULT_SCREEN_SIZE.width > this.currentScreenSize.width) {
      scaleY = this.currentScreenSize.width / this.DEFAULT_SCREEN_SIZE.width;
    }

    const resultedFontSize = Math.round(Math.min(scaleX, scaleY) * this.DEFAULT_HTML_FONT_SIZE);

    if (resultedFontSize < this.MIN_HTML_FONT_SIZE) {
      return;
    }

    this.currentHtmlFontSize = resultedFontSize;

    document.documentElement.style.fontSize = `${this.currentHtmlFontSize}px`;
  }
}
