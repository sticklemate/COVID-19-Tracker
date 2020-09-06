import React from 'react';
import {Cards, Chart, CountryPicker} from './components';
import styles from './App.module.css';
import {fetchData} from './api';

class App extends React.Component {

//Don't need React constructor since below will immediately constructed in the React back end
    state = {

        data : {},
    }

    async componentDidMount (){
        const fetchedData = await fetchData();
        this.setState({ data : fetchedData});
    
    }

    render(){

        const { data } = this.state;

        return (
            <div className={styles.container}>
            <Cards data={ data }/>
            <CountryPicker />
            <Chart />            
            </div>
        )
    }
}

export default App;
