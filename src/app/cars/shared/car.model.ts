export class Car {

    private _isRunning: boolean;

    constructor(
        public id: number,
        public brand: string,
        public model: string,
        public horsePower: number,
        public weight: number,
        public price: number,
        public nbSeats: number) {

            this._isRunning = false
        

        }

    start():boolean {
        if (this._isRunning) {
            console.log("The car is already started!");
            return false;
        }

        //else
        console.log("Car starting...");
        this._isRunning = true;
        return true;
    }

    stop():boolean {

        if (!this._isRunning) {
            console.log("The car is already stopped!")
            return false;
        }

        //else
        console.log("car stopping...")
        this._isRunning = false;
        return true;
    }


    move(d:number): void {
        
        if (this._isRunning) {
            console.log("The car moved" + d + "meters. ");
        } else {
            console.log("The car isn't started ! ")
        }
    }

}