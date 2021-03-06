import React from "react";
import styled from "styled-components";
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
// import Button from '@material-ui/core/Button';
import CreateJournalModal from './CreateJournalModal'

function SideBar(props) {

    const arrayOfJournals = () => {
        return props.journals.map(journal =>
            <NavLink to={`/journals/${journal.id}`}>{journal.title}<br></br></NavLink>
        )
    }

    const numberOfDreams = () => {
        const array = []
        props.journals.forEach(journalEl => {
            if (journalEl.user_id === props.user.id) {
                array.push(journalEl.dreams.length)
            }
        })
        if (array.length > 0) {
            const sum = array.reduce((result, number) => result + number)
            return sum
        }
        else
            return 0
    }


        return (
            <Wrapper className="sidebar">
                {props.user ?
                    <aside className="profile-card">
                        <header>
                            {/* <a href="www.espn.com"> */}
                            <img src="https://pbs.twimg.com/profile_images/894730722271010816/1g-2p3_m_400x400.jpg" alt="profile pic"></img>
                            {/* </a> */}
                            <h1>{props.user.username}</h1>
                            
                            {numberOfDreams() < 30 ?
                            <h2>Beginner Dreamer</h2>
                            :
                            <h2>Advanced Dreamer</h2>
                            }
                            <p>Number of Dreams: {numberOfDreams()}</p>
                        </header>
                        <div class="user-birthday">
                            <p>Birthday: {props.user.birthday}</p>
                        </div>
                    </aside>
                    :
                    null}

                <div className="journalList">
                    {props.user ?
                        arrayOfJournals()
                        :
                        null
                    }
                    <br></br>
                </div>
                <br></br>
                <div className="createJournal">
                    {props.user ?
                        <CreateJournalModal />
                        :
                        null
                    }
                </div>
            </Wrapper>
        );
    }


const Wrapper = styled.div`
  width: auto;
  height: 100vh;
  background-color: lightyellow;
`;

function msp(state) {
    return ({
        user: state.user,
        journals: state.journals
    })
}

export default connect(msp)(SideBar)