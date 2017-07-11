# ReduxSimpleStarter

Interested in learning [Redux](https://www.udemy.com/react-redux/)?

### Getting Started

There are two methods for getting started with this repo.

#### Familiar with Git?
Checkout this repo, install dependencies, then start the gulp process with the following:

```
> git clone https://github.com/StephenGrider/ReduxSimpleStarter.git
> cd ReduxSimpleStarter
> npm install
> npm start
```

#### Not Familiar with Git?
Click [here](https://github.com/StephenGrider/ReactStarter/releases) then download the .zip file.  Extract the contents of the zip file, then open your terminal, change to the project directory, and:

```
> npm install
> npm start
```
react-redux#connect = HOC liga o provider(que possui o Redux Store
aos componentes melhorados via connect).

**Parte do componente Router, se o Route tiver um
filho Route, o componente pai(Header) será o responsável
a renderizar o filho chamando abaixo**

    {this.props.children}

<Route> (Pai)
    <Route /> (Filho)
<Route>