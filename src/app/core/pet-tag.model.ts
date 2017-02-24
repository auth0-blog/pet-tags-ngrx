export class PetTag {
  constructor(
    public shape: string,
    public font: string,
    public text: string,
    public clip: boolean,
    public gems: boolean,
    public complete: boolean
  ) { }
}

export const initialTag: PetTag = {
  shape: '',
  font: 'sans-serif',
  text: '',
  clip: false,
  gems: false,
  complete: false
};
