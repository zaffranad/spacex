/* tslint:disable:variable-name */
export class SpacexApiLaunch {
  constructor(
    public mission_name: string,
    public launch_date_utc: string,
    public details: string,
    public launch_success: boolean
  ) {

  }
}
