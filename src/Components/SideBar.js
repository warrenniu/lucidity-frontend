import React from "react";
import styled from "styled-components";
import { connect } from 'react-redux'
// import { NavLink } from 'react-router-dom'
import { Link as RouterLink, NavLink } from 'react-router-dom'
import Button from '@material-ui/core/Button';

class SideBar extends React.Component {

    arrayOfJournals = () => {
        return this.props.journals.map(journal => 
            // <Button component={RouterLink} to={`journals/${journal.id}`}>{journal.year}</Button>
            <NavLink to={`/journals/${journal.id}`}>{journal.year}</NavLink>
        )
    }

    render() {
        return (
            <Wrapper>
                {this.props.journals ? this.arrayOfJournals() : null} 
                <Name>Warren</Name>
            </Wrapper>
        );
    }
}

const Wrapper = styled.div`
  width: 20%;
  height: 100%;
  background-color: purple
`;

const Name = styled.h1`
  color: pink;
`;

function msp(state) {
    return ({
        journals: state.journals
    })
}

export default connect(msp)(SideBar)