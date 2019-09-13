import React, { Component } from 'react';
import axios from 'axios';

class Autocomplete extends Component {
    state = {
        items: [{}],
        // movies: [{}],
        input: '',
        display: false
    }

    componentDidMount() {
        this.getGhibli()
    }
    componentDidUpdate() {
        const input = this.state.input
        const list = this.state.items
        // this.getValue()
        // console.log(this.state.input);
        this.autoComplete(input, list)


    }
    getGhibli = async () => {
        const res = await axios.get("https://ghibliapi.herokuapp.com/films")
        const data = await res.data
        console.log("data", data, typeof data)
        this.setState({ items: data })
        // this.setState({ movies: data.title })
    }
    getTitle = () => {


    }

    displayButton = () => {
        this.state.display === false ? this.setState({ display: true }) : this.setState({ display: false })
    }
    getValue = (e) => {
        const value = e.target.value
        value.length === 0 ? this.setState(() => ({ input: [] })) : this.setState(({ input: value }))

    }
    autoComplete = (input, list) => {
        const firstletter = input.charAt(0)

        // console.log(firstletter)
    }




    render() {
        return (
            <div className='Autocomplete' >
                <div> {this.state.input} </div>
                <input onChange={this.getValue} type="text" />

                <div className="Autocomplete-display">

                </div>
                <div className="Autocomplete-display test ">
                    {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
                    <button onClick={this.displayButton}> 👀 </button>
                    {/* <button onClick={this.getTitle}>test</button> */}
                    <ul>
                        {this.state.display === true ? this.state.items.map((item) =>
                            <li key={item.id} > {item.title} </li>)
                            // <img src={item.l}  alt=""/> 
                            : null
                        }
                    </ul>
                </div>
            </div>
        )
    }
}

export default Autocomplete;