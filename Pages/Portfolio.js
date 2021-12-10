import React from "react";
import postData from '../Components/CreateCrud.js';
import getFetch from '../Components/getFetch.js';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';

export default class Portfolio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showComponent: false,
            fetchData: [],
            userName: '',
            name: ''
        };
      }

    postAndFetch() {
        const data = { 
            username: this.state.userName, 
            name: this.state.name
        };
        postData(data)
        .then((data) => {
            console.log(data);
            getFetch()
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data)
                this.setState({
                    showComponent: true,
                    fetchData: data
                })
            })
        })
    }

    deleteData() {
        fetch('https://crudcrud.com/api/fcf8726cc4ec4073ae6cda83e70dfdf9/username')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data)
            this.data = data;
            if(data && data.length > 0) {
                for(let i = 0; i < this.data.length; i++) {
                    console.log(this.data[i]);
                    (async() => {
                        const rawResponse = await fetch(`https://crudcrud.com/api/fcf8726cc4ec4073ae6cda83e70dfdf9/username/${this.data[i]._id}`, {
                            method: 'DELETE',
                            headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                            }
                        });
                        const content = await rawResponse.json();
                        
                        console.log(content);
                    })()
                }
            
            }
        })  
    }
    render() {
        return (
            <div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                <InputGroup className="mb-3">
                                <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                                <FormControl
                                    placeholder="Username"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                    onChange={(e) => this.setState({userName: e.target.value})}
                                />
                            </InputGroup>
                            <InputGroup className="mb-3">
                                <InputGroup.Text id="basic-addon3">
                                    https://example.com/users/
                                </InputGroup.Text>
                                <FormControl 
                                    id="basic-url" 
                                    aria-describedby="basic-addon3"
                                    onChange={(e) => this.setState({name: e.target.value})}
                                    />
                            </InputGroup>
                    <button onClick={() => this.postAndFetch()}> Post DATA </button>
                    <button onClick={() => this.deleteData()}> Delete DATA </button>
                    <p>
                        User Info
                    </p>
                </div>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    {this.state.showComponent ? this.state.fetchData.map((value, a) => (
                        <div key={value._id}>
                            <div>Username: {value.username}</div> {"\n"}
                            <div>Name: {value.name}</div> {"\n"}
                        </div>
                    )) : null} 
                </div>   
            </div>
        )
    }
}
