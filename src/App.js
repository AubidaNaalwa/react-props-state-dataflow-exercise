import React, { Component } from 'react';
import './App.css';
import Company from './components/Company'
import Wardrobe from './components/Wardrobe';
import Wardrobe2 from './components/Wardrobe2';
import Calendar from './components/Calendar';
import Register from './components/Register';

class App extends Component {
  constructor() {
    super()
    this.state = {
      companies: [
        { name: "Tesla", revenue: 140 },
        { name: "Microsoft", revenue: 300 },
        { name: "Google", revenue: 600 }],
      reservations: [
        { day: "Monday", time: 2000, name: "Earl" },
        { day: "Monday", time: 1845, name: "Ella" },
        { day: "Tuesday", time: 1930, name: "Linda" },
        { day: "Wednesday", time: 2015, name: "Anni" }]
    }
  }
  generateCompanyTags(companies) {
    let companyTags = []
    for (let c of companies) {
      companyTags.push(<Company name={c.name} revenue={c.revenue} />)
    }
    return companyTags
  }

  upperCase(name) {
    return name.toUpperCase()
  }

  render() {

    let companies = [
      { name: "Tesla", revenue: 140 },
      { name: "Microsoft", revenue: 300 },
      { name: "Google", revenue: 600 }]



    return (<div>
      <div className="exercise" id="spotcheck-1">
        <label>spotcheck-1:</label>
        <Company name={companies[0].name} revenue={companies[0].revenue} />
      </div>
      <div className="exercise" id="spotcheck-2">
        <label>spotcheck-2:</label>
        {this.generateCompanyTags(companies)}
      </div>
      <div className="exercise" id="spotcheck-3">
        <label>spotcheck-3:</label>
        {companies.map(c =>
          <Company
            name={this.upperCase(c.name)}
            revenue={c.revenue} />)}
      </div>
      <div className="exercise" id="spotcheck-4">
        <label>spotcheck-4:</label>
        <Wardrobe />
      </div>
      <div className="exercise" id="spotcheck-5">
        <label>spotcheck-5:</label>
        <Wardrobe2 />
      </div>
      <div className="exercise" id="spotcheck-6">
        <label>spotcheck-6:</label>
        {this.state.companies.map(c => <Company name={c.name} revenue={c.revenue} />)}
      </div>
      <div className="exercise" id="spotcheck-7">
        <label>spotcheck-7:</label>
        <Calendar reservations={this.state.reservations} />
        <Register reservations={this.state.reservations} />
      </div>
    </div>
    )
  }
}

export default App;
