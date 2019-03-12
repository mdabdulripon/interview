const obj = {
    x: 1,
    getX() {
        const inner = function () {
            console.log(`inner:`, this.x);
        };
        inner();
    },
}
obj.getX();

const obj1 = {
    x: 1,
    getX() {
        const inner = function () {
            console.log(`inner1:`, this.x);
        }
        inner.bind(this)();
    },
}
obj1.getX();

const obj2 = {
    x: 1,
    getX() {
        const inner = () => {
            console.log(`inner2:`, this.x);
        };
        inner();
    },
}
obj2.getX();


const obj3 = {
    x: 1,
    getX() {
        const self = this;
        const inner = function () {
            console.log(`inner3:`, self.x);
        };
        inner();
    },
}
obj3.getX();