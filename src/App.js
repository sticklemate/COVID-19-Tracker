/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import {Cards, Chart, CountryPicker} from './components';
import styles from './App.module.css';
import {fetchData} from './api';
import covidImg from './images/covid_img.png'

/* Shows a Line Chart for Worldwide and Bar chart for Individual countr */

class App extends React.Component {

//Don't need React constructor since below will immediately constructed in the React back end
    state = {
        //Since App is parent component of both Cards, Charts, country picker
        data : {},
        country:'',
    }

    async componentDidMount (){
        const fetchedData = await fetchData();
        this.setState({ data : fetchedData});
    
    }

    handleCountryChange = async (country)=>{
        //fetch the data then set the state
        const fetchedData = await fetchData(country);
        
        this.setState({ data : fetchedData, country: country});
        
    }

    render(){

        const { data, country } = this.state;

        return (
            <div className={styles.container}>
            <img className ={styles.image} src = {covidImg} alt="COVID-19 img"/>
            <Cards data={ data }/>
            <CountryPicker handleCountryChange={this.handleCountryChange}/>
            <Chart data={data} country={country}/>            
            </div>
        )
    }
}

export default App;
