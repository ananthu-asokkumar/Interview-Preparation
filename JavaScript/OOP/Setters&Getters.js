


class Button {

    constructor(name) {
        this.button = document.createElement('button');
        this.button.innerHTML = name;

        document.body.append(this.button);
    }


    set width(width) {
        this.button.style.width = width + "px";

    }

    set height(height) {
        this.button.style.height = height + 'px';
    }
    get width() {
        return this.button.style.width ;

    }

    get height() {
        return this.button.style.height;
    }

}


var b1 = new Button(" Clicked Me !");

b1.width = 100;
b1.height = 100;

console.log(b1.width,b1.height);