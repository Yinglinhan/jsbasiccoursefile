
import LoadingScene from '../loadingScene/LoadingScene.js'
import PlayScene from '../playScene/playScene.js'
import GameLoader from './gameLoader.js'



export default class Control {

  static gameApp = null

  static async gameInit(app) {
    this.gameApp = app
    // 加载loadScene场景资源
    await GameLoader.loadSceneAssetsLoad()

    // 创建并显示加载场景
    const loadingScene = new LoadingScene(this.gameApp)
    this.gameApp.stage.addChild(loadingScene.sceneBox)

    console.log(loadingScene.loadingBarInstance)
    // 开始加载游戏场景资源
    await GameLoader.playSceneAssetsLoad(loadingScene.loadingBarInstance)

  }

}