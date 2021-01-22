import React from 'react'
import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';
import { connect } from 'react-redux'

// const data01 = [
//     { name: 'Group A', value: this.props.dreams.length}, { name: 'Group B', value: 300 },
//     { name: 'Group C', value: 300 }, { name: 'Group D', value: 200 },
//     { name: 'Group E', value: 278 }, { name: 'Group F', value: 189 },
// ];

function AnalysisComponent(props) {
    // static jsfiddleUrl = 'https://jsfiddle.net/alidingling/k9jkog04/';


    const checkRating = (value) => {
        // const rating = props.dreams.map(dreamEl => dreamEl.rating === value)
        // console.log(rating)
        // return rating.length
        const array = []
        props.dreams.forEach(dreamEl => {
            if (dreamEl.rating === value) {
                array.push(dreamEl)
            }

        })
        return array.length
    }

    const checkMonth = (value) => {
        const array = []
        props.journals.forEach(journalEl => {
            if (journalEl.month === value) {
                array.push(journalEl.dreams.length)
            }
        })
        if (array.length > 0) {
            const sum = array.reduce((result, number) => result + number)
            console.log(sum)
            return sum
        }
        else
            return null
    }

    const data01 = [
        { name: 'One Star', value: checkRating(1) }, { name: 'Two Stars', value: checkRating(2) },
        { name: 'Three Stars', value: checkRating(3) }, { name: 'Four Stars', value: checkRating(4) },
        { name: 'Five Stars', value: checkRating(5) },
    ];

    const data02 = [
        { name: 'January', value: checkMonth("January") }, { name: 'February', value: checkMonth("February") },
        { name: 'March', value: checkMonth("March") }, { name: 'April', value: checkMonth("April") },
        { name: 'May', value: checkMonth("May") }, { name: 'June', value: checkMonth("June") },
        { name: 'July', value: checkMonth("July") }, { name: 'August', value: checkMonth("August") },
        { name: 'September', value: checkMonth("September") }, { name: 'October', value: checkMonth("October") },
        { name: 'November', value: checkMonth("November") }, { name: 'December', value: checkMonth("December") }
    ];


    const colors = ['red', 'purple', 'orange', 'blue', 'green', 'pink', 'silver', 'brown', 'turquoise', 'black', 'lime', 'teal' ]
    return (
        <div>
            <h3>Dreams by Rating</h3>
            <PieChart width={400} height={400}>
                <Pie dataKey="value" isAnimationActive={false} data={data01} cx={200} cy={200} outerRadius={80}>
                    {
                        data01.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={colors[index]} />
                        ))
                    }
                </Pie>
                <Legend layout="horizontal" align="center" width={400} />
                <Tooltip />
            </PieChart>
            <div>
                <h3>Dreams by Month</h3>
                <PieChart width={400} height={400}>
                    <Pie dataKey="value" isAnimationActive={false} data={data02} cx={200} cy={200} outerRadius={80}>
                        {
                            data02.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index]} />
                            ))
                        }
                    </Pie>
                    <Legend layout="horizontal" align="center" width={400} />
                    <Tooltip />
                </PieChart>
            </div>
        </div>
    )
}



function msp(state) {
    return {
        dreams: state.dreams,
        journals: state.journals
    }
}

export default connect(msp)(AnalysisComponent)