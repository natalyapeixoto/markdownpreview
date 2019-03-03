import React from 'react';

import './App.css';

import marked from 'marked'


marked.setOptions({
  breaks: true,
});

const renderer = new marked.Renderer();
renderer.link = function (href, title, text) {
  return `<a target="_blank" href="${href}">${text}` + '</a>';
}

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state =  {
      markdown: placeholder,
    }
  }
  handleChange =(e)=> {
    this.setState({
      markdown: e.target.value
    });
  }
 
  render() {  
    return (
      <div>
        <h1> Markdown preview</h1>
        <div className='app-container'>
          <Editor markdown={this.state.markdown} 
            onChange={this.handleChange} />
          <Preview  markdown={this.state.markdown}/>
        </div>
      </div>
    )
  }
};

const Editor = (props) => {
  return (
    <textarea id="editor"
      value={props.markdown}
      onChange={props.onChange}
      type="text"/>
    )
}

const Preview = (props) => {
  return (
      <div 
        id='preview' 
        dangerouslySetInnerHTML={{__html: marked(props.markdown, { renderer: renderer })}} 
      />
    )
}

const placeholder = 
` # Markdown preview

  ## made with react

  * this is a list
  * of things
  * that i don't know about 
  * except 
  * i do
`
export default App;

