

export class Athlete {
    rank:string;
    firstname!: string;
    lastname!: string;
    pb!: string;
    club!: string;
    sb!: string;
    location!: string;
    date!: string;
    coach?:string;
  
    constructor(rank:string,firstname: string,lastname:string,pb:string,club:string,sb:string,location:string,date:string,coach?:string) {
        this.rank = rank
        this.firstname = firstname
        this.lastname = lastname
        this.pb = pb
        this.club = club
        this.sb = sb
        this.location = location
        this.date = date
        this.coach = coach
    }
  
    
  }