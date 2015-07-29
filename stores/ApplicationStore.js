import {BaseStore} from 'fluxible/addons';


class ApplicationStore extends BaseStore {
  constructor(dispatcher) {
    super(dispatcher);
    this.pageTitle = '';
    this.pageIsLoading = false;
  }

  updatePageTitle(payload) {
    this.pageTitle = payload.pageTitle;
    this.emitChange();
  }

  getPageTitle() {
    return this.pageTitle;
  }

  getPageIsLoading() {
    return this.pageIsLoading;
  }

  showThrobber() {
    this.pageIsLoading = true;
    this.emitChange();
  }

  hideThrobber() {
    this.pageIsLoading = false;
    this.emitChange();
  }

  getState() {
    return {
      pageTitle: this.pageTitle,
      pageIsLoading: this.pageIsLoading
    };
  }

  dehydrate() {
    return this.getState();
  }

  rehydrate(state) {
    this.pageTitle = state.pageTitle;
    this.pageIsLoading = state.pageIsLoading;
  }
}

ApplicationStore.storeName = 'ApplicationStore';
ApplicationStore.handlers = {
  'NAVIGATE_START': 'showThrobber',
  'NAVIGATE_SUCCESS': 'hideThrobber',
  'NAVIGATE_FAILURE': 'hideThrobber',
  'UPDATE_PAGE_TITLE': 'updatePageTitle',
};

export default ApplicationStore;
