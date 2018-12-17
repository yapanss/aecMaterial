import { Action } from '@ngrx/store';

export enum ParticipantActionTypes {
  LoadParticipant = '[Participant] Load Participant',
  InitLoading = '[Participant] Initiate Loading',
  AddParticipant = '[Participant] Add Participant',
  FeatureParticipant = '[Participant] Feature Participant',
  UpdateParticipant = '[Participant] Update Participant',
  RemoveParticipant = '[Participant] Remove Participant',
  Fail = '[Participant] Actions Failed'
}

export class InitLoading implements Action {
  readonly type = ParticipantActionTypes.InitLoading;

  // constructor(public collection: string){}
}

export class LoadParticipant implements Action {
  readonly type = ParticipantActionTypes.LoadParticipant;

  constructor(public participants) {}

}

export class AddParticipant implements Action {
  readonly type = ParticipantActionTypes.AddParticipant;

  constructor(public participant: any) {}

}

export class FeatureParticipant implements Action {
  readonly type = ParticipantActionTypes.FeatureParticipant;

  constructor(public participant: any) {}

}

export class UpdateParticipant implements Action {
  readonly type = ParticipantActionTypes.UpdateParticipant;

  constructor(public participant: any) {}
}

export class RemoveParticipant implements Action {
  readonly type = ParticipantActionTypes.RemoveParticipant;

  constructor(public id: string) {}
}

export class Fail implements Action {
  readonly type = ParticipantActionTypes.Fail;

  constructor(public errorMessage: string) {}
}


export type ParticipantActions = LoadParticipant | InitLoading | AddParticipant | FeatureParticipant | UpdateParticipant | RemoveParticipant | Fail;
