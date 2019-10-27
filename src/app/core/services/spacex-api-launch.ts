/* tslint:disable:variable-name */
export class SpacexApiLaunch {
  public mission_name: string;
  public launch_date_utc: string;
  public details: string;
  public launch_success: boolean;
  public links: Link;
  public launch_site: LaunchSite;
  public rocket: SpacexApiRocket;
}

export class SpacexApiRocket {
  public rocket_id: string;
  public rocket_name: string;
  public description: string;
  public flickr_images: Array<string>;
}

class Link {
  public mission_patch: string;
}

class LaunchSite {
  public site_name_long: string;
}
