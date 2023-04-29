"use strict";
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    move(xPosition, yPosition) {
        this.x += xPosition;
        this.y += yPosition;
    }
}
class Rectangle {
    constructor(firstCorner, secondCorner, thirdCorner, fourthCorner) {
        this.firstCorner = firstCorner;
        this.secondCorner = secondCorner;
        this.thirdCorner = thirdCorner;
        this.fourthCorner = fourthCorner;
    }
    move(xPosition, yPosition) {
        this.firstCorner.move(xPosition, yPosition);
        this.secondCorner.move(xPosition, yPosition);
        this.thirdCorner.move(xPosition, yPosition);
        this.fourthCorner.move(xPosition, yPosition);
    }
    getArea() {
        let aSide = Math.sqrt(Math.pow(this.firstCorner.x - this.secondCorner.x, 2) + Math.pow(this.firstCorner.y - this.secondCorner.y, 2));
        let bSide = Math.sqrt(Math.pow(this.firstCorner.x - this.fourthCorner.x, 2) - Math.pow(this.firstCorner.y - this.fourthCorner.y, 2));
        return aSide * bSide;
    }
}
