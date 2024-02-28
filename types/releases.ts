type ReleaseNote = { fieldId: number; value: string };

export type ReleaseFormat = {
  name: string;
  qty: string;
  descriptions: string[];
  text?: string;
};

export type ReleaseArtist = {
  name: string;
  anv: string;
  join: string;
  role: string;
  tracks: string;
  id: number;
  resourceUrl: string;
};

type ReleaseLabel = {
  name: string;
  catno: string;
  entityType: string;
  entityTypeName: string;
  id: number;
  resourceUrl: string;
};

type ReleaseFull = {
  id: number;
  instanceId: number;
  dateAdded: string;
  rating: number;
  basicInformation: {
    id: number;
    masterId: number;
    masterUrl: string;
    resourceUrl: string;
    thumb: string;
    coverImage: string;
    title: string;
    year: number;
    formats: ReleaseFormat[];
    artists: ReleaseArtist[];
    labels: ReleaseLabel[];
    genres: string[];
    styles: string[];
  };
  folderId: number;
  notes: ReleaseNote[];
};

export type Release = Pick<
  ReleaseFull,
  "instanceId" | "dateAdded" | "basicInformation" | "folderId"
>;

type Pagination = {
  page: number;
  pages: number;
  perPage: number;
  items: number;
  urls: {
    last: string;
    next: string;
  };
};

export type CollectionResponse = {
  releases: ReleaseFull[];
  pagination: Pagination;
};

export type CollectionOptions = {
  folder: number;
  sort: string;
  sortOrder: string;
  page: number;
};
