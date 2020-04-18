import React, {useEffect, useState} from 'react';
import {Card, Flex, Styled} from 'theme-ui';
import P5Canvas from '../components/P5Canvas'

import apiClient from "../utils/api-client";

function Home(props){
    const [UserLists,setUserList]= useState([]);
    console.log('?')
    useEffect(()=>{
        const fetchUserList = async ()=>{

    const response= await apiClient.lists.getAll();
    console.log(JSON.stringify(response, null,2))
    setUserList(response.data);

        };
        fetchUserList();
    }, []);
    return(
        <Flex
        as="main"
        sx={{
            minHeight:'80vh',
            width: '100vw',
            justifyContent: 'center',
            alignItems:'center',
            flexDirection:'column',

        }}
        >
            <Styled.h2>YOUR KAMI NO MICHI</Styled.h2>
            <ul>
                {UserLists.map((list)=>(

                    <Card>
                        <pre>{JSON.stringify(list,null,2)}</pre>
                    </Card>

                ))}
             </ul>
         <P5Canvas/>
        </Flex>
    );
}

export default Home 