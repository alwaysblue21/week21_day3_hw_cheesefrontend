import Post from '../components/Post';
import {useLoaderData, Form} from 'react-router-dom';

function Index (props){

    // fetch the loaderdata using the useLoaderData hook
    const todos = useLoaderData()

    // map over the cheeses and create a Post component for each Cheese
    return <>
    <div style={{textAlign: "center"}}>
        <h2>Create a Cheese</h2>
        <Form method="post" action="/create">
            <input type="text" name="name" placeholder="Name"/>
            <input type="text" name="origin_country" placeholder="Origin Country"/>
            <input type="text" name="type" placeholder="Type"/>
            <button>Create a new Cheese</button>
        </Form>
    </div>
    {todos.map((cheese) => <Post key={cheese.id} post={cheese}/>)}
    </>
}

export default Index;