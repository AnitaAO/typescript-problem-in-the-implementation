export class LikeComponent {

  constructor(public _likesCount: number, public _isSelected: boolean) {}


  
  onClick() {
    this._likesCount += this._isSelected ? -1 : +1;
    this._isSelected = !this._isSelected;
  }

  get likesCount() {
    return this._likesCount;
  }

  get isSelected() {
    return this._isSelected;
  }

  definition(){
    let x: number = 32;
    let result: string;
    x === 32 ? result = 'Lower figure' : result = 'Higher figure';
    console.log(result)
  }

}


export class UnlikeComponent {

}
