import React from 'react';
import './ListItems.css';
import FlipMove from 'react-flip-move';



function ListItems(props){
    const items = props.items;
    const ListItems = items.map(item =>
        {
            return <div className="list" key={item.key}>
                <p>
                    <input type="text" 
                    id={item.key} 
                    value={item.text} 
                    onChange={(e) => {
                        props.setUpdate(e.target.value, item.key)
                    }} />
                <span>
                <i class="far fa-trash-alt faicons" onClick={ () => props.deleteItem(item.key)}></i>
                </span>
                </p>
               
            </div>
        })
    return(
        <div>
        <FlipMove duration={300} easing="ease-in-out">
            {ListItems}  
        </FlipMove>
        </div>
      
    )
}


export default ListItems;