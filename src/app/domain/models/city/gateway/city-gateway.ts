import { Observable } from "rxjs";
import { City } from "../city";

export abstract class CityGateway {
    abstract getCitiesByDepartamentId(departamentId: number):Observable<City[]>;
}
