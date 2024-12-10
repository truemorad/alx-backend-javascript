export default class ALXCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  // name
  // getter
  get name() {
    return this._name;
  }

  // setter
  set name(name) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = name;
  }

  // length
  // getter
  get length() {
    return this._length;
  }

  // setter
  set length(length) {
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = length;
  }

  // students
  // getter
  get students() {
    return this._students;
  }

  // setter
  set students(students) {
    if (students instanceof Array) {
      this._students = students;
    }
    throw new TypeError('Students must be an Array of strings');
  }
}
