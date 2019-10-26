import {SpacexApiLaunch} from './spacex-api-launch';
import {Launch} from '../model/launch';

export class SpacexApiUtils {

  public static buildLaunches(spacexApiLaunches: Array<SpacexApiLaunch>): Array<Launch> {
    return spacexApiLaunches.map(l => this.buildLaunch(l));
  }


  public static buildLaunch(spacexApiLaunch: SpacexApiLaunch): Launch {
    return new Launch(
      spacexApiLaunch.mission_name,
      spacexApiLaunch.launch_date_utc,
      spacexApiLaunch.details,
      spacexApiLaunch.launch_success
    );
  }
}
