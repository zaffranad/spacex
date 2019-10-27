/* tslint:disable:variable-name */
export class SpacexApiLaunch {
  constructor(
    public mission_name: string,
    public launch_date_utc: string,
    public details: string,
    public launch_success: boolean,
    public links: Link,
    public launch_site: LaunchSite
  ) {

  }
}

class Link {
  constructor(
    public mission_patch: string
  ) {
  }
}

class LaunchSite {
  constructor(
    public site_name_long: string
  ) {
  }
}
