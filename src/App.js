import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReactMarkdown  from 'react-markdown'
import breaks from 'remark-breaks'

class App extends React.Component {
  constructor(props) {
   super(props);
   this.state = {message: `# Heading level 1
## Heading level 2
At the command prompt, type \`nano\`
\`\`\`

  <html>
    <head>
    </head>
  </html>
  \`\`\`
1. First item
2. Second item
3. Third item
4. Fourth item


My favorite search engine is [Duck Duck Go](https://duckduckgo.com).    \n

> Dorothy followed her through many of the beautiful rooms in her castle.
![Philadelphia's Magic Gardens. This place was so cool!](https://d33wubrfki0l68.cloudfront.net/eab45e25bb79970178fab7a2d10cba0209372a59/94d9e/assets/images/philly-magic-garden.jpg "Philadelphia's Magic Gardens")
I just love **bold text**.
`
     };
 }
  handleChange(event) {
   this.setState({message: event.target.value});
 }
  render(){
    var message = this.state.message;

    return (

      <div className="markdown">
      <textarea id="editor" value={message} onChange={this.handleChange.bind(this)}></textarea>
      <div id="preview"><ReactMarkdown source={message}  plugins={[breaks]}/></div>
      </div>
    );
  }

}

export default App;
