
export class Car {

  private _color!: string;
  private _brand!: string;
  private _model!: string;
  private _engine!: string;

  get color(): string {
    return this._color;
  }

  set color(value: string) {
    if (value) {
      this._color = value;
    }
  }

  get brand(): string {
    return this._brand;
  }

  set brand(value: string) {
    this._brand = value;
  }

  get model(): string {
    return this._model;
  }

  set model(value: string) {
    this._model = value;
  }

  get engine(): string {
    return this._engine;
  }

  set engine(value: string) {
    this._engine = value;
  }

  public helloNewCar(): string {
    return 'Hello new Car';
  }
}
