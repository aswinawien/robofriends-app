import React, { Component } from 'react';
import { connect } from "react-redux";
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import Header from "../components/Header";
import './App.css';
import { searchFields, fetchRobotsAsync } from "../redux/actions";

class App extends Component {
  constructor() {
    super()
  }

  componentDidMount() {
    this.props.fetchRobotsAsync()
  }

  onSearchChange = (event) => {
    // this.setState({ searchfield: event.target.value })
    this.props.onSearchChange(event.target.value)
  }

  render() {
    const { robots, searchField, loading } = this.props;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    })
    return (
      !loading ?
        <h1>Loading</h1> :
        <div className='tc'>
          <Header />
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
            <CardList robots={filteredRobots} />
          </Scroll>
        </div>
    );
  }
}

const mapStateToProps = (state) => ({
  searchField: state.searchField,
  robots: state.robots,
  loading: state.loading,
})

const mapDispatchToProps = (dispatch) => ({
  onSearchChange: text => dispatch(searchFields(text)),
  fetchRobotsAsync: () => fetchRobotsAsync(dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(App);