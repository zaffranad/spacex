import { SxApiLaunch, SxApiRocket } from './sx-api-launch';
import { Launch } from '../model/launch';
import { Rocket } from '../model/rocket';

export class SxApiBuilder {

  public static buildLaunches(sxApiLaunch: Array<SxApiLaunch>): Array<Launch> {
    return sxApiLaunch.map(l => this.buildLaunch(l));
  }

  public static buildLaunch(sxLaunch: SxApiLaunch): Launch {
    return new Launch(
      sxLaunch.flight_number,
      sxLaunch.mission_name,
      sxLaunch.launch_date_utc,
      sxLaunch.details,
      sxLaunch.launch_success,
      sxLaunch.links.mission_patch,
      sxLaunch.launch_site.site_name_long,
      new Rocket(
        sxLaunch.rocket.rocket_id,
        sxLaunch.rocket.rocket_name
      )
    );
  }

  public static buildRocket(sxRocket: SxApiRocket): Rocket {
    return new Rocket(
      sxRocket.rocket_id,
      sxRocket.rocket_name,
      sxRocket.description,
      sxRocket.flickr_images
    );
  }
}
