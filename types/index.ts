type ReleaseNote = { field_id: number; value: string };

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
  resource_url: string;
};

type ReleaseLabel = {
  name: string;
  catno: string;
  entity_type: string;
  entity_type_name: string;
  id: number;
  resource_url: string;
};

type ReleaseFull = {
  id: number;
  instance_id: number;
  date_added: string;
  rating: number;
  basic_information: {
    id: number;
    master_id: number;
    master_url: string;
    resource_url: string;
    thumb: string;
    cover_image: string;
    title: string;
    year: number;
    formats: ReleaseFormat[];
    artists: ReleaseArtist[];
    labels: ReleaseLabel[];
    genres: string[];
    styles: string[];
  };
  folder_id: number;
  notes: ReleaseNote[];
};

export type Release = Pick<
  ReleaseFull,
  "instance_id" | "date_added" | "basic_information" | "folder_id"
>;

type Pagination = {
  page: number;
  pages: number;
  per_page: number;
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

export type FoldersResponse = {
  folders: Folder[];
};

export type Folder = {
  id: number;
  name: string;
  count: number;
  resource_url: string;
};
