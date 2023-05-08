import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import Layout from '../components/Layout';
import { Col ,Row, Card ,CardHeader,CardBody,CardTitle,CardText} from 'reactstrap';
import { useEffect } from 'react';

function UserPosts() {
    const {id} = useParams() ;
    const [userPost,setUserPost] =useState() ;

    useEffect(
        ()=> {
            axios
            .get(`https://jsonplaceholder.typicode.com/users/${id}/posts`).then(res=>
            setUserPost(res.data)
    )

        } ,[]
    )
    
    
   
    


  return (
    <Layout>
        <Row>

            <Col ms={12}>
                {userPost && userPost.map(e=>
                    <Card key={e.id}
                    className="my-2"
                    color="primary"
                    outline
                    
                  >
                    <CardHeader>
                      userId : {e.userId}
                    </CardHeader>
                    <CardBody>
                      <CardTitle tag="h5">
                        {e.title}
                      </CardTitle>
                      <CardText>
                       {e.body}
                      </CardText>
                    </CardBody>
                  </Card>)}

                
            </Col>
        </Row>

    </Layout>
  )
}

export default UserPosts