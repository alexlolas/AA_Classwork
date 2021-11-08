import { $dataMetaSchema } from "ajv"


export const fetchWeather = () => {
  return $dataMetaSchema.ajax({
    method: 'get',
    url: `api.openweathermap.org/data/2.5/weather?lat=${Location.coords.latitude}&lon=${Location.coords.longitude}&appid=4f2e0793e062aeec42d57be95b4061fe`
  })
}