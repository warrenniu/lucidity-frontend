import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux'

function SortComponent(props) {
    const [data, setData] = useState([]);
    const [sortType, setSortType] = useState('date')

    useEffect(() => {
    const sortArray = type => {
        const types = {
            date: 'date',
            rating: 'rating',
        };
        const sortProperty = types[type];
        const sorted = [...props.dreams].sort((a, b) => b[sortProperty] - a[sortProperty]);
        console.log(sorted);
        setData(sorted);
    };

    sortArray(sortType);
  }, [sortType]); 



    return (
        <div>
            <select onChange={(event) => setSortType(event.target.value)}>
                <option value="date">Sort by Date</option>
                <option value="rating">Sort by Rating</option>
            </select>

        </div>
    )
}

function msp(state) {
    return {
        dreams: state.dreams,
    }
}

export default connect(msp)(SortComponent)