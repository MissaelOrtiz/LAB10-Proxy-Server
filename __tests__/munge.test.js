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
          'name': 'Pike Place Chowder',
          'image_url': 'https://s3-media1.fl.yelpcdn.com/bphoto/ZyQjV-wJQ2GHyX7l3jfbyg/o.jpg',
          'price': '$$',
          'rating': 4.5,
          'url': 'https://www.yelp.com/biz/pike-place-chowder-seattle?adjust_creative=ERM3qoa4p_9L2F9YIlqj0Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=ERM3qoa4p_9L2F9YIlqj0Q'
        },
        {
          'name': 'Piroshky Piroshky',
          'image_url': 'https://s3-media1.fl.yelpcdn.com/bphoto/qGlIuj5yn6i82DK8kxw4Uw/o.jpg',
          'price': '$',
          'rating': 4.5,
          'url': 'https://www.yelp.com/biz/piroshky-piroshky-seattle?adjust_creative=ERM3qoa4p_9L2F9YIlqj0Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=ERM3qoa4p_9L2F9YIlqj0Q'
        },
        {
          'name': 'Ellenos Real Greek Yogurt',
          'image_url': 'https://s3-media4.fl.yelpcdn.com/bphoto/jsZkRaDQ6aEa6jwRGWDi5Q/o.jpg',
          'price': '$',
          'rating': 5,
          'url': 'https://www.yelp.com/biz/ellenos-real-greek-yogurt-seattle?adjust_creative=ERM3qoa4p_9L2F9YIlqj0Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=ERM3qoa4p_9L2F9YIlqj0Q'
        },
        {
          'name': 'The Pink Door',
          'image_url': 'https://s3-media3.fl.yelpcdn.com/bphoto/SdnJM6TCUmlKlpN6bnP-Rg/o.jpg',
          'price': '$$',
          'rating': 4.5,
          'url': 'https://www.yelp.com/biz/the-pink-door-seattle-4?adjust_creative=ERM3qoa4p_9L2F9YIlqj0Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=ERM3qoa4p_9L2F9YIlqj0Q'
        },
        {
          'name': 'Storyville Coffee Company',
          'image_url': 'https://s3-media3.fl.yelpcdn.com/bphoto/nJgiyjMZ7sglAtc5wyKSLQ/o.jpg',
          'price': '$$',
          'rating': 4.5,
          'url': 'https://www.yelp.com/biz/storyville-coffee-company-seattle-9?adjust_creative=ERM3qoa4p_9L2F9YIlqj0Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=ERM3qoa4p_9L2F9YIlqj0Q'
        },
        {
          'name': 'Japonessa Sushi Cocina',
          'image_url': 'https://s3-media3.fl.yelpcdn.com/bphoto/vucCrknnlu1RRvRaKWwovQ/o.jpg',
          'price': '$$',
          'rating': 4,
          'url': 'https://www.yelp.com/biz/japonessa-sushi-cocina-seattle?adjust_creative=ERM3qoa4p_9L2F9YIlqj0Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=ERM3qoa4p_9L2F9YIlqj0Q'
        },
        {
          'name': 'Starbucks Reserve Roastery Seattle',
          'image_url': 'https://s3-media2.fl.yelpcdn.com/bphoto/Pxq-GrSvmQCjHxPoCLgsfw/o.jpg',
          'price': '$$',
          'rating': 4.5,
          'url': 'https://www.yelp.com/biz/starbucks-reserve-roastery-seattle-seattle?adjust_creative=ERM3qoa4p_9L2F9YIlqj0Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=ERM3qoa4p_9L2F9YIlqj0Q'
        },
        {
          'name': 'The Crumpet Shop',
          'image_url': 'https://s3-media2.fl.yelpcdn.com/bphoto/nA5msGED9d3Bn5ldV2UgHA/o.jpg',
          'price': '$',
          'rating': 4.5,
          'url': 'https://www.yelp.com/biz/the-crumpet-shop-seattle?adjust_creative=ERM3qoa4p_9L2F9YIlqj0Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=ERM3qoa4p_9L2F9YIlqj0Q'
        },
        {
          'name': 'Beecher\'s Handmade Cheese',
          'image_url': 'https://s3-media2.fl.yelpcdn.com/bphoto/hh5CwveJRABseaWt_UxtXA/o.jpg',
          'price': '$',
          'rating': 4.5,
          'url': 'https://www.yelp.com/biz/beechers-handmade-cheese-seattle?adjust_creative=ERM3qoa4p_9L2F9YIlqj0Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=ERM3qoa4p_9L2F9YIlqj0Q'
        },
        {
          'name': 'Biscuit Bitch',
          'image_url': 'https://s3-media2.fl.yelpcdn.com/bphoto/ZxGvVggINkZ_BI3u7OX4CA/o.jpg',
          'price': '$',
          'rating': 4,
          'url': 'https://www.yelp.com/biz/biscuit-bitch-seattle?adjust_creative=ERM3qoa4p_9L2F9YIlqj0Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=ERM3qoa4p_9L2F9YIlqj0Q'
        },
        {
          'name': 'Le Panier French Bakery',
          'image_url': 'https://s3-media4.fl.yelpcdn.com/bphoto/5fmWSH9EoNSFLCRakj8tSw/o.jpg',
          'price': '$',
          'rating': 4.5,
          'url': 'https://www.yelp.com/biz/le-panier-french-bakery-seattle?adjust_creative=ERM3qoa4p_9L2F9YIlqj0Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=ERM3qoa4p_9L2F9YIlqj0Q'
        },
        {
          'name': 'Salumi Artisan Cured Meats',
          'image_url': 'https://s3-media2.fl.yelpcdn.com/bphoto/qX2VP_ovmhS6NNlO0zi4gA/o.jpg',
          'price': '$$',
          'rating': 4.5,
          'url': 'https://www.yelp.com/biz/salumi-artisan-cured-meats-seattle-2?adjust_creative=ERM3qoa4p_9L2F9YIlqj0Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=ERM3qoa4p_9L2F9YIlqj0Q'
        },
        {
          'name': 'Lola',
          'image_url': 'https://s3-media1.fl.yelpcdn.com/bphoto/y37Xvo70cY1kh6-d1vDdfQ/o.jpg',
          'price': '$$',
          'rating': 4,
          'url': 'https://www.yelp.com/biz/lola-seattle?adjust_creative=ERM3qoa4p_9L2F9YIlqj0Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=ERM3qoa4p_9L2F9YIlqj0Q'
        },
        {
          'name': 'Serious Pie',
          'image_url': 'https://s3-media4.fl.yelpcdn.com/bphoto/mHyyfLAUge0LjN5t1hYfKw/o.jpg',
          'price': '$$',
          'rating': 4,
          'url': 'https://www.yelp.com/biz/serious-pie-seattle?adjust_creative=ERM3qoa4p_9L2F9YIlqj0Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=ERM3qoa4p_9L2F9YIlqj0Q'
        },
        {
          'name': 'Metropolitan Grill',
          'image_url': 'https://s3-media1.fl.yelpcdn.com/bphoto/2Jk8ycCKf7XaSrHdpWxEdw/o.jpg',
          'price': '$$$$',
          'rating': 4,
          'url': 'https://www.yelp.com/biz/metropolitan-grill-seattle?adjust_creative=ERM3qoa4p_9L2F9YIlqj0Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=ERM3qoa4p_9L2F9YIlqj0Q'
        },
        {
          'name': 'Elliott\'s Oyster House',
          'image_url': 'https://s3-media1.fl.yelpcdn.com/bphoto/naJ4Nkphiis5M36tGrGHJA/o.jpg',
          'price': '$$$',
          'rating': 4,
          'url': 'https://www.yelp.com/biz/elliotts-oyster-house-seattle-2?adjust_creative=ERM3qoa4p_9L2F9YIlqj0Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=ERM3qoa4p_9L2F9YIlqj0Q'
        },
        {
          'name': 'Von\'s 1000 Spirits',
          'image_url': 'https://s3-media1.fl.yelpcdn.com/bphoto/iUTo8Vc5is6j5dO358VWTg/o.jpg',
          'price': '$$',
          'rating': 4.5,
          'url': 'https://www.yelp.com/biz/vons-1000-spirits-seattle-4?adjust_creative=ERM3qoa4p_9L2F9YIlqj0Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=ERM3qoa4p_9L2F9YIlqj0Q'
        },
        {
          'name': 'Tat\'s Delicatessen',
          'image_url': 'https://s3-media4.fl.yelpcdn.com/bphoto/lH44FL3TivTFgJCjDNWnJA/o.jpg',
          'price': '$$',
          'rating': 4.5,
          'url': 'https://www.yelp.com/biz/tats-delicatessen-seattle?adjust_creative=ERM3qoa4p_9L2F9YIlqj0Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=ERM3qoa4p_9L2F9YIlqj0Q'
        },
        {
          'name': 'Purple Café and Wine Bar',
          'image_url': 'https://s3-media3.fl.yelpcdn.com/bphoto/21QxhWyYxnlHjOBKUysvYA/o.jpg',
          'price': '$$$',
          'rating': 4,
          'url': 'https://www.yelp.com/biz/purple-caf%C3%A9-and-wine-bar-seattle-3?adjust_creative=ERM3qoa4p_9L2F9YIlqj0Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=ERM3qoa4p_9L2F9YIlqj0Q'
        },
        {
          'name': 'Radiator Whiskey',
          'image_url': 'https://s3-media3.fl.yelpcdn.com/bphoto/W9DnG_PyGHOtApxbAoFOqA/o.jpg',
          'price': '$$',
          'rating': 4.5,
          'url': 'https://www.yelp.com/biz/radiator-whiskey-seattle?adjust_creative=ERM3qoa4p_9L2F9YIlqj0Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=ERM3qoa4p_9L2F9YIlqj0Q'
        }
      ];
  
      const data = {
        'businesses': [
          {
            'id': '6I28wDuMBR5WLMqfKxaoeg',
            'alias': 'pike-place-chowder-seattle',
            'name': 'Pike Place Chowder',
            'image_url': 'https://s3-media1.fl.yelpcdn.com/bphoto/ZyQjV-wJQ2GHyX7l3jfbyg/o.jpg',
            'is_closed': false,
            'url': 'https://www.yelp.com/biz/pike-place-chowder-seattle?adjust_creative=ERM3qoa4p_9L2F9YIlqj0Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=ERM3qoa4p_9L2F9YIlqj0Q',
            'review_count': 7574,
            'categories': [
              {
                'alias': 'seafood',
                'title': 'Seafood'
              },
              {
                'alias': 'soup',
                'title': 'Soup'
              }
            ],
            'rating': 4.5,
            'coordinates': {
              'latitude': 47.60939,
              'longitude': -122.34112
            },
            'transactions': [
              'delivery',
              'pickup'
            ],
            'price': '$$',
            'location': {
              'address1': '1530 Post Aly',
              'address2': 'Ste 11',
              'address3': '',
              'city': 'Seattle',
              'zip_code': '98101',
              'country': 'US',
              'state': 'WA',
              'display_address': [
                '1530 Post Aly',
                'Ste 11',
                'Seattle, WA 98101'
              ]
            },
            'phone': '+12062672537',
            'display_phone': '(206) 267-2537',
            'distance': 1033.824249573459
          },
          {
            'id': 'NxwrJPJLzTs0k0DQ-QCo1A',
            'alias': 'piroshky-piroshky-seattle',
            'name': 'Piroshky Piroshky',
            'image_url': 'https://s3-media1.fl.yelpcdn.com/bphoto/qGlIuj5yn6i82DK8kxw4Uw/o.jpg',
            'is_closed': false,
            'url': 'https://www.yelp.com/biz/piroshky-piroshky-seattle?adjust_creative=ERM3qoa4p_9L2F9YIlqj0Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=ERM3qoa4p_9L2F9YIlqj0Q',
            'review_count': 6393,
            'categories': [
              {
                'alias': 'bakeries',
                'title': 'Bakeries'
              },
              {
                'alias': 'russian',
                'title': 'Russian'
              }
            ],
            'rating': 4.5,
            'coordinates': {
              'latitude': 47.60991,
              'longitude': -122.34231
            },
            'transactions': [
              'delivery',
              'pickup'
            ],
            'price': '$',
            'location': {
              'address1': '1908 Pike Pl',
              'address2': '',
              'address3': '',
              'city': 'Seattle',
              'zip_code': '98101',
              'country': 'US',
              'state': 'WA',
              'display_address': [
                '1908 Pike Pl',
                'Seattle, WA 98101'
              ]
            },
            'phone': '+12064416068',
            'display_phone': '(206) 441-6068',
            'distance': 1149.3174056850469
          },
          {
            'id': 'CKxp6p22ipCo94iLieXzbQ',
            'alias': 'ellenos-real-greek-yogurt-seattle',
            'name': 'Ellenos Real Greek Yogurt',
            'image_url': 'https://s3-media4.fl.yelpcdn.com/bphoto/jsZkRaDQ6aEa6jwRGWDi5Q/o.jpg',
            'is_closed': false,
            'url': 'https://www.yelp.com/biz/ellenos-real-greek-yogurt-seattle?adjust_creative=ERM3qoa4p_9L2F9YIlqj0Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=ERM3qoa4p_9L2F9YIlqj0Q',
            'review_count': 1960,
            'categories': [
              {
                'alias': 'desserts',
                'title': 'Desserts'
              }
            ],
            'rating': 5.0,
            'coordinates': {
              'latitude': 47.608912,
              'longitude': -122.34058
            },
            'transactions': [
              'delivery',
              'pickup'
            ],
            'price': '$',
            'location': {
              'address1': '1500 Pike Pl',
              'address2': '',
              'address3': '',
              'city': 'Seattle',
              'zip_code': '98101',
              'country': 'US',
              'state': 'WA',
              'display_address': [
                '1500 Pike Pl',
                'Seattle, WA 98101'
              ]
            },
            'phone': '+12065357562',
            'display_phone': '(206) 535-7562',
            'distance': 969.948917408613
          },
          {
            'id': 'VOPdG8llLPaga9iJxXcMuQ',
            'alias': 'the-pink-door-seattle-4',
            'name': 'The Pink Door',
            'image_url': 'https://s3-media3.fl.yelpcdn.com/bphoto/SdnJM6TCUmlKlpN6bnP-Rg/o.jpg',
            'is_closed': false,
            'url': 'https://www.yelp.com/biz/the-pink-door-seattle-4?adjust_creative=ERM3qoa4p_9L2F9YIlqj0Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=ERM3qoa4p_9L2F9YIlqj0Q',
            'review_count': 5350,
            'categories': [
              {
                'alias': 'italian',
                'title': 'Italian'
              },
              {
                'alias': 'wine_bars',
                'title': 'Wine Bars'
              },
              {
                'alias': 'seafood',
                'title': 'Seafood'
              }
            ],
            'rating': 4.5,
            'coordinates': {
              'latitude': 47.61028,
              'longitude': -122.3425
            },
            'transactions': [
              'delivery'
            ],
            'price': '$$',
            'location': {
              'address1': '1919 Post Alley',
              'address2': '',
              'address3': '',
              'city': 'Seattle',
              'zip_code': '98101',
              'country': 'US',
              'state': 'WA',
              'display_address': [
                '1919 Post Alley',
                'Seattle, WA 98101'
              ]
            },
            'phone': '+12064433241',
            'display_phone': '(206) 443-3241',
            'distance': 1185.5875469313717
          },
          {
            'id': 'FVzl8rDPiTWEtrNEuCu-Xg',
            'alias': 'storyville-coffee-company-seattle-9',
            'name': 'Storyville Coffee Company',
            'image_url': 'https://s3-media3.fl.yelpcdn.com/bphoto/nJgiyjMZ7sglAtc5wyKSLQ/o.jpg',
            'is_closed': false,
            'url': 'https://www.yelp.com/biz/storyville-coffee-company-seattle-9?adjust_creative=ERM3qoa4p_9L2F9YIlqj0Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=ERM3qoa4p_9L2F9YIlqj0Q',
            'review_count': 1836,
            'categories': [
              {
                'alias': 'coffee',
                'title': 'Coffee & Tea'
              },
              {
                'alias': 'bakeries',
                'title': 'Bakeries'
              },
              {
                'alias': 'waffles',
                'title': 'Waffles'
              }
            ],
            'rating': 4.5,
            'coordinates': {
              'latitude': 47.60895949363687,
              'longitude': -122.34043157053927
            },
            'transactions': [
              'delivery',
              'pickup'
            ],
            'price': '$$',
            'location': {
              'address1': '94 Pike St',
              'address2': 'Ste 34',
              'address3': '',
              'city': 'Seattle',
              'zip_code': '98101',
              'country': 'US',
              'state': 'WA',
              'display_address': [
                '94 Pike St',
                'Ste 34',
                'Seattle, WA 98101'
              ]
            },
            'phone': '+12067805777',
            'display_phone': '(206) 780-5777',
            'distance': 964.0382167170328
          },
          {
            'id': 'L8RRAd-JZ0Bd4MER0yyX-g',
            'alias': 'japonessa-sushi-cocina-seattle',
            'name': 'Japonessa Sushi Cocina',
            'image_url': 'https://s3-media3.fl.yelpcdn.com/bphoto/vucCrknnlu1RRvRaKWwovQ/o.jpg',
            'is_closed': false,
            'url': 'https://www.yelp.com/biz/japonessa-sushi-cocina-seattle?adjust_creative=ERM3qoa4p_9L2F9YIlqj0Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=ERM3qoa4p_9L2F9YIlqj0Q',
            'review_count': 4763,
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
                'alias': 'cocktailbars',
                'title': 'Cocktail Bars'
              }
            ],
            'rating': 4.0,
            'coordinates': {
              'latitude': 47.6079793649921,
              'longitude': -122.339042355669
            },
            'transactions': [
              'delivery'
            ],
            'price': '$$',
            'location': {
              'address1': '1400 1st Ave',
              'address2': '',
              'address3': '',
              'city': 'Seattle',
              'zip_code': '98101',
              'country': 'US',
              'state': 'WA',
              'display_address': [
                '1400 1st Ave',
                'Seattle, WA 98101'
              ]
            },
            'phone': '+12069717979',
            'display_phone': '(206) 971-7979',
            'distance': 816.0292860649765
          },
          {
            'id': '6ZKNFPLWRIVWshUkMNlgng',
            'alias': 'starbucks-reserve-roastery-seattle-seattle',
            'name': 'Starbucks Reserve Roastery Seattle',
            'image_url': 'https://s3-media2.fl.yelpcdn.com/bphoto/Pxq-GrSvmQCjHxPoCLgsfw/o.jpg',
            'is_closed': false,
            'url': 'https://www.yelp.com/biz/starbucks-reserve-roastery-seattle-seattle?adjust_creative=ERM3qoa4p_9L2F9YIlqj0Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=ERM3qoa4p_9L2F9YIlqj0Q',
            'review_count': 3106,
            'categories': [
              {
                'alias': 'coffee',
                'title': 'Coffee & Tea'
              },
              {
                'alias': 'coffeeroasteries',
                'title': 'Coffee Roasteries'
              }
            ],
            'rating': 4.5,
            'coordinates': {
              'latitude': 47.61401,
              'longitude': -122.32811
            },
            'transactions': [
              'delivery'
            ],
            'price': '$$',
            'location': {
              'address1': '1124 Pike St',
              'address2': '',
              'address3': '',
              'city': 'Seattle',
              'zip_code': '98101',
              'country': 'US',
              'state': 'WA',
              'display_address': [
                '1124 Pike St',
                'Seattle, WA 98101'
              ]
            },
            'phone': '+12066240173',
            'display_phone': '(206) 624-0173',
            'distance': 1141.1547869791877
          },
          {
            'id': 'aX2ctpgS9uvFDfdzCXjecA',
            'alias': 'the-crumpet-shop-seattle',
            'name': 'The Crumpet Shop',
            'image_url': 'https://s3-media2.fl.yelpcdn.com/bphoto/nA5msGED9d3Bn5ldV2UgHA/o.jpg',
            'is_closed': false,
            'url': 'https://www.yelp.com/biz/the-crumpet-shop-seattle?adjust_creative=ERM3qoa4p_9L2F9YIlqj0Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=ERM3qoa4p_9L2F9YIlqj0Q',
            'review_count': 2364,
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
                'alias': 'breakfast_brunch',
                'title': 'Breakfast & Brunch'
              }
            ],
            'rating': 4.5,
            'coordinates': {
              'latitude': 47.60899,
              'longitude': -122.34044
            },
            'transactions': [
              'delivery'
            ],
            'price': '$',
            'location': {
              'address1': '1503 1st Ave',
              'address2': '',
              'address3': '',
              'city': 'Seattle',
              'zip_code': '98101',
              'country': 'US',
              'state': 'WA',
              'display_address': [
                '1503 1st Ave',
                'Seattle, WA 98101'
              ]
            },
            'phone': '+12066821598',
            'display_phone': '(206) 682-1598',
            'distance': 972.842611401474
          },
          {
            'id': 'mNdz7zdezTkiuk8S-cIKxg',
            'alias': 'beechers-handmade-cheese-seattle',
            'name': 'Beecher\'s Handmade Cheese',
            'image_url': 'https://s3-media2.fl.yelpcdn.com/bphoto/hh5CwveJRABseaWt_UxtXA/o.jpg',
            'is_closed': false,
            'url': 'https://www.yelp.com/biz/beechers-handmade-cheese-seattle?adjust_creative=ERM3qoa4p_9L2F9YIlqj0Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=ERM3qoa4p_9L2F9YIlqj0Q',
            'review_count': 3044,
            'categories': [
              {
                'alias': 'cheese',
                'title': 'Cheese Shops'
              },
              {
                'alias': 'sandwiches',
                'title': 'Sandwiches'
              }
            ],
            'rating': 4.5,
            'coordinates': {
              'latitude': 47.60963,
              'longitude': -122.34179
            },
            'transactions': [
              'delivery',
              'pickup'
            ],
            'price': '$',
            'location': {
              'address1': '1600 Pike Pl',
              'address2': '',
              'address3': '',
              'city': 'Seattle',
              'zip_code': '98101',
              'country': 'US',
              'state': 'WA',
              'display_address': [
                '1600 Pike Pl',
                'Seattle, WA 98101'
              ]
            },
            'phone': '+12069561964',
            'display_phone': '(206) 956-1964',
            'distance': 1094.5690987855573
          },
          {
            'id': '09FLRYnePKcUwGDDPIOAkg',
            'alias': 'biscuit-bitch-seattle',
            'name': 'Biscuit Bitch',
            'image_url': 'https://s3-media2.fl.yelpcdn.com/bphoto/ZxGvVggINkZ_BI3u7OX4CA/o.jpg',
            'is_closed': false,
            'url': 'https://www.yelp.com/biz/biscuit-bitch-seattle?adjust_creative=ERM3qoa4p_9L2F9YIlqj0Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=ERM3qoa4p_9L2F9YIlqj0Q',
            'review_count': 3990,
            'categories': [
              {
                'alias': 'breakfast_brunch',
                'title': 'Breakfast & Brunch'
              },
              {
                'alias': 'coffee',
                'title': 'Coffee & Tea'
              },
              {
                'alias': 'southern',
                'title': 'Southern'
              }
            ],
            'rating': 4.0,
            'coordinates': {
              'latitude': 47.61034,
              'longitude': -122.34167
            },
            'transactions': [
              'delivery'
            ],
            'price': '$',
            'location': {
              'address1': '1909 1st Ave',
              'address2': '',
              'address3': '',
              'city': 'Seattle',
              'zip_code': '98101',
              'country': 'US',
              'state': 'WA',
              'display_address': [
                '1909 1st Ave',
                'Seattle, WA 98101'
              ]
            },
            'phone': '+12064417999',
            'display_phone': '(206) 441-7999',
            'distance': 1144.6740671250118
          },
          {
            'id': 'Eh-7d5coQltQfQWAtWnPyg',
            'alias': 'le-panier-french-bakery-seattle',
            'name': 'Le Panier French Bakery',
            'image_url': 'https://s3-media4.fl.yelpcdn.com/bphoto/5fmWSH9EoNSFLCRakj8tSw/o.jpg',
            'is_closed': false,
            'url': 'https://www.yelp.com/biz/le-panier-french-bakery-seattle?adjust_creative=ERM3qoa4p_9L2F9YIlqj0Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=ERM3qoa4p_9L2F9YIlqj0Q',
            'review_count': 2456,
            'categories': [
              {
                'alias': 'bakeries',
                'title': 'Bakeries'
              },
              {
                'alias': 'sandwiches',
                'title': 'Sandwiches'
              },
              {
                'alias': 'cakeshop',
                'title': 'Patisserie/Cake Shop'
              }
            ],
            'rating': 4.5,
            'coordinates': {
              'latitude': 47.6098933070898,
              'longitude': -122.342474609613
            },
            'transactions': [
              'delivery'
            ],
            'price': '$',
            'location': {
              'address1': '1902 Pike Pl',
              'address2': '',
              'address3': '',
              'city': 'Seattle',
              'zip_code': '98101',
              'country': 'US',
              'state': 'WA',
              'display_address': [
                '1902 Pike Pl',
                'Seattle, WA 98101'
              ]
            },
            'phone': '+12064413669',
            'display_phone': '(206) 441-3669',
            'distance': 1131.178799592818
          },
          {
            'id': 'T7XmistL2pQrW3hY3oTpng',
            'alias': 'salumi-artisan-cured-meats-seattle-2',
            'name': 'Salumi Artisan Cured Meats',
            'image_url': 'https://s3-media2.fl.yelpcdn.com/bphoto/qX2VP_ovmhS6NNlO0zi4gA/o.jpg',
            'is_closed': false,
            'url': 'https://www.yelp.com/biz/salumi-artisan-cured-meats-seattle-2?adjust_creative=ERM3qoa4p_9L2F9YIlqj0Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=ERM3qoa4p_9L2F9YIlqj0Q',
            'review_count': 1384,
            'categories': [
              {
                'alias': 'italian',
                'title': 'Italian'
              },
              {
                'alias': 'sandwiches',
                'title': 'Sandwiches'
              },
              {
                'alias': 'meats',
                'title': 'Meat Shops'
              }
            ],
            'rating': 4.5,
            'coordinates': {
              'latitude': 47.59898,
              'longitude': -122.33269
            },
            'transactions': [
              'delivery',
              'pickup'
            ],
            'price': '$$',
            'location': {
              'address1': '404 Occidental Ave S',
              'address2': '',
              'address3': '',
              'city': 'Seattle',
              'zip_code': '98104',
              'country': 'US',
              'state': 'WA',
              'display_address': [
                '404 Occidental Ave S',
                'Seattle, WA 98104'
              ]
            },
            'phone': '+12066218772',
            'display_phone': '(206) 621-8772',
            'distance': 572.3979208787654
          },
          {
            'id': 'oq5KCmPFKV28BnB4hjpo_g',
            'alias': 'lola-seattle',
            'name': 'Lola',
            'image_url': 'https://s3-media1.fl.yelpcdn.com/bphoto/y37Xvo70cY1kh6-d1vDdfQ/o.jpg',
            'is_closed': false,
            'url': 'https://www.yelp.com/biz/lola-seattle?adjust_creative=ERM3qoa4p_9L2F9YIlqj0Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=ERM3qoa4p_9L2F9YIlqj0Q',
            'review_count': 3933,
            'categories': [
              {
                'alias': 'greek',
                'title': 'Greek'
              },
              {
                'alias': 'mediterranean',
                'title': 'Mediterranean'
              },
              {
                'alias': 'breakfast_brunch',
                'title': 'Breakfast & Brunch'
              }
            ],
            'rating': 4.0,
            'coordinates': {
              'latitude': 47.6132519777742,
              'longitude': -122.340060726984
            },
            'transactions': [
              'delivery'
            ],
            'price': '$$',
            'location': {
              'address1': '2000 4th Ave',
              'address2': null,
              'address3': '',
              'city': 'Seattle',
              'zip_code': '98121',
              'country': 'US',
              'state': 'WA',
              'display_address': [
                '2000 4th Ave',
                'Seattle, WA 98121'
              ]
            },
            'phone': '+12064411430',
            'display_phone': '(206) 441-1430',
            'distance': 1288.0007211149011
          },
          {
            'id': '-FOAQv22SXtSBs7nptI3UA',
            'alias': 'serious-pie-seattle',
            'name': 'Serious Pie',
            'image_url': 'https://s3-media4.fl.yelpcdn.com/bphoto/mHyyfLAUge0LjN5t1hYfKw/o.jpg',
            'is_closed': false,
            'url': 'https://www.yelp.com/biz/serious-pie-seattle?adjust_creative=ERM3qoa4p_9L2F9YIlqj0Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=ERM3qoa4p_9L2F9YIlqj0Q',
            'review_count': 4174,
            'categories': [
              {
                'alias': 'pizza',
                'title': 'Pizza'
              }
            ],
            'rating': 4.0,
            'coordinates': {
              'latitude': 47.61296,
              'longitude': -122.34047
            },
            'transactions': [
              'delivery',
              'pickup'
            ],
            'price': '$$',
            'location': {
              'address1': '316 Virginia St',
              'address2': null,
              'address3': '',
              'city': 'Seattle',
              'zip_code': '98121',
              'country': 'US',
              'state': 'WA',
              'display_address': [
                '316 Virginia St',
                'Seattle, WA 98121'
              ]
            },
            'phone': '+12068387388',
            'display_phone': '(206) 838-7388',
            'distance': 1279.7015541496398
          },
          {
            'id': 'lxvncNXJKThTmLmARv72pA',
            'alias': 'metropolitan-grill-seattle',
            'name': 'Metropolitan Grill',
            'image_url': 'https://s3-media1.fl.yelpcdn.com/bphoto/2Jk8ycCKf7XaSrHdpWxEdw/o.jpg',
            'is_closed': false,
            'url': 'https://www.yelp.com/biz/metropolitan-grill-seattle?adjust_creative=ERM3qoa4p_9L2F9YIlqj0Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=ERM3qoa4p_9L2F9YIlqj0Q',
            'review_count': 1800,
            'categories': [
              {
                'alias': 'tradamerican',
                'title': 'American (Traditional)'
              },
              {
                'alias': 'steak',
                'title': 'Steakhouses'
              }
            ],
            'rating': 4.0,
            'coordinates': {
              'latitude': 47.604438,
              'longitude': -122.334126
            },
            'transactions': [
              'delivery',
              'pickup'
            ],
            'price': '$$$$',
            'location': {
              'address1': '820 2nd Ave',
              'address2': '',
              'address3': '',
              'city': 'Seattle',
              'zip_code': '98104',
              'country': 'US',
              'state': 'WA',
              'display_address': [
                '820 2nd Ave',
                'Seattle, WA 98104'
              ]
            },
            'phone': '+12066243287',
            'display_phone': '(206) 624-3287',
            'distance': 312.0208128156214
          },
          {
            'id': 'xqH038QcquJEMm5LIZHd5w',
            'alias': 'elliotts-oyster-house-seattle-2',
            'name': 'Elliott\'s Oyster House',
            'image_url': 'https://s3-media1.fl.yelpcdn.com/bphoto/naJ4Nkphiis5M36tGrGHJA/o.jpg',
            'is_closed': false,
            'url': 'https://www.yelp.com/biz/elliotts-oyster-house-seattle-2?adjust_creative=ERM3qoa4p_9L2F9YIlqj0Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=ERM3qoa4p_9L2F9YIlqj0Q',
            'review_count': 3589,
            'categories': [
              {
                'alias': 'seafood',
                'title': 'Seafood'
              }
            ],
            'rating': 4.0,
            'coordinates': {
              'latitude': 47.6054699,
              'longitude': -122.34092
            },
            'transactions': [
              'delivery'
            ],
            'price': '$$$',
            'location': {
              'address1': '1201 Alaskan Way',
              'address2': '',
              'address3': 'Pier 56',
              'city': 'Seattle',
              'zip_code': '98101',
              'country': 'US',
              'state': 'WA',
              'display_address': [
                '1201 Alaskan Way',
                'Pier 56',
                'Seattle, WA 98101'
              ]
            },
            'phone': '+12066234340',
            'display_phone': '(206) 623-4340',
            'distance': 836.0363533530226
          },
          {
            'id': 'Lw7NmZ3j-WEye97ywEmkXQ',
            'alias': 'vons-1000-spirits-seattle-4',
            'name': 'Von\'s 1000 Spirits',
            'image_url': 'https://s3-media1.fl.yelpcdn.com/bphoto/iUTo8Vc5is6j5dO358VWTg/o.jpg',
            'is_closed': false,
            'url': 'https://www.yelp.com/biz/vons-1000-spirits-seattle-4?adjust_creative=ERM3qoa4p_9L2F9YIlqj0Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=ERM3qoa4p_9L2F9YIlqj0Q',
            'review_count': 1802,
            'categories': [
              {
                'alias': 'newamerican',
                'title': 'American (New)'
              },
              {
                'alias': 'burgers',
                'title': 'Burgers'
              },
              {
                'alias': 'pubs',
                'title': 'Pubs'
              }
            ],
            'rating': 4.5,
            'coordinates': {
              'latitude': 47.606565,
              'longitude': -122.338337
            },
            'transactions': [
              'delivery',
              'restaurant_reservation',
              'pickup'
            ],
            'price': '$$',
            'location': {
              'address1': '1225 1st Ave',
              'address2': '',
              'address3': '',
              'city': 'Seattle',
              'zip_code': '98101',
              'country': 'US',
              'state': 'WA',
              'display_address': [
                '1225 1st Ave',
                'Seattle, WA 98101'
              ]
            },
            'phone': '+12066218667',
            'display_phone': '(206) 621-8667',
            'distance': 690.7900253149166
          },
          {
            'id': 'lqxaHsByP4IDsWlrqXhCDQ',
            'alias': 'tats-delicatessen-seattle',
            'name': 'Tat\'s Delicatessen',
            'image_url': 'https://s3-media4.fl.yelpcdn.com/bphoto/lH44FL3TivTFgJCjDNWnJA/o.jpg',
            'is_closed': false,
            'url': 'https://www.yelp.com/biz/tats-delicatessen-seattle?adjust_creative=ERM3qoa4p_9L2F9YIlqj0Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=ERM3qoa4p_9L2F9YIlqj0Q',
            'review_count': 1150,
            'categories': [
              {
                'alias': 'delis',
                'title': 'Delis'
              },
              {
                'alias': 'cheesesteaks',
                'title': 'Cheesesteaks'
              }
            ],
            'rating': 4.5,
            'coordinates': {
              'latitude': 47.6015989850198,
              'longitude': -122.332317061304
            },
            'transactions': [
              'delivery',
              'pickup'
            ],
            'price': '$$',
            'location': {
              'address1': '159 Yesler Way',
              'address2': '',
              'address3': '',
              'city': 'Seattle',
              'zip_code': '98104',
              'country': 'US',
              'state': 'WA',
              'display_address': [
                '159 Yesler Way',
                'Seattle, WA 98104'
              ]
            },
            'phone': '+12062648287',
            'display_phone': '(206) 264-8287',
            'distance': 300.3895479378003
          },
          {
            'id': 'Mh5o8RtQNNUxhoJe6BxVkg',
            'alias': 'purple-café-and-wine-bar-seattle-3',
            'name': 'Purple Café and Wine Bar',
            'image_url': 'https://s3-media3.fl.yelpcdn.com/bphoto/21QxhWyYxnlHjOBKUysvYA/o.jpg',
            'is_closed': false,
            'url': 'https://www.yelp.com/biz/purple-caf%C3%A9-and-wine-bar-seattle-3?adjust_creative=ERM3qoa4p_9L2F9YIlqj0Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=ERM3qoa4p_9L2F9YIlqj0Q',
            'review_count': 2479,
            'categories': [
              {
                'alias': 'newamerican',
                'title': 'American (New)'
              },
              {
                'alias': 'wine_bars',
                'title': 'Wine Bars'
              },
              {
                'alias': 'desserts',
                'title': 'Desserts'
              }
            ],
            'rating': 4.0,
            'coordinates': {
              'latitude': 47.60795,
              'longitude': -122.33508
            },
            'transactions': [
              'delivery'
            ],
            'price': '$$$',
            'location': {
              'address1': '1225 4th Ave',
              'address2': null,
              'address3': '',
              'city': 'Seattle',
              'zip_code': '98101',
              'country': 'US',
              'state': 'WA',
              'display_address': [
                '1225 4th Ave',
                'Seattle, WA 98101'
              ]
            },
            'phone': '+12068292280',
            'display_phone': '(206) 829-2280',
            'distance': 593.8105510194106
          },
          {
            'id': 'ps9ZlLoLYTfK87IjW9REfg',
            'alias': 'radiator-whiskey-seattle',
            'name': 'Radiator Whiskey',
            'image_url': 'https://s3-media3.fl.yelpcdn.com/bphoto/W9DnG_PyGHOtApxbAoFOqA/o.jpg',
            'is_closed': false,
            'url': 'https://www.yelp.com/biz/radiator-whiskey-seattle?adjust_creative=ERM3qoa4p_9L2F9YIlqj0Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=ERM3qoa4p_9L2F9YIlqj0Q',
            'review_count': 1261,
            'categories': [
              {
                'alias': 'newamerican',
                'title': 'American (New)'
              },
              {
                'alias': 'cocktailbars',
                'title': 'Cocktail Bars'
              },
              {
                'alias': 'comfortfood',
                'title': 'Comfort Food'
              }
            ],
            'rating': 4.5,
            'coordinates': {
              'latitude': 47.608949,
              'longitude': -122.340599
            },
            'transactions': [
              'delivery'
            ],
            'price': '$$',
            'location': {
              'address1': '94 Pike St',
              'address2': 'Ste 30',
              'address3': '',
              'city': 'Seattle',
              'zip_code': '98101',
              'country': 'US',
              'state': 'WA',
              'display_address': [
                '94 Pike St',
                'Ste 30',
                'Seattle, WA 98101'
              ]
            },
            'phone': '+12064674268',
            'display_phone': '(206) 467-4268',
            'distance': 973.5058464656514
          }
        ],
        'total': 2100,
        'region': {
          'center': {
            'longitude': -122.3300624,
            'latitude': 47.6038321
          }
        }
      };
      
      const expected = mungeReviews(data);

      expect(expected).toEqual(expectation);
    });
  });
});
