import React,{ useState} from 'react';
import './App.css';



// change text with functional component
        function App() {
            const [text,setText] = useState('hello')
            const [count, setCount] = useState(0)
            let changeText = () => {
            setText( ' hello how are you ')
        }
        let decrease = () => {
                setCount((prev) => prev - 1)
            }
            let increase = () => {
                setCount((prev) => prev + 1)
            }
        return (
            <div className='top'>
                <h1>Changes text on click</h1>
                <br/>
                <h3>{text}</h3>
                <br/>
                <button onClick={changeText}>Click me!</button>
                <br/>
                <br/>
                <h1>increase and decrease numbers with button</h1>
                <div className='increase'>
                                <button onClick={increase}>Increase</button>
                                <h3>Count: {count}</h3>
                                <button onClick={decrease}>Decrease</button>
                </div>
            </div>
        )
        }

// // change text with class component
//     class App extends Component {
//     constructor(){
//         super();
//         this.state = {
//             text: 'hello how are you'
//             }
//         }
//         textChanger(){
//                 this.setState({
//                     text : 'thank you for being stupid'
//                 })
//             }
//         render() {
//             return (
//                 <div>
//                     <h3>{this.state.text}</h3>
//                     <button onClick={() => this.textChanger()}>Click me</button>
//                 </div>
//             )
//         }
//     }


//increase numbers with class component
    // class App extends Component {
    //     constructor(){
    //         super();
    //         this.state = {
    //             count : 0
    //         }
    //     }
    //     increase(){
    //         this.setState({
    //             count: this.state.count + 1
    //         })
    //     }
    //     render() {
    //         return (
    //             <div>
    //                 <h3>Count: {this.state.count}</h3>
    //                 <button onClick={()=> this.increase()}>Click</button>
    //             </div>
    //         )
    //     }
    // }   


export default App;