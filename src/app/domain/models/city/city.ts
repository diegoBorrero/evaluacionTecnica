export class City {
    id: number;
    name: string;
    constructor(props? : City){
        if(props){
            Object.assign(this,props);
        }
    }
}
