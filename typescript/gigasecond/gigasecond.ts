export class Gigasecond {
  private readonly dateInMiliseconds: number; 
  
  public constructor(initialDate: Date){
    this.dateInMiliseconds = initialDate.getTime(); 
  }
  
  public date(){
    return new Date(this.dateInMiliseconds + 1e12);
  }
}


// export class Gigasecond {
//   private readonly dateInMiliSeconds: number;
//   private correctDate: Date = new Date();

//   public constructor(initialDate: Date) {
//     this.dateInMiliSeconds = initialDate.getTime();
//   }

//   private calculeDate(): void {
//     this.correctDate = new Date(this.dateInMiliSeconds + 1e12);
//   }
  
//   public date(): Date {
//     this.calculeDate();
//     return this.correctDate;
//   }
// }
