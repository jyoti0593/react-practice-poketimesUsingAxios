import React from 'react';
import Rainbow from '../hoc/Rainbow';
class About extends React.Component{
  render(){
//     setTimeout(()=>{
// this.props.history.push('/contact')
//     },2000)
    return(
      <div className="container">
      <h4 className="center">About</h4>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore ex maiores dicta deleniti expedita molestiae quaerat harum neque repellat suscipit quibusdam odio dolorem vero, quod natus aspernatur accusantium exercitationem explicabo!</p>

      </div>
    )
  }

}

export default Rainbow(About);