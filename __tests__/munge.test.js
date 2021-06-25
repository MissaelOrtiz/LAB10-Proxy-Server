const { mungeLocation, mungeWeather, mungeReviews } = require('../lib/munge-utils');

require('dotenv').config();

describe('app routes', () => {
  describe('routes', () => {

    test('returns location data.', async() => {

      const expectation = {
        'formatted_query': 'Seattle, King County, Washington, USA',
        'latitude': '47.6038321',
        'longitude': '-122.3300624'
      };

      const data = [
        {
          'place_id': '235549103',
          'licence': 'https://locationiq.com/attribution',
          'osm_type': 'relation',
          'osm_id': '237385',
          'boundingbox': [
            '47.4810022',
            '47.7341357',
            '-122.459696',
            '-122.224433'
          ],
          'lat': '47.6038321',
          'lon': '-122.3300624',
          'display_name': 'Seattle, King County, Washington, USA',
          'class': 'place',
          'type': 'city',
          'importance': 0.782979173564379,
          'icon': 'https://locationiq.org/static/images/mapicons/poi_place_city.p.20.png'
        }];

      const expected = mungeLocation(data);

      expect(expected).toEqual(expectation);
    });

    test('returns weather data.', async() => {

      const expectation = [{ 'forecast': 'Scattered clouds', 'time': 'Thursday, June 24, 2021' }, { 'forecast': 'Few clouds', 'time': 'Friday, June 25, 2021' }, { 'forecast': 'Clear Sky', 'time': 'Saturday, June 26, 2021' }, { 'forecast': 
      'Clear Sky', 'time': 'Sunday, June 27, 2021' }, { 'forecast': 'Few clouds', 'time': 'Monday, June 28, 2021' }, { 'forecast': 'Few clouds', 'time': 'Tuesday, June 29, 2021' }, { 'forecast': 'Scattered clouds', 'time': 'Wednesday, June 30, 2021' }, { 'forecast': 'Scattered clouds', 'time': 'Thursday, July 1, 2021' }, { 'forecast': 'Broken clouds', 'time': 'Friday, July 2, 2021' }, { 'forecast': 'Overcast clouds', 'time': 'Saturday, July 3, 2021' }, { 'forecast': 'Few clouds', 'time': 'Sunday, July 4, 2021' }, { 'forecast': 'Few clouds', 'time': 'Monday, July 5, 2021' }, { 'forecast': 'Broken clouds', 'time': 'Tuesday, July 6, 2021' }, { 'forecast': 'Few clouds', 'time': 'Wednesday, July 7, 2021' }, { 'forecast': 'Few clouds', 'time': 'Thursday, July 8, 2021' }, { 'forecast': 'Clear Sky', 'time': 'Friday, July 9, 2021' }];
  
      const data = {
        'data': [
          {
            'moonrise_ts': 1624589453,
            'wind_cdir': 'SW',
            'rh': 37,
            'pres': 863.421,
            'high_temp': 29.5,
            'sunset_ts': 1624591890,
            'ozone': 314.417,
            'moon_phase': 0.99046,
            'wind_gust_spd': 10.2969,
            'snow_depth': 0,
            'clouds': 29,
            'ts': 1624518060,
            'sunrise_ts': 1624538014,
            'app_min_temp': 16.7,
            'wind_spd': 2.75016,
            'pop': 0,
            'wind_cdir_full': 'southwest',
            'slp': 1013.42,
            'moon_phase_lunation': 0.49,
            'valid_date': '2021-06-24',
            'app_max_temp': 27.8,
            'vis': 24.096,
            'dewpt': 7,
            'snow': 0,
            'uv': 0.715611,
            'weather': {
              'icon': 'c02d',
              'code': 802,
              'description': 'Scattered clouds'
            },
            'wind_dir': 216,
            'max_dhi': null,
            'clouds_hi': 4,
            'precip': 0,
            'low_temp': 16.9,
            'max_temp': 29.6,
            'moonset_ts': 1624540636,
            'datetime': '2021-06-24',
            'temp': 22.9,
            'min_temp': 16.7,
            'clouds_mid': 29,
            'clouds_low': 6
          },
          {
            'moonrise_ts': 1624680046,
            'wind_cdir': 'SSE',
            'rh': 36,
            'pres': 863.396,
            'high_temp': 31.2,
            'sunset_ts': 1624678294,
            'ozone': 315.917,
            'moon_phase': 0.951986,
            'wind_gust_spd': 7.59766,
            'snow_depth': 0,
            'clouds': 2,
            'ts': 1624604460,
            'sunrise_ts': 1624624434,
            'app_min_temp': 16.9,
            'wind_spd': 1.96665,
            'pop': 0,
            'wind_cdir_full': 'south-southeast',
            'slp': 1013.08,
            'moon_phase_lunation': 0.53,
            'valid_date': '2021-06-25',
            'app_max_temp': 29.1,
            'vis': 24.096,
            'dewpt': 6,
            'snow': 0,
            'uv': 10.4344,
            'weather': {
              'icon': 'c02d',
              'code': 801,
              'description': 'Few clouds'
            },
            'wind_dir': 156,
            'max_dhi': null,
            'clouds_hi': 0,
            'precip': 0,
            'low_temp': 17.3,
            'max_temp': 31.3,
            'moonset_ts': 1624631202,
            'datetime': '2021-06-25',
            'temp': 24.4,
            'min_temp': 16.9,
            'clouds_mid': 2,
            'clouds_low': 0
          },
          {
            'moonrise_ts': 1624770031,
            'wind_cdir': 'E',
            'rh': 29,
            'pres': 863.25,
            'high_temp': 31.7,
            'sunset_ts': 1624764697,
            'ozone': 302.229,
            'moon_phase': 0.887997,
            'wind_gust_spd': 5.29688,
            'snow_depth': 0,
            'clouds': 1,
            'ts': 1624690860,
            'sunrise_ts': 1624710855,
            'app_min_temp': 17.6,
            'wind_spd': 1.77739,
            'pop': 0,
            'wind_cdir_full': 'east',
            'slp': 1012.46,
            'moon_phase_lunation': 0.56,
            'valid_date': '2021-06-26',
            'app_max_temp': 29.7,
            'vis': 24.096,
            'dewpt': 6,
            'snow': 0,
            'uv': 10.3936,
            'weather': {
              'icon': 'c01d',
              'code': 800,
              'description': 'Clear Sky'
            },
            'wind_dir': 87,
            'max_dhi': null,
            'clouds_hi': 0,
            'precip': 0,
            'low_temp': 19.8,
            'max_temp': 31.8,
            'moonset_ts': 1624721906,
            'datetime': '2021-06-26',
            'temp': 26.1,
            'min_temp': 18.6,
            'clouds_mid': 0,
            'clouds_low': 0
          },
          {
            'moonrise_ts': 1624859351,
            'wind_cdir': 'S',
            'rh': 21,
            'pres': 839.125,
            'high_temp': 34,
            'sunset_ts': 1624851098,
            'ozone': 304.438,
            'moon_phase': 0.804917,
            'wind_gust_spd': 7.23828,
            'snow_depth': 0,
            'clouds': 0,
            'ts': 1624777260,
            'sunrise_ts': 1624797278,
            'app_min_temp': 20.5,
            'wind_spd': 3.46472,
            'pop': 0,
            'wind_cdir_full': 'south',
            'slp': 1009.65,
            'moon_phase_lunation': 0.59,
            'valid_date': '2021-06-27',
            'app_max_temp': 31.5,
            'vis': 24.128,
            'dewpt': 2.8,
            'snow': 0,
            'uv': 10.5189,
            'weather': {
              'icon': 'c01d',
              'code': 800,
              'description': 'Clear Sky'
            },
            'wind_dir': 173,
            'max_dhi': null,
            'clouds_hi': 0,
            'precip': 0,
            'low_temp': 21.5,
            'max_temp': 34,
            'moonset_ts': 1624812524,
            'datetime': '2021-06-27',
            'temp': 28.1,
            'min_temp': 21.1,
            'clouds_mid': 0,
            'clouds_low': 0
          },
          {
            'moonrise_ts': 1624948098,
            'wind_cdir': 'SSW',
            'rh': 21,
            'pres': 837.208,
            'high_temp': 36.5,
            'sunset_ts': 1624937497,
            'ozone': 299.74,
            'moon_phase': 0.709496,
            'wind_gust_spd': 9.09375,
            'snow_depth': 0,
            'clouds': 12,
            'ts': 1624863660,
            'sunrise_ts': 1624883702,
            'app_min_temp': 20.4,
            'wind_spd': 3.10109,
            'pop': 20,
            'wind_cdir_full': 'south-southwest',
            'slp': 1007.21,
            'moon_phase_lunation': 0.63,
            'valid_date': '2021-06-28',
            'app_max_temp': 33.7,
            'vis': 24.128,
            'dewpt': 2.9,
            'snow': 0,
            'uv': 10.5384,
            'weather': {
              'icon': 'c02d',
              'code': 801,
              'description': 'Few clouds'
            },
            'wind_dir': 196,
            'max_dhi': null,
            'clouds_hi': 0,
            'precip': 0.1875,
            'low_temp': 21.2,
            'max_temp': 36.6,
            'moonset_ts': 1624902949,
            'datetime': '2021-06-28',
            'temp': 28.5,
            'min_temp': 21.3,
            'clouds_mid': 12,
            'clouds_low': 0
          },
          {
            'moonrise_ts': 1624950022,
            'wind_cdir': 'SW',
            'rh': 26,
            'pres': 838.219,
            'high_temp': 36.2,
            'sunset_ts': 1625023894,
            'ozone': 301.125,
            'moon_phase': 0.607775,
            'wind_gust_spd': 12.3047,
            'snow_depth': 0,
            'clouds': 18,
            'ts': 1624950060,
            'sunrise_ts': 1624970128,
            'app_min_temp': 20.2,
            'wind_spd': 2.55017,
            'pop': 10,
            'wind_cdir_full': 'southwest',
            'slp': 1009.25,
            'moon_phase_lunation': 0.66,
            'valid_date': '2021-06-29',
            'app_max_temp': 32.9,
            'vis': 24.128,
            'dewpt': 4.1,
            'snow': 0,
            'uv': 9.03671,
            'weather': {
              'icon': 'c02d',
              'code': 801,
              'description': 'Few clouds'
            },
            'wind_dir': 224,
            'max_dhi': null,
            'clouds_hi': 14,
            'precip': 0.3125,
            'low_temp': 21,
            'max_temp': 36.4,
            'moonset_ts': 1624993175,
            'datetime': '2021-06-29',
            'temp': 25.9,
            'min_temp': 20.9,
            'clouds_mid': 4,
            'clouds_low': 0
          },
          {
            'moonrise_ts': 1625038062,
            'wind_cdir': 'SSW',
            'rh': 19,
            'pres': 838.188,
            'high_temp': 36.2,
            'sunset_ts': 1625110289,
            'ozone': 299.688,
            'moon_phase': 0.504671,
            'wind_gust_spd': 9.89844,
            'snow_depth': 0,
            'clouds': 24,
            'ts': 1625036460,
            'sunrise_ts': 1625056555,
            'app_min_temp': 19.9,
            'wind_spd': 2.59002,
            'pop': 0,
            'wind_cdir_full': 'south-southwest',
            'slp': 1008.31,
            'moon_phase_lunation': 0.69,
            'valid_date': '2021-06-30',
            'app_max_temp': 33.3,
            'vis': 24.128,
            'dewpt': 1.7,
            'snow': 0,
            'uv': 9.95294,
            'weather': {
              'icon': 'c02d',
              'code': 802,
              'description': 'Scattered clouds'
            },
            'wind_dir': 194,
            'max_dhi': null,
            'clouds_hi': 24,
            'precip': 0,
            'low_temp': 21.8,
            'max_temp': 36.2,
            'moonset_ts': 1625083243,
            'datetime': '2021-06-30',
            'temp': 28.5,
            'min_temp': 20.8,
            'clouds_mid': 1,
            'clouds_low': 0
          },
          {
            'moonrise_ts': 1625125931,
            'wind_cdir': 'S',
            'rh': 21,
            'pres': 836.688,
            'high_temp': 34.4,
            'sunset_ts': 1625196682,
            'ozone': 304.062,
            'moon_phase': 0.404032,
            'wind_gust_spd': 5.82031,
            'snow_depth': 0,
            'clouds': 37,
            'ts': 1625122860,
            'sunrise_ts': 1625142984,
            'app_min_temp': 20.7,
            'wind_spd': 2.32201,
            'pop': 0,
            'wind_cdir_full': 'south',
            'slp': 1006.75,
            'moon_phase_lunation': 0.73,
            'valid_date': '2021-07-01',
            'app_max_temp': 33.4,
            'vis': 24.128,
            'dewpt': 2.9,
            'snow': 0,
            'uv': 9.58399,
            'weather': {
              'icon': 'c02d',
              'code': 802,
              'description': 'Scattered clouds'
            },
            'wind_dir': 185,
            'max_dhi': null,
            'clouds_hi': 28,
            'precip': 0,
            'low_temp': 21.6,
            'max_temp': 36.4,
            'moonset_ts': 1625173218,
            'datetime': '2021-07-01',
            'temp': 28.4,
            'min_temp': 21.4,
            'clouds_mid': 22,
            'clouds_low': 0
          },
          {
            'moonrise_ts': 1625213719,
            'wind_cdir': 'SSW',
            'rh': 27,
            'pres': 836.812,
            'high_temp': 33.4,
            'sunset_ts': 1625283074,
            'ozone': 296,
            'moon_phase': 0.308933,
            'wind_gust_spd': 6.32422,
            'snow_depth': 0,
            'clouds': 49,
            'ts': 1625209260,
            'sunrise_ts': 1625229414,
            'app_min_temp': 20.7,
            'wind_spd': 3.24319,
            'pop': 10,
            'wind_cdir_full': 'south-southwest',
            'slp': 1007.12,
            'moon_phase_lunation': 0.76,
            'valid_date': '2021-07-02',
            'app_max_temp': 31.9,
            'vis': 24.128,
            'dewpt': 5.6,
            'snow': 0,
            'uv': 9.58213,
            'weather': {
              'icon': 'c03d',
              'code': 803,
              'description': 'Broken clouds'
            },
            'wind_dir': 206,
            'max_dhi': null,
            'clouds_hi': 35,
            'precip': 0.375,
            'low_temp': 20.4,
            'max_temp': 35.8,
            'moonset_ts': 1625263160,
            'datetime': '2021-07-02',
            'temp': 27.2,
            'min_temp': 21.2,
            'clouds_mid': 24,
            'clouds_low': 0
          },
          {
            'moonrise_ts': 1625301505,
            'wind_cdir': 'SW',
            'rh': 35,
            'pres': 840.188,
            'high_temp': 30.6,
            'sunset_ts': 1625369463,
            'ozone': 292.719,
            'moon_phase': 0.22205,
            'wind_gust_spd': 9.50781,
            'snow_depth': 0,
            'clouds': 71,
            'ts': 1625295660,
            'sunrise_ts': 1625315846,
            'app_min_temp': 19.7,
            'wind_spd': 2.36125,
            'pop': 15,
            'wind_cdir_full': 'southwest',
            'slp': 1011.69,
            'moon_phase_lunation': 0.8,
            'valid_date': '2021-07-03',
            'app_max_temp': 31.2,
            'vis': 24.128,
            'dewpt': 8.6,
            'snow': 0,
            'uv': 9.84887,
            'weather': {
              'icon': 'c04d',
              'code': 804,
              'description': 'Overcast clouds'
            },
            'wind_dir': 231,
            'max_dhi': null,
            'clouds_hi': 28,
            'precip': 0.4375,
            'low_temp': 20.5,
            'max_temp': 34.7,
            'moonset_ts': 1625353114,
            'datetime': '2021-07-03',
            'temp': 25.6,
            'min_temp': 20.2,
            'clouds_mid': 67,
            'clouds_low': 0
          },
          {
            'moonrise_ts': 1625389360,
            'wind_cdir': 'WSW',
            'rh': 37,
            'pres': 841.4,
            'high_temp': 31.2,
            'sunset_ts': 1625455850,
            'ozone': 286.65,
            'moon_phase': 0.145962,
            'wind_gust_spd': 2.11914,
            'snow_depth': 0,
            'clouds': 7,
            'ts': 1625382060,
            'sunrise_ts': 1625402278,
            'app_min_temp': 19.8,
            'wind_spd': 1.54962,
            'pop': 10,
            'wind_cdir_full': 'west-southwest',
            'slp': 1013.4,
            'moon_phase_lunation': 0.83,
            'valid_date': '2021-07-04',
            'app_max_temp': 28,
            'vis': 24.128,
            'dewpt': 8.4,
            'snow': 0,
            'uv': 8.03772,
            'weather': {
              'icon': 'c02d',
              'code': 801,
              'description': 'Few clouds'
            },
            'wind_dir': 237,
            'max_dhi': null,
            'clouds_hi': 5,
            'precip': 0.3125,
            'low_temp': 23.9,
            'max_temp': 30.7,
            'moonset_ts': 1625443097,
            'datetime': '2021-07-04',
            'temp': 24.2,
            'min_temp': 20.2,
            'clouds_mid': 6,
            'clouds_low': 0
          },
          {
            'moonrise_ts': 1625477359,
            'wind_cdir': 'NE',
            'rh': 25,
            'pres': 838,
            'high_temp': 32.3,
            'sunset_ts': 1625542236,
            'ozone': 286.5,
            'moon_phase': 0.0833038,
            'wind_gust_spd': 1.7168,
            'snow_depth': 0,
            'clouds': 7,
            'ts': 1625468460,
            'sunrise_ts': 1625488713,
            'app_min_temp': 24.1,
            'wind_spd': 1.14105,
            'pop': 0,
            'wind_cdir_full': 'northeast',
            'slp': 1008.5,
            'moon_phase_lunation': 0.86,
            'valid_date': '2021-07-05',
            'app_max_temp': 28.8,
            'vis': 24.128,
            'dewpt': 5.9,
            'snow': 0,
            'uv': 8.09272,
            'weather': {
              'icon': 'c02d',
              'code': 801,
              'description': 'Few clouds'
            },
            'wind_dir': 45,
            'max_dhi': null,
            'clouds_hi': 0,
            'precip': 0,
            'low_temp': 26.1,
            'max_temp': 31,
            'moonset_ts': 1625533088,
            'datetime': '2021-07-05',
            'temp': 27.7,
            'min_temp': 21,
            'clouds_mid': 7,
            'clouds_low': 0
          },
          {
            'moonrise_ts': 1625565583,
            'wind_cdir': 'SSE',
            'rh': 33,
            'pres': 838,
            'high_temp': 32.3,
            'sunset_ts': 1625628619,
            'ozone': 289.25,
            'moon_phase': 0.0833038,
            'wind_gust_spd': 3.19922,
            'snow_depth': 0,
            'clouds': 51,
            'ts': 1625554860,
            'sunrise_ts': 1625575148,
            'app_min_temp': 23.4,
            'wind_spd': 2.38525,
            'pop': 20,
            'wind_cdir_full': 'south-southeast',
            'slp': 1008.75,
            'moon_phase_lunation': 0.9,
            'valid_date': '2021-07-06',
            'app_max_temp': 28.5,
            'vis': 24.128,
            'dewpt': 8.7,
            'snow': 0,
            'uv': 7.9311,
            'weather': {
              'icon': 'c03d',
              'code': 803,
              'description': 'Broken clouds'
            },
            'wind_dir': 152,
            'max_dhi': null,
            'clouds_hi': 34,
            'precip': 0.1875,
            'low_temp': 26.1,
            'max_temp': 30.1,
            'moonset_ts': 1625619488,
            'datetime': '2021-07-06',
            'temp': 27,
            'min_temp': 22.5,
            'clouds_mid': 45,
            'clouds_low': 0
          },
          {
            'moonrise_ts': 1625654119,
            'wind_cdir': 'SE',
            'rh': 25,
            'pres': 839.75,
            'high_temp': 31.1,
            'sunset_ts': 1625715001,
            'ozone': 292.5,
            'moon_phase': 0.0367205,
            'wind_gust_spd': 3,
            'snow_depth': 0,
            'clouds': 3,
            'ts': 1625641260,
            'sunrise_ts': 1625661585,
            'app_min_temp': 23.6,
            'wind_spd': 2.33318,
            'pop': 0,
            'wind_cdir_full': 'southeast',
            'slp': 1010.5,
            'moon_phase_lunation': 0.93,
            'valid_date': '2021-07-07',
            'app_max_temp': 28.3,
            'vis': 24.128,
            'dewpt': 5.2,
            'snow': 0,
            'uv': 7.77017,
            'weather': {
              'icon': 'c02d',
              'code': 801,
              'description': 'Few clouds'
            },
            'wind_dir': 136,
            'max_dhi': null,
            'clouds_hi': 0,
            'precip': 0,
            'low_temp': 21,
            'max_temp': 31.1,
            'moonset_ts': 1625709413,
            'datetime': '2021-07-07',
            'temp': 27.2,
            'min_temp': 21,
            'clouds_mid': 3,
            'clouds_low': 0
          },
          {
            'moonrise_ts': 1625743043,
            'wind_cdir': 'SSE',
            'rh': 19,
            'pres': 840.25,
            'high_temp': 35.4,
            'sunset_ts': 1625801381,
            'ozone': 291.5,
            'moon_phase': 0.00863301,
            'wind_gust_spd': 2.20117,
            'snow_depth': 0,
            'clouds': 2,
            'ts': 1625727660,
            'sunrise_ts': 1625748023,
            'app_min_temp': 25.4,
            'wind_spd': 1.67727,
            'pop': 0,
            'wind_cdir_full': 'south-southeast',
            'slp': 1011,
            'moon_phase_lunation': 0.96,
            'valid_date': '2021-07-08',
            'app_max_temp': 29.1,
            'vis': 24.128,
            'dewpt': 2.3,
            'snow': 0,
            'uv': 8.02408,
            'weather': {
              'icon': 'c02d',
              'code': 801,
              'description': 'Few clouds'
            },
            'wind_dir': 159,
            'max_dhi': null,
            'clouds_hi': 0,
            'precip': 0,
            'low_temp': 23.6,
            'max_temp': 35.4,
            'moonset_ts': 1625799162,
            'datetime': '2021-07-08',
            'temp': 28.6,
            'min_temp': 23.6,
            'clouds_mid': 2,
            'clouds_low': 0
          },
          {
            'moonrise_ts': 1625832399,
            'wind_cdir': 'SE',
            'rh': 17,
            'pres': 838.75,
            'high_temp': 33.8,
            'sunset_ts': 1625887758,
            'ozone': 290.375,
            'moon_phase': 0.000915778,
            'wind_gust_spd': 4.10547,
            'snow_depth': 0,
            'clouds': 0,
            'ts': 1625814060,
            'sunrise_ts': 1625834462,
            'app_min_temp': 25.2,
            'wind_spd': 2.7634,
            'pop': 0,
            'wind_cdir_full': 'southeast',
            'slp': 1008.75,
            'moon_phase_lunation': 1,
            'valid_date': '2021-07-09',
            'app_max_temp': 30,
            'vis': 24.128,
            'dewpt': 1.3,
            'snow': 0,
            'uv': 7.97988,
            'weather': {
              'icon': 'c01d',
              'code': 800,
              'description': 'Clear Sky'
            },
            'wind_dir': 131,
            'max_dhi': null,
            'clouds_hi': 0,
            'precip': 0,
            'low_temp': 21.8,
            'max_temp': 33.8,
            'moonset_ts': 1625888623,
            'datetime': '2021-07-09',
            'temp': 29.2,
            'min_temp': 21.8,
            'clouds_mid': 0,
            'clouds_low': 0
          }
        ],
        'city_name': 'Reno',
        'lon': '-119.8138',
        'timezone': 'America/Los_Angeles',
        'lat': '39.52963',
        'country_code': 'US',
        'state_code': 'NV'
      };
  
      const expected = mungeWeather(data);
  
      expect(expected).toEqual(expectation);
    });

    test('returns review data.', async() => {

      const expectation = [
        {
          'name': 'Peg\'s Glorified Ham N Eggs',
          'image_url': 'https://s3-media2.fl.yelpcdn.com/bphoto/IonlpEV-bZ9L5-j8MN1Wtg/o.jpg',
          'price': '$$',
          'rating': 4.5,
          'url': 'https://www.yelp.com/biz/pegs-glorified-ham-n-eggs-reno-8?adjust_creative=ERM3qoa4p_9L2F9YIlqj0Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=ERM3qoa4p_9L2F9YIlqj0Q'
        },
        {
          'name': 'Kwok\'s Bistro',
          'image_url': 'https://s3-media2.fl.yelpcdn.com/bphoto/hzl3iGkOGc4OTL55B9sinQ/o.jpg',
          'price': '$$',
          'rating': 4.5,
          'url': 'https://www.yelp.com/biz/kwoks-bistro-reno?adjust_creative=ERM3qoa4p_9L2F9YIlqj0Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=ERM3qoa4p_9L2F9YIlqj0Q'
        },
        {
          'name': 'Sabrina\'s West Street Kitchen',
          'image_url': 'https://s3-media3.fl.yelpcdn.com/bphoto/00sg8lOb9n7rH6opYTXVvA/o.jpg',
          'price': '$$',
          'rating': 4.5,
          'url': 'https://www.yelp.com/biz/sabrinas-west-street-kitchen-reno?adjust_creative=ERM3qoa4p_9L2F9YIlqj0Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=ERM3qoa4p_9L2F9YIlqj0Q'
        },
        {
          'name': 'Great Full Gardens-Midtown',
          'image_url': 'https://s3-media1.fl.yelpcdn.com/bphoto/qVTVe0Pd4caIYwwp7r6imw/o.jpg',
          'price': '$$',
          'rating': 4.5,
          'url': 'https://www.yelp.com/biz/great-full-gardens-midtown-reno-3?adjust_creative=ERM3qoa4p_9L2F9YIlqj0Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=ERM3qoa4p_9L2F9YIlqj0Q'
        },
        {
          'name': 'Wild River Grille',
          'image_url': 'https://s3-media3.fl.yelpcdn.com/bphoto/B91FTv8tRrW8DbSj-iakhw/  o.jpg',
          'price': '$$',
          'rating': 4,
          'url': 'https://www.yelp.com/biz/wild-river-grille-reno?adjust_creative=ERM3qoa4p_9L2F9YIlqj0Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=ERM3qoa4p_9L2F9YIlqj0Q'
        },
        {
          'name': 'Two Chicks',
          'image_url': 'https://s3-media3.fl.yelpcdn.com/bphoto/JYXl_GPxYvlKBrjKfHXBdg/o.jpg',
          'price': '$$',
          'rating': 4,
          'url': 'https://www.yelp.com/biz/two-chicks-reno?adjust_creative=ERM3qoa4p_9L2F9YIlqj0Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=ERM3qoa4p_9L2F9YIlqj0Q'
        },
        {
          'name': 'The Depot Craft Brewery Distillery',
          'image_url': 'https://s3-media2.fl.yelpcdn.com/bphoto/q4fXuabfAJCFD1me9jamqg/o.jpg',
          'price': '$$',
          'rating': 4,
          'url': 'https://www.yelp.com/biz/the-depot-craft-brewery-distillery-reno-2?adjust_creative=ERM3qoa4p_9L2F9YIlqj0Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=ERM3qoa4p_9L2F9YIlqj0Q'
        },
        {
          'name': 'Arario Midtown',
          'image_url': 'https://s3-media3.fl.yelpcdn.com/bphoto/_Qe0Iqm7N0Vo7Tb1QtbtUA/o.jpg',
          'price': '$$',
          'rating': 4.5,
          'url': 'https://www.yelp.com/biz/arario-midtown-reno?adjust_creative=ERM3qoa4p_9L2F9YIlqj0Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=ERM3qoa4p_9L2F9YIlqj0Q'
        },
        {
          'name': 'Sierra St Kitchen & Cocktails',
          'image_url': 'https://s3-media2.fl.yelpcdn.com/bphoto/dalcAKp5BjNnZToXhnTbww/o.jpg',
          'price': '$$',
          'rating': 4.5,
          'url': 'https://www.yelp.com/biz/sierra-st-kitchen-and-cocktails-reno-2?adjust_creative=ERM3qoa4p_9L2F9YIlqj0Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=ERM3qoa4p_9L2F9YIlqj0Q'
        },
        {
          'name': '101 Taiwanese Cuisine',
          'image_url': 'https://s3-media2.fl.yelpcdn.com/bphoto/mjW_q8YAqWtO3TxSyf66xA/o.jpg',
          'price': '$$',
          'rating': 4,
          'url': 'https://www.yelp.com/biz/101-taiwanese-cuisine-reno?adjust_creative=ERM3qoa4p_9L2F9YIlqj0Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=ERM3qoa4p_9L2F9YIlqj0Q'
        },
        {
          'name': 'Bab Café - Reno',
          'image_url': 'https://s3-media4.fl.yelpcdn.com/bphoto/_XKIhTPlb5GMKPOqfHEpcA/o.jpg',
          'price': '$$',
          'rating': 4.5,
          'url': 'https://www.yelp.com/biz/bab-caf%C3%A9-reno-reno-5?adjust_creative=ERM3qoa4p_9L2F9YIlqj0Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=ERM3qoa4p_9L2F9YIlqj0Q'
        },
        {
          'name': 'Pine State Biscuits Reno',
          'image_url': 'https://s3-media2.fl.yelpcdn.com/bphoto/yQUWxs04ndO9lIP78XYNEg/o.jpg',
          'price': '$$',
          'rating': 4.5,
          'url': 'https://www.yelp.com/biz/pine-state-biscuits-reno-reno?adjust_creative=ERM3qoa4p_9L2F9YIlqj0Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=ERM3qoa4p_9L2F9YIlqj0Q'
        },
        {
          'name': 'The Daily Bagel',
          'image_url': 'https://s3-media4.fl.yelpcdn.com/bphoto/JUwv6BBi2lTOXBMW3G0MUA/o.jpg',
          'price': '$',
          'rating': 4.5,
          'url': 'https://www.yelp.com/biz/the-daily-bagel-reno-2?adjust_creative=ERM3qoa4p_9L2F9YIlqj0Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=ERM3qoa4p_9L2F9YIlqj0Q'
        },
        {
          'name': 'Brothers Barbecue',
          'image_url': 'https://s3-media2.fl.yelpcdn.com/bphoto/aA4954iec64g9pQZ2d-siw/o.jpg',
          'price': '$$',
          'rating': 4.5,
          'url': 'https://www.yelp.com/biz/brothers-barbecue-reno?adjust_creative=ERM3qoa4p_9L2F9YIlqj0Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=ERM3qoa4p_9L2F9YIlqj0Q'
        },
        {
          'name': 'Roxy',
          'image_url': 'https://s3-media4.fl.yelpcdn.com/bphoto/mqWPk7Q8ROowE9-uF7k1kw/o.jpg',
          'price': '$$$',
          'rating': 4,
          'url': 'https://www.yelp.com/biz/roxy-reno-4?adjust_creative=ERM3qoa4p_9L2F9YIlqj0Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=ERM3qoa4p_9L2F9YIlqj0Q'
        },
        {
          'name': 'Süp',
          'image_url': 'https://s3-media2.fl.yelpcdn.com/bphoto/j2EnrPi7U5X-WlJUQGTUYg/o.jpg',
          'price': '$$',
          'rating': 4.5,
          'url': 'https://www.yelp.com/biz/s%C3%BCp-reno-2?adjust_creative=ERM3qoa4p_9L2F9YIlqj0Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=ERM3qoa4p_9L2F9YIlqj0Q'
        },
        {
          'name': 'Ichiban Japanese Steak House',
          'image_url': 'https://s3-media1.fl.yelpcdn.com/bphoto/JPDNk-h9sHbU6OuIv8kVFw/o.jpg',
          'price': '$$$',
          'rating': 4,
          'url': 'https://www.yelp.com/biz/ichiban-japanese-steak-house-reno?adjust_creative=ERM3qoa4p_9L2F9YIlqj0Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=ERM3qoa4p_9L2F9YIlqj0Q'
        },
        {
          'name': 'Liberty Food & Wine Exchange',
          'image_url': 'https://s3-media4.fl.yelpcdn.com/bphoto/OsxGUN2AzdadUp8biuxojQ/o.jpg',
          'price': '$$',
          'rating': 4.5,
          'url': 'https://www.yelp.com/biz/liberty-food-and-wine-exchange-reno?adjust_creative=ERM3qoa4p_9L2F9YIlqj0Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=ERM3qoa4p_9L2F9YIlqj0Q'
        },
        {
          'name': 'Laughing Planet Cafe',
          'image_url': 'https://s3-media2.fl.yelpcdn.com/bphoto/KdbJ5k7gEaswF7-UesYv9g/o.jpg',
          'price': '$$',
          'rating': 4.5,
          'url': 'https://www.yelp.com/biz/laughing-planet-cafe-reno?adjust_creative=ERM3qoa4p_9L2F9YIlqj0Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=ERM3qoa4p_9L2F9YIlqj0Q'
        },
        {
          'name': 'Homage',
          'image_url': 'https://s3-media3.fl.yelpcdn.com/bphoto/ILfvg_ZZLFNarDzATeEssg/o.jpg',
          'price': '$$',
          'rating': 4,
          'url': 'https://www.yelp.com/biz/homage-reno-2?adjust_creative=ERM3qoa4p_9L2F9YIlqj0Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=ERM3qoa4p_9L2F9YIlqj0Q'
        }
      ];
  
      const data = {
        businesses: [
          {
            'id': 'J0joPXxmN-_9Lzafspqdbw',
            'alias': 'pegs-glorified-ham-n-eggs-reno-8',
            'name': 'Peg\'s Glorified Ham N Eggs',
            'image_url': 'https://s3-media2.fl.yelpcdn.com/bphoto/IonlpEV-bZ9L5-j8MN1Wtg/o.jpg',
            'is_closed': false,
            'url': 'https://www.yelp.com/biz/pegs-glorified-ham-n-eggs-reno-8?adjust_creative=ERM3qoa4p_9L2F9YIlqj0Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=ERM3qoa4p_9L2F9YIlqj0Q',
            'review_count': 2380,
            'categories': [
              {
                'alias': 'breakfast_brunch',
                'title': 'Breakfast & Brunch'
              },
              {
                'alias': 'tradamerican',
                'title': 'American (Traditional)'
              },
              {
                'alias': 'hawaiian',
                'title': 'Hawaiian'
              }
            ],
            'rating': 4.5,
            'coordinates': {
              'latitude': 39.5210129290505,
              'longitude': -119.811952152115
            },
            'transactions': [
              'delivery'
            ],
            'price': '$$',
            'location': {
              'address1': '420 S Sierra St',
              'address2': '',
              'address3': '',
              'city': 'Reno',
              'zip_code': '89501',
              'country': 'US',
              'state': 'NV',
              'display_address': [
                '420 S Sierra St',
                'Reno, NV 89501'
              ]
            },
            'phone': '+17753292600',
            'display_phone': '(775) 329-2600',
            'distance': 971.1926492047172
          },
          {
            'id': 'YCHBSWYErsKAI9AXeoPxhQ',
            'alias': 'sabrinas-west-street-kitchen-reno',
            'name': 'Sabrina\'s West Street Kitchen',
            'image_url': 'https://s3-media3.fl.yelpcdn.com/bphoto/00sg8lOb9n7rH6opYTXVvA/o.jpg',
            'is_closed': false,
            'url': 'https://www.yelp.com/biz/sabrinas-west-street-kitchen-reno?adjust_creative=ERM3qoa4p_9L2F9YIlqj0Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=ERM3qoa4p_9L2F9YIlqj0Q',
            'review_count': 543,
            'categories': [
              {
                'alias': 'salad',
                'title': 'Salad'
              },
              {
                'alias': 'sandwiches',
                'title': 'Sandwiches'
              },
              {
                'alias': 'tacos',
                'title': 'Tacos'
              }
            ],
            'rating': 4.5,
            'coordinates': {
              'latitude': 39.52593,
              'longitude': -119.81552
            },
            'transactions': [
              'delivery'
            ],
            'price': '$$',
            'location': {
              'address1': '138 West St',
              'address2': '',
              'address3': null,
              'city': 'Reno',
              'zip_code': '89501',
              'country': 'US',
              'state': 'NV',
              'display_address': [
                '138 West St',
                'Reno, NV 89501'
              ]
            },
            'phone': '+17756839378',
            'display_phone': '(775) 683-9378',
            'distance': 431.812450342339
          },
          {
            'id': 'I_mCFePUG2MGuH-zuws7bA',
            'alias': 'great-full-gardens-midtown-reno-3',
            'name': 'Great Full Gardens-Midtown',
            'image_url': 'https://s3-media1.fl.yelpcdn.com/bphoto/qVTVe0Pd4caIYwwp7r6imw/o.jpg',
            'is_closed': false,
            'url': 'https://www.yelp.com/biz/great-full-gardens-midtown-reno-3?adjust_creative=ERM3qoa4p_9L2F9YIlqj0Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=ERM3qoa4p_9L2F9YIlqj0Q',
            'review_count': 1167,
            'categories': [
              {
                'alias': 'breakfast_brunch',
                'title': 'Breakfast & Brunch'
              },
              {
                'alias': 'tradamerican',
                'title': 'American (Traditional)'
              }
            ],
            'rating': 4.5,
            'coordinates': {
              'latitude': 39.5190569636443,
              'longitude': -119.81033582209
            },
            'transactions': [
              'delivery'
            ],
            'price': '$$',
            'location': {
              'address1': '555 S Virginia St',
              'address2': 'Ste 107',
              'address3': '',
              'city': 'Reno',
              'zip_code': '89501',
              'country': 'US',
              'state': 'NV',
              'display_address': [
                '555 S Virginia St',
                'Ste 107',
                'Reno, NV 89501'
              ]
            },
            'phone': '+17753242013',
            'display_phone': '(775) 324-2013',
            'distance': 1212.6315155118987
          },
          {
            'id': 'lEi0T3m96A2NXXDSn7569A',
            'alias': 'wild-river-grille-reno',
            'name': 'Wild River Grille',
            'image_url': 'https://s3-media3.fl.yelpcdn.com/bphoto/B91FTv8tRrW8DbSj-iakhw/o.jpg',
            'is_closed': false,
            'url': 'https://www.yelp.com/biz/wild-river-grille-reno?adjust_creative=ERM3qoa4p_9L2F9YIlqj0Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=ERM3qoa4p_9L2F9YIlqj0Q',
            'review_count': 1195,
            'categories': [
              {
                'alias': 'newamerican',
                'title': 'American (New)'
              },
              {
                'alias': 'bars',
                'title': 'Bars'
              },
              {
                'alias': 'steak',
                'title': 'Steakhouses'
              }
            ],
            'rating': 4.0,
            'coordinates': {
              'latitude': 39.52443,
              'longitude': -119.81264
            },
            'transactions': [
              'delivery'
            ],
            'price': '$$',
            'location': {
              'address1': '17 S Virginia St',
              'address2': 'Ste 180',
              'address3': '',
              'city': 'Reno',
              'zip_code': '89501',
              'country': 'US',
              'state': 'NV',
              'display_address': [
                '17 S Virginia St',
                'Ste 180',
                'Reno, NV 89501'
              ]
            },
            'phone': '+17752847455',
            'display_phone': '(775) 284-7455',
            'distance': 574.1430668171223
          },
          {
            'id': 'Gb5nFcTgOBWeMrmCIbxqJA',
            'alias': 'two-chicks-reno',
            'name': 'Two Chicks',
            'image_url': 'https://s3-media3.fl.yelpcdn.com/bphoto/JYXl_GPxYvlKBrjKfHXBdg/o.jpg',
            'is_closed': false,
            'url': 'https://www.yelp.com/biz/two-chicks-reno?adjust_creative=ERM3qoa4p_9L2F9YIlqj0Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=ERM3qoa4p_9L2F9YIlqj0Q',
            'review_count': 1362,
            'categories': [
              {
                'alias': 'breakfast_brunch',
                'title': 'Breakfast & Brunch'
              }
            ],
            'rating': 4.0,
            'coordinates': {
              'latitude': 39.5186223455261,
              'longitude': -119.80889104841
            },
            'transactions': [
              'delivery'
            ],
            'price': '$$',
            'location': {
              'address1': '752 S Virginia St',
              'address2': '',
              'address3': '',
              'city': 'Reno',
              'zip_code': '89501',
              'country': 'US',
              'state': 'NV',
              'display_address': [
                '752 S Virginia St',
                'Reno, NV 89501'
              ]
            },
            'phone': '+17753230600',
            'display_phone': '(775) 323-0600',
            'distance': 1294.3879298179274
          },
          {
            'id': 'TDKBPcViJQDMrdUm6a9XZA',
            'alias': 'the-depot-craft-brewery-distillery-reno-2',
            'name': 'The Depot Craft Brewery Distillery',
            'image_url': 'https://s3-media2.fl.yelpcdn.com/bphoto/q4fXuabfAJCFD1me9jamqg/o.jpg',
            'is_closed': false,
            'url': 'https://www.yelp.com/biz/the-depot-craft-brewery-distillery-reno-2?adjust_creative=ERM3qoa4p_9L2F9YIlqj0Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=ERM3qoa4p_9L2F9YIlqj0Q',
            'review_count': 1189,
            'categories': [
              {
                'alias': 'breweries',
                'title': 'Breweries'
              },
              {
                'alias': 'distilleries',
                'title': 'Distilleries'
              },
              {
                'alias': 'gastropubs',
                'title': 'Gastropubs'
              }
            ],
            'rating': 4.0,
            'coordinates': {
              'latitude': 39.53108,
              'longitude': -119.80955
            },
            'transactions': [
              'restaurant_reservation',
              'delivery'
            ],
            'price': '$$',
            'location': {
              'address1': '325 E 4th St',
              'address2': '',
              'address3': '',
              'city': 'Reno',
              'zip_code': '89512',
              'country': 'US',
              'state': 'NV',
              'display_address': [
                '325 E 4th St',
                'Reno, NV 89512'
              ]
            },
            'phone': '+17757374330',
            'display_phone': '(775) 737-4330',
            'distance': 394.48180902153695
          },
          {
            'id': 'IxlIgLbIbynzJdzeqO860Q',
            'alias': 'arario-midtown-reno',
            'name': 'Arario Midtown',
            'image_url': 'https://s3-media3.fl.yelpcdn.com/bphoto/_Qe0Iqm7N0Vo7Tb1QtbtUA/o.jpg',
            'is_closed': false,
            'url': 'https://www.yelp.com/biz/arario-midtown-reno?adjust_creative=ERM3qoa4p_9L2F9YIlqj0Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=ERM3qoa4p_9L2F9YIlqj0Q',
            'review_count': 509,
            'categories': [
              {
                'alias': 'korean',
                'title': 'Korean'
              },
              {
                'alias': 'gluten_free',
                'title': 'Gluten-Free'
              },
              {
                'alias': 'cocktailbars',
                'title': 'Cocktail Bars'
              }
            ],
            'rating': 4.5,
            'coordinates': {
              'latitude': 39.51803674412,
              'longitude': -119.808390294355
            },
            'transactions': [
              'delivery'
            ],
            'price': '$$',
            'location': {
              'address1': '777 S Center St',
              'address2': 'Ste 200',
              'address3': '',
              'city': 'Reno',
              'zip_code': '89501',
              'country': 'US',
              'state': 'NV',
              'display_address': [
                '777 S Center St',
                'Ste 200',
                'Reno, NV 89501'
              ]
            },
            'phone': '+17758708202',
            'display_phone': '(775) 870-8202',
            'distance': 1370.072018178509
          },
          {
            'id': 'Hh8jUR0mtVXkAnv8XDZjyA',
            'alias': 'sierra-st-kitchen-and-cocktails-reno-2',
            'name': 'Sierra St Kitchen & Cocktails',
            'image_url': 'https://s3-media2.fl.yelpcdn.com/bphoto/dalcAKp5BjNnZToXhnTbww/o.jpg',
            'is_closed': false,
            'url': 'https://www.yelp.com/biz/sierra-st-kitchen-and-cocktails-reno-2?adjust_creative=ERM3qoa4p_9L2F9YIlqj0Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=ERM3qoa4p_9L2F9YIlqj0Q',
            'review_count': 582,
            'categories': [
              {
                'alias': 'tapasmallplates',
                'title': 'Tapas/Small Plates'
              },
              {
                'alias': 'wine_bars',
                'title': 'Wine Bars'
              },
              {
                'alias': 'newamerican',
                'title': 'American (New)'
              }
            ],
            'rating': 4.5,
            'coordinates': {
              'latitude': 39.52539,
              'longitude': -119.81361
            },
            'transactions': [
              'restaurant_reservation',
              'pickup',
              'delivery'
            ],
            'price': '$$',
            'location': {
              'address1': '50 North Sierra St',
              'address2': 'Ste 103',
              'address3': '',
              'city': 'Reno',
              'zip_code': '89501',
              'country': 'US',
              'state': 'NV',
              'display_address': [
                '50 North Sierra St',
                'Ste 103',
                'Reno, NV 89501'
              ]
            },
            'phone': '+17756866669',
            'display_phone': '(775) 686-6669',
            'distance': 474.66063596254304
          },
          {
            'id': 'mcr1lAEdvGLMJhuPwI3I2A',
            'alias': '101-taiwanese-cuisine-reno',
            'name': '101 Taiwanese Cuisine',
            'image_url': 'https://s3-media2.fl.yelpcdn.com/bphoto/mjW_q8YAqWtO3TxSyf66xA/o.jpg',
            'is_closed': false,
            'url': 'https://www.yelp.com/biz/101-taiwanese-cuisine-reno?adjust_creative=ERM3qoa4p_9L2F9YIlqj0Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=ERM3qoa4p_9L2F9YIlqj0Q',
            'review_count': 1090,
            'categories': [
              {
                'alias': 'chinese',
                'title': 'Chinese'
              },
              {
                'alias': 'taiwanese',
                'title': 'Taiwanese'
              },
              {
                'alias': 'bubbletea',
                'title': 'Bubble Tea'
              }
            ],
            'rating': 4.0,
            'coordinates': {
              'latitude': 39.5298674133371,
              'longitude': -119.820172809245
            },
            'transactions': [
              'pickup',
              'delivery'
            ],
            'price': '$$',
            'location': {
              'address1': '400 W 5th St',
              'address2': 'Ste 104',
              'address3': '',
              'city': 'Reno',
              'zip_code': '89503',
              'country': 'US',
              'state': 'NV',
              'display_address': [
                '400 W 5th St',
                'Ste 104',
                'Reno, NV 89503'
              ]
            },
            'phone': '+17756576144',
            'display_phone': '(775) 657-6144',
            'distance': 547.1942100247246
          },
          {
            'id': 'cBp1fn2LXpSHe4VbTXLYEw',
            'alias': 'bab-café-reno-reno-5',
            'name': 'Bab Café - Reno',
            'image_url': 'https://s3-media4.fl.yelpcdn.com/bphoto/_XKIhTPlb5GMKPOqfHEpcA/o.jpg',
            'is_closed': false,
            'url': 'https://www.yelp.com/biz/bab-caf%C3%A9-reno-reno-5?adjust_creative=ERM3qoa4p_9L2F9YIlqj0Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=ERM3qoa4p_9L2F9YIlqj0Q',
            'review_count': 434,
            'categories': [
              {
                'alias': 'korean',
                'title': 'Korean'
              },
              {
                'alias': 'chicken_wings',
                'title': 'Chicken Wings'
              }
            ],
            'rating': 4.5,
            'coordinates': {
              'latitude': 39.528196,
              'longitude': -119.817163
            },
            'transactions': [
              'pickup',
              'delivery'
            ],
            'price': '$$',
            'location': {
              'address1': '303 W 3rd St',
              'address2': 'Ste 130',
              'address3': null,
              'city': 'Reno',
              'zip_code': '89501',
              'country': 'US',
              'state': 'NV',
              'display_address': [
                '303 W 3rd St',
                'Ste 130',
                'Reno, NV 89501'
              ]
            },
            'phone': '+17755023018',
            'display_phone': '(775) 502-3018',
            'distance': 317.56036150878936
          },
          {
            'id': 'Rb9QIj-NyRn_giOBN991YA',
            'alias': 'pine-state-biscuits-reno-reno',
            'name': 'Pine State Biscuits Reno',
            'image_url': 'https://s3-media2.fl.yelpcdn.com/bphoto/yQUWxs04ndO9lIP78XYNEg/o.jpg',
            'is_closed': false,
            'url': 'https://www.yelp.com/biz/pine-state-biscuits-reno-reno?adjust_creative=ERM3qoa4p_9L2F9YIlqj0Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=ERM3qoa4p_9L2F9YIlqj0Q',
            'review_count': 741,
            'categories': [
              {
                'alias': 'breakfast_brunch',
                'title': 'Breakfast & Brunch'
              },
              {
                'alias': 'southern',
                'title': 'Southern'
              },
              {
                'alias': 'comfortfood',
                'title': 'Comfort Food'
              }
            ],
            'rating': 4.5,
            'coordinates': {
              'latitude': 39.52351,
              'longitude': -119.81011
            },
            'transactions': [
              'pickup',
              'delivery'
            ],
            'price': '$$',
            'location': {
              'address1': '200 S Center St',
              'address2': null,
              'address3': '',
              'city': 'Reno',
              'zip_code': '89501',
              'country': 'US',
              'state': 'NV',
              'display_address': [
                '200 S Center St',
                'Reno, NV 89501'
              ]
            },
            'phone': '+17754322464',
            'display_phone': '(775) 432-2464',
            'distance': 750.3005410442358
          },
          {
            'id': 'Ee-V8jWifZDvRyFrSW5LIw',
            'alias': 'the-daily-bagel-reno-2',
            'name': 'The Daily Bagel',
            'image_url': 'https://s3-media4.fl.yelpcdn.com/bphoto/JUwv6BBi2lTOXBMW3G0MUA/o.jpg',
            'is_closed': false,
            'url': 'https://www.yelp.com/biz/the-daily-bagel-reno-2?adjust_creative=ERM3qoa4p_9L2F9YIlqj0Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=ERM3qoa4p_9L2F9YIlqj0Q',
            'review_count': 586,
            'categories': [
              {
                'alias': 'coffee',
                'title': 'Coffee & Tea'
              },
              {
                'alias': 'breakfast_brunch',
                'title': 'Breakfast & Brunch'
              },
              {
                'alias': 'bagels',
                'title': 'Bagels'
              }
            ],
            'rating': 4.5,
            'coordinates': {
              'latitude': 39.53327,
              'longitude': -119.80235
            },
            'transactions': [
              'pickup',
              'delivery'
            ],
            'price': '$',
            'location': {
              'address1': '495 Morrill Ave',
              'address2': 'Ste 102',
              'address3': null,
              'city': 'Reno',
              'zip_code': '89512',
              'country': 'US',
              'state': 'NV',
              'display_address': [
                '495 Morrill Ave',
                'Ste 102',
                'Reno, NV 89512'
              ]
            },
            'phone': '+17757861611',
            'display_phone': '(775) 786-1611',
            'distance': 1068.110182219172
          },
          {
            'id': 'D4Uw7MZVGd4QLZF_dxk-Pw',
            'alias': 'brothers-barbecue-reno',
            'name': 'Brothers Barbecue',
            'image_url': 'https://s3-media2.fl.yelpcdn.com/bphoto/aA4954iec64g9pQZ2d-siw/o.jpg',
            'is_closed': false,
            'url': 'https://www.yelp.com/biz/brothers-barbecue-reno?adjust_creative=ERM3qoa4p_9L2F9YIlqj0Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=ERM3qoa4p_9L2F9YIlqj0Q',
            'review_count': 642,
            'categories': [
              {
                'alias': 'bbq',
                'title': 'Barbeque'
              }
            ],
            'rating': 4.5,
            'coordinates': {
              'latitude': 39.51997,
              'longitude': -119.8085
            },
            'transactions': [
              'delivery'
            ],
            'price': '$$',
            'location': {
              'address1': '618 S Center St',
              'address2': null,
              'address3': '',
              'city': 'Reno',
              'zip_code': '89501',
              'country': 'US',
              'state': 'NV',
              'display_address': [
                '618 S Center St',
                'Reno, NV 89501'
              ]
            },
            'phone': '+17753843547',
            'display_phone': '(775) 384-3547',
            'distance': 1166.3724079725391
          },
          {
            'id': '15BlJKQfD-SLJTebWa14EQ',
            'alias': 'roxy-reno-4',
            'name': 'Roxy',
            'image_url': 'https://s3-media4.fl.yelpcdn.com/bphoto/mqWPk7Q8ROowE9-uF7k1kw/o.jpg',
            'is_closed': false,
            'url': 'https://www.yelp.com/biz/roxy-reno-4?adjust_creative=ERM3qoa4p_9L2F9YIlqj0Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=ERM3qoa4p_9L2F9YIlqj0Q',
            'review_count': 550,
            'categories': [
              {
                'alias': 'bars',
                'title': 'Bars'
              },
              {
                'alias': 'steak',
                'title': 'Steakhouses'
              },
              {
                'alias': 'seafood',
                'title': 'Seafood'
              }
            ],
            'rating': 4.0,
            'coordinates': {
              'latitude': 39.528791703201264,
              'longitude': -119.81435591206936
            },
            'transactions': [
              'delivery'
            ],
            'price': '$$$',
            'location': {
              'address1': '345 N Virginia St',
              'address2': '',
              'address3': '',
              'city': 'Reno',
              'zip_code': '89501',
              'country': 'US',
              'state': 'NV',
              'display_address': [
                '345 N Virginia St',
                'Reno, NV 89501'
              ]
            },
            'phone': '+17757859066',
            'display_phone': '(775) 785-9066',
            'distance': 104.69978908354634
          },
          {
            'id': '8gY3LGFUMIQubovGbSd7Nw',
            'alias': 'süp-reno-2',
            'name': 'Süp',
            'image_url': 'https://s3-media2.fl.yelpcdn.com/bphoto/j2EnrPi7U5X-WlJUQGTUYg/o.jpg',
            'is_closed': false,
            'url': 'https://www.yelp.com/biz/s%C3%BCp-reno-2?adjust_creative=ERM3qoa4p_9L2F9YIlqj0Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=ERM3qoa4p_9L2F9YIlqj0Q',
            'review_count': 879,
            'categories': [
              {
                'alias': 'sandwiches',
                'title': 'Sandwiches'
              },
              {
                'alias': 'soup',
                'title': 'Soup'
              },
              {
                'alias': 'salad',
                'title': 'Salad'
              }
            ],
            'rating': 4.5,
            'coordinates': {
              'latitude': 39.518627166748,
              'longitude': -119.809814453125
            },
            'transactions': [],
            'price': '$$',
            'location': {
              'address1': '669 S Virginia St',
              'address2': '',
              'address3': '',
              'city': 'Reno',
              'zip_code': '89501',
              'country': 'US',
              'state': 'NV',
              'display_address': [
                '669 S Virginia St',
                'Reno, NV 89501'
              ]
            },
            'phone': '+17753244787',
            'display_phone': '(775) 324-4787',
            'distance': 1269.422144822169
          },
          {
            'id': 'RscMwBafa1cZh94tGlZT_Q',
            'alias': 'ichiban-japanese-steak-house-reno',
            'name': 'Ichiban Japanese Steak House',
            'image_url': 'https://s3-media1.fl.yelpcdn.com/bphoto/JPDNk-h9sHbU6OuIv8kVFw/o.jpg',
            'is_closed': false,
            'url': 'https://www.yelp.com/biz/ichiban-japanese-steak-house-reno?adjust_creative=ERM3qoa4p_9L2F9YIlqj0Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=ERM3qoa4p_9L2F9YIlqj0Q',
            'review_count': 854,
            'categories': [
              {
                'alias': 'japanese',
                'title': 'Japanese'
              },
              {
                'alias': 'sushi',
                'title': 'Sushi Bars'
              },
              {
                'alias': 'steak',
                'title': 'Steakhouses'
              }
            ],
            'rating': 4.0,
            'coordinates': {
              'latitude': 39.528788523411876,
              'longitude': -119.81435385916065
            },
            'transactions': [
              'delivery'
            ],
            'price': '$$$',
            'location': {
              'address1': '345 N Virginia St',
              'address2': '',
              'address3': '',
              'city': 'Reno',
              'zip_code': '89501',
              'country': 'US',
              'state': 'NV',
              'display_address': [
                '345 N Virginia St',
                'Reno, NV 89501'
              ]
            },
            'phone': '+17753235550',
            'display_phone': '(775) 323-5550',
            'distance': 104.93488328437383
          },
          {
            'id': 'TuYACtcbbiArXzubj2BIRg',
            'alias': 'liberty-food-and-wine-exchange-reno',
            'name': 'Liberty Food & Wine Exchange',
            'image_url': 'https://s3-media4.fl.yelpcdn.com/bphoto/OsxGUN2AzdadUp8biuxojQ/o.jpg',
            'is_closed': false,
            'url': 'https://www.yelp.com/biz/liberty-food-and-wine-exchange-reno?adjust_creative=ERM3qoa4p_9L2F9YIlqj0Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=ERM3qoa4p_9L2F9YIlqj0Q',
            'review_count': 413,
            'categories': [
              {
                'alias': 'bars',
                'title': 'Bars'
              },
              {
                'alias': 'newamerican',
                'title': 'American (New)'
              },
              {
                'alias': 'pizza',
                'title': 'Pizza'
              }
            ],
            'rating': 4.5,
            'coordinates': {
              'latitude': 39.5255796199171,
              'longitude': -119.814122685347
            },
            'transactions': [
              'pickup',
              'delivery'
            ],
            'price': '$$',
            'location': {
              'address1': '100 N Sierra St',
              'address2': null,
              'address3': null,
              'city': 'Reno',
              'zip_code': '89501',
              'country': 'US',
              'state': 'NV',
              'display_address': [
                '100 N Sierra St',
                'Reno, NV 89501'
              ]
            },
            'phone': '+17753361091',
            'display_phone': '(775) 336-1091',
            'distance': 451.23073897567895
          },
          {
            'id': '-pjWlAzv4qRxB3Gu1D4t6A',
            'alias': 'laughing-planet-cafe-reno',
            'name': 'Laughing Planet Cafe',
            'image_url': 'https://s3-media2.fl.yelpcdn.com/bphoto/KdbJ5k7gEaswF7-UesYv9g/o.jpg',
            'is_closed': false,
            'url': 'https://www.yelp.com/biz/laughing-planet-cafe-reno?adjust_creative=ERM3qoa4p_9L2F9YIlqj0Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=ERM3qoa4p_9L2F9YIlqj0Q',
            'review_count': 642,
            'categories': [
              {
                'alias': 'vegetarian',
                'title': 'Vegetarian'
              },
              {
                'alias': 'salad',
                'title': 'Salad'
              },
              {
                'alias': 'gluten_free',
                'title': 'Gluten-Free'
              }
            ],
            'rating': 4.5,
            'coordinates': {
              'latitude': 39.518468,
              'longitude': -119.810276
            },
            'transactions': [
              'pickup',
              'delivery'
            ],
            'price': '$$',
            'location': {
              'address1': '650 Tahoe S',
              'address2': '',
              'address3': '',
              'city': 'Reno',
              'zip_code': '89509',
              'country': 'US',
              'state': 'NV',
              'display_address': [
                '650 Tahoe S',
                'Reno, NV 89509'
              ]
            },
            'phone': '+17753602592',
            'display_phone': '(775) 360-2592',
            'distance': 1277.4303828061923
          },
          {
            'id': 'KD9-X5AykKmiZszrMepjhQ',
            'alias': 'homage-reno-2',
            'name': 'Homage',
            'image_url': 'https://s3-media3.fl.yelpcdn.com/bphoto/ILfvg_ZZLFNarDzATeEssg/o.jpg',
            'is_closed': false,
            'url': 'https://www.yelp.com/biz/homage-reno-2?adjust_creative=ERM3qoa4p_9L2F9YIlqj0Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=ERM3qoa4p_9L2F9YIlqj0Q',
            'review_count': 576,
            'categories': [
              {
                'alias': 'bakeries',
                'title': 'Bakeries'
              },
              {
                'alias': 'coffee',
                'title': 'Coffee & Tea'
              },
              {
                'alias': 'desserts',
                'title': 'Desserts'
              }
            ],
            'rating': 4.0,
            'coordinates': {
              'latitude': 39.5303835,
              'longitude': -119.821665
            },
            'transactions': [
              'pickup',
              'delivery'
            ],
            'price': '$$',
            'location': {
              'address1': '519 Ralston St',
              'address2': '',
              'address3': '',
              'city': 'Reno',
              'zip_code': '89503',
              'country': 'US',
              'state': 'NV',
              'display_address': [
                '519 Ralston St',
                'Reno, NV 89503'
              ]
            },
            'phone': '+17753238952',
            'display_phone': '(775) 323-8952',
            'distance': 679.7143183614296
          },
          {
            'id': '68YWxuIj8mUya0Hp0hD1_Q',
            'alias': 'centro-bar-and-kitchen-reno',
            'name': 'Centro Bar & Kitchen',
            'image_url': 'https://s3-media1.fl.yelpcdn.com/bphoto/ottInD2b7faMI8j5eF8YiA/o.jpg',
            'is_closed': false,
            'url': 'https://www.yelp.com/biz/centro-bar-and-kitchen-reno?adjust_creative=ERM3qoa4p_9L2F9YIlqj0Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=ERM3qoa4p_9L2F9YIlqj0Q',
            'review_count': 489,
            'categories': [
              {
                'alias': 'tapasmallplates',
                'title': 'Tapas/Small Plates'
              },
              {
                'alias': 'tapas',
                'title': 'Tapas Bars'
              }
            ],
            'rating': 4.5,
            'coordinates': {
              'latitude': 39.5199621847493,
              'longitude': -119.813624619456
            },
            'transactions': [
              'delivery'
            ],
            'price': '$$',
            'location': {
              'address1': '236 California Ave',
              'address2': '',
              'address3': '',
              'city': 'Reno',
              'zip_code': '89503',
              'country': 'US',
              'state': 'NV',
              'display_address': [
                '236 California Ave',
                'Reno, NV 89503'
              ]
            },
            'phone': '+17757379062',
            'display_phone': '(775) 737-9062',
            'distance': 1075.116052647949
          }
        ],
        'total': 599,
        'region': {
          'center': {
            'longitude': -119.8138,
            'latitude': 39.52963
          }
        }
      };
  
      const expected = [
        {
          'name': 'Peg\'s Glorified Ham N Eggs',
          'image_url': 'https://s3-media2.fl.yelpcdn.com/bphoto/IonlpEV-bZ9L5-j8MN1Wtg/o.jpg',
          'price': '$$',
          'rating': 4.5,
          'url': 'https://www.yelp.com/biz/pegs-glorified-ham-n-eggs-reno-8?adjust_creative=ERM3qoa4p_9L2F9YIlqj0Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=ERM3qoa4p_9L2F9YIlqj0Q'
        },
        {
          'name': 'Kwok\'s Bistro',
          'image_url': 'https://s3-media2.fl.yelpcdn.com/bphoto/hzl3iGkOGc4OTL55B9sinQ/o.jpg',
          'price': '$$',
          'rating': 4.5,
          'url': 'https://www.yelp.com/biz/kwoks-bistro-reno?adjust_creative=ERM3qoa4p_9L2F9YIlqj0Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=ERM3qoa4p_9L2F9YIlqj0Q'
        },
        {
          'name': 'Sabrina\'s West Street Kitchen',
          'image_url': 'https://s3-media3.fl.yelpcdn.com/bphoto/00sg8lOb9n7rH6opYTXVvA/o.jpg',
          'price': '$$',
          'rating': 4.5,
          'url': 'https://www.yelp.com/biz/sabrinas-west-street-kitchen-reno?adjust_creative=ERM3qoa4p_9L2F9YIlqj0Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=ERM3qoa4p_9L2F9YIlqj0Q'
        },
        {
          'name': 'Great Full Gardens-Midtown',
          'image_url': 'https://s3-media1.fl.yelpcdn.com/bphoto/qVTVe0Pd4caIYwwp7r6imw/o.jpg',
          'price': '$$',
          'rating': 4.5,
          'url': 'https://www.yelp.com/biz/great-full-gardens-midtown-reno-3?adjust_creative=ERM3qoa4p_9L2F9YIlqj0Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=ERM3qoa4p_9L2F9YIlqj0Q'
        },
        {
          'name': 'Wild River Grille',
          'image_url': 'https://s3-media3.fl.yelpcdn.com/bphoto/B91FTv8tRrW8DbSj-iakhw/  o.jpg',
          'price': '$$',
          'rating': 4,
          'url': 'https://www.yelp.com/biz/wild-river-grille-reno?adjust_creative=ERM3qoa4p_9L2F9YIlqj0Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=ERM3qoa4p_9L2F9YIlqj0Q'
        },
        {
          'name': 'Two Chicks',
          'image_url': 'https://s3-media3.fl.yelpcdn.com/bphoto/JYXl_GPxYvlKBrjKfHXBdg/o.jpg',
          'price': '$$',
          'rating': 4,
          'url': 'https://www.yelp.com/biz/two-chicks-reno?adjust_creative=ERM3qoa4p_9L2F9YIlqj0Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=ERM3qoa4p_9L2F9YIlqj0Q'
        },
        {
          'name': 'The Depot Craft Brewery Distillery',
          'image_url': 'https://s3-media2.fl.yelpcdn.com/bphoto/q4fXuabfAJCFD1me9jamqg/o.jpg',
          'price': '$$',
          'rating': 4,
          'url': 'https://www.yelp.com/biz/the-depot-craft-brewery-distillery-reno-2?adjust_creative=ERM3qoa4p_9L2F9YIlqj0Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=ERM3qoa4p_9L2F9YIlqj0Q'
        },
        {
          'name': 'Arario Midtown',
          'image_url': 'https://s3-media3.fl.yelpcdn.com/bphoto/_Qe0Iqm7N0Vo7Tb1QtbtUA/o.jpg',
          'price': '$$',
          'rating': 4.5,
          'url': 'https://www.yelp.com/biz/arario-midtown-reno?adjust_creative=ERM3qoa4p_9L2F9YIlqj0Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=ERM3qoa4p_9L2F9YIlqj0Q'
        },
        {
          'name': 'Sierra St Kitchen & Cocktails',
          'image_url': 'https://s3-media2.fl.yelpcdn.com/bphoto/dalcAKp5BjNnZToXhnTbww/o.jpg',
          'price': '$$',
          'rating': 4.5,
          'url': 'https://www.yelp.com/biz/sierra-st-kitchen-and-cocktails-reno-2?adjust_creative=ERM3qoa4p_9L2F9YIlqj0Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=ERM3qoa4p_9L2F9YIlqj0Q'
        },
        {
          'name': '101 Taiwanese Cuisine',
          'image_url': 'https://s3-media2.fl.yelpcdn.com/bphoto/mjW_q8YAqWtO3TxSyf66xA/o.jpg',
          'price': '$$',
          'rating': 4,
          'url': 'https://www.yelp.com/biz/101-taiwanese-cuisine-reno?adjust_creative=ERM3qoa4p_9L2F9YIlqj0Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=ERM3qoa4p_9L2F9YIlqj0Q'
        },
        {
          'name': 'Bab Café - Reno',
          'image_url': 'https://s3-media4.fl.yelpcdn.com/bphoto/_XKIhTPlb5GMKPOqfHEpcA/o.jpg',
          'price': '$$',
          'rating': 4.5,
          'url': 'https://www.yelp.com/biz/bab-caf%C3%A9-reno-reno-5?adjust_creative=ERM3qoa4p_9L2F9YIlqj0Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=ERM3qoa4p_9L2F9YIlqj0Q'
        },
        {
          'name': 'Pine State Biscuits Reno',
          'image_url': 'https://s3-media2.fl.yelpcdn.com/bphoto/yQUWxs04ndO9lIP78XYNEg/o.jpg',
          'price': '$$',
          'rating': 4.5,
          'url': 'https://www.yelp.com/biz/pine-state-biscuits-reno-reno?adjust_creative=ERM3qoa4p_9L2F9YIlqj0Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=ERM3qoa4p_9L2F9YIlqj0Q'
        },
        {
          'name': 'The Daily Bagel',
          'image_url': 'https://s3-media4.fl.yelpcdn.com/bphoto/JUwv6BBi2lTOXBMW3G0MUA/o.jpg',
          'price': '$',
          'rating': 4.5,
          'url': 'https://www.yelp.com/biz/the-daily-bagel-reno-2?adjust_creative=ERM3qoa4p_9L2F9YIlqj0Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=ERM3qoa4p_9L2F9YIlqj0Q'
        },
        {
          'name': 'Brothers Barbecue',
          'image_url': 'https://s3-media2.fl.yelpcdn.com/bphoto/aA4954iec64g9pQZ2d-siw/o.jpg',
          'price': '$$',
          'rating': 4.5,
          'url': 'https://www.yelp.com/biz/brothers-barbecue-reno?adjust_creative=ERM3qoa4p_9L2F9YIlqj0Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=ERM3qoa4p_9L2F9YIlqj0Q'
        },
        {
          'name': 'Roxy',
          'image_url': 'https://s3-media4.fl.yelpcdn.com/bphoto/mqWPk7Q8ROowE9-uF7k1kw/o.jpg',
          'price': '$$$',
          'rating': 4,
          'url': 'https://www.yelp.com/biz/roxy-reno-4?adjust_creative=ERM3qoa4p_9L2F9YIlqj0Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=ERM3qoa4p_9L2F9YIlqj0Q'
        },
        {
          'name': 'Süp',
          'image_url': 'https://s3-media2.fl.yelpcdn.com/bphoto/j2EnrPi7U5X-WlJUQGTUYg/o.jpg',
          'price': '$$',
          'rating': 4.5,
          'url': 'https://www.yelp.com/biz/s%C3%BCp-reno-2?adjust_creative=ERM3qoa4p_9L2F9YIlqj0Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=ERM3qoa4p_9L2F9YIlqj0Q'
        },
        {
          'name': 'Ichiban Japanese Steak House',
          'image_url': 'https://s3-media1.fl.yelpcdn.com/bphoto/JPDNk-h9sHbU6OuIv8kVFw/o.jpg',
          'price': '$$$',
          'rating': 4,
          'url': 'https://www.yelp.com/biz/ichiban-japanese-steak-house-reno?adjust_creative=ERM3qoa4p_9L2F9YIlqj0Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=ERM3qoa4p_9L2F9YIlqj0Q'
        },
        {
          'name': 'Liberty Food & Wine Exchange',
          'image_url': 'https://s3-media4.fl.yelpcdn.com/bphoto/OsxGUN2AzdadUp8biuxojQ/o.jpg',
          'price': '$$',
          'rating': 4.5,
          'url': 'https://www.yelp.com/biz/liberty-food-and-wine-exchange-reno?adjust_creative=ERM3qoa4p_9L2F9YIlqj0Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=ERM3qoa4p_9L2F9YIlqj0Q'
        },
        {
          'name': 'Laughing Planet Cafe',
          'image_url': 'https://s3-media2.fl.yelpcdn.com/bphoto/KdbJ5k7gEaswF7-UesYv9g/o.jpg',
          'price': '$$',
          'rating': 4.5,
          'url': 'https://www.yelp.com/biz/laughing-planet-cafe-reno?adjust_creative=ERM3qoa4p_9L2F9YIlqj0Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=ERM3qoa4p_9L2F9YIlqj0Q'
        },
        {
          'name': 'Homage',
          'image_url': 'https://s3-media3.fl.yelpcdn.com/bphoto/ILfvg_ZZLFNarDzATeEssg/o.jpg',
          'price': '$$',
          'rating': 4,
          'url': 'https://www.yelp.com/biz/homage-reno-2?adjust_creative=ERM3qoa4p_9L2F9YIlqj0Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=ERM3qoa4p_9L2F9YIlqj0Q'
        }
      ];
  
      expect(expected).toEqual(expectation);
    });
  });
});
