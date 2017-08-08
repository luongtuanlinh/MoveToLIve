class ShieldToken {
  constructor() {
    this.x = Math.floor((Math.random() * Nakama.game.scale.maxWidth - 50) + 1);
    this.y = Math.floor((Math.random() * Nakama.game.scale.maxHeight - 50) + 1);
    this.sprite = Nakama.tokenGroup.create(this.x, this.y, 'shieldToken');
    Nakama.game.physics.arcade.enable(this.sprite);
    this.sprite.update = this.update.bind(this);
    this.sprite.anchor = new Phaser.Point(0.5, 0.5);

    // set scale
    this.sprite.scaleSize = 0.005;
    this.sprite.scale.set(this.sprite.scaleSize);
  }

  update() {
    Nakama.game.physics.arcade.overlap(
      Nakama.playerGroup,
      Nakama.tokenGroup,
      this.onPlayerHitToken
    );
    if (this.sprite.scaleSize <= 0.05) {
      this.sprite.scaleSize += 0.005;
      this.sprite.scale.set(this.sprite.scaleSize);
    }
  }

  onPlayerHitToken (playerSprite, tokenSprite) {
   tokenSprite.kill();
   Nakama.shield = new Shield();
 }
}
