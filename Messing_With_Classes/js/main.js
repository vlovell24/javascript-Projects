class HospitalEmployee {
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }

  get name() {
    return this._name;
  }

  get remainingVacationDays() {
    return this._remainingVacationDays;
  }

  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
}

class Nurse extends HospitalEmployee {
  constructor(name, certifications) {
    super(name);
    this._certifications = certifications;
  }
  get certs() {
    return this._certifications;
  }
}

function test() {
  let name = document.getElementById('name').value;
  let certifications = document.getElementById('certifications').value;
  let lady = new Nurse(name, certifications);

  document.getElementById('nurseName').innerHTML = lady.name;
  document.getElementById('nurseCerts').innerHTML = lady.certs;
}


