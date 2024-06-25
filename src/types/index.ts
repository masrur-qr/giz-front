export interface ILanguage {
  Name: string;
  Description: string;
}

export interface ILocation {
  District: number;
  Village: string;
  Coordinates: any;
}

export interface IMedia {
  Id: string;
  Title: string;
  ImageUrl: string;
}

export interface INews {
  Id: string;
  Category: string;
  English: ILanguage;
  Tajik: ILanguage;
  Russian: ILanguage;
  Links: string[];
  BannerUrl: any;
  MediaFiles: IMedia[];
}

export interface IProject {
  Id: any;
  Category: string;
  English: ILanguage;
  Tajik: ILanguage;
  Russian: ILanguage;
  Location: ILocation;
  Links: string[];
  BannerUrl: any;
  MediaFiles: IMedia[];
}
