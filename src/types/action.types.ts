export interface ActionCreator<Payload = undefined> {
  type: string;
  payload: Payload;
}
