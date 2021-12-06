import React from "react";

export default class Portfolio extends React.Component {

    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        let data;
        fetch('https://crudcrud.com/api/ddec2b0d54154478bd466389a093ae60/username')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data)
                this.data = data;
            })
        return data;
    }

    postData() {
        const data = { username: 'example' + Math.random(0, 10000) };

        (async() => {
            const rawResponse = await fetch('https://crudcrud.com/api/ddec2b0d54154478bd466389a093ae60/username', {
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(data)
            });
            const content = await rawResponse.json();
          
            console.log(content);
        })()
        }

        deleteData() {
            fetch('https://crudcrud.com/api/ddec2b0d54154478bd466389a093ae60/username')
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
                            const rawResponse = await fetch(`https://crudcrud.com/api/ddec2b0d54154478bd466389a093ae60/username/${this.data[i]._id}`, {
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
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <button onClick={() => this.postData()}> Post DATA </button>
                <button onClick={() => this.deleteData()}> Delete DATA </button>
                <p>
                    Probs put some stuff here
                </p>
            </div>
        )
    }
}
