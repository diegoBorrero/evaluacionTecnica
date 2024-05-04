import { Observable } from "rxjs";
import { Departament } from "../departament";

export abstract class DepartamentGateway {
    abstract getAllDepartament(): Observable<Departament[]>;
}
