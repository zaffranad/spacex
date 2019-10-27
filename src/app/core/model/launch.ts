import { Rocket } from './rocket';

export class Launch {
  constructor(
    public name: string,
    public date: string,
    public details: string,
    public success: boolean,
    public missionPatch: string,
    public launchSite: string,
    public rocket: Rocket
  ) {

  }
}
