import { Launch } from '../model/launch';
import { Rocket } from '../model/rocket';
export class SpacexApiBuilder {
    static buildLaunches(spacexApiLaunches) {
        return spacexApiLaunches.map(l => this.buildLaunch(l));
    }
    static buildLaunch(spacexApiLaunch) {
        return new Launch(spacexApiLaunch.flight_number, spacexApiLaunch.mission_name, spacexApiLaunch.launch_date_utc, spacexApiLaunch.details, spacexApiLaunch.launch_success, spacexApiLaunch.links.mission_patch, spacexApiLaunch.launch_site.site_name_long, new Rocket(spacexApiLaunch.rocket.rocket_id, spacexApiLaunch.rocket.rocket_name));
    }
    static buildRocket(spacexApiRocket) {
        return new Rocket(spacexApiRocket.rocket_id, spacexApiRocket.rocket_name, spacexApiRocket.description, spacexApiRocket.flickr_images);
    }
}
//# sourceMappingURL=spacex-api-builder.js.map