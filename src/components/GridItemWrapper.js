export default class GridItemWrapper {
  getName() {
    return "";
  }

  isDefaultEnabled() {
    return false;
  }

  getLgLayout() {
    return {};
  }
  getXsLayout() {
    return {};
  }
  getMdLayout() {
    return {};
  }

  getKey() {
    return "key";
  }

  getRender() {
    return <>ERROR 500 : Wrong render</>;
  }
  getEditRender() {
    return <>ERROR 500 : Wrong render</>;
  }
}
