import React from "react";

import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import StarRatingComponent from "react-star-rating-component";

function MyNavbar({ setSearchTerm, setRate, rate }) {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#price">Price</Nav.Link>
            </Nav>
            <Form inline>
                <StarRatingComponent
                    name="rate1"
                    starCount={5}
                    value={rate}
                    emptyStarColor={"#ffffff"}
                    onStarClick={(nextValue, prevValue) =>
                        setRate(nextValue, prevValue)
                    }
                />
                <FormControl
                    type="text"
                    placeholder="Search"
                    className="mr-sm-2"
                    onChange={(e) => setSearchTerm(e.target.value)}
                />

                <Button variant="outline-info">Search</Button>
            </Form>
        </Navbar>
    );
}

export default MyNavbar;
