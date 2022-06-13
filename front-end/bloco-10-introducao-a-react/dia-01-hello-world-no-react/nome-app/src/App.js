import React from 'react';
import './App.css';

const Task = (value) => {
  return (
    <li key={value}>{value}</li>
  );
}

const toDoList = ['Exercícios do React', 'Cursos da Origamid', 'Exercícios no Codewars']

class App extends React.Component {
  render() {
    return (
        <ul>{ toDoList.map(items => Task(items)) }</ul>
    );
  }
}

export default App;
