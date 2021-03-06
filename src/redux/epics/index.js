import { combineEpics } from 'redux-observable';
import 'rxjs/add/operator/mergeMap';
import { getCategoryEpic } from './category.epics';
import { getEventsEpic, returnEventsActionOnLocationChange, getEventEpic, returnEventActionOnLocationChange } from './event.epics';
import { getAddressEpic } from './address.epics'
import { geolocationEpic } from './geolocation.epics'
import { Observable } from 'rxjs';


export default (...args) => 
combineEpics(
  getCategoryEpic,
  getEventsEpic,
  getAddressEpic,
  returnEventsActionOnLocationChange,
  getEventEpic,
  returnEventActionOnLocationChange,
  geolocationEpic,
  returnEventActionOnLocationChange
)(...args, { ajax: Observable.ajax })
