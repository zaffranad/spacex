/* tslint:disable:variable-name */
export interface SxApiLaunch {
  flight_number: string;
  mission_name: string;
  launch_date_utc: string;
  details: string;
  launch_success: boolean;
  links: SxLink;
  launch_site: SxLaunchSite;
  rocket: SxApiRocket;
}

export interface SxApiRocket {
  rocket_id: string;
  rocket_name: string;
  description: string;
  flickr_images: Array<string>;
}

interface SxLink {
  mission_patch: string;
}

interface SxLaunchSite {
  site_name_long: string;
}

export interface SxApiOptions {
  paginationOffset: number;
  paginationLimit: number;
}

export class SxApiResponse<T> {
  constructor(
    public total: number,
    public items: Array<T>
  ) {
  }
}
