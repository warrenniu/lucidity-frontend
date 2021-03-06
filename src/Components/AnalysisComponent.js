import React from 'react'
import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';
import { connect } from 'react-redux'
import Typography from '@material-ui/core/Typography';

function AnalysisComponent(props) {

    const checkRating = (value) => {
        const array = []
        // eslint-disable-next-line
        props.journals.map(journalEl => {
            if (journalEl.user_id === props.user.id) {
                journalEl.dreams.forEach(dreamEl => {
                    if (dreamEl.rating === value) {
                         array.push(dreamEl) 
                    }
                })
            }
        })
        return array.length
}

    const checkMonth = (value) => {
        const array = []
        props.journals.forEach(journalEl => {
            if (journalEl.user_id === props.user.id) {
                if (journalEl.month === value) {
                    return array.push(journalEl.dreams.length)
                }
            }
        })
        if (array.length > 0) {
            const sum = array.reduce((result, number) => result + number)
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


    const colors = ['red', 'purple', 'black', 'blue', 'green', '#c237c6', '#7f6a8c', 'brown', 'turquoise', '#9b861a', 'lime', 'teal']
    return (
        <div className="pieChart">
            <Typography variant="h6">Dreams by Rating:</Typography>
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
            
                <Typography variant="h6">Dreams by Month:</Typography>
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
    )
}



function msp(state) {
    return {
        user: state.user,
        dreams: state.dreams,
        journals: state.journals
    }
}

export default connect(msp)(AnalysisComponent)