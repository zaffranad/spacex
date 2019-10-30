/* tslint:disable:variable-name */
export interface SpacexApiLaunch {
  mission_name: string;
  launch_date_utc: string;
  details: string;
  launch_success: boolean;
  links: Link;
  launch_site: LaunchSite;
  rocket: SpacexApiRocket;
}

export interface SpacexApiRocket {
  rocket_id: string;
  rocket_name: string;
  description: string;
  flickr_images: Array<string>;
}

interface Link {
  mission_patch: string;
}

interface LaunchSite {
  site_name_long: string;
}
