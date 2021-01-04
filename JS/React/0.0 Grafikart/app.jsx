/* JS Clasic

let n = 0;
function render(){
    const title = React.createElement('h1', {}, 
        "Bonjour ",
        React.createElement("span",{}, n)
    )
    ReactDOM.render(title, document.querySelector('#app'))

}

window.setInterval(() => {
    n++
    render()
}, 1000)
*/


// JSX

/*
// Dans les {} utilisation de js valide
// Plutot utilisé className que class
// React.Fragment permet de mettre plusieurs element
let n = 0;
function render(){
    const items = [
        "Element A",
        "Element B",
        "Element C",
        "Element D"
    ]
    const lis = items.map((item, k) => <li key={k}>{item}</li>) // ForEach JSX
    const title = <React.Fragment>
        <h1 className="LaClasse" is="Unid">Bonjour <span>{n}</span></h1>
        <ul>
            {lis}
        </ul>
    </React.Fragment>

    ReactDOM.render(title, document.querySelector('#app'))

}

window.setInterval(() => {
    n++
    render()
}, 1000)
*/
//children => de que il y a <SayHello name="Hello">{ici}</SayHello>
// {name, children} remplace props
// name est en fait props.name

/*
function SayHello ({name, children}){
    return <div>
        <h1>Hello {name}</h1>
        <p>Description: {children}</p>

    </div>
}
*/


class SayHello extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello {this.props.name}</h1>
                <p>Description: {this.props.children}</p>
            </div>
        )
    }
}
class Clock extends React.Component {

    constructor (props){
        super(props)
        this.state = {date: new Date()}
        this.timer = null
    }
    componentDidMount(){
        this.timer = window.setInterval(this.tick.bind(this, 1000))
    }
    componentWillUnmount(){
        window.clearInterval(this.timer)
    }

    tick(){
        this.setState({date: new Date()})
    }

    render() {
        const date = new Date()
        return <div>
                <p>Il est maintenant {date.toLocaleDateString()} {date.toLocaleTimeString()}</p>
            </div>
    }
}
class Increment extends React.Component {
    constructor(props){
        super(props)
        this.state = {compteur : props.start}
        this.timer = null
    }
    
    componentDidMount(){
        window.setInterval(this.tick.bind(this), 1000)

    }
    componentWillUnmount(){
        window.clearInterval(this.timer)

    }
    tick(){
        this.setState(function (state, props) {
            return {compteur : this.state.compteur + props.step}
        })
    }
    render(){
        return <React.Fragment>
            <p>Compteur: {this.state.compteur}</p>
        </React.Fragment>
    }
}
Increment.defaultProps = {
    step : 1,
    start : 0
};
class ManualIncrement extends React.Component {
    constructor(props){
        super(props)
        this.state = {compteur : 2}
        this.timer = null
    }
    

    componentWillUnmount(){
        window.clearInterval(this.timer)

    }
    increment(){
        this.setState(function (state, props) {
            return {compteur : this.state.compteur + 1}
        })
    }
    render(){
        return <React.Fragment>
            <p>Increamenter: {this.state.compteur}<button onClick={this.increment.bind(this)}>Hello</button></p>
        </React.Fragment>
    }

}
class ManualPauseIncrement extends React.Component {
    constructor(props){
        super(props)
        this.state = {compteur : 2, timer : null}
    }
    
    componentDidMount(){
        this.play()
    }

    increment(){
        this.setState(function (state, props) {
            return {compteur : this.state.compteur + 1}
        })
    }
    pause(){
        window.clearInterval(this.state.timer)
        this.setState(function (state, props) {
            return {timer : null}
        })
    }

    play(){
        window.clearInterval(this.state.timer)
        this.setState(function (state, props) {
            return {timer : window.setInterval(this.increment.bind(this), 1000)}
        })
    }

    reset(){
        this.setState(function (state, props) {
            return {compteur : 0}
        })
    }
    render(){
        return <React.Fragment>
            <p>PauseIncreamenter: {this.state.compteur} 
                {this.state.timer ? 
                    <button onClick={this.pause.bind(this)}>Pause</button> :
                    <button onClick={this.play.bind(this)}>Lecture</button>
                }
                <button onClick={this.reset.bind(this)}>Réinitialiser</button>
            </p>
        </React.Fragment>
    }

}

function Home() {
    return <React.Fragment>
        <SayHello name="Visiteur">Personnage qui visite un site</SayHello>
        <SayHello name="Everyone">Represante tout le monde</SayHello>
        <Clock />
        <Increment start={10} step={10}/>
        <Increment/>
        <ManualIncrement/>
        <ManualPauseIncrement/>
    </React.Fragment>
    
}
ReactDOM.render(<Home />, document.querySelector('#app'))





