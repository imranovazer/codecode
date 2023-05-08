import React from 'react'
import { Link,  } from 'react-router-dom'
import  {Container} from 'reactstrap'
function Layout({ children }) {
    return (
        <Container>
            <>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/users">Users</Link>
                        </li>
                   
                    </ul>
                </nav>
                {children}
                
            </>



        </Container>
    )
}

export default Layout