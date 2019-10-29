import { Pipe, PipeTransform } from '@angular/core';
import { Launch } from '../../../model/launch';

export class LaunchFilter {
  public name: string;
  public anyText: string;
}

@Pipe({
  name: 'launchFilter', pure: false
})
export class LaunchFilterPipe implements PipeTransform {

  private static matchAnyText(filter: LaunchFilter, launch) {
    const result = filter.anyText && (launch.name.includes(filter.anyText) || (launch.details && launch.details.includes(filter.anyText)));
    return result;
  }

  private static matchName(filter: LaunchFilter, launch) {
    const result = filter.name && launch.name.includes(filter.name);
    return result;
  }

  transform(launches: Array<Launch>, filter: LaunchFilter): any {
    if (!launches || !filter || !filter.name && !filter.anyText) {
      return launches;
    }
    return launches.filter(launch =>
      LaunchFilterPipe.matchName(filter, launch)
      || LaunchFilterPipe.matchAnyText(filter, launch)
    );
  }
}
