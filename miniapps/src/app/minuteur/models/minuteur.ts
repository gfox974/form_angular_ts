export class Minuteur {
    constructor(
        public libelle: string = "dummy",
        public timelimit: number = 30,
        public timeleft: number = timelimit,
        public running: boolean = false
    ) {}
}