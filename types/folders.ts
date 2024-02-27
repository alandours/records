export type FoldersResponse = {
  folders: Folder[];
};

export type Folder = {
  id: number;
  name: string;
  count: number;
  resource_url: string;
};
