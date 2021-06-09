export default class Ship {
  id = null;
  name = null;
  color = null;
  position = null;

  constructor(id, name, color, position = null) {
    this.id = id;
    this.name = name;
    this.color = color;
    this.position = position;
  }
}
