# Property & Event Binding
Property and event binding allow our views and components to communicate with each other.

## Property

```
//Image tag
<img src="logo.png" />
//Component Code
Component{
	imageURL = "logo.png";
	myMethod(){
		return "Input Placeholder";
	}
}
//View
<img [src]="imageURL" />
//OR
<img src="{{imageURL}}" />
//OR
<img bind-src="imageURL" />
<input value="myMethod()" />
```

## Event Binding


```
//Component Code
Component{
	text = "";
	myMethod(event:any,text:string){
		alert(text);
	}
	updateText(event:string){
		this.text = event.target.value;
	}
}
<img [src]="imageURL" (click)="myMethod($event,'Hello')" />

<input (keyup)="updateText($event)"
```

# Class and CSS Binding

```
@Component({
    selector:"app",
    template : `
        <h1>My First Angular App</h1>
        <button class="my-button" [class.extraclass]="someProperty">Button</button>
<button class="my-button" [style.border]="someProperty?'5px solid yellow':'5px solid red'">Button</button>
<br/>
<button class="my-button" [ngClass]="setClass()">Button</button>
<button class="my-button" [ngStyles]="setClass()">Button</button>
    `,
    styles:[`
        .extraclass{}
    `]
    
})
export Component{
    someProperty=true;
    anotherProperty=true;
    setClass(){
        let classes = {
            extraClass: this.someProperty,
            anotherClass : this.anotherProperty
        }
        return classes;
    }
    setStyles(){
        let styles = {
            'font-weight': this.someProperty?'bold':'italic',
            'color' : this.anotherProperty?'red':'green',
        }
        return classes;
    }
}
```
