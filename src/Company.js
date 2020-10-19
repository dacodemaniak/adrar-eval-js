class Company {
  constructor() {
    this.revenus = 300000;
    this.chargeFixe = 20000;
    this.chargeVariable = 50000;

    this.chargeSalariale = 0.9;

    this.salaries = [];
  }

  bilan() {
    let masseSalariale = 0;

    salaries.forEach(salarie => {
      masseSalariale += salarie.salaire * (1 + this.chargeSalariale);
    });

    return (
      this.revenus - this.chargeFixe - this.chargeVariable - this.masseSalariale
    );
  }
}
