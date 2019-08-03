class Coin extends Spirit {
  constructor(type) {
    if (type > 2 || type < 1) {
      throw new Error('币的类型只能在1-2之间');
    }

    const data = __g_resouce['coin'][`coinAni${type}`];
    super({
      img: data.img,
      sx: data.frame.x, sy: data.frame.y,
      w: data.frame.w, h: data.frame.h,
      speed: 5
    });

    this.type = type;

    this.max_tick = 2;
    this.max_fame = 10;
  }
}
