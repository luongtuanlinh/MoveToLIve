class TokenController {
  constructor() {
    // create shield
    this.timerToken = Nakama.game.time.events;
    this.SHIELDTOKEN_CREATE_TIME = Math.floor((Math.random() * 40) + 30);
    //Nakama.tokens.push(new ShieldToken());
    this.timerToken.repeat(this.SHIELDTOKEN_CREATE_TIME*1000, 1, this.createShieldToken, this);

    this.SUNTOKEN_CREATE_TIME = Math.floor((Math.random() * 25) + 5);
    Nakama.tokens.push(new SunToken());
    this.timerToken.repeat(this.SUNTOKEN_CREATE_TIME*1000, 1, this.createSunToken, this);
  }

  createShieldToken () {
    Nakama.tokens.push(new ShieldToken());
    this.SHIELDTOKEN_CREATE_TIME = Math.floor((Math.random() * 40) + 30);
    this.timerToken.repeat(this.SHIELDTOKEN_CREATE_TIME*1000, 1, this.createShieldToken, this);
  }

  createSunToken () {
    Nakama.tokens.push(new SunToken());
    this.SUNTOKEN_CREATE_TIME = Math.floor((Math.random() * 25) + 5);
    this.timerToken.repeat(this.SUNTOKEN_CREATE_TIME*1000, 1, this.createSunToken, this);
  }
}
