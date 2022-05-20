import react, {useEffect, useState} from 'react';
import { Col, Row, Card} from 'antd';

function Restaurantlist() {
    const [restaurants, setRestaurants] = useState ();
    useEffect (() =>{
        fetch ('https://my-first-firestore-bc.web.app/restaurants')
        .then(response => response.json())
        .then(data => setRestaurants(data)) // data -- restaurants
        .catch(console.error)

    }, [])
    // fetch api 
    //data -- restaurants
    return (
        <section>
            <Row gutter={16}>
            {!restaurants
            ? <h2>Loading..</h2>
            : restaurants.map(restaurant => (
                <Col style={{width: '300px'}} key={restaurant.id}>
                    <Card
                    title={restaurant.name}
                    hoverable
                    >

                <p>{restaurant.address}</p>
                </Card>
                </Col>
            )
           //restaurants -- from API

           // dont forget the key
           
           
           )}
           </Row>
        </section>

    )
            }
         



export default Restaurantlist