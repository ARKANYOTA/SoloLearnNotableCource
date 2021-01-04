
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
// ReactDOM.render(<Home />, document.querySelector('#app'))



// =====================================================================
// MENU
// =====================================================================


class HamburgerMenu extends React.Component{
    constructor(props){
        super(props)
        this.state = {isHover : false}

    }
    render() {
        const bordure = {
            border: "1px solid white",
            backgroundColor: "transparent",
          
        };
        return (
            <button onClick={this.props.onClick} style={bordure}>
                <div 
                    onMouseEnter={() => 
                        this.setState(function (state, props) {
                            return {isHover : true}
                        })}
                    onMouseLeave={() => 
                        this.setState(function (state, props) {
                            return {isHover : false}
                        })}>
                    {this.state.isHover ? <div>
                        <svg width="50px" height="50px">
                            <line x1="40" y1="10" x2="10" y2="40" strokeLinecap="round" strokeWidth="10" stroke="white"/>
                            <line x1="10" y1="10" x2="40" y2="40" strokeLinecap="round" strokeWidth="10" stroke="white"/>
                        </svg>
                    </div>:<div>
                        <svg width="50px" height="50px">
                            <line x1="10" y1="10" x2="40" y2="10" strokeLinecap="round" strokeWidth="10" stroke="white"/>
                            <line x1="10" y1="25" x2="40" y2="25" strokeLinecap="round" strokeWidth="10" stroke="white"/>
                            <line x1="10" y1="40" x2="40" y2="40" strokeLinecap="round" strokeWidth="10" stroke="white"/>
                        </svg>
                    </div>}
                </div>
            </button>
        );
    }
}
class ToutesOption extends React.Component {
    constructor(props){
        super(props)
        this.touteslesoptions = ["Acceuil", "ARKANYOTA"]
    }
    render(){
        return <React.Fragment>
            <ul>
                {this.touteslesoptions.map(index => <li key={index}>{index}</li>)}
            </ul>
        </React.Fragment>
    }
}
class ShowMenu extends React.Component {
    constructor(props){
        super(props)
        this.touteslesoptions = ["Acceuil", "ARKANYOTA"]
    }
    render(){
        const laborder = {
            position: "absolute",
            border:"1px solid",
            width:"200px",
            top: "20%",
            height:"59%",
            bottom: "20%",
            borderColor: "white"
        }
        return <div >
            <div style={laborder}>
                <p>AH</p>
                <ToutesOption></ToutesOption>
            </div>
            
        </div>
    }
}
class MenuButton extends React.Component {
    constructor(props){
        super(props)
        this.state = {isOpen : false}
        this.close = this.close.bind(this)
        this.open = this.open.bind(this)
    }
    open(){
        this.setState(function (state, props) {
            return {isOpen : false}
        })
    }
    close(){
        this.setState(function (state, props) {
            return {isOpen : true}
        })
    }
    onClickOption(){
        return (this.state.isOpen ? this.open.bind(this) : this.close.bind(this))
    }
    OpenOrCloseOption(){
        return (this.state.isOpen ? "Open" : "Close")
    }
    render(){
        return <React.Fragment>
            {this.state.isOpen && <ShowMenu/>}
            <HamburgerMenu onClick={this.onClickOption()}/>
            
        </React.Fragment>
    }
    //<button className="MenuButton" onClick={this.onClickOption()}><HamburgerMenu/></button>

//            <p>isOpen : {this.state.isOpen.toString()}</p>

}

Increment.defaultProps = {
    options : ["Home", "Contacts"]
};

function Menu() {
    return <React.Fragment>

        <MenuButton />

    </React.Fragment>
    
}
ReactDOM.render(<Menu />, document.querySelector('#menu'))


