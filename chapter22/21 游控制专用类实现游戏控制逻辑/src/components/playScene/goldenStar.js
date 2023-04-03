import { Sprite } from "../../libs/pixijs.js";
import Character from "./character.js";

export default class goldenStar extends Character {
  constructor(texture, posInfo) {
    super(posInfo)
    this.element = new Sprite(texture)
    this.animationInfo = {
      keyframes: {
        '0%': { y: posInfo.to.y },
        "50%": { y: posInfo.to.y - 20 },
        "100%": { y: posInfo.to.y }
      },
      duration: 1.2,
      delay: Math.random(),
      ease: 'none',
      repeat: -1
    }
    this.init()
  }

  init() {
    this.element.anchor.set(0.5)
    this.needAotoAnimation = true
    this.superInit()
  }

}