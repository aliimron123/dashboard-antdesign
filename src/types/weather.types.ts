export interface ResponseData {
  data: DataWeather[];
}

export interface DataWeather {
  location: {
    name: string;
    region: string;
    country: string;
    lat: Float32Array;
    lon: Float32Array;
    tz_id: string;
    localtime_epoch: number;
    localtime: string;
  };
  current: {
    last_updated_epoch: number;
    last_updated: string;
    temp_c: Float32Array;
    temp_f: Float32Array;
    is_day: number;
    condition: {
      text: string;
      icon: string;
      code: number;
    };
    wind_mph: Float32Array;
    wind_kph: Float32Array;
    wind_degree: number;
    wind_dir: string;
    pressure_mb: Float32Array;
    pressure_in: Float32Array;
    precip_mm: Float32Array;
    precip_in: Float32Array;
    humidity: Float32Array;
    cloud: Float32Array;
    feelslike_c: Float32Array;
    feelslike_f: Float32Array;
    windchill_c: Float32Array;
    windchill_f: Float32Array;
    heatindex_c: Float32Array;
    heatindex_f: Float32Array;
    dewpoint_c: Float32Array;
    dewpoint_f: Float32Array;
    vis_km: Float32Array;
    vis_miles: Float32Array;
    uv: Float32Array;
    gust_mph: Float32Array;
    gust_kph: Float32Array;
  };
}
