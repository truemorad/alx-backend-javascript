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
    this._name = new1;
  }

  set length(new2) {
    this._name = new2;
  }

  set students(new3) {
    this._name = new3;
  }
}
