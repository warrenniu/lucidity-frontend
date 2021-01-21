import React, { PureComponent } from 'react'
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
    
        const data01 = [
            { name: 'One Star', value: checkRating(1) }, { name: 'Two Stars', value: checkRating(2) },
            { name: 'Three Stars', value: checkRating(3) }, { name: 'Four Stars', value: checkRating(4) },
            { name: 'Five Stars', value: checkRating(5) },
        ];

        const data02 = [
            { name: 'One Star', value: checkRating(1) }, { name: 'Two Stars', value: checkRating(2) },
            { name: 'Three Stars', value: checkRating(3) }, { name: 'Four Stars', value: checkRating(4) },
            { name: 'Five Stars', value: checkRating(5) },
        ]; 
        

    const colors = ['red', 'purple', 'orange', 'blue', 'green']
        // const { opacity } = this.state;
    return (
        <div>
            <h3>Dreams by Rating</h3>
        <PieChart width={400} height={400}>
            <Pie dataKey="value" isAnimationActive={false} data={data01} cx={200} cy={200} outerRadius={80}>
                {
                    data01.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index]}/>
                    ))
                }
            </Pie>
            <Legend layout="horizontal" align="center" width={400} />
            {/* <Pie dataKey="value" data={data02} cx={500} cy={200} innerRadius={40} outerRadius={80} fill="#82ca9d" /> */}
            <Tooltip />
        </PieChart>
        <div>
            <h3>Dreams by Month</h3>
        <PieChart width={400} height={400}>
            <Pie dataKey="value" isAnimationActive={false} data={data02} cx={200} cy={200} outerRadius={80}>
                {
                    data01.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index]}/>
                    ))
                }
            </Pie>
            <Legend layout="horizontal" align="center" width={400} />
            {/* <Pie dataKey="value" data={data02} cx={500} cy={200} innerRadius={40} outerRadius={80} fill="#82ca9d" /> */}
            <Tooltip />
        </PieChart>
        </div>
        </div>
    )
    }



function msp(state) {
    return {
        // user: state.user,
        dreams: state.dreams,
        journals: state.journals
    }
}

export default connect(msp)(AnalysisComponent)