// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G'];
    return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
    const newStrand = [];
    for (let i = 0; i < 15; i++) {
        newStrand.push(returnRandBase());
    }
    return newStrand;
};

const pAequorFactory = (specimenNum, dna) => {
    return {
        specimenNum: specimenNum,
        dna: dna,
        mutate() {
            // Generate a random dna index
            let selectRandomIndex = Math.floor(Math.random() * 15);
            let getRandomBase;
            // Generate a random base and store it in getRandomBase while the random base is equal to the one currently existing at dna[selectRandomIndex]
            do {
                getRandomBase = returnRandBase();
            } while (getRandomBase === this.dna[selectRandomIndex]);
            // Mutate this.dna with the new randomly generated base
            this.dna[selectRandomIndex] = getRandomBase;
            return this.dna;
        },
        compareDNA(pAequorObj) {
            let totalIdenticalBases = 0;
            for (let i = 0; i < 15; i++) {
                if (pAequorObj.dna[i] === this.dna[i]) {
                    totalIdenticalBases += 1;
                }
            }
            let percentage = (totalIdenticalBases / 15) * 100;
            console.log(
                `speciment ${pAequorObj.specimenNum} and specimen ${this.specimenNum} have ${percentage}% DNA in common`
            );
        },
        willLikelySurvive() {
            let numOfCOrGBases = 0;
            this.dna.forEach(element => {
                if (element === 'C' || element === 'G') {
                    numOfCOrGBases += 1;
                }
            });
            let percentage = (numOfCOrGBases / 15) * 100;
            return percentage >= 60;
        },
    };
};

const createThirtypAequor = function () {
    const survivingSpecimen = [];
    let idCounter = 1;

    while (survivingSpecimen.length < 30) {
        let newOrg = pAequorFactory(idCounter, mockUpStrand());
        if (newOrg.willLikelySurvive()) {
            survivingSpecimen.push(newOrg);
        }
        idCounter++;
    }
    return survivingSpecimen;
};


