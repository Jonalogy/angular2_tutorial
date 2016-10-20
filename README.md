# Angular 2 Crash Course

## 1. My first Angular 2 app

We're starting with the bare minimum setup for an app with angular 2 framework, lets do a few more setups.

* Run `npm install` on terminal to install required dependencies.

For this course, we will be doing Angular 2 in typescript, ensure that your text editor has typescript.  

* For Atom users, install ** atom-typescript** package.
* Once you have it installed, whenever you create a typescript file (`.ts`), it will create 2 more additional files (`.js.map`) and (`.js`).
* **We will be working only with (`.ts`) files.**

## 2. main.ts
Angular's way of doing things is to break things down into _Modules_. These modules require a way to converge, and we will require `main.ts` for that.

From terminal run `touch main.ts` to our _main.ts_ and copy the following code block into it. Do not worry about the code, just follow thru and you can read up more from the official docs. Our aim is to get you familiarized in navigating through components.

```javascript
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

const platform = platformBrowserDynamic();

platform.bootstrapModule(AppModule);
```

## 3. AppModule (Root Component)

Every Angular 2 app has an AppModule. AppModule is a component, but it is easier to think of it as a root module because all components will come together in a component before tying into AppModule. From terminal run `touch app.module.ts`.

Ever component module has 3 main sections:
1. Dependencies
2. Configuration
3. Module's Class

#### 3.1 Importing your first Angular 2 native modules (Dependencies)

Angular 2 identifies the AppModule as the root module with a _decorator_ called `@NgModule`. A decorator is simply a _directive_ prefixed with (`@`).

> Importing Angular 2's libraries gives your module file access to the directives. All module imports **must** be declared at the top of the your working module file. In layman's terms, a _directive_ is just a specific instruction for Angular 2.

Before we use `@NgModule`, we will need to bring in the directive's `core` library module.

**Import syntax:**
```javascript
import { NgModule } from '@angular/core';
```

Great, one more practice! `BrowserModule` is a directive from Angular 2's core module called `platform browser`. It is necessary if your app is meant for browsers.

```javascript
import { BrowserModule } from '@angular/platform-browser';
```
> Full list of angular main [angular libraries](https://angular.io/docs/ts/latest/api/) can be found here.

> Eventually, you will create your own modules and you will import them with the same syntax.

#### 3.2 Configuring your component
Copy this after your dependencies:

```javascript
@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
```
* imports: This is where all the imported native libraries will be declared.
* declarations: Declare all the modules you are to create here.
* bootstrap: Usually, you will bootstrap only the AppComponent or root component.

#### 3.3 AppModule Class
The following syntax block belongs to the bottom of the file. This is suppose to hold the overlaying logic of your component module. Since we do not require the root component to do anything for now, just copy the following syntax for now.

```javascript
export class AppModule { }
```

#### 3.4 Almost there
Now that you've created the root module successfully, we need to make import it to _main.ts_. This will be the only module you ever import into _main.ts_.

```javascript
import { AppModule } from '../app-module/app.module';
```

## 4. My First Component

Technically it is your second since AppModule is the root component. We are creating the head component and by convention it is called AppComponent. All other components will tie up in this component before combining as a module in AppModule.

#### 4.1 app.component.ts
Within the `app` folder, create an appComponent directory and perform `touch app.component.ts` within it. **_Reminder_**: We are working only with (`.ts`) here.

#### 4.2 Making your component known

Every component has a `@Component` decorator and it needs a `Component` directive. Time to work that core, you know the drill:

```javascript
import { Component } from '@angular/core';
```

#### 4.3 Configuring That Thing

Component configuration syntax:
```javascript
@Component({
  selector: /* component-tag-name */ ,
  templateUrl: './app.component.html',
  /* or */ template: ' <!-- In HTML--> ' ,
  styleUrls: ['./app.component.css'],
/* or */ styles: [ /* css syntax here */ ]
})
```

**Key notables:**
* This component will be called using the declared selector e.g. `<component-tag-name>`
* Either the template is declared using `template`:, or a html template is referred using `templateURL:`.
* Styles must be encased within the tuples `[ ]` either in css syntax or a path to the file.

For now, lets use the the following configuration:
```javascript
@Component({
  selector: 'my-app',
  templateUrl: 'app/app-component/app.component.html',
  styleUrls: ['app/app-component/app.component.css']
})
```

Create your own custom `app.component.html` and `app.component.css` within the app-component directory.

#### 4.4 Class it

We want to export our component, like before we need to make our component a class. All future logics will go within the curlies:
```javascript
export class AppComponent { }
```
Now you can export your component module as `AppComponent`.


## 5 Combining Everything.

1. Insert your component's selector's name into **index.html** `<body>`.
2. Import `AppComponent` into `AppModule` as a dependency

```javascript
import { AppComponent }   from '../app-component/app.component';
```

3. Declare it in `AppModule`'s configuration in declaration's array. All future child components should be declared here too.
4. All future child components' selectors will be arranged in AppComponent's template file.
5. Run `npm start`.

Congratulations, you now have the basic understanding of Angular 2's components and its modular advantages.
