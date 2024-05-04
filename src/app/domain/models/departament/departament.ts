export class Departament {
    id: number;
    name: string;

    constructor(props? : Departament){
        if(props){
            Object.assign(this,props);
        }
    }
}

