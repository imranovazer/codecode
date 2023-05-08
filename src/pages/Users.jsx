import React, { useState, useEffect } from 'react'
import Layout from '../components/Layout'
import { Spinner, Table } from "reactstrap";
import axios from "axios";
import UsersData from '../components/UsersData';

function Users() {

    let initialState = {
        data: undefined,
        error: undefined,
        loading: false,
    };

    const [datas, setDatas] = useState(initialState);
    useEffect(() => {
        setDatas((oldData) => ({
            ...oldData,
            loading: true,
            error: undefined,
            data: undefined,
        }));

        axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then(({ data }) => {
                setDatas((oldData) => ({
                    ...oldData,
                    data: data,
                    loading: false,
                    error: undefined,
                }));
            })
            .catch((err) => {
                setDatas({ data: undefined, loading: false, error: err.toString() });
            });
    }, []);

    return (
        <Layout>
            <div>
                {datas.error && <h5 color="red">Error occured ....</h5>}
                {datas.loading && <Spinner />}
                {datas.data && (
                    <Table dark>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>email</th>
                                <th>companyName</th>
                                <th>links</th>
                            </tr>
                        </thead>
                        <tbody>
                            {datas.data &&
                             <UsersData datas={datas}/>
                                }
                        </tbody>
                    </Table>
                )}
            </div>

        </Layout>
    )
}

export default Users