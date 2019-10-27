import { SpacexApiLaunch, SpacexApiRocket } from './spacex-api-launch';
import { Launch } from '../model/launch';
import { Rocket } from '../model/rocket';

export class SpacexApiUtils {

  public static buildLaunches(spacexApiLaunches: Array<SpacexApiLaunch>): Array<Launch> {
    return spacexApiLaunches.map(l => this.buildLaunch(l));
  }

  public static buildLaunch(spacexApiLaunch: SpacexApiLaunch): Launch {
    return new Launch(
      spacexApiLaunch.mission_name,
      spacexApiLaunch.launch_date_utc,
      spacexApiLaunch.details,
      spacexApiLaunch.launch_success,
      spacexApiLaunch.links.mission_patch,
      spacexApiLaunch.launch_site.site_name_long,
      new Rocket(
        spacexApiLaunch.rocket.rocket_id,
        spacexApiLaunch.rocket.rocket_name
      )
    );
  }

  public static buildRocket(spacexApiRocket: SpacexApiRocket): Rocket {
    return new Rocket(
      spacexApiRocket.rocket_id,
      spacexApiRocket.rocket_name,
      spacexApiRocket.description,
      spacexApiRocket.flickr_images
    );
  }
}
