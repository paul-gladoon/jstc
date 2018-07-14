import { SubMenu } from "./sub.menu.fragment";
import { News } from "./news.fragment";

class MainPage {
  private subMenu: SubMenu
  private news: News

  constructor() {
    this.subMenu = new SubMenu()
  }
}

export { MainPage }