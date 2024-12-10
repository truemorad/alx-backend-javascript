export default class ALXCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  // getters
  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  // setters
  set name(new1) {
    if (typeof new1 !== 'string') {
        throw new TypeError('Name must be a string');
      }
    this._name = new1;
  }

  set length(new2) {
    if (typeof new2 !== 'number') {
        throw new TypeError('Length must be a number');
      }
    this._name = new2;
  }

  set students(new3) {
    if (new3 instanceof Array) {
        this._students = students;
      } else {
        throw new TypeError('Students must be an Array of strings');
      }
  }
}
