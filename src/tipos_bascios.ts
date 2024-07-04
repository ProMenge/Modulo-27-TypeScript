let itsRaining: boolean = true;

itsRaining = false;

let yearsOld: number = 22;

let altura: number = 1.75;

let nationality: string = 'Brazilian'

//Arrays devem ter tipos unicos, dessa forma não podemos ter valores de tipos diferentes em um mesmo Array

const colleagues: string[] = ['Fred', "Lima", "Luiz"]
const technology: Array<string> = ['HTML', 'CSS', 'JS']
const grades: ReadonlyArray<number> = [7, 6, 8, 9]

const list: [nome: string, isStudying: boolean, yearsOld: number] = ['Fred', true, 22]

let anaAge: number | string = 25;
anaAge = '25 anos';

let apiData: any;
apiData = true
apiData = 10;
apiData = [1, 2, 3]
apiData = 'String'

