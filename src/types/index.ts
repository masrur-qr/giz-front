export interface ILanguage {
  Name: string;
  Description: string;
}

export interface ILocation {
  District: string;
  Village: string;
  Coordinates: string;
}

export interface IMedia {
  id: string;
  title: string;
  imageUrl: string;
}

export interface INews {
  Id: string;
  Category: string;
  English: ILanguage;
  Tajik: ILanguage;
  Russian: ILanguage;
  Links: string[];
  BannerUrl: any;
  mediaFiles: IMedia[];
}

export interface IProject {
  Id: string;
  Category: string;
  English: ILanguage;
  Tajik: ILanguage;
  Russian: ILanguage;
  Location: ILocation;
  Links: string[];
  BannerUrl: any;
  mediaFiles: IMedia[];
}
