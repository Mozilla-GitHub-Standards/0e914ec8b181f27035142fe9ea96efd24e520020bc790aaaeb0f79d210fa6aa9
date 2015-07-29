'use strict';
import BaseStore from 'fluxible/addons/BaseStore';


export default class RoadmapStore extends BaseStore {
  constructor (dispatcher) {
    super(dispatcher);
    this.dispatcher = dispatcher;
    this.roadmapItems = [];
    this.activeSort = 'default';
  }

  receiveRoadmapItems (payload) {
    this.roadmapItems = payload;
    this.emitChange();
  }

  changeRoadmapSort (newSort) {
    console.log('changing sort to', newSort);
    this.activeSort = newSort;
    this.emitChange();
  }

  getSort () {
    return this.activeSort;
  }

  getAll () {
    var items = this.roadmapItems

    // If sorting by launch date, filter out items without one before sorting.
    if (this.getSort() == 'date') {
      items = items.filter((item) => (item['Target Launch_end']))
    }

    return items.sort(this.getSortFunction());
  }

  getSortFunction () {
    switch (this.getSort()) {

      // Sort by target launch date, ascending. Items without target launch
      // dates are filtered out by getAll().  
      case 'date':
        return (a, b) => {
          return (new Date(a['Target Launch_end']).getTime() -
                  new Date(b['Target Launch_end']).getTime());
        }

      // Active first, then New, then Backlog. Sort by ID ascending if the
      // roadmap statuses are equal.
      case 'status':
        return (a, b) => {
          let mapping = {
            'Active': 2,
            'New': 1,
            'Backlog': 0
          };
          let a_status = a['Roadmap Status'];
          let b_status = b['Roadmap Status']
          if (a_status == b_status) {
            return a.id - b.id
          }
          return mapping[b_status] - mapping[a_status];
        }

      // Sort by ID descending.
      default:
        return (a, b) => {
          return b.id - a.id;
        }
    }
  }

  dehydrate () {
    return {
      activeSort: this.activeSort,
      roadmapItems: this.roadmapItems
    }
  }

  rehydrate (state) {
    this.activeSort = state.activeSort;
    this.roadmapItems = state.roadmapItems;
  }
}

RoadmapStore.storeName = 'RoadmapStore';
RoadmapStore.handlers = {
  'CHANGE_ROADMAP_SORT': 'changeRoadmapSort',
  'RECEIVE_ROADMAP_ITEMS': 'receiveRoadmapItems',
};
