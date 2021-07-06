export class Task {
    constructor(public idtask:number,
                public name:string,
                public description:string,
                public type:string,
                public finished:number,
                public user_iduser:number) {
        
    }
}