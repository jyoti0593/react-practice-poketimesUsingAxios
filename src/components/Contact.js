import React from 'react';
import Rainbow from '../hoc/Rainbow';

class Contact extends React.Component{
  render(){
    return(
      <div className="container">
      <h4 className="center">Contact</h4>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore ex maiores dicta deleniti expedita molestiae quaerat harum neque repellat suscipit quibusdam odio dolorem vero, quod natus aspernatur accusantium exercitationem explicabo!</p>

      </div>
    )
  }

}

export default Rainbow(Contact);