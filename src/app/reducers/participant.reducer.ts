import { Action } from '@ngrx/store';
import { ParticipantActions, ParticipantActionTypes } from '../actions/participant.actions'


export interface ParticipantState {
  participants: Array<any>,
  participant: any,
  errorMessage: string,
  collection: string
}

export const initialState: ParticipantState = {
  participants: [],
  participant: {},
  errorMessage: "",
  collection: ""
};

export function participantReducer(state = initialState, action: ParticipantActions): ParticipantState {
  switch (action.type) {

    // case ParticipantActionTypes.InitLoading:
    // return Object.assign({}, state, {collection: action['collection']})

    case ParticipantActionTypes.AddParticipant:
      return Object.assign({}, state, {participants: state.participants.concat(action['participant'])})

      case ParticipantActionTypes.UpdateParticipant:
      return Object.assign({}, state, {participants: state.participants.map(participant => participant._id == action['participant']._id ? action['participant'] : participant )})

    case ParticipantActionTypes.LoadParticipant:
      return Object.assign({}, state, {participants: action['participants']})

     case ParticipantActionTypes.FeatureParticipant:
      return Object.assign({}, state, {participant: action['participant']})

    case ParticipantActionTypes.RemoveParticipant:
      return Object.assign({}, state, {participants: state.participants.filter(participant => participant._id != action['id'])})

    case ParticipantActionTypes.Fail:
      return Object.assign({}, state , {errorMessage: action['errorMessage']})


    default:
      return state;
  }
}
