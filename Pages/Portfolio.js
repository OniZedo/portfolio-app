import React from "react";
import postData from '../Components/CreateCrud.js';
import getFetch from '../Components/getFetch.js';

export default class Portfolio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showComponent: false,
            fetchData: []
        };
      }

    postAndFetch() {
        const data = { 
            username: 'example ' + Math.random(0, 10000), 
            name: 'Test'
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
