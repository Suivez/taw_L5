class Point {
    constructor(public x: number, public y: number) {}

    move(xPosition: number, yPosition: number): void {
        this.x += xPosition;
        this.y += yPosition;
    }
}

class Rectangle {
    constructor(public firstCorner: Point, public secondCorner: Point, public thirdCorner: Point, public fourthCorner: Point) {}

    move(xPosition: number, yPosition: number): void {
        this.firstCorner.move(xPosition, yPosition);
        this.secondCorner.move(xPosition, yPosition);
        this.thirdCorner.move(xPosition, yPosition);
        this.fourthCorner.move(xPosition, yPosition);
    }

    getArea(): number {
        let aSide = Math.sqrt(Math.pow(this.firstCorner.x - this.secondCorner.x, 2) + Math.pow(this.firstCorner.y - this.secondCorner.y, 2));
        let bSide = Math.sqrt(Math.pow(this.firstCorner.x - this.fourthCorner.x, 2) - Math.pow(this.firstCorner.y - this.fourthCorner.y, 2));

        return aSide * bSide;
    }
}