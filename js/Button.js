class Button extends Spirit {
  constructor(data, data_down) {
    super({
      img: data.img,
      sx: data.frame.x,
      sy: data.frame.y,
      w: data.frame.w,
      h: data.frame.h,
    });

    this.data = data;
    this.data_down = data_down;
  }

  _check(x, y) {
    if (
      this.x - this.w / 2 <= x && x <= this.x + this.w / 2 &&
      this.y - this.h / 2 <= y && y <= this.y + this.h / 2
    )
      return true;
    else
      return false;
  }

  checkDown(x, y) {
    if (this._check(x, y)) {
      this.img = this.data_down.img;
      this.sx = this.data_down.frame.x;
      this.sy = this.data_down.frame.y;
      this.w = this.data_down.frame.w;
      this.h = this.data_down.frame.h;

      return true;
    } else {
      return false;
    }
  }

  checkUp(x, y) {
    if (this._check(x, y)) {
      this.img = this.data.img;
      this.sx = this.data.frame.x;
      this.sy = this.data.frame.y;
      this.w = this.data.frame.w;
      this.h = this.data.frame.h;
    }
  }
}
