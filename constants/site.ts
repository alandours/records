export const BASE_URL = "https://records.alandours.com";
export const SITE_NAME = "alansrecords";
export const SITE_DESCRIPTION = "Vinyl record collection";

export enum Environments {
  production = "production",
  staging = "staging",
  development = "development",
}

export const GTM_ID = process.env.NEXT_PUBLIC_GTM;
