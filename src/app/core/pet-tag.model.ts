interface PetTag {
  shape: string;
  font: string;
  text: string;
  clip: boolean;
  gems: boolean;
  complete: false;
};

const initialTag: PetTag = {
  shape: '',
  font: 'sans-serif',
  text: '',
  clip: false,
  gems: false,
  complete: false
};

export { PetTag, initialTag };
