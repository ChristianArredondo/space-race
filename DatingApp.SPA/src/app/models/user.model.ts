import { Photo } from './photo.model';

export interface User {
  id: number;
  username: string;
  age: number;
  city: string;
  country: string;
  created: Date;
  gender: string;
  knownAs: string;
  lastActive: Date;
  interests?: string;
  introduction?: string;
  lookingFor?: string;
  photos?: Photo[];
  photoUrl?: string;
}
