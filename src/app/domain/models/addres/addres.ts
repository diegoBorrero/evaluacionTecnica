export class Addres {
    addres: string;
    deliverDate: Date;

    constructor(props: Addres){
        if(props){
            Object.assign(this,props);
        }
    }
}
