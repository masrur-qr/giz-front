
export interface ILanguage {
  name: string;
  description: string;
}

export interface ILocation {
  district: string;
  village: string;
  coordinates: string;
}

export interface IMedia {
  id: string;
  title: string;
  imageUrl: string;
}

export interface INews {
  id: string;
  category: string;
  english: ILanguage;
  tajik: ILanguage;
  russian: ILanguage;
  links: string[];
  bannerUrl: any;
  mediaFiles: IMedia[];
}

export interface IProject {
  id: string;
  category: string;
  english: ILanguage;
  tajik: ILanguage;
  russian: ILanguage;
  location: ILocation;
  links: string[];
  bannerUrl: any;
  mediaFiles: IMedia[];
}
